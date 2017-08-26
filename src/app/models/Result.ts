import { TypedJSON, JsonObject, JsonMember } from '@upe/typedjson';

@JsonObject()
export class Error {
    @JsonMember()
    public Code: string;
    @JsonMember()
    public Description: string;
    @JsonMember()
    public StackTrace: string;
}

@JsonObject()
export class Result {
    @JsonMember()
    public Success: boolean;
    @JsonMember({ type: Array, elements: Error })
    public Errors: Array<Error>;
}

@JsonObject()
export class ResultObj<TReturnType extends object> extends Result {
    public ReturnObj: TReturnType;

    public static FromJson<TReturnType extends object>(objClass, obj, isArray: boolean = false) {
        let result = new ResultObj<TReturnType>();

        let tempResult = TypedJSON.parse(JSON.stringify(obj), Result) as Result;
        result.Success = tempResult.Success
        result.Errors = tempResult.Errors;

        if (isArray) {
            let items = obj.ReturnObj as Array<any>;
            result.ReturnObj = items.map(item => ResultObj.CastObj(objClass, item)) as object as TReturnType;
        }
        else {
            result.ReturnObj = ResultObj.CastObj(objClass, obj.ReturnObj) as TReturnType;
        }

        return result;
    }

    private static CastObj(objClass, obj: object) {
        return TypedJSON.parse(JSON.stringify(obj), objClass);
    }
}

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
    @JsonMember()
    public ErrorMessage: string;
    @JsonMember({ type: Array, elements: Error })
    public Errors: Array<Error>;

    public static ResultFromJson(obj: object) {
        return this.CastObj(obj, Result) as Result;
    }

    public static CastObj(obj: object, objClass) {
        return TypedJSON.parse(JSON.stringify(obj), objClass);
    }

}

@JsonObject()
export class ResultObj<TReturnType extends object> extends Result {
    @JsonMember()
    public ReturnObj: TReturnType;

    public static ResultObjFromJson<TReturnType extends object>(obj, objClass, isArray: boolean = false) {
        let result = new ResultObj<TReturnType>();

        let tempResult = TypedJSON.parse(JSON.stringify(obj), Result) as Result;
        result.Success = tempResult.Success
        result.ErrorMessage = tempResult.ErrorMessage;
        result.Errors = tempResult.Errors;

        if (result.Success) {
            if (isArray) {
                let items = obj.ReturnObj as Array<any>;
                result.ReturnObj = items.map(item => super.CastObj(item, objClass)) as object as TReturnType;
            }
            else {
                result.ReturnObj = super.CastObj(obj.ReturnObj, objClass) as TReturnType;
            }
        }

        return result;
    }

}

export class PageResultObj<TReturnType extends object> extends ResultObj<TReturnType>
{
    @JsonMember()
    public TotalCount: number;
    @JsonMember()
    public PageIndex: number;
    @JsonMember()
    public PageSize: number;

    public static PageResultObjFromJson<TReturnType extends object>(obj, objClass, isArray: boolean = false) {
        var result = super.CastObj(obj, PageResultObj) as PageResultObj<TReturnType>;
        var resultObj = super.ResultObjFromJson<TReturnType>(obj, objClass, isArray);

        result.ReturnObj = resultObj.ReturnObj;
        result.Errors = resultObj.Errors;

        return result;
    }

}

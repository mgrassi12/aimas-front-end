import { JsonObject, JsonMember } from '@upe/typedjson';

@JsonObject()
export class User {
    @JsonMember()
    public Id: number;
    @JsonMember()
    public UserName: string;
    @JsonMember()
    public Email: string;
    @JsonMember()
    public FirstName: string;
    @JsonMember()
    public LastName: string;
    @JsonMember()
    public Position: string;

    constructor() {

    }
}

@JsonObject()
export class RegisterModel extends User {
    @JsonMember()
    public Password: string;

    constructor() {
        super();
    }
}

@JsonObject()
export class UserLoginModel {
    @JsonMember()
    public Email: string;
    @JsonMember()
    public Password: string;

    constructor() {

    }
}

@JsonObject()
export class UserSearch {
    @JsonMember()
    public FirstName: string;
    @JsonMember()
    public LastName: string;
    @JsonMember()
    public Email: string;

    @JsonMember()
    public PageIndex: number;
    @JsonMember()
    public PageSize: number;

    public constructor() {
        this.PageIndex = 0;
        this.PageSize = 25;
    }

    public clear() {
        this.FirstName = null;
        this.LastName = null;
        this.Email = null;
    }
}

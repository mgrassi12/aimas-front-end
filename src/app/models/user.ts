import { JsonObject, JsonMember } from '@upe/typedjson';

@JsonObject()
export class User {
    @JsonMember()
    public UserName: string;
    @JsonMember()
    public Email: string;
    @JsonMember()
    public FirstName: string;
    @JsonMember()
    public LastName: string;

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

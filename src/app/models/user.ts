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
}

@JsonObject()
export class UserPassword extends User {
    @JsonMember()
    public Password: string;
}

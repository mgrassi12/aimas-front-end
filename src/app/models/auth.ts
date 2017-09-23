import { JsonObject, JsonMember } from '@upe/typedjson';

@JsonObject()
export class CurrentUserInfo {
    @JsonMember()
    public IsAuth: boolean;
    @JsonMember()
    public IsAdmin: boolean;
    @JsonMember()
    public Role: string;

    constructor() {
        this.IsAuth = false;
    }
}

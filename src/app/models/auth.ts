import { JsonObject, JsonMember } from '@upe/typedjson';

import { User } from './user';

@JsonObject()
export class CurrentUserInfo {
    @JsonMember()
    public IsAuth: boolean;
    @JsonMember()
    public User: User;
    constructor() {
        this.IsAuth = false;
    }
}

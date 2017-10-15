import { JsonObject, JsonMember } from '@upe/typedjson';

@JsonObject()
export class Location {
    @JsonMember()
    public ID: number;
    @JsonMember()
    public Name: string;
    @JsonMember()
    public Description: string;

    public constructor() {

    }
}

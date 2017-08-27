import { JsonObject, JsonMember } from '@upe/typedjson';

@JsonObject()
export class Inventory {
    @JsonMember()
    public Name: string;
}

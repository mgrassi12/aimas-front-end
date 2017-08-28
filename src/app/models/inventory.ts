import { JsonObject, JsonMember } from '@upe/typedjson';

export class Location {
    public ID: number;
    public Description: string;
}

@JsonObject()
export class Inventory {
    @JsonMember()
    public ID: number;
    @JsonMember()
    public Name: string;
    @JsonMember()
    public Description: string;
    @JsonMember({ type: Date })
    public ExpirationDate: Date;
    @JsonMember({ type: Date })
    public MaintanceDate: Date;
    @JsonMember({ type: Location })
    public Location: Location;
}

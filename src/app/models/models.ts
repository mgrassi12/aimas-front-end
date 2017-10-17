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

@JsonObject()
export class LocationSearch {
    @JsonMember()
    public ID: number;
    @JsonMember()
    public Name: string;
    @JsonMember()
    public Description: string;

    @JsonMember()
    public PageIndex: number;
    @JsonMember()
    public PageSize: number;

    public constructor() {
        this.PageIndex = 0;
        this.PageSize = 25;
    }

    public clear() {
        this.ID = null;
        this.Name = null;
        this.Description = null;
    }
}

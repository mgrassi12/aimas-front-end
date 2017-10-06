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
        this.ID = -1;
    }
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
    @JsonMember()
    public MaintenanceIntervalDays: number;
    @JsonMember({ type: Location })
    public CurrentLocation: Location;
    @JsonMember({ type: Location })
    public DefaultLocation: Location;

    public constructor() {
        this.ExpirationDate = new Date();
        this.CurrentLocation = new Location();
    }
}

@JsonObject()
export class InventorySearch {
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

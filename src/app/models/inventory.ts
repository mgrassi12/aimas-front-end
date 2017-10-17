import { JsonObject, JsonMember } from '@upe/typedjson';

import { Location } from "./models";


export enum InventoryAlertTimeType {
    Inventory_E_Date = 1,
    Inventory_M_Date = 2
}

@JsonObject()
export class InventoryAlertTimeModel {
    @JsonMember()
    public ID: number;
    @JsonMember()
    public Type: InventoryAlertTimeType;
    @JsonMember()
    public DaysBefore: number;
    @JsonMember({ type: Date })
    public SentTime: Date;
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
    @JsonMember()
    public IsArchived: boolean;
    @JsonMember()
    public IsCritical: boolean;
    @JsonMember({ type: Array, elements: InventoryAlertTimeModel })
    public AlertTimeInventories: Array<InventoryAlertTimeModel>;

    public constructor(ID: number = null) {
        this.ID = ID;
        this.CurrentLocation = new Location();
        this.DefaultLocation = new Location();
        this.AlertTimeInventories = [];
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

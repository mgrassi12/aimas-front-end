import { JsonObject, JsonMember } from '@upe/typedjson';

import { Inventory } from "./inventory";
import { User } from "./user";

export enum ReportType {
    ExpirationDisposal = 1,
    Maintenance = 2,
    General = 3
}

@JsonObject()
export class Report {
    @JsonMember()
    public ID: number;
    @JsonMember()
    public Type: ReportType;
    @JsonMember()
    public Creator: User;
    @JsonMember({ type: Date })
    public CreationDate: Date;
    @JsonMember()
    public Executor: User;
    @JsonMember({ type: Date })
    public ExecutionDate: Date;
    @JsonMember()
    public Notes: string;
    @JsonMember()
    public Inventory: Inventory;
}

@JsonObject()
export class ReportSearch {
    @JsonMember()
    public Name: string;

    @JsonMember()
    public PageIndex: number;
    @JsonMember()
    public PageSize: number;

    public constructor() {
        this.PageIndex = 0;
        this.PageSize = 25;
    }

    public clear() {
        this.Name = null;
    }
}

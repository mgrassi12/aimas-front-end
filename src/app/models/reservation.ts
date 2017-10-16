import { JsonObject, JsonMember } from '@upe/typedjson';

import { Inventory } from './inventory';
import { Location } from './models';
import { User } from './user';


export class Reservation {

    @JsonMember()
    public User: User;
    @JsonMember()
    public ID: number;
    @JsonMember({ type: Date })
    public BookingStart: Date;
    @JsonMember({ type: Date })
    public BookingEnd: Date;
    @JsonMember()
    public BookingPurpose: string;
    @JsonMember()
    public Location: Location;
    @JsonMember()
    public Inventories: Array<Inventory>;

    public constructor() {
        this.Location = new Location();
    }

}


@JsonObject()
export class ReservationSearch {
    @JsonMember()
    public UserName: string;

    @JsonMember()
    public PageIndex: number;
    @JsonMember()
    public PageSize: number;

    public constructor() {
        this.PageIndex = 0;
        this.PageSize = 25;
    }

    public clear() {
        this.UserName = null;
    }
}

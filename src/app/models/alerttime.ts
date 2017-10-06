import { JsonObject, JsonMember } from '@upe/typedjson';

@JsonObject()
export class AlertTime {
    @JsonMember()
    public ID: number;
    @JsonMember()
    public DaysBefore: number;
    @JsonMember()
    public Name: string;

}

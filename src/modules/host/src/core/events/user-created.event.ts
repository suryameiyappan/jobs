import { Event } from "@travelhoop/infrastructure-types";
import { Guid } from "guid-typescript";

interface UserCreatedPayload {
  id: Guid;
}

export class UserCreated implements Event {
  name = this.constructor.name;

  constructor(public payload: UserCreatedPayload) {}
}

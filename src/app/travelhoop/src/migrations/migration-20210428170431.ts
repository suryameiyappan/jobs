import { Migration } from '@mikro-orm/migrations';

export class Migration20210428170431 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "Booking" ("id" uuid not null, "dateFrom" timestamptz(0) not null, "dateTo" timestamptz(0) not null, "discr" text check ("discr" in (\'couchBooking\', \'unavailableBooking\')) not null, "guestId" uuid null, "reservedQuantity" int4 null);');
    this.addSql('alter table "Booking" add constraint "Booking_pkey" primary key ("id");');
    this.addSql('create index "Booking_discr_index" on "Booking" ("discr");');

    this.addSql('alter table "Couch" rename column "userId" to "hostId";');
  }

}
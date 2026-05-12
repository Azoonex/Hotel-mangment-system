// --- Main Application Logic ---

import { RoomStatus } from "./base/room.base";
import { BookingStatus } from "./interface/booking.type";
import { capacitySize } from "./interface/rome-type";
import { BookingService } from "./module/booking/booking.component";
import { Room, RoomManger } from "./module/Room/rome.component";

// 1. Create a manager
const hotelManager = new RoomManger();

// 2. Create individual room objects
const room101 = new Room("101", 150, undefined, capacitySize.DOUBLE);
const room102 = new Room("102", 200, RoomStatus.Occupied, capacitySize.SUITE);
const room103 = new Room("103", 120, undefined, capacitySize.SINGLE);

hotelManager.addRoom(room101);
hotelManager.addRoom(room102);
hotelManager.addRoom(room103);

const bookingService = new BookingService();

const booking = bookingService.createBooking(room101.id,
  room101.id,
  new Date("2026-06-01"),
  new Date("2026-06-05"),
  100,
);

console.log(booking);

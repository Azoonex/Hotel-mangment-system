// --- Main Application Logic ---

import { RoomStatus } from "./base/room.base";
import { Room } from "./module/Room/rome.component";

// 1. Create a manager
const hotelManager = new RoomManager();

// 2. Create individual room objects
const room101 = new Room(101, 150);
const room102 = new Room(102, 200, RoomStatus.Occupied);
const room103 = new Room(103, 120);

// 3. Use the manager to handle the collection of rooms
hotelManager.addRoom(room101);
hotelManager.addRoom(room102);
hotelManager.addRoom(room103);

console.log(`Total rooms: ${hotelManager.getRoomCount()}`); // Output: Total rooms: 3

// 4. Use methods on a specific room instance
console.log(`Is room 101 available? ${room101.isAvailable()}`); // Output: Is room 101 available? true
room101.changePrice(175); // Changes price only for room 101

// 5. Use the manager to find and manipulate rooms
const foundRoom = hotelManager.findRoomById(102);
if (foundRoom) {
  console.log(`Found room ${foundRoom.id} with status: ${foundRoom.getStatus()}`);
  foundRoom.changeStatus(RoomStatus.Available); // Change status of the found room
}

hotelManager.removeRoomById(103);
console.log("All rooms after removal:", hotelManager.getAllRooms());

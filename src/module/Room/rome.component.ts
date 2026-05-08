import { RoomBase } from "../../base/room.base";
import { RoomType } from "../../interface/rome-type";

class Room extends RoomBase {
  AllRooms: RoomType[] = [];

  isAvailable(id: number): boolean {
    const findById = this.AllRooms.find((v) => v.id === id);

    if (findById) {
      return true;
    }
    return false;
  }

  getRooms(): { allRooms: RoomType[]; size: number } {
    return {
      allRooms: this.AllRooms,
      size: this.AllRooms.length,
    };
  }
}

export class RoomServices extends Room {
  constructor() {
    super();
  }

  addRoom(room: RoomType) {
    if (!room) {
      throw new Error("Please fill the room value");
    }
    this.AllRooms.push(room);
  }

  removeRoomById(id: number) {
    const updateRooms = this.AllRooms.filter((value) => value.id !== id);
    this.AllRooms = updateRooms;
  }

  changePrice(): void {}
  changeStatus(): void {}
}

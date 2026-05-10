import { RoomType } from "../interface/rome-type";
import { Room } from "../module/Room/rome.component";

export abstract class AbstractRoomManger {
  abstract addRoom(room: Room): void;

  abstract removeRoomById(id: number): boolean;
  abstract findRoomById(id: number): Room | undefined;
  abstract getAllRooms(): Room[];
  abstract getRoomCount(): number;
}

export enum RoomStatus {
  Available = "available",
  Occupied = "occupied",
  Maintenance = "maintenance",
}
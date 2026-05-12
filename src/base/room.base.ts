import { Room } from "../module/Room/rome.component";

export abstract class AbstractRoomManger {
  abstract addRoom(room: Room): void;

  abstract removeRoomById(id: string): boolean;
  abstract findRoomById(id: string): Room | undefined;
  abstract getAllRooms(): Room[];
  abstract getRoomCount(): number;
}

export enum RoomStatus {
  Available = "available",
  Occupied = "occupied",
  Maintenance = "maintenance",
}
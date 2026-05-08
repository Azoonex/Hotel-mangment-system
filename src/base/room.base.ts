import { RoomType } from "../interface/rome-type";

export abstract class AbstractRoomManger {
  abstract addRoom(room: RoomType): void;

  abstract removeRoomById(id: number): boolean;
  abstract findRoomById(id: number): RoomType | undefined;
  abstract getAllRooms(): RoomType[];
  abstract getRoomCount(): number;
}

export enum RoomStatus {
  Available = "available",
  Occupied = "occupied",
  Maintenance = "maintenance",
}
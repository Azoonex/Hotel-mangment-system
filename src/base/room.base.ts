import { RoomType } from "../interface/rome-type";

abstract class RoomBase {
  protected Room: RoomType[] = [];

  abstract isAvailable(id: number): boolean;
  abstract getRooms(): { allRooms: RoomType[]; size: number };
}

abstract class RoomAction {
  abstract changeStatus(): string;
  abstract changePrice(): string;
}

export { RoomBase };

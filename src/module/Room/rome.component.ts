import { AbstractRoomManger, RoomBase, RoomStatus } from "../../base/room.base";
import { RoomType } from "../../interface/rome-type";

export class Room {
  public readonly id: number;
  private price: number;
  private status: RoomStatus;

  constructor(
    id: number,
    price: number,
    status: RoomStatus = RoomStatus.Available,
  ) {
    this.id = id;
    this.price = price;
    this.status = status;
  }

  isAvailable(): boolean {
    return this.status === RoomStatus.Available;
  }

  changePrice(newPrice: number): void {
    if (newPrice) {
      throw new Error("Price must be positive");
    }

    this.price = newPrice;
  }

  changeStatus(newStatus: RoomStatus): void {
    console.log(
      `Status for room ${this.id} changed from ${this.status} to ${newStatus}.`,
    );

    this.status = newStatus;
  }

  get getPrice(): number {
    return this.price;
  }

  get getStatus(): RoomStatus {
    return this.status;
  }
}

export class RoomManger extends AbstractRoomManger {
  private rooms: RoomType[] = [];

  addRoom(room: RoomType): void {
    // Prevent adding rooms with duplicate IDs
    if (this.findRoomById(room.id)) {
      console.warn(`Room with ID ${room.id} already exists.`);
      return;
    }
    this.rooms.push(room);
    console.log(`Room ${room.id} added successfully.`);
  }

  removeRoomById(id: number): boolean {
    const initialLength = this.rooms.length;

    this.rooms = this.rooms.filter((room) => room.id !== id);
    if (this.rooms.length < initialLength) {
      console.log(`Room ${id} removed successfully.`);
      return true;
    }

    console.warn(`Room with ID ${id} not found.`);
    return false;
  }

  findRoomById(id: number): RoomType | undefined {
    return this.rooms.find((room) => room.id === id);
  }

  getAllRooms(): RoomType[] {
    return [...this.rooms];
  }

  getRoomCount(): number {
    return this.rooms.length;
  }
}

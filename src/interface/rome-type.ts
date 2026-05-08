interface RoomType {
  id: number;
  number: number;
  price: number;
  type: "SINGLE" | "DOUBLE" | "SUITE";
  status: "AVAILABLE" | "BOOKED";
}

export type { RoomType };

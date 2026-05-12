enum BookingStatus {
    Pending = "PENDING",
    Confirmed = "CONFIRMED",
    CheckedIn = "CHECKED_IN",
    CheckedOut = "CHECKED_OUT",
    Cancelled = "CANCELLED"
}

interface IBookingType {
    id: string;
    guestId: string;
    roomId: string;
    checkIn: Date;
    checkOut: Date;
    totalAmount: number;
    status: BookingStatus;
    createdAt: Date;
}

export {
  BookingStatus,
  IBookingType
}
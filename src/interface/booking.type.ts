enum BookingStatus {
    Pending = "PENDING",
    Confirmed = "CONFIRMED",
    CheckedIn = "CHECKED_IN",
    CheckedOut = "CHECKED_OUT",
    Cancelled = "CANCELLED"
}

interface IBooking {
    id: string;
    guestId: string;
    roomId: string;
    checkInDate: Date;
    checkOutDate: Date;
    totalAmount: number;
    status: BookingStatus;
    createdAt: Date;
}

export {
  BookingStatus,
  IBooking
}
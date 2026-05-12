import { BookingStatus, IBookingType } from "../../interface/booking.type";

export class BookingService {
  private bookings: IBookingType[] = [];

  createBooking(
    roomId: string,
    guestId: string,
    checkIn: Date,
    checkOut: Date,

    pricePerNight: number,
  ): IBookingType {
    if (!this.isRoomAvailable(roomId, checkIn, checkOut)) {
      throw new Error("Room is not available for selected dates");
    }
    const nights = this.calculatorNights(checkIn, checkOut);

    const booking: IBookingType = {
      id: crypto.randomUUID(),
      roomId,
      guestId,
      checkIn,
      checkOut,
      totalAmount: nights * pricePerNight,
      status: BookingStatus.Confirmed,
      createdAt: new Date(),
    };
    return booking;
  }

  private calculatorNights(checkIn: Date, checkOut: Date) {
    const diff = checkOut.getTime() - checkIn.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  isRoomAvailable(roomId: string, checkIn: Date, checkOut: Date): boolean {
    const roomBookings = this.bookings.filter((b) => b.roomId === roomId);

    for (const booking of roomBookings) {
      const overlap = checkIn < booking.checkOut && checkOut > booking.checkIn;

      if (overlap && booking.status !== BookingStatus.Cancelled) {
        return false;
      }
    }

    return true;
  }

  cancelBooking(id: string) {
    const booking = this.bookings.find((v) => v.id == id);

    if (!booking) {
      throw new Error("Booking not found");
    }
    booking.status = BookingStatus.Cancelled;
  }
}

export interface Booking {
    meetingName: string;
    privateEvent: boolean;
    organiser: {
        name: string;
        email: string;
        organiserId: number;
    };
    start: {
        dateTime: string;
        timeZone: string;
    };
    end: {
        dateTime: string;
        timeZone: string;
    };
}


export interface Room {
    id: number;
    name: string;
    capacity: number;
    facilities: {
        tv: boolean;
        computer: boolean;
    };
    bookings: Booking[];
    image: string;
}
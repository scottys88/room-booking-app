import { Room } from './models/room';


export const ROOMS: Room[] = [
    {
       id: 1,
       name: 'Mad Max',
       capacity: 6,
       facilities: {
           tv: true,
           computer: true
       },
       bookings: [{
           meetingName: 'Design Sprint',
           privateEvent: false,
           organiser: {
               name: 'Scott Schubert',
               email: 'scott.schubert@kwp.com.au',
               organiserId: 123
           },
           start: {
               dateTime: '2019-03-02T22:30:00.000Z',
               timeZone: 'GMT'
           },
           end: {
            dateTime: '2019-03-03T06:30:00.000Z',
            timeZone: 'GMT'
        }
       }],
       // tslint:disable-next-line:max-line-length
       image: 'data:image/jpeg;base64,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'
    },
    {
        id: 2,
        name: 'Chopper',
        capacity: 6,
        facilities: {
            tv: true,
            computer: true
        },
        bookings: [{
            meetingName: 'Design Sprint',
            privateEvent: false,
            organiser: {
                name: 'Scott Schubert',
                email: 'scott.schubert@kwp.com.au',
                organiserId: 123
            },
            start: {
                dateTime: '2018-11-24T22:30:00.000Z',
                timeZone: 'GMT'
            },
            end: {
             dateTime: '2018-11-30T06:30:00.000Z',
             timeZone: 'GMT'
         }
        }],
        image: 'https://images.justwatch.com/poster/9608344/s592'
     }


];

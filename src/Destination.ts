import { faker } from '@faker-js/faker';

export class Destination {
    receiver: string;
    location: {
        lat: number;
        lon: number;
    };

    constructor() {
        this.receiver = faker.name.findName();
        this.location = {
            lat: +faker.address.latitude(),
            lon: +faker.address.longitude()
        }
    }
}
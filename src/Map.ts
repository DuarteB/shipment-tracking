import { Cargo } from "./Cargo";
import { Destination } from "./Destination";

export class Map {
    private googleMap: google.maps.Map;

    constructor(elementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1.6,
            center: {
                lat: 0,
                lng: 20,
            }
        });
    }

    attachMarker(entity: Destination | Cargo) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: entity.location.lat,
                lng: entity.location.lon
            }
        })
    }
}
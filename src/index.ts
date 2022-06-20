import { Destination } from "./Destination";
import { Cargo } from "./Cargo";
import { Map } from "./Map";

const destination = new Destination();
console.log(destination);

const cargo = new Cargo();
console.log(cargo);

const map = new Map('g-map');

map.attachMarker(destination);
map.attachMarker(cargo);
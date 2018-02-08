export default class Marker {
  constructor(id) {
    this.id = id;

    this.position = {
      'lat': 0,
      'lng': 0
    };

    this.draggable = true;
  }

  setPosition(lat, lng) {
    this.position = {lat, lng};
  }

  click(ctrl) {
    console.log('clicked', ctrl);
  }
}
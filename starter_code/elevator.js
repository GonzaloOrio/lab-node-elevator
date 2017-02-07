/*jshint esversion:6 */
class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.waitingList = [];
    this.passengers = [];
    this.requests   = [];
    this.direction  = "up";
    this.timerCount = null;
  }

  start() {
    this.timerCount = setInterval(() => { this.update(); } ,1000);
  }
  stop() {
    clearInterval(this.timerCount);
  }
  update() {
    this._passengersEnter();
    this._passengersLeave();
    for (let i = 0; i < this.requests.length; i++) {
      if (this.floor === this.requests[i]) {
        this.requests.splice(i, 1);
      }
    }
    if (this.requests[0] > this.floor) {
      this.floorUp();
    } else if (this.requests[0] < this.floor) {
      this.floorDown();
    }
    if (this.requests.length === 0) {
      this.stop();
    }
    this.log();
  }
  _passengersEnter() {
    for (let i = 0; i < this.waitingList.length; i++) {
       if (this.floor === this.waitingList[i].originFloor) {
         this.passengers.push(this.waitingList[i]);
         console.log(this.waitingList[i].name+" has entered the elevator");
         this.requests.push(this.waitingList[i].destinationFloor);
         this.waitingList.splice(i, 1);
       }
      //  this.waitingList.map((person) => {
      //    if (person.originFloor === this.floor) {
      //      this.passengers.push(person);
      //      console.log(person.name+" has entered the elevator.");
      //      this.requests.push(person.destinationFloor);
      //      this.waitingList.splice(person,1);
      //    }
      //  });
     }
  }
  _passengersLeave() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.floor === this.passengers[i].destinationFloor) {
        console.log(this.passengers[i].name+" has left the elevator");
        this.passengers.splice(i, 1);
      }
    }
  }
  floorUp() {
    this.direction = "up";
    if (this.floor < this.MAXFLOOR) this.floor++;
  }
  floorDown() {
    this.direction = "down";
    if (this.floor > 0) this.floor--;
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log("Direction: "+this.direction+" | Floor: "+this.floor);
  }
}
module.exports = Elevator;

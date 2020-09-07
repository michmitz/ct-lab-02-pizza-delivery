const Schedule = require('./schedule');

class Driver {
  name;
  schedule;
    
  constructor(name) {
    this.name = name;
    this.schedule = new Schedule();
  }

}

module.exports = Driver;

const Schedule = require('./schedule');

class Driver {
  name;
  schedule = new Schedule();
    
  constructor(name) {
    this.name = name;
  }

}

module.exports = Driver;

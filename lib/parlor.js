class Parlor {
  #drivers = [];
  #orders = [];

  #calculateSchedule() {
    this.#drivers.forEach((driver) => {
      const driverSchedule = driver.schedule;
      
      for(let i = 0; i < this.#orders.length; i++) {

        if(driverSchedule.freeWindow(this.#orders[i].startMinute, this.#orders[i].deliveryMinute) === true) {
          driverSchedule.addOrder(this.#orders[i]);
          break;
        } 
      } 
    });
  };

  addDriver(driver) {
    this.#drivers.push(driver);
    this.#calculateSchedule();
  }

  addOrder(order) {
    this.#orders.push(order);
    this.#calculateSchedule();
  }

  printSchedule() {
    for(let i = 0; i < this.#drivers.length; i++) {
      this.#drivers[i].schedule.print();
    }
  }

}

module.exports = Parlor;



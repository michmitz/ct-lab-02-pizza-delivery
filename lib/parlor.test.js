const Order = require('./order');
const Driver = require('./driver');
const Parlor = require('./parlor');

describe('Parlor class', () => {
  it('adds a driver and order to the parlor', () => {
    const parlor = new Parlor();
    const order = new Order('Cheesy Crust', 70, 50);
    const driver = new Driver('Jimmy');


    parlor.addOrder(order);
    parlor.addDriver(driver);
    parlor.printSchedule();
    
    expect(driver.schedule.nextOpenMinute()).toEqual(71);
  });

  it('adds multiple drivers and orders to the parlor', () => {
    const parlor = new Parlor();
    const driver1 = new Driver('Jimmy');
    const driver2 = new Driver('Sam');

    parlor.addDriver(driver1);
    parlor.addDriver(driver2);
    
    const order1 = new Order('Cheesy Crust', 70, 50);
    const order2 = new Order('Pepperoni', 80, 60);
    
    parlor.addOrder(order1);
    parlor.addOrder(order2);

    parlor.printSchedule();
    
    expect(driver1.schedule.nextOpenMinute()).toEqual(71);
    expect(driver2.schedule.nextOpenMinute()).toEqual(71);
  });
});


const Schedule = require('./schedule');
const Order = require('./order');

describe('Schedule class', () => {
  it('returns the next open minute', () => {
    const schedule = new Schedule();
    
    expect(schedule.nextOpenMinute()).toEqual(0);
  });

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('Cheesy Crust', 70, 50);
    
    schedule.addOrder(order);
    schedule.print();

    expect(schedule.nextOpenMinute()).toEqual(71);
  });

  it('clears the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('Cheesy Crust', 70, 50);
    
    schedule.addOrder(order);
    schedule.clear();
    schedule.print();

    expect(schedule.nextOpenMinute()).toEqual(0);
  });

  it('returns true if the schedule window is free', () => {
    const schedule = new Schedule();
    const order = new Order('Cheesy Crust', 70, 50);
    
    schedule.addOrder(order);
    schedule.print();

    expect(schedule.freeWindow(40, 50)).toEqual(false);
  });
});

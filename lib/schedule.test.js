const Schedule = require('./schedule');

describe('Schedule class', () => {
  it('returns the next open minute', () => {
    const schedule = new Schedule();
    
    expect(schedule.nextOpenMinute()).toEqual(0);
  });
});

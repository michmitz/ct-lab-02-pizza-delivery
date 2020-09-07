const Driver = require('./driver');
const Schedule = require('./schedule');

describe('Driver class', () => {
  it('returns driver name and schedule', () => {
    const driver = new Driver('Jimmy');
    new Schedule();

    expect(driver).toEqual({
      name: 'Jimmy',
      schedule: {}
    });
  });
});

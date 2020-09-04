const Order = require('./Order');

describe('Order class', () => {
  it('returns order information with start time', () => {
    const pizza = new Order('Cheesy Crust', 70, 20);

    expect(pizza).toEqual({
      name: 'Cheesy Crust',
      deliveryMinute: 70
    });
  });

  it('returns start time', () => {
    const pizza = new Order('Cheesy Crust', 70, 20);

    expect(pizza.startMinute).toEqual(30);
  });
});


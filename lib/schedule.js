class Schedule {
    #schedule = new Array(1440).fill(false);

    nextOpenMinute() {
      return this.#schedule.findIndex(minute => minute === false);
    }




}

module.exports = Schedule;












// This class manipulates a schedule (minute by minute).

// To start create a private schedule property (#schedule) that is an array of minutes. If the array has false at an index it means that minute is free.

// nextOpenMinute this is a method that should return the first minute that is unscheduled (the first index in the #schedule array that is false)

// clear this is a method that should clear the #schedule make all positions false

// print this is a method that should print (console.log) the schedule. come up with a good visualization for this

// addOrder this is a method that takes an order. It will add the order to the schedule according to the order's startMinute and deliveryMinute.
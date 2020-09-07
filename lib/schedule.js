class Schedule {
    #schedule = new Array(1440).fill(false);

    nextOpenMinute() {
      return this.#schedule.findIndex(minute => minute === false);
    }

    print() {
      console.log(this.#schedule.map(minute => minute ? 'busy' : 'free'));
    }

    clear() {
      this.#schedule = new Array(1440).fill(false);
    }

    freeWindow(startMinute, endMinute) {
      for(let i = startMinute; i <= endMinute; i++) {
        if(this.#schedule[i] === true) {
          return false;
        } else {
          return true;
        }
      }
    }

    addOrder(order) { 
      for(let i = order.startMinute; i <= order.deliveryMinute; i++) {
        this.#schedule[i] = true;
      }
    }
}

module.exports = Schedule;

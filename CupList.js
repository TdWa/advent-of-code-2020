class CupList {
  constructor(currentCup) {
    this.current = { value: currentCup, previous: null, next: null };
    this.current.next = this.current;
    this.current.previous = this.current;
    this.latest = this.current;
    this.destination = null;
    this.length = 1;
  }

  push(cup) {
    const newCup = { value: cup, previous: this.latest, next: this.current };
    this.latest.next = newCup;
    this.current.previous = newCup;
    this.latest = newCup;
    this.length++;
  }

  pick3Cups() {
    const next3 = [
      this.current.next.value,
      this.current.next.next.value,
      this.current.next.next.next.value,
    ];
    this.current.next.next.next.next.previous = this.current;
    this.current.next = this.current.next.next.next.next;
    this.length -= 3;
    return next3;
  }

  setDestinationCup(cup) {
    let target = this.current;
    for (let i = 0; i < this.length; i++) {
      if (target.value === cup) {
        this.destination = target;
        return target;
      }
      target = target.previous;
    }
    return null;
  }

  insertCups(cups) {
    const a = { value: cups[0], previous: this.destination, next: null };
    const b = { value: cups[1], previous: a, next: null };
    const c = { value: cups[2], previous: b, next: this.destination.next };
    a.next = b;
    b.next = c;

    this.destination.next.previous = c;
    this.destination.next = a;
    this.length += 3;
    return this.destination;
  }

  setNewCurrent() {
    this.latest = this.current;
    this.current = this.current.next;
  }

  toArray() {
    const arr = [];
    let cup = this.current;
    for (let i = 0; i < this.length; i++) {
      arr.push(cup.value);
      cup = cup.next;
    }
    return arr;
  }

  getCup1() {
    let target = this.current;
    for (let i = 0; i < this.length; i++) {
      if (target.value === 1) return target;
      target = target.next;
    }
    return null;
  }
}

CupList.fromValues = (...values) => {
  const cupList = new CupList(values[0]);
  for (let i = 1; i < values.length; i++) {
    cupList.push(values[i]);
  }
  return cupList;
};

module.exports = CupList;

/*
class CupList {
  constructor(currentCup) {
    this.current = { value: currentCup, next: null };
    this.current.next = this.current;
    this.last = this.current;
    this.destination = null;
    this.length = 1;
  }

  push(cup) {
    const newCup = { value: cup, next: this.current };
    this.last.next = newCup;
    this.last = newCup;
    this.length++;
  }

  pick3Cups() {
    const next3 = [
      this.current.next.value,
      this.current.next.next.value,
      this.current.next.next.next.value,
    ];
    this.current.next = this.current.next.next.next.next;
    this.length -= 3;
    return next3;
  }

  setDestinationCup(cup) {
    let target = this.current.next;
    for (let i = 1; i < this.length; i++) {
      if (target.value === cup) {
        this.destination = target;
        return target;
      }
      target = target.next;
    }
    return null;
  }

  beforeDestination(cup) {
    let target = this.current;
    for (let i = 0; i < this.length; i++) {
      if (target.value === cup) {
        return target;
      }
      target = target.next;
    }
    return null;
  }

  insertCups(cups) {
    this.destination.next = {
      value: cups[0],
      next: {
        value: cups[1],
        next: { value: cups[2], next: this.destination.next },
      },
    };
    this.length += 3;
    return this.destination;
  }

  setNewCurrent() {
    this.last = this.current;
    this.current = this.current.next;
  }

  toArray() {
    const arr = [];
    let cup = this.current;
    for (let i = 0; i < this.length; i++) {
      arr.push(cup.value);
      cup = cup.next;
    }
    return arr;
  }

  getCup1() {
    let target = this.current;
    for (let i = 0; i < this.length; i++) {
      if (target.value === 1) return target;
      target = target.next;
    }
    return null;
  }
}

CupList.fromValues = (...values) => {
  const cupList = new CupList(values[0]);
  for (let i = 1; i < values.length; i++) {
    cupList.push(values[i]);
  }
  return cupList;
};

module.exports = CupList;
*/

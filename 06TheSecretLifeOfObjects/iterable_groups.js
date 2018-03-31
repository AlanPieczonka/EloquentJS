class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    !this.has(value) && this.members.push(value);
  }

  delete(value) {
    const newGroup = this.members.filter(element => element !== value);
    this.members = newGroup;
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(iterable) {
    let group = new Group();
    for (let item of iterable) {
      group.add(item);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.position = 0;
    this.group = group;
  }

  next() {
    if (this.position === this.group.members.length) return { done: true };

    const value = this.group.members[this.position];
    this.position++;
    return { value, done: false };
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

console.log('-------------------');
console.log('-------------------');
console.log('-------------------');

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c

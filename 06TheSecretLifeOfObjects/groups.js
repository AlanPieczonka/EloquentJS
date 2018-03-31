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

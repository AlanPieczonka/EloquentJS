class PGroup {
  constructor(members) {
    this.members = members;
  }

  add(member) {
    if (this.has(member)) { return this }
    return new PGroup([...this.members, member]);
  }

  delete(member) {
    if (!this.has(member)) { return this }
    return new PGroup(this.members.filter(m => m !== member));
  }

  has(member) {
    return this.members.includes(member);
  }
  
  static empty() {
    return new PGroup([]);
  }
}

let a = PGroup.empty().add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false

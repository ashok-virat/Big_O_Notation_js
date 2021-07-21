let hashStringToInteger = (s, tableSize) => {
  let hash = 17;
  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }
  console.log(hash);
  return hash;
};

class HashTable {
  constructor() {
    this.list = new Array(100);
  }

  set(x, y) {
    const hashId = hashStringToInteger(x, this.list.length);
    this.list[hashId] = y;
  }

  get(x) {
    const hashId = hashStringToInteger(x, this.list.length);
    console.log(this.list);
    return this.list[hashId];
  }
}

var table = new HashTable();
table.set("firstName", "ashok");
table.set("lastName", "arun");
table.set('dob','12')

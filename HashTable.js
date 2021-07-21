var HashTable = /** @class */ (function () {
    function HashTable() {
        this.list = [];
    }
    HashTable.prototype.get = function (x) {
        var result;
        this.list.forEach(function (pair) {
            if (pair[0] === x) {
                result = pair[1];
            }
        });
        return result;
    };
    HashTable.prototype.set = function (x, y) {
        this.list.push([x, y]);
    };
    return HashTable;
}());
var table = new HashTable();
console.time("with lots of records in the map");
table.set(1, 1);
table.set(2, 2);
console.timeEnd("with lots of records in the map");
table.get("i am not exsist");
for (var x = 0; x < 100000; x++) {
    table.set(x, x);
}
console.time("with lots of records in the map");
console.log(table.get(1));
console.timeEnd("with lots of records in the map");

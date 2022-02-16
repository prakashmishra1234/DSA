class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.dataMap[index]) this.dataMap[index] = []

        this.dataMap[index].push([key, value])
        return this
    }
    keys() {
        let allkeys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allkeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allkeys
    }
}

let myHashTable = new HashTable()
myHashTable.set('lumber', 70);
myHashTable.set('washer', 50);
myHashTable.set('bolts', 1400);


console.log(myHashTable.keys());
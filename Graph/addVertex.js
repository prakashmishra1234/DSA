class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    }
}

let myGraph = new Graph()
myGraph

let ver = myGraph.addVertex("A");
console.log(ver);
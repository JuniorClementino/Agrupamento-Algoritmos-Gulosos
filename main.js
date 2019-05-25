// --- Imports 
var Readline = require('readline');                 // --- Readline Module... to read files and stdin...
let Graph = require('graph');                       // --- Graph Class
let Prim = require('prim');                         // --- Prim implementation
let Kruskal = require('kruskal');                   // --- Kruskal implementation
let Utils = require('utils');                       // --- 

// --- Globals
let coordinates = [];

// --- Instantiates new line reader
var lineReader = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// --- On read a line from the input file
lineReader.on('line', function(line){

    // --- Splits input and stores into array...  e.g. "15.4   20.2" becomes [15.4, 20.2]
    let split = line.split("\t");
    coordinates.push([parseFloat(split[0]), parseFloat(split[1])]);

})
// --- When file parsing is finished
.on('close', function () {      
    
    // --- Creates graphs from coordinates
    let graph1 = new Graph.graph(coordinates);
    let graph2 = new Graph.graph(coordinates);    
    
    // --- Runs Prim with Clusterization and saves output to file
    let clustersPrim = Prim.run(graph1, 7);
    Utils.saveToFile(clustersPrim, "result_prim");

    // --- Runs Kruskal with Clusterization and saves output to file
    let clustersKruskal = new Kruskal.kruskal(graph2, 7);
    Utils.saveToFile(clustersPrim, "result__kruskal");      
});

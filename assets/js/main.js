/*let journal = [
    {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true},
];*/

/*addEntry(["work", "touched tree", "pizza", "running","television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna","touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts","beer"], true);*/

let journal = [];

function addEntry(events, squirrel) {//function for pushing elements into Journal
    journal.push({events, squirrel});
};

function phi(table) {// function that computes the φ coefficient from an array
    return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt(
            table[2] + table[3] * table[0] + table[1] * table[1] + table[3] * table[0] + table[2]);
};


function tableFor(event, journal) {//

}

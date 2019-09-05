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


function tableFor(event, journal) {//function for creating tables for a particula event in relation to squirrel
    let table = [0, 0, 0, 0];//creating a varible for table

    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;

        if(entry.events.includes(event)) {//if a particular entry has an event, increase index by 1
            index += 1;
        };

        if (entry.squirrel) {//checking if the squirrel is true
            index += 2;
        };

        table[index] += 1;
    };

};

// console.log(tableFor("pizza", journal));//logging the table for pizza event to the console

function alternateTableFor(event, journal) {//alternate function for tableFor
    let table = [0, 0, 0, 0];

   for (let entry of journal) {
       let index = 0;

        if(entry.events.includes(event)) {
            index += 1;
        }

        if (entry.squirrel) {
            index += 2;
        }

        table[index] += 1;
   }

   return table;
}


/**the FINAL ANALYSIS */
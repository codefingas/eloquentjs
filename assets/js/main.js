/*
let journal = [
    {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true},
];

/*addEntry(["work", "touched tree", "pizza", "running","television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna","touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts","beer"], true);*/

// let journal = [];
/*
function addEntry(events, squirrel) {//function for pushing elements into Journal
    journal.push({events, squirrel});
};

function phi(table) {// function that computes the φ coefficient from an array
    return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt(
            table[2] + table[3] * table[0] + table[1] * table[1] + table[3] * table[0] + table[2]);
};

/*
function tableFor(event, journal) {//function for creating tables for a particular event in relation to squirrel
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
/*
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
*/

/**the FINAL ANALYSIS */
/*
function journalEvents(journal) {
    let events = [];

    for (let entry of journal) {//lopping through each record in the journal
        for (let event of entry.events) {//looping through  the event for each record in the Journal
                if(!events.includes(event)){//checking if the events array already has the event
                    events.push(event);//puhing events to array
                }
        }
    }
    return events;
}


for (let event of journalEvents(journal)) {//looping through all the events registered in the journal events
    //activate
        console.log(event + ":", phi(tableFor(event, journal)));//logging each event and their 
}

for (let event of journalEvents(journal)) {//looping through all the event and logging the ones with the most and least likely occurances to the console
    let correlation = phi(tableFor(event, journal));//creating a variable for the results of the phi

    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
};

for (let entry of journal) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {//checking when peanuts and brushed teeth did not occur at all

    }
}
*/
/**END OF THE FINAL ANALYSIS FUNCTION */

let arrayToListarray = [0, 1, 2, 3, 4];

function arrayToList(array) {
    let length = array.length, i,
        list = null,
        obj = {value : undefined, rest : list};
        console.log(obj);

    while(length--) {
        obj.list = obj;
        obj.value = array[length];
        list = obj;
    }
    console.log(obj);
};

arrayToList(arrayToListarray);
function textScripts(text) {
        let scripts = countBy(text, char => {

            let script = characterScript(char.codePointAt(0));
            return script ? script.name : "none";

        }).filter(({name}) => name != "none");

        let total = scripts.reduce((n, {count}) => n + count, 0);

        if (total == 0) return "No scripts found";

            return scripts.map(({name, count}) => {

            return `${Math.round(count * 100 / total)}% ${name}`;
            
        }).join(", ");
}

 /***HIGHER ORDER FUNCTION : EXCERCISE ONE  funcion that flattens an array in array */
    function flatten (array) {
        return array.reduce((a , b) => {
            a.concat(b), []
        });
    }

    let arr =  [[1,2], [3, 4], [5, 6], [7, 8], [9, 0]];
    console.log(arr.reduce((a, b) => { 
        return a.concat(b)
    }))

    console.log("flatten method", flatten(arr));
 /**END OF EXCERCISE ONE */
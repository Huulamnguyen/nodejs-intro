const fs = require('fs');

let arr = [];
while( arr.length < 100 ){
    let r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

fs.writeFile("file.txt", arr.toString(), "utf8", (err) => {
    if(err) console.log(err);
    else {
        console.log("100 random numbers have been written to file.txt successfully\n");
        fs.readFile("file.txt", "utf8", function(err, data) {
            if(err) console.log(err);
            else {
                // convert string to an array
                const arr = data.split(',')
                // turn an array of strings into integers
                for(let i=0; i<arr.length;i++) arr[i] = +arr[i];
                // sort the array of integers
                arr.sort((a,b) => a - b);

                // write the sorted numbers back to the file.txt
                console.log("100 sorted random numbers have been updated to file.txt successfully\n");
                console.log(fs.writeFileSync("file.txt", arr.toString(), "utf8"));
            }
        })
    }
});
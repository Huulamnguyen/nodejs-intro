// convert an object to a string
function objectToString(object) {
    return JSON.stringify(object)
}

// convert a string to an object
function stringToObject(string) {
    return JSON.parse(string)
}

// Calculate the number of days between the current timestamp and a given timestamp.
// givenDate is a string in US format m-d-y
function daysBetweenTwoTimestamps(givenDate){
    let today = new Date();
    let given = new Date(givenDate);
    let diff = today.getTime() - given.getTime();
    let totalDays = Math.ceil(diff / (1000 * 3600 * 24))
    return totalDays;
}

module.exports = {objectToString, stringToObject, daysBetweenTwoTimestamps}
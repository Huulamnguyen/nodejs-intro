const {objectToString, stringToObject, daysBetweenTwoTimestamps} = require('./utils')

const userObject = {
    name: "Lam",
    age: 30,
    occupation: "Developer"
}

// convert object to string
let userObjectToString = objectToString(userObject)
console.log(userObjectToString)
// convert the stringified user object to string
let userStringToObject = stringToObject(userObjectToString)
console.log(userStringToObject)

// days between current date and a given date. For example: "6/1/2022" => should return 8
let days = daysBetweenTwoTimestamps('6/1/2022')
console.log(days)
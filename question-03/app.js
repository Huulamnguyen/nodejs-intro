const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers') 

const argv = yargs(hideBin(process.argv)).argv
// console.log(argv)

function login(username, password) {
    if (argv.username==='admin' && argv.password==="admin") {
        console.log('Successfully logged in.')
    } else {
        console.log('Incorrect username or password!')
    }
}

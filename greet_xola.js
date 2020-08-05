const chalk = require('chalk');
const figlet = require('figlet');
//import the greet module that is in the current folder
const greet = require('./greet');



figlet(greet('Xola'), function(err, data) {

const styledMessage = chalk.bgGreen.black(data);

    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(styledMessage)
});
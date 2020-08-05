const chalk = require('chalk');
const figlet = require('figlet');
//import the greet module that is in the current folder
const greet = require('./greet');



figlet(greet('Xola'), function(err, data) {

    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bgGreen.black(data))
});
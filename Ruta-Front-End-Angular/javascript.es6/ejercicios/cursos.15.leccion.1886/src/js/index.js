import * as AddMultModule from './features-module/controller.js'
import chalk from 'chalk';


console.log(AddMultModule.addition(1,2));
console.log(AddMultModule.addition(4, 5));

console.log(chalk.green( AddMultModule.multiplication(AddMultModule.addition(1, 2), AddMultModule.addition(4, 5))));

/*
Read an integer number between 1 and 12, including. Corresponding to this number, you must print the month of the year, in english, with the first letter in uppercase.

Input
The input contains only an integer number.

Output
Print the name of the month according to the input number, with the first letter in uppercase.

*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    

month = parseInt(lines.shift());


months = ['none', 
          'January',
          'February', 
          'March', 
          'April', 
          'May', 
          'June', 
          'July', 
          'August', 
          'September', 
          'October', 
          'November',
          'December'
  ];

console.log(months[month]);

 

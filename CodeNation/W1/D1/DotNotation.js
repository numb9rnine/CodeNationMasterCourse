//Activity 1



var grid1 = "    |    |    "; //this will loop 3 times
var grid2 = "- - - - - - - -";//this will happen on the 4th and 8th lines in the pattern
for (var i = 0; i < 9; i++) { // this counts up through the numbers for each line to be assigned to
    if (i == 3 || i == 6){    // this makes numbers 3 and 6 the exceptions to print the second pattern
        console.log(grid2) //this prints pattern 1
        }
        console.log(grid1) //this prints pattern 2
    }
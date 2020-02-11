// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.
// EXAMPLES***
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

function printerError(s) {
    let counter = 0;
    const wrongLtrs = ['n','o','p','q','r','s','t','u','v','w','x','y','z']

    wrongLtrs.forEach(ltr => {
      s.split('').forEach(ltr2 => {
        if(ltr2.includes(ltr)){
          counter++
        }
      })
    })

    return `${counter}/${s.length}`
}

//advanced solution 
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}

//.match takes in a regex expression and returns an array of the matching letters. 
//but in this case bc [^] was used it negates it and returns the oppposite. So an array of letters that do not match the regex.
//you get the length of the negative matches and built out the string.
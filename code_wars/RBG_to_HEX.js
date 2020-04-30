// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

function rgb(r, g, b){
    r = convert(r);
    g = convert(g);
    b = convert(b);
    
    if (r.length === 1) r = '0' + r;
    if(g.length === 1) g = '0' + g;
    if(b.length === 1) b = '0' + b;
    
    return r + g + b;
  }
  
  function convert(number){
    if(number >= 255) {
      return 'FF'
    } else if (number < 0){
      return '00'
    } else {
      return number.toString(16).toUpperCase();
    }
  }
function transpose(input){
  let result = [];
  if(input.length === 0 || input[0].length === 0){
    return result;
  }
  //console.log(input);
  result = Object.keys(input[0]).map(function(c){
    return input.map(function(r){
      return r[c];
    }).reverse();
  });
  //console.log(result);
  return result;
}

function dimensions(input){
  let result = "";
  let row = input.length;
  let col = 0;
  if(input.length >= 1){
    col = input[0].length;
  }
  result += row.toString() + 'x' + col.toString();
  return result;
}

module.exports = {
  transpose,
  dimensions
};

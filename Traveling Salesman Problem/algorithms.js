function longestIncreasingSubSequence(points){
  if (points.length == 0)
    return 0;
  temp = [];
  var length = points.length;
  for(var i = 0; i <  length; i++)
    temp[i] = 1;
  var i = 1;
  var j = 0;
  while(i < length){
      j = 0;
      while(j < i){
        if (points[j] <= points[i])
          temp[i] = Math.max(temp[i], temp[j] + 1);
        j++;
      }
      i++;
  }
  return Math.max.apply(null, temp);
}
function swap(string, i, j){
  var charArr = Array.from(string);
  var temp = charArr[i];
  charArr[i] = charArr[j];
  charArr[j] = temp
  return charArr.join("");
}

/* this program finds all the permutations of a given string*/
function findAllPermutations(string, start, end){
    if(start == end - 1)
      console.log(string);
    else{
      for(var i = start; i < end; i++){
        string =  swap(string, start, i);

        findAllPermutations(string, start+1, end);
        /* backtack and swap them again */
        string =  swap(string, start, i);
      }
    }
}

function nQueensPlacement(n, row, col){
  if(row >= n || col >= n)
    return;
  else{
    
  }

}

function main(){
  findAllPermutations("ABC",0,3);
}
main();

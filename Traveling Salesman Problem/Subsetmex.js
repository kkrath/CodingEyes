

/* this function computes the smallest non negetive missing number given an array of non negetive numbers */

function mex(array){
  if(array.length == 0)
    return 0;

  for(var i  = 0;i < array.length;i++){
    var idx = array[i];
    if (array[idx] >= 0)
      array[idx] *= -1;
  }
  for(var  i = 0; i < array.length;i++){
    if(array[i] > 0)
      return i;
  }
}

function helper(array, idx, subset1, subset2){
    if (idx >= array.length){
      console.log(subset1);
      console.log(subset2);
      return;
    }
    /* choose or loose */
          var subset_1 = subset1
          subset_1.push(array[idx]);
          helper(array, idx+1, subset_1, subset2);
          var subset_2 = subset2
          subset_2.push(array[idx]);
          helper(array, idx+1, subset1, subset_2);
}

function devide(array){
  var n = array.length;
  if(n = 0)
    return;
  if(n %2 != 0)
    return mex(array);
  subset1 = [];
  subset2 = [];
  return helper(array, idx, subset1, subset2);

}


  array = [1,9,0,2];
  subset1 = [];
  subset2 = [];
  helper(array, 0, subset1, subset2);

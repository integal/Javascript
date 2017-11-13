'use strict';

var x = 1;
y = 0;
try{
  if(y === 0){ throw new Error('Do not /0');}
  var z = x / y;
}catch(e){
  console.log(e.message);
}
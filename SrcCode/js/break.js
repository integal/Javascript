var result = 0;
for(var i = 1;i <= 100; i++){
  result += i;
  if (result > 1000)
    break;
}
console.log('x sum is over 1000 when x is '+ i);
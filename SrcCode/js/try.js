var i = 1;
try{
  i = i * j;
}catch(e){
  console.log(e.message);
}finally{
  console.log('task is done');
}
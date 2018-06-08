function time(t1,t2){
  if((t1>=1)&&(t1<=100000)&&(t2>=1)&&(t2<=100000)){
    var hour=0,hour2 = 0;
    var min=0,min2 = 0;
    var sec=0,sec2 = 0;
    if(t1>=3600){
      hour = Math.floor(t1/3600);
      min = Math.floor(t1%3600/60);
      sec = Math.floor(t1%3600%60);
    }else {
      min = Math.floor(t1/60);
      sec = Math.floor(t1%60);
    }
    if(t2>=3600){
      hour2 = Math.floor(t2/3600);
      min2 = Math.floor(t2%3600/60);
      sec2 = Math.floor(t2%3600%60);
    }else {
      min2 = Math.floor(t2/60);
      sec2 = Math.floor(t2%60);
    }
    hour +=hour2;
    min +=min2;
    sec +=sec2;
    if(min>=60){
      hour++;
      min = min-60;
    }
    if((sec>=60)){
      min++;
      sec = sec-60;
    }
    console.log(hour+' ч',min+' мин',sec+' сек');
    }else{
      console.log('некорректные числа!')
    }
}
time(process.argv[2],process.argv[3]);

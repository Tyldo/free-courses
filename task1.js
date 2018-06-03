var x1 = +process.argv[2];
var y1 = +process.argv[3];
var x2 = +process.argv[4];
var y2 = +process.argv[5];
if((x1>=-10000)&&(x1<=10000)&&(x2>=-10000)&&(x2<=10000)&&(y1>=-10000)&&(y1<=10000)&&(y2>=-10000)&&(y2<=10000)){
	var resX = x1+x2;
	var resY = y1+y2;
	process.stdout.write(resX,resY);  
}

var n = process.argv[2];
var e = process.argv[3];
var result = 0;
if((n>=1)&&(e<=100)){
	for(var i=1;i<=n;i++){
		result += i**e;
		
	}
}
console.log(result)

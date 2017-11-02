var rect = require('./rectangle');

function solveRect (l,b){
	console.log("Solving for rectangle with l= "+l+" and b= "+b);

	rect(l, b, (err, rectangle) => {
		if(err)
			console.log("Error: ", err.message);
		else {
			console.log("The area of rectangle of dimensions l = "+l+ " and b = "+b+ " is "+rectangle.area());
			console.log("The perimeter of rectangle of dimensions l = "+l+ " and b = "+b+ " is "+rectangle.perimeter());
		}
	});
	console.log("This statement is after call to rect");
}

solveRect(2,3);
solveRect(5,3);
solveRect(-2,2);
solveRect(1,0);

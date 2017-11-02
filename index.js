var rect = {
	perimeter: (x,y) => (2*(x+y)),
	area : (x,y) => (x*y)
};

function solveRect (l,b){
	console.log("Solving for rectangle with l= "+l+" and b= "+b);

	if(l <= 0 || b <= 0)
		console.log("Rectangle dimenstions should be positive!");
	else {

		console.log("The area of given rectangle is = "+rect.area(l,b));
		console.log("The perimeter of the rectangle is ="+rect.perimeter(l,b));
	}

}

solveRect(2,3);
solveRect(5,3);
solveRect(-2,2);
solveRect(1,0);

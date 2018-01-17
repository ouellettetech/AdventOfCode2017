var initState = ["#...##......#......##.##..#...##......##.#.#.###.#.#..#..#......####..#......###.#.#....#..##..###..",
	"####..#.#...#....#.#####.##.##.#..#.......#....#.##...###.###..#.#.#........#..#.#.##...##..#.####.#",
	"...#..##...#.#.###.#.###..#.##.####.###...#...........#.###..##.#.##.#.###...#.#..###....#.###.#..#.",
	".#...##...####.#..#.....#..#...#.#.##...#...##..#.#.###....#..###.....##..#.###..###.....##..###...#",
	"..##.#####....##..#.#..##.##..######...#..###.######.....#..##...#.#..##..##..#..#..#..##.#.#.#.#...",
	".###.###.###...##...##..###..##.###.#.....##..##.#.#########...##..##.#..##.#..##..####..#.#.#.#####",
	"#.#####..###.###.##.##.#...#.#.#.#..#.###...#..##.###.#...####.#..#.#.....###..#..####..#.#.#...##..",
	"....#...##.....#....####.##.#.###..#.#.##..#.#...##.###.###..#.##..#.#.##..##..#.##.###..#.#.###.###",
	"##.##...#.##...#.#..#.#..#...###...###.#..#..#.#####..###.#......#.....###.#####.#.#..#.#.#.##..#.#.",
	"#.#..#.....#.....##.#..##...###..##...##...###.#.###.#..#.#.###...##..##..#.###...#.#######.#...#.#.",
	"#.#.....####.#..#.##...#.##....#####.###.#.....#####....###..#........##..####...#...#.###....#..###",
	"##.#.##..#.#.##.#.....##.#.....###.####.#..######.....####.#.#..##.#.##...#..#.#.....#.####.#.......",
	"#..#..#.#..#.######.##..##.####.....##.#.##.#.######..#.#....#.#...#.#..#..#.#.###.#..#.#.#..#...###",
	"####..####.#.#.###.....#.#.#.##..#.##.##.##.#..##..##.#.##.....#.#..#.####.....###.#..#.####.#.#..##",
	"###.##..##.#.##..#..##...#.#####.##.#....##.####.#.##....#..###.#.#.##...#.....#.#.#.#.#..##.#.#..#.",
	"......#..####...##.##...#.##.##...##..#..##.###..#...#..##...#.#....###.####...#.##.###.#.##.####.##",
	"..#...#####.#.#..#.##....#..#...#..####.....###...##.###....#..#.###...#........#.#.##..#..#.#.....#",
	"#######.#.#.###.###..######.##..#####.##.###.###....####.#..##.##...###.#..############.#.##....##.#",
	"#.#...##.###.#.###..#.#.#.#.#.#..##..####.#..##.....#.##..#.##...##.#..##..#.#.#....##....##.#..#.#.",
	"..#.#.####.....###..#######.#.#.#.#...##.#####.....##...##...##.###..######.###..#...####.#..###.###",
	".#.##....#.#.##..##.#.##.##..######...#.....#..#.#.#.#.....#.#..##.#.#.......#######....#.......#...",
	"..###.##.##..##....#.###...#.....##..##......###...##..###.##...##.###.#.#.#.###.###.#.#...###..#...",
	".##.#.#...#...##.#.#...#..#..#.#...##.#.##...##..#....#.#..##.#..#.#..#.#.....#..#.#...#######.#.##.",
	"...####....#.###.#..###..##...##..#.#.#.###...#..##.##.##..##.#...#..#.##.....#.#........#..#.#.####",
	".....##..###...#....#.#.#.#...###.###...#.#...#.#.####....#..####...###..#..######..##.##..###.#####",
	"#####.##..#....###.###....##.....#.#..#....#.#####.##.#.####.#.##...#..###...###..##...#.###.#####..",
	"###.##..........########.######....####.###.#..##...#.##.####.#.....##..#####..###...#####.....#.#.#",
	"##..#####.##.#.#####.#.##.##..#.##....########.#####.#...#.###.##...#.###.#.#..#....##.#..#...#.#.#.",
	".##.#....#..#...#..#####..#..##.#......#..#....########...#..#...#.....####.#...##...#.###.#.#..##.#",
	".##.##.#.##.#.##...#.#.#..##.##.###.#..##..#...###.##.###.#####.#.###..#..###.#...#.###.#...#..#.#.#",
	".#..#..#.#..#..###..#....###.####.##.#.###.#.##.###.#.##.###.###...###...###.#...####...#.##.##.#.#.",
	"###..##...###...#..##.#..#.#...##....###.##.##..#####....###..#..#....#..###.###.#...#.##...#.#.#..#",
	"#....#.......##.....#.##...#..#.###.#.##..##..#.##..#.###..##.##...#####.#..#####..#####..#####....#",
	".####.####....###..###.#.##.####.##.#...####.#.###.#.....#...####..#####.###..#.#.###.##.##...##..#.",
	"####..##...##.########...##..###..#..###.##.#.#.#........#.#####.#...#.###.####.#..####..#.#.#....##",
	"###.#..#...###.#..#..#.###...##..###.##.#.#...#..#...####..##....#.#..#..##.#.#...#####.###.#..#.#.#",
	"...##....#.###.#.#..##...##.###.#..#..#......#...#.#..####.#.##..######.####.#...#..#..#..##.#.#.##.",
	"##.####.#...#..#.#.##..##.#.#.###..##...####......#..######.#......#.##.#....##...###.#.#..#......##",
	"#.....#...#######.##.#..#.#...###.#..#.####....#.#.##.#.##...###..#...#.###.##..#.###..#.##...#####.",
	"#####.##...#..#.#.#.......#.##..#####..#####...###..##.#.#..###.#.#####.####..#.#..##...#.##...#.###",
	".##.#..#######.###.#.####.....##...#.##.#.#..#...##....####......######.#..######.....##########.##.",
	"##...#.#..#.##.###.#.#.#.##.###.##..##.##.##...#.#..###.#######..#.....#####..#....######.#..##..###",
	".#.#.###.....#..##..#.#..##..#.###...###.#..##...#...#.#####.#.#####..###.#..#...##..#.#..#..####...",
	".#......##..#.....####.###....##.###.....###.##........#.###.##..#..#.#######.#.######..##..###.....",
	"..##.#.#..#.##...#.###.###...######..#..#.#..#....###.#.#....#..........#...##.##.##.#..##..#.#####.",
	"###.###.#..#.##..##.#..#..##.....##.....#..#######.#..#.#.#.####.###..###.#.#..#.##.##.####.###.####",
	"#.#.#..#....########.#..#..#...##..#.##..#.#..##..####...##.....#.##.#.#...########..#.###.#..#.#.##",
	".##.....#...#.#...##.##....###...##..#.####...#..#.#..#..#.##..#.###.##.####.##..####.....##.#.....#",
	"....####.#.##.#.##.#..##.#.######.##.####..#...####.#..###.#.#..#..##.#.#.....##.#####.#.####...#.#.",
	"#..#####.#####.....##....######..##....#..#.#.###.#####.....##.##.####.#...##...#.##.#.#####.##.#...",
	"##.####..###.#....#...#.#.#.#.###.#####.#.####..####...####......##..#..#..#.#.##...########....#...",
	".###.#.#.#.#..####.##.#..######..#.#.###.....#.#......#.#.#.#..####.##...##.#####.#.##..##..#..#.#..",
	".....###...#...#.####.###.#.#.#.#.....#....#.####.###.##.##.##.#######......#.####......#....##.....",
	"##..#..#.#.##..#...#..##.##.##..###.#....##.##....####.#.##.###....#.##.#.#.##...##.###...#..#..####",
	"...#.#..##..##.#...##.##...#.#......#.#.##..###....####.##...#.#.###.#..#..#.####..##..##..#####.###",
	".##.##..##########.##...#.##.####.#.#######.##.#.##.##..#...##....########.###..##.##.##.#..##.#.#.#",
	"#####.#....#.##..#.....#......##.##..#.##.###..##.......###..##.#.###.##.###....####.#..#.###..#.#.#",
	".#...#..#.##....##....#...####....#...#..#...####...########.###.#..##.#.#.##..###..#.#.###.....##.#",
	"##..##.....###......#..###.##.####.##.####.#.#....#..#...#..#.#..#.###.#...#...#..##.##...#..#######",
	".....##..###..##...#####.#.#.....###.#.#..####...#.#.#..#..####..##.#..###.####.#....##..###....#..#",
	"#.#.##.#....#.#####.#....##...#...##...##....#.#.......#....#..#...###.###.#.####..####....#.##.#.#.",
	"..##...##..###.#.#.##.#..#....#.#.....##.###.#.###.###.....#...#.#..#######.#####..#.###...##......#",
	"#......###..#....#.#..#.###.##.#...##..###.####.#.#....#.##..#.###..##.#..#####..##.###.....#..###..",
	"##.#.##..##.###.#..##.....#.##.....###....##.####.######.#...#..###....#.#...#.##.....###....#..#.#.",
	".##.#.#.#.##..#.#.#..##..#.###.####....#..###.######..####.#.....###.##..#...###.#..######.##.#.##..",
	"...##.####.#..##.#####.##.#...##..#..#...#.#.#.#####...#....#..###...#..#....#.#.##.#.######.#..####",
	"..#.#.#.#...#.######.#.....#..#.#..###....#.#.########...#....#.#.##..#...##...#.#..#.#.###....##...",
	"#####..#..##..#..##..#..#.#.##.#....#####.####.##.#.###..##..##....#.....#.#####.#...#.#####.##.#.#.",
	"#.#..#####...####.###.###.....####.###.....##...##...#..#..#######.#.##....##..####.....##...#..#..#",
	"#.#.###.#.#..##..#....#.#...#.#.##.##..#.##.....##...#.#..##.......##.#.###..#####.#.##....#.##.....",
	"...#.......#....#.#.####.#.###.###..#....#..##.#..####........#.##..#...#.#...###.#..#.#.#...#...#..",
	"...##.#####.##.#.###.##.##.#.##..##.#.#.#.#.#.##.#..##...##.#.#..#..##.##.#####.#.###...#####..#..#.",
	"#######.#..#..#....##.#.#..####.#..#..###...#..#.......###.#.#.####....#.###...#.#.###.#.#.#.#..###.",
	"..##.##.#.##.###....###.##.#.###.#...#....#.####..###..###.#.#..#...##.#.#.#..##.###..###.#.##...###",
	"######..######..##..##.#.#.##.##.#..##..#.#.#.##..#.#...#...#.#.#..######.#..#.#.######..#......##.#",
	"#.#####.....#.......#########..###.##...#...##.#.#..#...#####...#...#..#.###.#..#.#...###.#.#.#...#.",
	"#....##....###...##.##.#...##.........##.#.#..#.#.##.#.######.#####..#..###.###.#...#.#.##.######...",
	"#.#...###.#.###.##.#.######.#######.###.##..#.#.#...######.##.####.##..#.#.#.#......##..##.........#",
	"..###..##....#.....##...#.#.###.#.#.....##.#...###.####.#...#...##..##.#.#.####..###...######....#.#",
	"..###.#.##.####.#..#.##....##..#####....#..##.##.#..#######...#.####...##.#.#.##.........#....#....#",
	".##.#...#.####..#.#...#.##..######.##..##.#.###.##..###.###....##..#.##.##..##.#...###.##.##.###....",
	"#...###.###.#..#....#.......#..#.....###..#.###.##.##....#.####.#.####.##..##..#..#.....#....##.#.#.",
	".##.#..#..#.##.......#.####.#######.....#.##.##.#.....#.#..#....######.#..###.##.##.....#.####..##.#",
	"###..#.###.#..####.....##....#..####....#.##.##..#...######.#########...#.#....##...###.#..#.##...#.",
	"#..###..##..#.#.##.###.#.#.##...###.#...##.##..#.###....###..#.#...#.###..######.#..#.###..#..#..#.#",
	".#........##.#.###..###.#.#.##.....##.##.#.#...##..#.##....###..#.#.#.#.##....#.##..#.#...###...#...",
	"####.####..#....#.#.#..#..##.......##.####...###.##..#.#.##.#..##..######.......##.#.##..#...#.....#",
	"..#..#..###..##.##..######.#..###..###.#.##..##.#..#####.#.#.#.##..#.##..##.##......####.#..........",
	"...##.##..###.#...###....#.#.#.#.....#.##.....##...#...#......####...##.##....##.#..#.####.#..###.#.",
	"..#.....####.#.###.#####..#..###..#..#.#...#####...###.###....#.###..#...#..#..#.#..#.##..##.#.#....",
	"..##.#####...###.###.........#....##.####.##..#.#..#.#...#...##.##.##..#.#.##.########......#####...",
	"...###.#.#..#...#.###.###.......##.###.#..#.##########...#..#.#.#.##.#.###...######..#.#...###.##...",
	".#.#.#######.#..##.##..##...#...####...#..#####.#..##...###.#.#...#.##...#......#..##.####..#.....##",
	".##.##.#.#......#######..###.....##.#.##..###......#....####...#.###.#.##.#........#..#....##.....##",
	"#...#.###.#.##...##.####....#...#.###..#.#.....#.#....#.#.#.##...#.#..#####.#.#..#..#..#....#...####",
	".....##...###......#####..##.##.##...##.#.#####..##...#.#.#.#.###...###.##.####..#.#..#.#..#.####.##",
	"#..#..##.#.##.#.##.#.#.#..###....###.##.#.##.#...#.#..#...#....###.#..#.#.######.#...####..#..##.#.#",
	"#..#.#..#...###.#..##.#...#...##.#......#...#..#..####..##.....#.###...#.#..#.#....#.#####.##.###...",
	"###....#.#..#.#..###..#.##......#...#..#..##.#..###..##..#..#.####..#...########..##.#.##.#.#.#...#.",
	".#.#.##.##.###..#...#.#....#..#.##..#.#.#.#.##.##.#####...#........####..###..####.#####..#.##.#.##.",]

function testData(){
	var initialGrid = ".#.#.#\n...##.\n#....#\n..#...\n#.#..#\n####.."
	var myGrid = new Grid();
	myGrid.setFromStringa(initialGrid.split("\n"));
	console.log(myGrid.toStringBool());
	console.log("Running one step!");
	myGrid = generateNextGrid(myGrid);
	console.log(myGrid.toStringBool());

	console.log("Running 2 step!");
	myGrid = generateNextGrid(myGrid);
	console.log(myGrid.toStringBool());

	console.log("Running 3 step!");
	myGrid = generateNextGrid(myGrid);
	console.log(myGrid.toStringBool());

	console.log("Running 4 step!");
	myGrid = generateNextGrid(myGrid);
	console.log(myGrid.toStringBool());

	console.log("Lights On: "+myGrid.countTrue());
}

function testData2(){
	var initialGrid = ".#.#.#\n...##.\n#....#\n..#...\n#.#..#\n####.."
	var myGrid = new Grid();
	myGrid.setFromStringa(initialGrid.split("\n"));
	var endValue=myGrid.getHeight()-1;
	myGrid.toggleOn(0,0);
	myGrid.toggleOn(0,endValue);
	myGrid.toggleOn(endValue,0);
	myGrid.toggleOn(endValue,endValue);
	console.log(myGrid.toStringBool());
	console.log("Running one step!");
	myGrid = generateNextGrid(myGrid);

	myGrid.toggleOn(0,0);
	myGrid.toggleOn(0,endValue);
	myGrid.toggleOn(endValue,0);
	myGrid.toggleOn(endValue,endValue);
	
	console.log(myGrid.toStringBool());

	console.log("Running 2 step!");
	myGrid = generateNextGrid(myGrid);
	myGrid.toggleOn(0,0);
	myGrid.toggleOn(0,endValue);
	myGrid.toggleOn(endValue,0);
	myGrid.toggleOn(endValue,endValue);
	console.log(myGrid.toStringBool());

	console.log("Running 3 step!");
	myGrid = generateNextGrid(myGrid);
	myGrid.toggleOn(0,0);
	myGrid.toggleOn(0,endValue);
	myGrid.toggleOn(endValue,0);
	myGrid.toggleOn(endValue,endValue);
	console.log(myGrid.toStringBool());

	console.log("Running 4 step!");
	myGrid = generateNextGrid(myGrid);
	myGrid.toggleOn(0,0);
	myGrid.toggleOn(0,endValue);
	myGrid.toggleOn(endValue,0);
	myGrid.toggleOn(endValue,endValue);
	console.log(myGrid.toStringBool());

	console.log("Lights On: "+myGrid.countTrue());
}

function generateNextGrid(curGrid){
	var newGrid = new Grid();
	newGrid.toggleRangeOff(0,0,curGrid.getHeight()-1,curGrid.getHeight()-1);
	curGrid.forEach(function(value, coordinates, grid){
		var neighbors = grid.neighborsOn(coordinates.x, coordinates.y);
		//console.log("For Each "+coordinates.x + " " + coordinates.y + ": " + neighbors);
		if(value){
			if(neighbors === 2 || neighbors === 3){
				//console.log("Turning on was on " + coordinates.x + " " + coordinates.y);
				newGrid.toggleOn(coordinates.x, coordinates.y);
			}
		} else {
			if(neighbors === 3){
				//console.log("Turning on was off" + coordinates.x + " " + coordinates.y);
				newGrid.toggleOn(coordinates.x, coordinates.y);
			}
		}
	});
	return newGrid;
}

function day18a(initState){
	var myGrid = new Grid();
	myGrid.setFromStringa(initState);
	for(var i=0;i<100;i++){
		myGrid = generateNextGrid(myGrid);
	}

	console.log("Lights On: "+myGrid.countTrue());
}

function day18b(initState){
	var myGrid = new Grid();
	myGrid.setFromStringa(initState);
	var endValue=myGrid.getHeight()-1;
	myGrid.toggleOn(0,0);
	myGrid.toggleOn(0,endValue);
	myGrid.toggleOn(endValue,0);
	myGrid.toggleOn(endValue,endValue);
	for(var i=0;i<100;i++){
		myGrid = generateNextGrid(myGrid);
		myGrid.toggleOn(0,0);
		myGrid.toggleOn(0,endValue);
		myGrid.toggleOn(endValue,0);
		myGrid.toggleOn(endValue,endValue);
	}

	console.log("Lights On: "+myGrid.countTrue());
}

function Grid(){
	this.grid=[];
	this.debug = false;
	this.boolean = false;
	this.toggleRangeOn = function(x1,y1,x2,y2){
		for(var i=x1;i <= x2 ;i++){
			for(var j=y1;j<=y2;j++) {
				this.set(i,j,true);
			}
		}
	}

	this.toggleOn = function(x,y){
		this.set(x,y,true);
	}

	this.toggleRangeOff = function(x1,y1,x2,y2){
		for(var i=x1;i <= x2 ;i++){
			for(var j=y1;j<=y2;j++) {
				this.set(i,j,false);
			}
		}
	}

	this.toggleOff = function(x,y){
		this.set(x,y,false);
	}

	this.setField = function(x1,y1,x2,y2,amount){
		for(var i=x1;i <= x2 ;i++){
			for(var j=y1;j<=y2;j++) {
				this.set(i,j,amount);
			}
		}
	}

	this.toggle = function(x1,y1,x2,y2){
		for(var i=x1;i <= x2 ;i++){
			for(var j=y1;j<=y2;j++) {
				this.set(i,j,!this.get(i,j));
			}
		}
	}

	this.incrementValues = function(x1,y1,x2,y2,amount){
		for(var i=x1;i <= x2 ;i++){
			for(var j=y1;j<=y2;j++) {
				var temp=this.get(i,j)+amount;
				if(temp<0){
					temp=0;
				}
				this.set(i,j,temp);
			}
		}
	}

	this.onCount = function(){
		var count=0;
		var rowKeys = Object.keys(this.grid);
		var colKeys;
		for(var i=0;i<rowKeys.length;i++){
			colKeys = Object.keys(this.grid[rowKeys[i]]);
			for(var j=0;j<colKeys.length;j++){
				count++;
			}
		}
		return count;
	}

	this.countTrue = function(){
		var count=0;
		var rowKeys = Object.keys(this.grid);
		var colKeys;
		for(var i=0;i<rowKeys.length;i++){
			colKeys = Object.keys(this.grid[rowKeys[i]]);
			for(var j=0;j<colKeys.length;j++){
				if(this.get(rowKeys[i],colKeys[j])){
					count++;
				}
			}
		}
		return count;
	}

	this.countValue = function(){
		var count=0;
		var rowKeys = Object.keys(this.grid);
		var colKeys;
		for(var i=0;i<rowKeys.length;i++){
			colKeys = Object.keys(this.grid[rowKeys[i]]);
			for(var j=0;j<colKeys.length;j++){
				count+=this.get(rowKeys[i],colKeys[j]);
			}
		}
		return count;
	}

	this.getHeight = function(){
		return this.grid.length;
	}

 	this.setFromStringa = function(inputStringArray){
		this.boolean = true;
		 this.grid=[];

		 for(var i=0;i<inputStringArray.length;i++){
			 var curRow=inputStringArray[i].split("");
			 for(var j=0;j<curRow.length;j++){
				 if(curRow[j]==="#"){
					this.set(i,j,true);
				 } else {
					this.set(i,j,false);
				 }
			 }
		 }
	};

	this.setFromStringb = function(inputStringArray){
		this.grid=[];

		for(var i=0;i<inputStringArray.length;i++){
			var curRow=inputStringArray[i].split("");
			for(var j=0;j<curRow.length;j++){
				if(this.debug){
					console.log("Setting: "+curRow[j]);
				}
				this.set(i,j,curRow[j]);
			}
		}
	};

	this.toStringBool = function(){
		var curRow;
		var fullString="";
		for(var i=0;i<this.grid.length;i++){
			if(this.grid[i]){
				curRow="";
				for(var j=0;j<this.grid[i].length;j++){
					if(this.get(i,j)){
						curRow+="#";
					} else {
						curRow+=".";
					}
				}
				fullString+=curRow+"\n";
			}
		}
		return fullString;
	}
	
	///forEach(value: any, coordinates: {x: Number, y: Number}, grid: Grid)
	this.forEach = function(callback){
		for(var i=0;i<this.grid.length;i++){
			if(this.grid[i]){
				for(var j=0;j<this.grid[i].length;j++){
					callback( this.get(i,j), {x:i,y:j}, this);
				}
			}
		}
	}
	 
	this.toStringValue = function(){
		var curRow;
		for(var i=0;i<this.grid.length;i++){
			if(this.grid[i]){
				curRow="";
				for(var j=0;j<this.grid[i].length;j++){
					curRow+=this.get(i,j);
				}
				if(this.debug){
					console.log(curRow);
				}
			}
		}
	}
	this.get = function(x,y){
		if(!this.grid[x]){ //first row doesn't exist.
			if(this.boolean){
				return false;
			}
			return 0; 
		}
		return this.grid[x][y];
	}
	this.set = function(x,y,value){
		this.grid[x]=this.grid[x]||[];
		this.grid[x][y]=value;
	}

	this.flip = function(){
		var newGrid=new Grid();
		for(var i=0;i<this.grid.length;i++){
			if(this.debug){
				console.log("Flipping row"+i);
			}
			newGrid.grid[i]=this.grid[i].slice(0).reverse();
		}
		return newGrid;
	}
	this.mirror = function(){
		var temp=new Grid();
		for(var i=0;i<this.grid.length;i++){
			for(var j=0;j<this.grid[i].length;j++){
				temp.set(j,i,this.get(i,j));
			}
		}
		return temp;
	}
	this.rotate = function(){
		var temp=this.mirror();
		return temp.flip();
	}

	this.neighborsOn = function(x,y){
		var count = 0;
		for(var i=x-1;i<=x+1;i++){
			for(var j=y-1;j<=y+1;j++){
				var cur = this.get(i,j);
				if(cur){
					count++;
				}
			}
		}
		if(this.get(x,y)){ // Could also implement this as an if statement inside
			// the four loop, but this is probably slightly faster.
			count--;
		}
		return count;
	}
	this.isEqual = function(otherSide){
		if(otherSide.getHeight()!==this.getHeight()){
			return false;
		}
		for(var i=0;i<otherSide.getHeight();i++){
			if(otherSide.getHeight()!==this.getHeight()){
				return false;
			}
			for(var j=0;j<otherSide.grid[i].length;j++){
				if(this.get(i,j)!==otherSide.get(i,j)){
					return false;
				}
			}
		}
		return true;
	}
}

testData();
console.log("Running Day 18 A:");
day18a(initState);
console.log("Running Day 18 Tests 2");
testData2();
console.log("Running Day 18 B:");
day18b(initState);
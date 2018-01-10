function subRangeFinder(range, priceArray) {
	var down;
	var tempArray;
	for(var i = 0; i <= priceArray.length-range; i++) {
		up = 0;
		down = 0;
		tempArray = priceArray.slice(i, i+range);
		console.log(tempArray);
		for(var x = 0; x < tempArray.length; x++) {
			if(tempArray[x] > tempArray[x+1]) {
				down++;
			} 
			if(tempArray[x] < tempArray[x+1]) {
				up++;
			}
		}
		console.log(combinations(up, down));
	}
}

function fileRetriever(event) {
	var input = event.target;
	var fileReader = new FileReader();

	fileReader.onload = function() {
		var text = fileReader.result;
		text = text.replace(/\r?\n/g, ' ').split(' ').map(function(num) {
			return parseInt(num);
		});
		var windowRange = text[1];
		var averageHomeSalePriceArray = text.slice(2, text.length);
		subRangeFinder(windowRange, averageHomeSalePriceArray);
	};

	fileReader.readAsText(input.files[0]);
}

function combinations(x , y) {
	var tempX = x-1;
	var tempY = y-1;
	while(tempX > 0) {
		x = tempX + x;
		tempX--;
	}
	while(tempY > 0) {
		y = tempY + y;
		tempY--;
	}
	return x - y;
}

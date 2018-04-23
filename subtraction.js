describe('protractor demo App', function () {
	var spec = require('./spec.js');
	const mySpec = new spec();
	
	var selectDropdownbyNum = function (element, optionNum) {   
		var opt = element.all(by.tagName('option')).then(function (opt) {             
			opt[optionNum].click();            
		});
	};

	function subtract(a, b) {
		mySpec.enterFirstNumber(a);
		mySpec.enterSecondNumber(b);
		selectDropdownbyNum(mySpec.getOperator(), 4);
		mySpec.clickGoButton();
	}

	it('should subtract values', function () {
		subtract(4, 2);
		mySpec.getLatestResult().then(console.log);
		expect(mySpec.getLatestResult()).toEqual('2');
	});
});
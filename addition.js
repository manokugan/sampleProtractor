describe('protractor demo App', function () {

	beforeEach(function () {
		browser.get('http://juliemr.github.io/protractor-demo/');
	});
	var spec = require('./spec.js');
	const mySpec = new spec();

	function add(a, b) {
		mySpec.enterFirstNumber(a);
		mySpec.enterSecondNumber(b);
		mySpec.clickGoButton();
	}

	it('should have a title', function () {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});

	it('should have a history', function () {
		add(1, 2);
		mySpec.getLatestResult().then(console.log);
		expect(mySpec.getLatestResult()).toEqual('3');
		add(3, 4);
		expect(mySpec.getCountOfHistory()).toEqual(2);
	});
});
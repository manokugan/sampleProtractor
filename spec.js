
var speci=function(){
	this.firstNumber=element(by.model('first'));
	this.secondNumber=element(by.model('second'));
	this.goButton=element(by.id('gobutton'));
	this.operator=element(by.model('operator'));
	this.latestResult=element(by.binding('latest'));
	this.history=element.all(by.repeater('result in memory'));

	this.enterFirstNumber =function(num){
		this.firstNumber.sendKeys(num);
	};
	this.clickGoButton=function(){
		this.goButton.click();
	}

	this.enterSecondNumber=function(num){
		this.secondNumber.sendKeys(num);
	};
	this.getOperator=function(){
		return this.operator;
	};
	this.getLatestResult=function(){
		return this.latestResult.getText();
	};
	this.getCountOfHistory=function(){
		return this.history.count();
	};
};
 module.exports= speci;
exports.config = {
	framework : 'jasmine',
	seleniumAddress : 'http://localhost:4444/wd/hub',
	suites : {
		sample : [  'addition.js','subtraction.js' ]
	}
}
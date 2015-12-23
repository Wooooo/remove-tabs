const 
	r = require('../'),
	expect = require('chai').expect;

describe('RemoveTabs', function(){
	it('should not have unnecessary tabs.', function(){
		var tests = [
r`			remove
			tabs`,
			
r`			remove
				tabs
					tabs`,
			
r`			${'remove'}
				${'tabs'}
					${'tabs'}`,
					
			r`
			remove
			tabs`,
			
			r`
			remove
				tabs
					tabs`,
					
			r`remove${'\r\n\t'}tabs${'\r\n\t\t'}tabs`, //window newline
			
			r`
			${'remove'}
				${'tabs'}
					${'tabs'}`,
					
		];
		
		var expected = [
			'remove\ntabs',
			'remove\n\ttabs\n\t\ttabs',
			'remove\n\ttabs\n\t\ttabs',
			'remove\ntabs',
			'remove\n\ttabs\n\t\ttabs',
			'remove\n\ttabs\n\t\ttabs',
			'remove\n\ttabs\n\t\ttabs'
		];
		
		for(var i = 0 ; i < tests.length ; i++) {
			expect(tests[i]).to.equal(expected[i]);
			
			
		}
	});
})
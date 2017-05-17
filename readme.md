
## Webpack: Simple Worked Example

Webpack documentation isn't exactly the best. This is a very simple, but functional,
worked example that solves a few things that I found hard to get clear understanding on,
offered in the vague hope that someone might find it useful.

Things this build does:

*	Collect together multiple dependent files to build a standalone `index.html`
	with its dependencies.  
	
	The dependency chain for index.html is:  
	
	`index.html -> production.js` -> `business.js` -> `dependency.js` 
	
	(`production.js` is a build output file derived from `business.js` which in turn uses functionality found in `dependency.js`)  

*	Separate 'test' pipeline that builds `test.html`. The dependency chain for
	this is:  
	`test.html` -> `test.js`  
	`test.js` -> `business.js` -> `dependency.js`  
	`test.html` -> `lib/{jasmine-test-libraries}`   

*	Copy some files as they are from `src` to `dist`  e.g. `index.html` and the test libraries in `lib`

*	Access webpack-built logic from global name space in index.html (note: I've assigned this using `window`, there are webpack plugins that do this more elegantly but the result is the same) 

*	Mock out a dependency so the business logic can be tested in isolation  

Yes, it's all a bit artificial. The point is to represent something close to a real world environment
Where there would be business functionality (`business.js`) that has dependencies (`dependency.js`) that needs to be built for production use into a useable library (`production.js`).  

The `index.html` that uses `production.js` additionally access it from the global (`window`) space, which represents something like a JQuery library where you'd access everything from `$`.

In the test pipeline, we want to mock out `dependency.js` and test `business.js` in isolation. So the build process creates a `test.js` with some simple Jasmine tests. `business.js` and `dependency.js` are imported and then `dependency.js` is mocked out. You can think of this a bit like the typical situation where a dependency accesses a config file on disk (in production) but you want to intercept the call to it from the business logic and force the return of some known test configuration data that can be asserted against.

Although you wouldn't necessarily use the approach in real life, there are two build files: `indexProduction.js` and `indexTest.js`. They are referred to as the inputs from the webpack config file and list the dependencies needed for the build as described above.

### Installation

Grab this repository. Make sure you have node and npm installed.

`npm install` 

Will fetch all the node gubbins for running webpack into `node_modules`

`webpack`

Runs the build process. Cleans the `dist` folder out of all files. Moves `index.html` from `src` to `dist` and builds the `production.js` dependency. Then moves `test.html` from `src` to `dist` and builds `test.js` and copies the Jasmine libraries in `src/lib` to `src/dist`

To run use just open `dist/index.html` in a browser and the word "production" will be displayed. Open `dist/test.html` and the Jasmine tests should run and pass. The source of all files is deliberately straightforward to follow.





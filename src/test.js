
import * as dep from "./dependency"
import {business} from "./business";

describe("Webpack", function() { 

    it("should have the imported dependency", function() { 
        expect(dep).toBeDefined();
    });

    it("should have the business function", function() { 
        expect(business).toBeDefined();
    });

    it("should call dependency from business function", function() { 
    	var spy = spyOn(dep, "dependency");
    	var value = business();
        expect(spy).toHaveBeenCalled();
    });

    it("should work in 'production'", function() { 
    	var value = business();
        expect(value).toEqual("production");
    });

    it("should work in 'test'", function() { 
    	var spy = spyOn(dep, "dependency").and.returnValue("test");
    	var value = business();
        expect(spy).toHaveBeenCalled();
        expect(value).toEqual("test");
    });
});		

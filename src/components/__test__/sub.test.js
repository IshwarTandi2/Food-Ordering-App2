import { TestEnvironment } from "jest-environment-jsdom";
import { sub } from "../../sub";

test("Sub function should be subtract the two numbers",()=>{
  
    const result = sub(10,2);

     //Assertion
    expect(result).toBe(8);
    
})
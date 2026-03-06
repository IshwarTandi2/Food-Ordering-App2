import Contact from "../Contact";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load Heading",()=>{

    // render in jsdom 
    render(<Contact/>);

    //   Quering
    const heading = screen.getByRole("heading");

     //Assertion
    expect(heading).toBeInTheDocument();

})
test("Should load submit button",()=>{

    // render in jsdom 
    render(<Contact/>);

      // Quering
    const button = screen.getByRole("button");

     //Assertion
    expect(button).toBeInTheDocument();

})


test("Should load 2 input box",()=>{

    // render in jsdom 
    render(<Contact/>);

       // Quering
    const inputBoxes = screen.getAllByRole("textbox");

     //Assertion
    expect(inputBoxes.length).toBe(2);

})
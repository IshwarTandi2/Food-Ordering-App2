import Header from "../Header";
import "@testing-library/jest-dom";
import { screen,render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";


test("Should render Header component with Login Button", ()=>{

     //jsdom rendering
     render(<BrowserRouter>
     <Provider store={appStore}>
        <Header/>
     </Provider>
     </BrowserRouter>);
      

      //Quering
      const loginButton = screen.getByRole("button",{name: "Log in"});
       
      //Assertion
      expect(loginButton).toBeInTheDocument();
})


test("Should render Header component with Cart items", ()=>{

     //jsdom rendering
     render(<BrowserRouter>
     <Provider store={appStore}>
        <Header/>
     </Provider>
     </BrowserRouter>);
      

      //Quering
      const cartItem = screen.getByText(/Cart/);
       
      //Assertion
      expect(cartItem).toBeInTheDocument();
})

test("Should render Header component with Login Button", ()=>{

     //jsdom rendering
     render(<BrowserRouter>
     <Provider store={appStore}>
        <Header/>
     </Provider>
     </BrowserRouter>);
      

      //Quering
      const loginButton = screen.getByRole("button",{name: "Log in"});

      //click the login Button
      fireEvent.click(loginButton);

      //now the button become logout
  const logOutButton = screen.getByRole("button",{name: "Log out"});

       
      //Assertion
      expect(logOutButton).toBeInTheDocument();
})
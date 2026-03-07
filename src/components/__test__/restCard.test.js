import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/restCardMockData.json"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"


test("Should render Restaurant card component with restaurant name",()=>{
     //render
     render(<RestaurantCard resData={MOCK_DATA} />);

    //  Quering
     const name = screen.getByText("Pizza Hut");
   
     //assertion
     expect(name).toBeInTheDocument();
})
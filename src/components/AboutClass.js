import React from "react";
import UserClass from "./UserClass";


class AboutClass extends React.Component {
    constructor(props) {
        
        super(props);
    }
  
    render() {
        console.log("Parent render is called");
        return (<div className=" m-2 border-2 border-solid border-black w-[400]">
            {/* <h1>AboutClass Page</h1> */}
            <UserClass location="Goa" />
        </div>)
    }
}

export default AboutClass;
import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        console.log("child constructor is called");
        super(props);
        this.state = {
          info:{
            name:"Akshay",
            location:"Dehradun",
          }
        };
    }

     async componentDidMount(){
      const data = await fetch("https://api.github.com/users/ruvnet");
      const json = await data.json();
      this.setState({
        info: json,
      })
    }


    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
             console.log("componentWiiUnmount");

    }
    render() {

        const { name , location , avatar_url } = this.state.info;
        return (
            <div className="user-card">
                <img className="w-[400] object-cover  p-1.5 rounded-3xl" src={avatar_url}/>
                <h2 className="text-3xl font-medium m-2">Name : {name} </h2>
                <h3 className="text-3xl font-medium m-2">Location: {location}</h3>
                
            </div>)
    }
}

export default UserClass;
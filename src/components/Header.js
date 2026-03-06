import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{
 const[btnName,setbtnName] = useState("Log in");
 

const onlineStatus = useOnlineStatus();
     return(
      
          <div className="header ml-1 flex justify-between border border-solid border-black overflow-y-hiddenhidden">                   
               <div className="logo-container">
              <img className="logo w-40" src={LOGO_URL}/>
               </div>
          
             <div className="nav-items ">
              <ul className="flex  mt-10  pr-20 font-medium text-2xl">
                 <li className=" mx-4 mr-10 cursor-not-allowed">Online Status:{onlineStatus?"✅":"🔴"}</li>
                <li className=" mx-4 mr-10 hover:text-orange-600 "><Link to="/">Home</Link></li>
                <li className=" mx-4 mr-10 hover:text-orange-600"><Link to="/about">About us</Link></li>
                <li className=" mx-4 mr-10 hover:text-orange-600"><Link to="/contact"> Contact us</Link></li>
                <li className=" mx-4 mr-10 hover:text-orange-600"><Link to="/grocery"> Grocery</Link></li>
                <li className=" mx-4 mr-10 hover:text-orange-600 cursor-pointer">Cart</li>
               
                <button className="login-btn hover:text-orange-600" onClick={()=>{
                  btnName === "Log in"?setbtnName("Log out"):setbtnName("Log in") ;                   
                }} >{btnName}</button>

               </ul>

             </div>
          </div>
     )
}

export default Header;
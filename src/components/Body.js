import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer"
import { RES_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
     const [listOfRest, setlistOfRest] = useState([]);
     const [filteredRest, setfilteredRest] = useState([]);
     const [searchValue, setsearchValue] = useState([""]);
     useEffect(() => {
          fetchData();
     }, []
     )
     async function fetchData() {
          const data = await fetch(RES_URL);
          const jsonValue = await data.json();

          //optional chaining
          setlistOfRest(jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setfilteredRest(jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
     }
     // console.log(listOfRest);
     // console.log(listOfRest[0]?.info?.aggregatedDiscountInfoV3?.header);
     
     const onlineStatus = useOnlineStatus();
     if(onlineStatus===false){
          return <h1>Looking like you are offline! Please Check your internet connection</h1>
     }
     if (listOfRest.length === 0) {
          return <Shimmer />;
     }

     // ternary Operator (we can aslo write like this
     // return (listOfRest.length === 0)? 
     // (<Shimmer/>)(<div className="body"> </div>) :
     return (<div className="body">

          <div className="search-top-rest flex ">
               <div className="search-box my-6 ml-3 ">
                    <input type="text" className="search-text pl-3 pr-9 py-0.5 border border-solid border-black rounded-md" value={searchValue} onChange={(e) => {
                         console.log(e);
                         setsearchValue(e.target.value);
                    }}></input>
                    <button className="search-btn border border-solid border-black  mx-6 px-5  bg-gray-50 hover:bg-gray-200 font-medium rounded-md text-lg  " onClick={(e) => {

                         //filter restros
                         const filteredList2 = listOfRest.filter((restr) =>
                              restr.info.name.toLowerCase().includes(searchValue.toLowerCase())
                         )
                         setfilteredRest(filteredList2);
                    }
                    }>Search</button>
               </div>
               <div className="top-rated-rest-btn my-6 ml-3 ">
                    <button className="top-rated-rest  bg-gray-50 hover:bg-gray-200 font-medium rounded-md text-lg  border border-solid border-black px-10 " onClick={() => {
                         const filteredList = listOfRest.filter((restro) =>
                              restro.info.avgRating > 4.4);
                         setfilteredRest(filteredList);
                    }

                    }>
                         Top Rated Restaurants
                    </button>
               </div>
          </div>


          <div className="res-container flex flex-wrap">

               {filteredRest.map((restaurant) =>
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} > 
                    <RestaurantCard resData={restaurant} /></Link>
               )}

               {/* <RestCard resData = {resList[0]} />
               <RestCard resData = {resList[1]} />
               <RestCard resData = {resList[2]} />
               <RestCard resData = {resList[3]} />
               <RestCard resData = {resList[4]} />
               <RestCard resData = {resList[5]} />
               <RestCard resData = {resList[6]} />
               <RestCard resData = {resList[7]} />
               <RestCard resData = {resList[8]} />
               <RestCard resData = {resList[9]} />
               <RestCard resData = {resList[10]} />
               <RestCard resData = {resList[11]} />
               <RestCard resData = {resList[12]} />
               <RestCard resData = {resList[13]} /> */}

          </div>

     </div>)
}
export default Body;
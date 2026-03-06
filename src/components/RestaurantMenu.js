import { useState, useEffect } from "react";
const RestaurantMenu = ()=>{


 useEffect(()=>{
            

  fetchMenu();
 },[]);

 async function fetchMenu(){
    const menuData = await fetch("https://corsproxy.io/?https://www.zomato.com/webroutes/getPage?page_url=/durg-bhilai/cad-m-cad-b-durg/order&location=&isMobile=0");
     
  
     
      
    const jsonVal = await menuData.json();
    // console.log(jsonVal);
    // console.log(jsonVal.page_data.order.menuList.menus[0].menu.categories[0].category.name);
             


}



    return(<div>
       
        <h1 className="text-3xl font-bold m-2 ml-5">Name of Restaurants</h1>
        <h2 className="text-3xl font-medium m-2 ml-10"> Menu </h2>
        <ul className="menu-items list-disc ml-20">
            <li className="text-3xl font-normal m-2" >Pizza</li>
            <li className="text-3xl font-normal m-2" >Burger</li>
            <li className="text-3xl font-normal m-2" >Pasta</li>
            <li className="text-3xl font-normal m-2" >Soup</li>
        </ul>
    </div>)
}

export default RestaurantMenu;
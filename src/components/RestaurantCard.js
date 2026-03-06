
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
 const {resData} = props;
 const {name,cuisines,avgRating,cloudinaryImageId,sla} = resData.info;
 
 
  return(
     <div className="res-card w-[250]   my-5 mx-2  border border-solid  bg-gray-50 hover:bg-gray-200 rounded-xl">        
          <img className="res-image h-[150] w-[300] object-cover  p-1.5 rounded-3xl  " src={CDN_URL + cloudinaryImageId}>
          </img>
          <h3 className="text-2xl font-medium px-3 py-2">{name}</h3>
          <h4 className="text-xl font-normal px-3">{cuisines.join(", ")}</h4>
          <h4 className="text-xl font-medium px-3 py-2 flex">{avgRating}  <img className="w-8 px-1"src="https://media.lordicon.com/icons/wired/lineal/237-star-rating.svg"></img> </h4>
          <h4 className="text-xl font-medium px-3 pb-7">{sla.slaString} </h4>
     </div>
  )
}
        //HOC
    //input - RestCard
    //ouput - RestCard with promoted label on top
// const withpromotedLabel = (RestaurantCard)=>{
//   return(props)=>{
//    return(<div>
//       <label>Promoted</label>
//       <RestaurantCard {.props}/>
//    </div>)
//   }
// }

export default RestaurantCard;
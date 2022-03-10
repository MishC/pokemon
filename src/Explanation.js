import React from "react";
import 'Explanation.css';

export default function Explanation(props) {

const hiddenContent = (Desc) => {
         setUrl(ability.ability.url)

         Desc.className === "Desc_off" ? Desc.className = "Desc_on": Desc.className = "Desc_off"
       };
  if (props.abilities) { return(
   {
     props.abilities.map((ability, index) => {

       // let url = ability.ability.url;

       return (
         <div>
           <p key={index} onClick={hiddenContent() }>
             {ability.ability.name}
           </p>
           <span  className="Desc_off" > </span>
         </div>
       );
     })
   })
  } else {
    return null;
  }
}

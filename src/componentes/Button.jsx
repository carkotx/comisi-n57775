import { useEffect, useState } from "react"


function Button() {
// estado
const [estado, setEstado] = useState(false)
 
//useEffect(function [, array])
//console.log("soy un efecto")

// el hook useEffect no se repite si tiene el array vacio []
/*useEffect(() =>{ */
// console.log("hago un fetch a una db")
 /*},[])*/


  // ACCIONES
   const hacerClick = () => {
     setEstado(!estado)
   }
   
   //VISTA 
   if (estado == false) {
    return (
      <div>
         <button onClick={hacerClick} className="btn" >toggle</button> 
      </div>
    )
   }

  
  //popup es algo que te aparece en la pantalla y se cierra
  return (
    <div>
      <button onClick={hacerClick} className="btn" >toggle</button> 
      <div className="p-4 text-black bg-white rounded-sm">
        soy un popup
      </div>
    </div>
  )
}

export default Button
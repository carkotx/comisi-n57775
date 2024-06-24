import { useEffect, useState } from "react";
import Productos from "./Productos"

function ProductosContainer() {

  //estados :

  const [productos, setProductos] = useState([])
  const [pagina, setPagina] = useState(1)
  //const [cargando, setCargando] = useState(true)

  //const [estado, setEstado] = useState() 

  //accioness
  
  useEffect(() => {

    /*
    console.log("pedido a una api...")
    console.log("URL: https://dummyjson.com/products")
    console.log("Pagina :" + pagina)
    console.log("-------------------------------------------")
   */

  fetch('https://dummyjson.com/products')
     .then((res) => { 
      return res.json()
    })
     .then((data) => {
     /* console.log(data.products)*/
      setProductos(data.Products)

      //setEstado(data.products)
      //set cargando(false)
    }); 
    

  }, [pagina])

  //acciones 
  const cambiarPaginaUno = ()  => {
    setPagina (1)
  }

   const cambiarPaginaDos = ()  => {
    setPagina (2)
  }

   const cambiarPaginaTres = ()  => {
    setPagina (3)
  }
   
    
    //vista 
    // juego de logica
  return (
    <div>
      <button onClick={cambiarPaginaUno}>pagina1</button>
      <button onClick={cambiarPaginaDos}>pagina2</button>
      <button onClick={cambiarPaginaTres}>pagina3</button>
       <Productos productos ={productos} />
    </div>
     )
}

export default ProductosContainer

/*
paso a paso de la ejecucio

  1) se ejecuta el componente ProductosContainer por primera vez
  2
*/ 
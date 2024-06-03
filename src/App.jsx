import Header from "./componentes/Header.jsx";
import Main from "./componentes/Main.jsx";
import Footer from "./componentes/Footer.jsx";
/* App es un componente, es una funcion que va 
a contener muchos elementos
componentes:

-son funciones
- van en mayusculas (por el complilador
- si o si teienen que tener retorno (return)
 -solo se puede retornar un solo elemento, una 
 sola etiqueta */

 /*tipos de componentes:
 - Estructurales: son lo que representan una plantilla 
 general o un bloque generico del sitio/aplicacion 

 - Funcionales: Son los que representan una funcionalidad
 especifica o un bloque de contenido especifico



 */

 //https://github.com/comisiones-coderhouse/comision_57775

function App (){

  //const titulo = document.createElement("h1")
  //titulo.textContent = "Hola Mundo desde un p"
  //titulo.id = "titulo"
  //titulo.className = "titulo"
  //return <h1 id="titulo" className="titulo">Hola Mundo desde un p</h1>
  //Header()
  //<Header/>
  
  //return <h1 id="titulo" className="titulo">Hola mundo!</h1>//<Header/>}

return (
 <>
   <Header/>
   <Main/>
   <Footer/>
   
 </>)
}
//App(), return y etiquetas <> es un componente
export default App;

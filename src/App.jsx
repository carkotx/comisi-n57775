import Header from "./Header.jsx"

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
   <main>
    <h2>Home</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Pariatur blanditiis praesentium quas, similique
      voluptate dolorem nesciunt totam earum libero a hic
      ad ratione illo. Illum accusantium iste placeat! 
      Suscipit, quaerat.</p>
   </main>
   <footer>
    <p>Copyright &copy; - Carlos Rangel </p>
   </footer>
 </>)
}
//App(), return y etiquetas <> es un componente
export default App;

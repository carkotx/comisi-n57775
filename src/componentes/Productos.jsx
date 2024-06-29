// eslint-disable-next-line react/prop-types
function Productos({ productos }) {

 /* productos.map(()=>{
 console.log("productos")
  })*/
  

/* Array de articulos, cuando hagamos un map tiene si o si que llevar 
o retornar un identificador...ejemplo: key={indice}, es como un ID para
html pero para react */ 
  return (
    <section className= "grid grid-cols-1 gap-8 sm:grid-cols-3 md grid-cols-4 lg:grid-cols-5  xl:grid-cols-6" >
      { productos.map((producto, indice)=>{
        console.log(producto)
        return(
          <article key={indice} className="text text-black bg-white p-4 rounded-md shadow-xl">
            <h2>{producto.title}</h2>
            <p>${producto.price}</p>
            <img src={producto.images[0]} alt={producto.title} />
          </article>
        )
      })}
    </section>
  )
}

export default Productos
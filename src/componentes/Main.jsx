import Button from "./Button";

import ProductosContainer from "./ProductosContainer";

function Main (){
    return(
     <main className="p-4  bg-[rgba(255,255,255,0.3)] grow">
          <h2>Home</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing
         elit. Pariatur blanditiis praesentium quas, similique
         voluptate dolorem nesciunt totam earum libero a hic
         ad ratione illo. Illum accusantium iste placeat! 
         Suscipit, quaerat.</p>
         <Button texto="ver mas"/>

     
        { <ProductosContainer/> }
     </main>


    )
}

export default Main; 
function NavBar(props) {

  console.log(props)

  if (props.isHeader){
    return (   
       <nav className="flex gap-4">
         <a href="#">home</a>
         <a href="#">productos</a>
         <a href="#">contactos</a>
       </nav>
       
    )
 } else {
    return (
       <nav className="flex justify-center gap-4 text-xs">
         <a href="#">terminos y condiciones</a>
         <a href="#">F.A.Q</a>
         <a href="#">contactos</a>
       </nav>
    )
  }
}


export default NavBar;
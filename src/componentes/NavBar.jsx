function NavBar(props) {

  if (props.isHeader ==true){
    return (   
       <nav>
         <a href="#">home</a>
         <a href="#">productos</a>
         <a href="#">contactos</a>
       </nav>
    )
 } else {
    return (
       <nav>
         <a href="#">terminos y condiciones</a>
         <a href="#">F.A.Q</a>
         <a href="#">contactos</a>
       </nav>
    )
  }
}

export default NavBar;
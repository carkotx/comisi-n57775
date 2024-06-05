import NavBar from "./componentes/NavBar/NavBar.jsx"
import CartWidget from "./componentes/NavBar/CartWidget.jsx";
function Header(){
    return (
     <header>
       <h1>Titulo</h1>
       <CartWidget/>
       <NavBar isHeader={true} />
     </header>
  )
}

export default Header;
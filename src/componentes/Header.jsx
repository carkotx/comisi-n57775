import NavBar from "./NavBar/NavBar.jsx"
import CartWidget from "./NavBar/CartWidget.jsx";
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
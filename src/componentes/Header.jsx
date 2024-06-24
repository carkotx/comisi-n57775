import NavBar from "./NavBar/NavBar.jsx"
import CartWidget from "./NavBar/CartWidget.jsx";
function Header(){
    return (
     <header className="flex justify-between p-4">
       <h1 className="text-2xl font-bold">Titulo</h1>
       <CartWidget/>
       <NavBar isHeader={true} />
     </header>
  )
}

export default Header;
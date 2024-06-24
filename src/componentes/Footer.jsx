import NavBar from "./NavBar/NavBar.jsx"

function Footer(){
    return (
     <footer className="p-4 text-center">
       <p className="text-xs">Copyright &copy; - Carlos Rangel </p>
       <NavBar isHeader={false} />
     </footer>
   )
}

export default Footer;

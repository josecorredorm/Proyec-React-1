import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MiApi from './Components/MiApi/MiApi';
import { useState } from 'react';
import NavbarApp from './Components/NavBar/Navbar';
import Buscador from './Components/Buscador/Buscador';
import Footer from './Components/Footer/Footer';
function App() {
const [Info, setInfo] = useState([]);
const [Search, setSearch] = useState("")

  return (
    <>
    <NavbarApp />
    <Buscador
    Search={Search}
    setSearch={setSearch} />
    <MiApi
    Info={Info}
    setInfo={setInfo}
    Search={Search} />
    <Footer />
    </>
  )
}

export default App

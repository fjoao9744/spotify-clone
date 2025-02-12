import Header from "./components/Header"
import Main from "./components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Artists from "./pages/Artists"
import Artist from "./pages/Artist"
import Song from "./pages/Song"
import Songs from "./pages/songs"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/artists" element={<Artists/>} />
        <Route path="/artist/:id" element={<Artist/>} />
        <Route path="/songs" element={<Songs/>} />
        <Route path="/song/:id" element={<Song/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { contentContext } from "./components/Context"
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  const [content, setContent] = useState("")

  function listenOutClick(e) {
    const sidebar = document.querySelector(".main-sidebar")
    if(sidebar.contains(e.target)) {
      sidebar.style.left = 0
    } else {
      sidebar.style.left = "-500px"
    }
  }

  return (
    <contentContext.Provider value={{setContent}}>
      <div onClick={(e) => listenOutClick(e)}>
          <Header />
          <SideBar />
          <MainContent content={content} />
          <Footer />
      </div>
    </contentContext.Provider>
  )
}

export default App

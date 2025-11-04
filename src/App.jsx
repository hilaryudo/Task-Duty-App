import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import AllTasks from "./pages/AllTasks"
import NewTask from "./pages/NewTask"
import ErrorPage from "./pages/ErrorPage"
import Navbar from "./layout/Navbar"

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all-tasks" element={<AllTasks/>}/>
        <Route path="/new-task" element={<NewTask/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

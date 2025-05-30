import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FilmsPage from "./pages/Films"
import DefaultLayout from "./layout/DefaultLayout"
import FilmsDetailsPage from "./pages/FilmDetails"
import FilmAdd from "./pages/FilmAdd"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/films' element={<FilmsPage />} />
          <Route path='/films/:id' element={<FilmsDetailsPage />} />
          <Route path='/films/new' element={<FilmAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

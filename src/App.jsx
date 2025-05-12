import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FilmsPage from "./pages/Films"
import DefaultLayout from "./layout/DefaultLayout"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/films' element={<FilmsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

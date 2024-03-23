import { Route, Routes } from "react-router-dom"
import Header from "./components/Layout/Header"
import Subheader from "./components/Layout/Subheader"
import Products from "./components/Products/Products"
import NotFound from "./components/UI/NotFound"

const App = () => {
  return (
    <div>
      <Header />
      <Subheader />
      <Routes>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/:category?" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App

import { useState } from "react"
import Header from "./components/Layout/Header"
import Subheader from "./components/Layout/Subheader"
import Products from "./components/Products/Products"

const App = () => {
  const [countItems, setCountItems] = useState(0)

  const handleAddItem = () => {
    setCountItems((prevItems) => prevItems + 1)
  }
  const handleRemoveItem = () => {
    setCountItems((prevItems) => prevItems - 1)
  }

  return (
    <div>
      <Header count={countItems} />
      <Subheader />
      <Products handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} />
    </div>
  )
}

export default App

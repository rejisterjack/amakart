import { useState } from "react"
import Header from "./components/Layout/Header"
import Subheader from "./components/Layout/Subheader"
import Products from "./components/Products/Products"

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [eventQueue, setEventQueue] = useState({
    id: "",
    type: "",
  })

  const handleEventQueue = (id, type) => {
    console.log({id, type})
    setEventQueue({ id, type })
  }

  const handleAddItem = (item) => {
    const items = [...cartItems]
    const index = items.findIndex((i) => i.id === item.id)
    if (index > -1) {
      items[index] = item
    } else {
      items.push(item)
    }
    setCartItems([...items])
  }
  const handleRemoveItem = (item) => {
    const items = [...cartItems]
    const index = items.findIndex((i) => i.id === item.id)
    if (items[index].quantity === 0) {
      items.splice(index, 1)
    } else {
      items[index] = item
    }
    setCartItems([...items])
  }

  return (
    <div>
      <Header count={cartItems.length} items={cartItems} handleEventQueue={handleEventQueue} />
      <Subheader />
      <Products
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        eventQueue={eventQueue}
      />
    </div>
  )
}

export default App

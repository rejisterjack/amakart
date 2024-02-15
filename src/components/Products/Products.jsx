import { useEffect, useState } from "react"
import PropTypes from "prop-types"
// import Data from "../../../public/data/products.json"
import ListItem from "./ListItems/ListItem"
import axios from "axios"
import Loader from "../UI/Loader"

const Products = ({ handleAddItem, handleRemoveItem, eventQueue }) => {
  const [items, setItems] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios
          .get(`${import.meta.env.VITE_BASE_URL}/items.json`)
          .then((res) => res.data)
        setItems(
          response.map((item, index) => ({ ...item, id: index, quantity: 0 }))
        )
        setLoader(false)
      } catch (error) {
        console.log(error)
        setLoader(false)
      } finally {
        setLoader(false)
      }
    }
    fetchItems()
  }, [])

  useEffect(() => {
    if (eventQueue.id > -1) {
      if (eventQueue.type === 1) {
        addItem(eventQueue.id)
      } else if (eventQueue.type === -1) {
        removeItem(eventQueue.id)
      }
    }
  }, [eventQueue])

  const addItem = (id) => {
    const data = [...items]
    const index = data.findIndex((item) => item.id === id)
    data[index].quantity += 1
    setItems([...data])
    handleAddItem(data[index])
  }
  const removeItem = (id) => {
    const data = [...items]
    const index = data.findIndex((item) => item.id === id)
    if (data[index].quantity !== 0) {
      data[index].quantity -= 1
      setItems([...data])
      handleRemoveItem(data[index])
    }
  }

  const handleTitleUpdate = async (itemId) => {
    try {
      const title = `Title updated # ${itemId}`
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/items/${itemId}.json`,
        { title: title }
      )
      const data = [...items]
      const index = data.findIndex((item) => item.id === itemId)
      data[index].title = title
      setItems(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="product-list">
        <div className="product-list--wrapper">
          {items.map((item, index) => (
            <ListItem
              key={index}
              data={item}
              addItem={addItem}
              removeItem={removeItem}
              handleTitleUpdate={handleTitleUpdate}
            />
          ))}
        </div>
      </div>

      {loader && <Loader />}
    </>
  )
}

Products.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
}

export default Products

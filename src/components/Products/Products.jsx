import { useEffect, useState } from "react"
// import Data from "../../../public/data/products.json"
import ListItem from "./ListItems/ListItem"
import axios from "axios"
import Loader from "../UI/Loader"

const Products = ({ handleAddItem, handleRemoveItem }) => {
  const [items, setItems] = useState([])
  const [loader, setLoader] = useState(true)
  const [presentItems, setPresentItems] = useState([])

  const addItem = (id) => {
    if (presentItems.indexOf(id) > -1) {
      return
    }
    setPresentItems([...presentItems, id])
    handleAddItem()
  }
  const removeItem = (id) => {
    let index = presentItems.indexOf(id)
    if (index > -1) {
      let items = [...presentItems]
      items.splice(index, 1)
      setPresentItems([...items])
      handleRemoveItem()
    }
  }

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios
          .get(`${import.meta.env.VITE_BASE_URL}/items.json`)
          .then((res) => res.data)
        setItems(response.map((item, index) => ({ ...item, id: index })))
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

export default Products

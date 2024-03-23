import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
import axios from "axios"
import Loader from "../UI/Loader"
import { useNavigate, useParams, useLocation } from "react-router-dom"

const Products = () => {
  const [items, setItems] = useState([])
  const [loader, setLoader] = useState(true)
  const params = useParams()
  const navigate = useNavigate()
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search).get("search")

  useEffect(() => {
    async function fetchItems() {
      try {
        let slug = `items.json`
        if (params.category) {
          slug = `items-${params.category}.json`
        }
        if (queryParams) {
          slug += `?search=${queryParams}`
        }
        const response = await axios
          .get(`${import.meta.env.VITE_BASE_URL}/${slug}`)
          .then((res) => res.data)

        if (!response) {
          navigate("/not-found")
          return
        }

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
    return () => {
      setItems([])
      setLoader(true)
    }
  }, [params.category, navigate, queryParams])

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

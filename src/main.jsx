import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.scss"
import { Provider } from "react-redux"
import { store } from "./store/index.jsx"
// import ReactElements from './ReactElements.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <ReactElements /> */}
    <App />
  </Provider>
)

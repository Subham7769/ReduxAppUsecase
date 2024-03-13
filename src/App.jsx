import CounterApp from "./Components/CounterApp/CounterApp"
import Store from "./Redux/Store"
import { Provider } from "react-redux"
function App() {
  return (
    <Provider store={Store}>
      <CounterApp/>
    </Provider>
  )
}

export default App

import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"

function App() {

  return (
    <div className="main bg-black text-white " >
        <Page1 />
        <Page2 />
        <div className=" w-full h-screen bg-purple-800 " ></div>
        <div className=" w-full h-screen bg-orange-600 " ></div>
    </div>
  )
}

export default App

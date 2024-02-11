import { useState } from "react"
import Navbar from "./componens/Navbar"
import NewsBoard from "./componens/NewsBoard"

function App() {
  const [category,setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}
 
export default App

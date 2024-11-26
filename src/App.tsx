import { Route, Routes } from "react-router-dom"
import Hello from "./component/Hello"
import Grid from "./component/Grid"

export default function App() {
  
  
  
  return (
    <Routes>
      <Route index element={<Hello />} />
      <Route path="/todo" element={<Grid/>} />
    </Routes>
    
  )
}

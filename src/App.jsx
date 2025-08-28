import { BrowserRouter, Route, Routes } from "react-router-dom";
import GarantApp from "./components/page";

function App() {
  return (
 <BrowserRouter>
<Routes>
<Route path="/" element={<GarantApp/>} />

</Routes>
  </BrowserRouter>
  )
  }

export default App;



import Main from "./compnonets/Interview_page";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Update from "./compnonets/Update";
import Interview_list from "./compnonets/Interview_list";
function App() {
  return(
    <div className="app">

     <BrowserRouter >
     <Routes>
     <Route path="/" element={<Interview_list/>}/>
     <Route path="/main" element={<Main/>}/>
      <Route path="/update" element={<Update/>}/>
     </Routes>

     </BrowserRouter>
     
    </div>
  )
}

export default App;

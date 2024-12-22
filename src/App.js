import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home.jsx";
import Auth from "./views/Auth.jsx";

function App() {

  return (
    <BrowserRouter>
     <div className={`flex min-h-screen w-full bg-[#FAFAFA]`}>
         <Routes>
             <Route path={'/'} Component={Auth} />
             <Route path={'/dashboard'} Component={Home} />
         </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
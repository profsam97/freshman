import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom"
import Loader from "./Components/UI/Loading";


function App() {
  const Home = React.lazy(()=> import('./Components/Main')); 
  return (
    <Suspense fallback={<Loader/>}>   
     <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>  
    </Suspense>
  )
}

export default App

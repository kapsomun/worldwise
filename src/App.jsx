import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading]= useState(false)

  useEffect(()=> {
    async function fetchCities () {
      const res = await fetch('http://localhost:8000/cities')
      const cities = await res.json()
      console.log(cities);
      setCities(cities)
    }
    fetchCities ()

  }, [])


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="app" element={<AppLayout/>} > 
            <Route index element={<CountryList />}/>
            <Route path="cities" element={<CityList cities={cities} />}/>
            <Route path="countries" element={<CountryList />}/>
            <Route path="form" element={<Form />}/>
          </Route>
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;

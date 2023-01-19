import { BrowserRouter, Route, Routes } from "react-router-dom";
import CosmicKitchen from "./CosmicKitchen";
import Home from "./Home";
import PawFinder from "./PawFinder";
import TlayoasCocina from "./TlayoasCocina";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/cosmic-kitchen'} element={<CosmicKitchen />} />
        <Route path={'/paw-finder'} element={<PawFinder />} />
        <Route path={'/tlayoas-cocina'} element={<TlayoasCocina />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;

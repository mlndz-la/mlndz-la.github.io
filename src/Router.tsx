import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Contact } from "./Contact";
import { CosmicKitchen } from "./CosmicKitchen";
import { Home } from "./Home";
import { PawFinder } from "./PawFinder";
import { Resume } from "./Resume";
import { TlayoasCocina } from "./TlayoasCocina";
import { Work } from "./Work";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/resume'} element={<Resume />} />
        <Route path={'/work'} element={<Work />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/cosmic-kitchen'} element={<CosmicKitchen />} />
        <Route path={'/paw-finder'} element={<PawFinder />} />
        <Route path={'/tlayoas-cocina'} element={<TlayoasCocina />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} />
        <Route path={'/cosmic-kitchen'} />
        <Route path={'/paw-finder'} />
        <Route path={'/tlayoas-cocina'} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;

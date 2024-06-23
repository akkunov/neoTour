import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Hero from "./pages/hero.jsx";

import DetailTour from "./pages/detailTour.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'}>
      <Route  path={'/'} index element={<Hero />}/>
      <Route  path={'/:id'} index element={<DetailTour />}/>
    </Route>
));


function App() {
  return <RouterProvider router={router} />
}

export default App

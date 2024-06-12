import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Hero from "./pages/hero.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'}>
      <Route  path={'/'} index element={<Hero />}/>
    </Route>
));


function App() {

  return <RouterProvider router={router} />
}

export default App

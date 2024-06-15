import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Hero from "./pages/hero.jsx";
import {useEffect} from "react";
import {useActions} from "./hooks/useActions.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'}>
      <Route  path={'/'} index element={<Hero />}/>
    </Route>
));


function App() {
  const   {fetchAllTours} = useActions()
    useEffect(() => {
        fetchAllTours();
    },[])

  return <RouterProvider router={router} />
}

export default App

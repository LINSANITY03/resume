import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./layouts/index"

// Router singleton created
const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

// RouterProvider added
function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home />
        } />
    </Routes>
  );
}

export default App;

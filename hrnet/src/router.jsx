import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const CreateEmployee = lazy(
  () => import("./pages/CreateEmployee/CreateEmployee")
);
const CurrentEmployees = lazy(
  () => import("./pages/CurrentEmployees/CurrentEmployees")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const AppRouter = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <CreateEmployee /> },
    { path: "/employees", element: <CurrentEmployees /> },
    { path: "/not-found", element: <NotFound /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRouter;

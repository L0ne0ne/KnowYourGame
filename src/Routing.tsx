import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./pages/Layout";
import { GameDetailPage } from "./pages/GameDetailPage";
import { ErrorPage } from "./pages/ErrorPage";
import { SearchPage } from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "games/:slug",
        element: <GameDetailPage />,
      },
      { path: "/search", element: <SearchPage /> },
    ],
  },
]);

export default router;

import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Shop from "../pages/Shop";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "shop", element: <Shop /> },
        ],
    },
];

export default routes;
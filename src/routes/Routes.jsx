import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/shop", element: <Shop /> },
            { path: "*", element: <ErrorPage /> }, // All uknown paths will display nested error page
        ]
    },
];


export default routes;
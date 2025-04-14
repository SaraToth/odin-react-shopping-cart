import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <>
        <p>There was a network issue:</p>
        <Link to="/">Return to the main page</Link>
        </>
    )
};

export default ErrorPage;
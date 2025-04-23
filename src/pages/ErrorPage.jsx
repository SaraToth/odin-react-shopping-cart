import styles from "./ErrorPage.module.css";

/**
 * ErrorPage Component - loads an error message whenever user encounters a network issue
 * 
 * @returns {JSX.Element} Renders an error message to the UI
 */
const ErrorPage = () => {
    
    return (
        <section className={styles.section}>
            <h1 className={styles.header}>Something went wrong</h1>
        </section>
    )
};

export default ErrorPage;
import styles from "./ErrorPage.module.css";

/**
 * Renders an error message
 * 
 * @returns {JSX.Element}
 */
const ErrorPage = () => {
    
    return (
        <section className={styles.section}>
            <h1 className={styles.header}>Something went wrong</h1>
        </section>
    )
};

export default ErrorPage;
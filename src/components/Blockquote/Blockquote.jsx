import styles from "./Blockquote.module.scss";

const Blockquote = ({ quote }) => {
    return (
        <section className={styles.blockquote}>
            <q>{quote}</q>
        </section>
    );
}

export default Blockquote;
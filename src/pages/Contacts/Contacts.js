import styles from "./Contacts.module.scss";
import classNames from "classnames";

const Contacts = () => {
    return (
        <main className={styles.contacts}>
            <div className="container">
                <div className={styles["contacts__content"]}>
                    <h1 className={classNames("title-2", styles["contacts__title"])}>Мои контакты</h1>
                    {/* <p className={ styles["contacts__text"] }>
                        Want to know more or just chat?<br/> 
                        You are welcome!
                    </p> */}
                    {/* <button>Send messages</button> */}
                    {/* <div className={ styles["btn-wrap"]}>
                        <SecondaryBtn text="Send messages"/>
                    </div> */}
                    <ul className={styles["content-list"]}>
                        <li className={styles["content-list__item"]}>
                            <h2 className={styles["item__title"]}>Location</h2>
                            <p>Moscow, Russia</p>
                        </li>
                        <li className={styles["content-list__item"]}>
                            <h2 className={styles["item__title"]}>Telegram / WhatsApp</h2>
                            <p>
                                <a href="tel:+79636028252">+7 (963) 602-82-52</a>
                            </p>
                        </li>
                        <li className={styles["content-list__item"]}>
                            <h2 className={styles["item__title"]}>Email</h2>
                            <p>
                                <a href="mailto:SvetlanaLisinaMail@yandex.ru">
                                    SvetlanaLisinaMail@yandex.ru
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Contacts;
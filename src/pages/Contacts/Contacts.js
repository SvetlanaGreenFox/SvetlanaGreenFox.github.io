import styles from "./Contacts.module.scss";
import classNames from "classnames";

import SecondaryBtn from "../../components/SecondaryBtn/SecondaryBtn";

const Contacts = () => {
    return ( 
        <main className={ styles.contacts }>
            <div className={ styles.container }>
                <div className={ styles["contacts__content"] }>
                    <h1 className={classNames(styles["title-2"], styles["contacts__title"])}>Contacts</h1>
                    <p className={ styles["contacts__text"] }>
                        Want to know more or just chat?<br/> 
                        You are welcome!
                    </p>
                    {/* <button>Send messages</button> */}
                    <div className={ styles["btn-wrap"]}>
                        <SecondaryBtn text="Send messages"/>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Contacts;
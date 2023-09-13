import styles from "./About.module.scss";
import classNames from "classnames";

const About = () => {
    return ( 
        <main className={ styles.about }>
            <div className={ styles.container }>
                <div className={ styles["about__content"] }>
                    <h1 className={classNames(styles["title-2"], styles["about__title"])}>About Me</h1>
                    <div className={ styles.about__description }>
                        <div className={ styles["description-item"] }>
                            <p>Привет!
                                Меня зовут Света. Я начинающий Frontend-разработчик.
                                <br />
                                Я решила сменить профессию несколько лет назад. 
                                За это время успела пройти обучение и получила новую специальность.
                                <br />
                                В новую профессию меня привела возможность создавать красивые и удобные сервисы.
                                Работа над продуктом, который приносит пользу - это большая ценность.

                                В сферу моих интересов входит спорт. Я веду активный образ жизни.
                                Люблю бег, йогу, воркаут площадки и каратэ.
                                Тренировки позволяют мне поддерживать высокий уровень энергии и дисциплины. 
                            </p>
                        </div>
                        <div className={ styles["description-item"] }>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default About;
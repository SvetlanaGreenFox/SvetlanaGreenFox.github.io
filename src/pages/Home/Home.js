import styles from "./Home.module.scss";
import className from "classnames";
import { Link } from "react-router-dom";

import MainBtn from "../../components/MainBtn/MainBtn";

import points from "./assets/points_group.png";
import point from "./assets/point.svg";
import ellipse_1 from "./assets/ellipses-group/ellipse_1.svg";
import ellipse_2 from "./assets/ellipses-group/ellipse_2.svg";
import ellipse_3 from "./assets/ellipses-group/ellipse_3.svg";
import ellipse_4 from "./assets/ellipses-group/ellipse_4.svg";
import ellipse_5 from "./assets/ellipses-group/ellipse_5.svg";
import ellipse_6 from "./assets/ellipses-group/ellipse_6.svg";
import ellipse_7 from "./assets/ellipses-group/ellipse_7.svg";

const Home = () => {
    return ( 
        <main className={ styles.home }>
            <div className={ styles.container }>
                <div className={ styles["main__content"] }>
                    <div className={ className(styles["content__item"], styles["left-item"]) }>
                        <img className={className(styles.design, styles["design__points"])} src={points} alt="design"/>
                        <img className={className(styles.design, styles["design__ellipse-2"])} src={ellipse_2} alt="design"/>
                        {/* <div>Photo Place</div> */}
                        <img className={className(styles.design, styles["design__ellipse-3"])} src={ellipse_3} alt="design"/>
                        <img className={className(styles.design, styles["design__ellipse-1"])} src={ellipse_1} alt="design"/>
                    </div>
                    <div className={ className(styles["content__item"], styles["right-item"])}>
                        <div className={ styles["main__description"]}>
                            <img className={className(styles.design, styles["design__ellipse-7"])} src={ellipse_7} alt="design"/>
                            <img className={className(styles.design, styles["design__ellipse-5"])} src={ellipse_5} alt="design"/>
                            
                            <p className={ styles["main__subtitle"] }>I’m a frontend developer</p>
                            <h1 className={ className(styles["main__title"], styles["title-1"]) }>Hey everyone <br /> i am Svetlana </h1>
                            <p>Freelance Web & Mobile  UI/UX Designer & Love to play video game</p>
                            <img className={className(styles.design, styles["design__ellipse-4"])} src={ellipse_4} alt="design"/>
                        </div>
                        <div className={ styles["main__btn-wrap"]}>
                            <Link to="/about">
                                <MainBtn text="Learn about me" />
                            </Link>
                            <img className={className(styles.design, styles["design__point"])} src={point} alt="design"/>
                        </div>
                    </div>
                    <div className={styles["points-group"]}>
                        <img src={points} alt="design"/>
                        <img src={points} alt="design"/>
                    </div>
                    <img className={className(styles.design, styles["design__ellipse-6"])} src={ellipse_6} alt="design"/>
                </div>
            </div>
        </main>
     );
}
 
export default Home;
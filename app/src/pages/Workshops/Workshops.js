import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import WorkshopsCSS from "./Workshops.module.css";
import ScoshIMG from "./SCOSH 2020.png";
import tuttoRicco from "./Tutto Ricco Red Sitting On Floor.jpg";

export default function Workshops() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const history = useHistory();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div
                className={WorkshopsCSS.threeline}
                style={{
                    clipPath: isMenuOpen ? "circle(150% at 95% 6vw)" : "",
                    transition: "1s",
                }}
            >
                <ul>
                    <li
                        className={WorkshopsCSS.mag}
                        onClick={() => history.push("")}
                    >
                        Magazine
                    </li>
                    <li
                        className={WorkshopsCSS.blo}
                        onClick={() => history.push("/blogs")}
                    >
                        Blogs
                    </li>
                    <li
                        className={WorkshopsCSS.eve}
                        onClick={() => history.push("/events")}
                    >
                        Events
                    </li>
                    <li
                        className={WorkshopsCSS.work}
                        onClick={() => history.push("/workshops")}
                    >
                        Workshops
                    </li>
                </ul>
            </div>

            <nav className={WorkshopsCSS.navigation}>
                <div className={WorkshopsCSS.logo}>
                    <img src={ScoshIMG} alt="" />
                </div>
                <div className={WorkshopsCSS.right}>
                    <Link to="/">About</Link>
                    <Link href="#">Teams</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="#" onClick={toggleMenu}>
                        <div
                            className={
                                isMenuOpen
                                    ? WorkshopsCSS.activeToggle
                                    : WorkshopsCSS.toggle
                            }
                        ></div>
                    </Link>
                </div>
            </nav>

            <div className={WorkshopsCSS.main}>
                <div className="heading">Workshops</div>
            </div>
            <div className={WorkshopsCSS.homeArticle}>
                <div className={WorkshopsCSS.homeArticleImg}>
                    <img src={tuttoRicco} alt="article" />
                </div>
                <div className={WorkshopsCSS.homeArticleContent}>
                    <h1>Workshops</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae quidem quo delectus accusantium fugit
                        assumenda, non, dolorem quos aliquam aperiam culpa,
                        nostrum vero est? Harum adipisci in veritatis facilis
                        quis odit tempore ex deleniti! Labore necessitatibus
                        dolorem aspernatur reprehenderit beatae?Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit.
                        Necessitatibus porro sapiente quidem esse corporis aut
                        voluptas eveniet, placeat excepturi perferendis?
                    </p>

                    <button className={WorkshopsCSS.btn1}>Register</button>
                    <button className={WorkshopsCSS.btn2}>Learn More</button>
                </div>
            </div>
            <div className={WorkshopsCSS.homeArticle}>
                <div className={WorkshopsCSS.homeArticleImg}>
                    <img src={tuttoRicco} alt="article" />
                </div>
                <div className={WorkshopsCSS.homeArticleContent}>
                    <h1>Workshops</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae quidem quo delectus accusantium fugit
                        assumenda, non, dolorem quos aliquam aperiam culpa,
                        nostrum vero est? Harum adipisci in veritatis facilis
                        quis odit tempore ex deleniti! Labore necessitatibus
                        dolorem aspernatur reprehenderit beatae?Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit.
                        Necessitatibus porro sapiente quidem esse corporis aut
                        voluptas eveniet, placeat excepturi perferendis?
                    </p>

                    <button className={WorkshopsCSS.btn1}>Register</button>
                    <button className={WorkshopsCSS.btn2}>Learn More</button>
                </div>
            </div>
            <div className={WorkshopsCSS.homeArticle}>
                <div className={WorkshopsCSS.homeArticleImg}>
                    <img src={tuttoRicco} alt="article" />
                </div>
                <div className={WorkshopsCSS.homeArticleContent}>
                    <h1>Workshops</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae quidem quo delectus accusantium fugit
                        assumenda, non, dolorem quos aliquam aperiam culpa,
                        nostrum vero est? Harum adipisci in veritatis facilis
                        quis odit tempore ex deleniti! Labore necessitatibus
                        dolorem aspernatur reprehenderit beatae?Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit.
                        Necessitatibus porro sapiente quidem esse corporis aut
                        voluptas eveniet, placeat excepturi perferendis?
                    </p>

                    <button className={WorkshopsCSS.btn1}>Register</button>
                    <button className={WorkshopsCSS.btn2}>Learn More</button>
                </div>
            </div>
            <div className={WorkshopsCSS.homeArticle}>
                <div className={WorkshopsCSS.homeArticleImg}>
                    <img src={tuttoRicco} alt="article" />
                </div>
                <div className={WorkshopsCSS.homeArticleContent}>
                    <h1>Workshops</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae quidem quo delectus accusantium fugit
                        assumenda, non, dolorem quos aliquam aperiam culpa,
                        nostrum vero est? Harum adipisci in veritatis facilis
                        quis odit tempore ex deleniti! Labore necessitatibus
                        dolorem aspernatur reprehenderit beatae?Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit.
                        Necessitatibus porro sapiente quidem esse corporis aut
                        voluptas eveniet, placeat excepturi perferendis?
                    </p>

                    <button className={WorkshopsCSS.btn1}>Register</button>
                    <button className={WorkshopsCSS.btn2}>Learn More</button>
                </div>
            </div>
        </div>
    );
}

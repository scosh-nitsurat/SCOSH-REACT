import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import BlogsCSS from "./Blogs.module.css";
import ScoshIMG from "./SCOSH 2020.png";
import tuttoRicoIMG from "./Tutto Ricco Red Sitting On Floor.png";

export default function Blogs() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const history = useHistory();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={BlogsCSS.body}>
            <div
                className={BlogsCSS.threeline}
                style={{
                    clipPath: isMenuOpen ? "circle(150% at 95% 6vw)" : "",
                    transition: "1s",
                }}
            >
                <ul>
                    <li
                        className={BlogsCSS.mag}
                        onClick={() => history.push("")}
                    >
                        Magazine
                    </li>
                    <li
                        className={BlogsCSS.blo}
                        onClick={() => history.push("/blogs")}
                    >
                        Blogs
                    </li>
                    <li
                        className={BlogsCSS.eve}
                        onClick={() => history.push("/events")}
                    >
                        Events
                    </li>
                    <li
                        className={BlogsCSS.work}
                        onClick={() => history.push("/workshops")}
                    >
                        Workshops
                    </li>
                </ul>
            </div>

            <nav className={BlogsCSS.navigation}>
                <div className={BlogsCSS.logo}>
                    <img src={ScoshIMG} alt="" />
                </div>
                <div className={BlogsCSS.right}>
                    <Link to="/">About</Link>
                    <Link href="#">Teams</Link>
                    <Link to="/contact">Contact</Link>
                    <Link href="#" onClick={toggleMenu}>
                        <div
                            className={
                                isMenuOpen
                                    ? BlogsCSS.activeToggle
                                    : BlogsCSS.toggle
                            }
                        ></div>
                    </Link>
                </div>
            </nav>

            <div className={BlogsCSS.title}>BLOGS</div>
            <div className={BlogsCSS.frame}>
                <div className={BlogsCSS.card}>
                    <div className={BlogsCSS.imageContainer}>
                        <img
                            style={{ width: "15vw", height: "auto" }}
                            src={tuttoRicoIMG}
                            alt=""
                        />
                    </div>
                    <div className={BlogsCSS.content}>
                        <div className={BlogsCSS.t1}>Online</div>
                        <h2>TITLE</h2>
                        <div className={BlogsCSS.t2}>Body</div>
                        <h5>19-June-2021</h5>
                    </div>
                </div>
                <div className={BlogsCSS.card}>
                    <div className={BlogsCSS.imageContainer}>
                        <img
                            style={{ width: "15vw", height: "auto" }}
                            src={tuttoRicoIMG}
                            alt=""
                        />
                    </div>
                    <div className={BlogsCSS.content}>
                        <div className={BlogsCSS.t1}>Online</div>
                        <h2>HackBout</h2>
                        <div className={BlogsCSS.t2}>BODY</div>
                        <h5>19-June-2021</h5>
                    </div>
                </div>
            </div>

            <div className={BlogsCSS.frame}>
                <div className={BlogsCSS.card}>
                    <div className={BlogsCSS.imageContainer}>
                        <img
                            style={{ width: "15vw", height: "auto" }}
                            src={tuttoRicoIMG}
                            alt=""
                        />
                    </div>
                    <div className={BlogsCSS.content}>
                        <div className={BlogsCSS.t1}>Online</div>
                        <h2>TITLE</h2>
                        <div className={BlogsCSS.t2}>Body</div>
                        <h5>19-June-2021</h5>
                    </div>
                </div>
                <div className={BlogsCSS.card}>
                    <div className={BlogsCSS.imageContainer}>
                        <img
                            style={{ width: "15vw", height: "auto" }}
                            src={tuttoRicoIMG}
                            alt=""
                        />
                    </div>
                    <div className={BlogsCSS.content}>
                        <div className={BlogsCSS.t1}>Online</div>
                        <h2>HackBout</h2>
                        <div className={BlogsCSS.t2}>BODY</div>
                        <h5>19-June-2021</h5>
                    </div>
                </div>
            </div>

            <div className={BlogsCSS.frame}>
                <div className={BlogsCSS.card}>
                    <div className={BlogsCSS.imageContainer}>
                        <img
                            style={{ width: "15vw", height: "auto" }}
                            src={tuttoRicoIMG}
                            alt=""
                        />
                    </div>
                    <div className={BlogsCSS.content}>
                        <div className={BlogsCSS.t1}>Online</div>
                        <h2>TITLE</h2>
                        <div className={BlogsCSS.t2}>Body</div>
                        <h5>19-June-2021</h5>
                    </div>
                </div>
                <div className={BlogsCSS.card}>
                    <div className={BlogsCSS.imageContainer}>
                        <img
                            style={{ width: "15vw", height: "auto" }}
                            src={tuttoRicoIMG}
                            alt=""
                        />
                    </div>
                    <div className={BlogsCSS.content}>
                        <div className={BlogsCSS.t1}>Online</div>
                        <h2>HackBout</h2>
                        <div className={BlogsCSS.t2}>BODY</div>
                        <h5>19-June-2021</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

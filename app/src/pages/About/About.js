import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AboutCSS from "./About.module.css";
import logoIMG from "./SCOSH 2020.png";
import div1IMG from "./div1.png";
import div2IMG from "./div2.png";
import div3IMG from "./div3.png";
import div4IMG from "./div4.png";

export default function About() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const history = useHistory();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div style={{ background: "#F1ECE6" }}>
            <div
                className={AboutCSS.threeline}
                style={{
                    clipPath: isMenuOpen ? "circle(150% at 95% 6vw)" : "",
                    transition: "1s",
                }}
            >
                <ul>
                    <li
                        className={AboutCSS.mag}
                        onClick={() => history.push("")}
                    >
                        Magazine
                    </li>
                    <li
                        className={AboutCSS.blo}
                        onClick={() => history.push("/blogs")}
                    >
                        Blogs
                    </li>
                    <li
                        className={AboutCSS.eve}
                        onClick={() => history.push("/events")}
                    >
                        Events
                    </li>
                    <li
                        className={AboutCSS.work}
                        onClick={() => history.push("/workshops")}
                    >
                        Workshops
                    </li>
                </ul>
            </div>

            <div className={AboutCSS.main}>
                <nav className={AboutCSS.navigation}>
                    <div className={AboutCSS.logo}>
                        <img src={logoIMG} alt="" />
                    </div>
                    <div className={AboutCSS.right}>
                        <Link to="/">About</Link>
                        <Link to="/#">Teams</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="#" onClick={toggleMenu}>
                            <div
                                className={
                                    isMenuOpen
                                        ? AboutCSS.activeToggle
                                        : AboutCSS.toggle
                                }
                            ></div>
                        </Link>
                    </div>
                </nav>
                <div className={AboutCSS.heading}>
                    <h2>SCOSH</h2>
                    <p>The Society for Cultivation of Science and Humanaties</p>
                </div>
            </div>
            <div className={AboutCSS.section}>
                <div className={AboutCSS.page}>
                    <img src={div1IMG} className={AboutCSS.center} alt="" />
                    <div className={AboutCSS.text1}>
                        <h5 style={{ textAlign: "center" }}>About Us</h5>
                        <p>
                            The Society for Cultivation of Science and
                            Humanities (SCOSH) is a student chapter of SVNIT
                            that aims to develop and nurture scientific
                            temperament among students. We conduct various
                            events year-round to instil the culture of science
                            entertainingly.{" "}
                        </p>
                    </div>
                </div>
                <hr />
                <div className={AboutCSS.page}>
                    <img src={div2IMG} className={AboutCSS.center} alt="" />
                    <div className={AboutCSS.text2}>
                        <h5 style={{ textAlign: "center" }}>Our Vision</h5>
                        <p>
                            Our main aim is to build a human stack-exchange and
                            thus build a strong scientific community across the
                            nation. With our guiding motto, "small steps make a
                            big one" we carry forward our goal of creating a
                            scientific society with a great team.
                        </p>
                    </div>
                </div>
                <hr />
                <div className={AboutCSS.page}>
                    <img src={div3IMG} className={AboutCSS.center} alt="" />
                    <div className={AboutCSS.text3}>
                        <h5 style={{ textAlign: "center" }}>Our Mission</h5>
                        <p>
                            At SCOSH, we integrate our passion for science with
                            other skills such as content writing, management,
                            administration and technical skills. SCOSH has been
                            a witness to many great journeys that started here
                            with a small step and we look forward to being a
                            part of many more.
                        </p>
                    </div>
                </div>
                <hr />
                <div className={AboutCSS.page}>
                    <img src={div4IMG} className={AboutCSS.center} alt="" />
                    <div className={AboutCSS.text4}>
                        <h5 style={{ textAlign: "center" }}>SVNIT</h5>
                        <p>
                            Sardar Vallabhbhai National Institute of Technology,
                            Surat popularly known as National Institute of
                            Technology, Surat, NIT Surat or SVNIT, is an
                            engineering institute of higher education
                            established by the Parliament of India in 1961.It's
                            mission is- "To be a globally accepted centre of
                            excellence in technical education catalysing
                            absorption, innovation, diffusion and transfer of
                            high technologies resulting in enhanced quality for
                            all the stake holders"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

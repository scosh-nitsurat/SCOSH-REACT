import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import BlogsCSS from "./Blogs.module.css";
import ScoshIMG from "./SCOSH 2020.png";
import tuttoRicoIMG from "./Tutto Ricco Red Sitting On Floor.png";
import { baseUrl } from "../../constants";

function BlogCard({ t1, title, body, date, imgSrc }) {
    return (
        <div className={BlogsCSS.card}>
            <div className={BlogsCSS.imageContainer}>
                <img
                    style={{
                        width: "15vw",
                        height: "15vw",
                        objectFit: "cover",
                        borderRadius: "1.2rem",
                    }}
                    src={imgSrc ?? tuttoRicoIMG}
                    alt=""
                />
            </div>
            <div className={BlogsCSS.content}>
                <div className={BlogsCSS.t1}>{t1 ?? "Online"}</div>
                <h2>{title ?? "Title"}</h2>
                <div className={BlogsCSS.t2}>{body}</div>
                <h5>{date}</h5>
            </div>
        </div>
    );
}

export default function Blogs() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        fetch(baseUrl + "/blogs")
            .then((res) => res.json())
            .then((res) => setBlogs(res))
            .then((_) => setLoading(false))
            .catch((err) => console.error(err));
    }, []);

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
                    <Link to="" href="#">
                        Teams
                    </Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="" href="#" onClick={toggleMenu}>
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
            {loading ? (
                <h1
                    style={{
                        height: "8rem",
                        width: "99vw",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                    }}
                >
                    Loading
                </h1>
            ) : (
                <div className={BlogsCSS.frame}>
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            title={blog.title}
                            body={blog.content}
                            imgSrc={blog.images[0] && blog.images[0].url}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

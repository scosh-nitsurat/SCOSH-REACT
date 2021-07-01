import React from "react";
import FooterCSS from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={FooterCSS.bottom}>
            <h5 className={FooterCSS.text}>Copyright 2021</h5>

            <div className={FooterCSS.line}></div>
            <h2 className={FooterCSS.scosh}>SCOSH</h2>
            <div className={FooterCSS.vertical}></div>

            <a
                href="https://www.google.co.in/maps/dir/21.1643021,72.7840881/Sardar+Vallabhbhai+National+Institute+of+Technology,+Ichchhanath+Surat-+Dumas+Road,+Keval+Chowk,+S"
                className={FooterCSS.point}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                    height="32"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}
                >
                    <g
                        fill="none"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                    >
                        <path d="M0,172v-172h172v172z" fill="#06053a"></path>
                        <g fill="#ffffff">
                            <path d="M86,16.125c-29.61935,0 -53.75,24.13065 -53.75,53.75c0,18.8125 12.90655,39.16015 25.2583,55.62915c12.35175,16.469 24.69141,28.79614 24.69141,28.79614l3.80029,3.80029l3.80029,-3.80029c0,0 12.33966,-12.32714 24.69141,-28.79614c12.35175,-16.469 25.2583,-36.81665 25.2583,-55.62915c0,-29.61935 -24.13065,-53.75 -53.75,-53.75zM86,26.875c23.80815,0 43,19.19185 43,43c0,13.4375 -11.28095,33.40235 -23.1167,49.18335c-9.93785,13.25047 -16.94793,20.18846 -19.8833,23.21118c-2.93537,-3.02272 -9.94545,-9.96071 -19.8833,-23.21118c-11.83575,-15.781 -23.1167,-35.74585 -23.1167,-49.18335c0,-23.80815 19.19185,-43 43,-43zM86,37.625c-10.30208,0 -18.71275,4.05681 -24.177,10.2041c-5.46426,6.14729 -8.073,14.13271 -8.073,22.0459c0,7.91319 2.60874,15.89861 8.073,22.0459c5.46426,6.14729 13.87492,10.2041 24.177,10.2041c17.74752,0 32.25,-14.50249 32.25,-32.25c0,-17.74751 -14.50248,-32.25 -32.25,-32.25zM86,48.375c10.02804,0 18.01369,6.88994 20.4292,16.125h-11.16992c-1.8612,-3.20153 -5.28744,-5.375 -9.25928,-5.375c-3.97183,0 -7.39808,2.17347 -9.25928,5.375h-11.32739c0.81245,-3.54062 2.12314,-6.91319 4.45117,-9.53223c3.49407,-3.93083 8.52092,-6.59277 16.1355,-6.59277zM65.41333,75.25h11.32739c1.8612,3.20153 5.28744,5.375 9.25928,5.375c3.97183,0 7.39808,-2.17347 9.25928,-5.375h11.16992c-2.4155,9.23506 -10.40116,16.125 -20.4292,16.125c-7.61458,0 -12.64142,-2.66194 -16.1355,-6.59277c-2.32804,-2.61904 -3.63872,-5.99161 -4.45117,-9.53223z"></path>
                        </g>
                    </g>
                </svg>
            </a>
            <p className={FooterCSS.svnit}>
                Sardar Vallabhbhai National Institute Of Technology
            </p>
            <p className={FooterCSS.short}>SVNIT</p>

            <div className={FooterCSS.contacticon}>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/scosh.svnit">
                            <img
                                alt=""
                                src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/scosh_svnit">
                            <img
                                alt=""
                                src="https://img.icons8.com/fluent/48/000000/twitter.png"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/the-society-for-cultivation-of-science-and-humanities">
                            <img
                                alt=""
                                src="https://img.icons8.com/fluent/48/000000/linkedin-circled.png"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/scosh.svnit?utm_medium=copy_link">
                            <img
                                alt=""
                                src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:svnit.scosh@gmail.com">
                            <img
                                alt=""
                                src="https://img.icons8.com/color/48/000000/gmail-new.png"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

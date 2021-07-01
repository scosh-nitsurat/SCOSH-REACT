import React from "react";
import ContactCSS from "./Contact.module.css";

export default function Contact() {
    return (
        <div style={{ background: "#F1ECE6" }}>
            <div className={ContactCSS.contact}>
                <div className={ContactCSS.container}>
                    <div className={ContactCSS.content}>
                        <h2 className={ContactCSS.h1}>
                            LET'S GET TO KNOW EACH OTHER
                        </h2>
                        <h2 className={ContactCSS.h2}>
                            Fill in the details below and Let's get this
                            conversation going
                        </h2>
                    </div>
                </div>
            </div>
            <div className={ContactCSS.contactform}>
                <form>
                    <div className={ContactCSS.inputbox}>
                        <input type="text" name="" required />
                        <span>Full Name</span>
                    </div>
                    <div className={ContactCSS.inputbox}>
                        <input type="text" name="" required />
                        <span>Institute/Organization</span>
                    </div>
                    <div className={ContactCSS.inputbox}>
                        <input type="text" name="" id="emailField" required />
                        <span>Email</span>
                    </div>
                    <div className={ContactCSS.inputbox}>
                        <textarea required />
                        <span>Your Message...</span>
                    </div>
                    <div className={ContactCSS.inputbox}>
                        <input type="submit" name="" value="Send Message" />
                    </div>
                </form>
            </div>
            <div className={ContactCSS.contactInfo}>
                <div className={ContactCSS.or}>OR</div>
                <div className={ContactCSS.contactus}>
                    <h2>Contact Us at:</h2>
                    <a href="mailto:svnit.scosh@gmail.com" onclick="_blank">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </a>
                    <a
                        href=" https://www.linkedin.com/company/the-society-for-cultivation-of-science-and-humanities"
                        onclick="_blank"
                    >
                        <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"
                        ></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

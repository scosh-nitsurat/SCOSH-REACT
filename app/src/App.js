import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Blogs from "./pages/Blogs/Blogs";
import Workshops from "./pages/Workshops/Workshops";
import Events from "./pages/Events/Events";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/blogs">
                        <Blogs />
                    </Route>
                    <Route path="/workshops">
                        <Workshops />
                    </Route>
                    <Route path="/events">
                        <Events />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;

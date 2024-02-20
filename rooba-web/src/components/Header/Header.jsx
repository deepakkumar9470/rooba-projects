import React, { useEffect, useState } from "react";
import classes from "./header.module.scss";
import menu from '../../assets/menu.svg'
import logo from "../../assets/rooba_logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };


    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <div className={classes.header__content__logo}>
                  <img src={logo} alt="rooba-logo" />
                 </div>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <a href="#">
                            Opportunities
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            How it Works
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            About Us
                            </a>
                        </li>
                    </ul>
                    <button>Sign in</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <img src={menu} onClick={menuToggleHandler} />
                    ) : (
                        <img src={menu} onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
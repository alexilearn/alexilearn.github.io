import './Navbar.css';
import { useState } from 'react';
import NavButton from './NavButton';
import Button from '../Button/Button';
import logo from '../../assets/AlexiLearn Logo.svg';
import downloadIcon from '../../assets/download-icon.svg';
import menuIcon from '../../assets/menu-icon.svg';

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <div className={`navbar ${menuVisible && 'open'}`}>
            <a href="#home">
                <img src={logo} alt="AlexiLearn logo" className="logo" />
            </a>
            <button
                className="menu-icon"
                onClick={() =>
                    setMenuVisible((prevMenuVisible) => !prevMenuVisible)
                }
            >
                <img src={menuIcon} alt="Menu icon" />
            </button>
            <div className={`navigation-container ${menuVisible && 'open'}`}>
                <NavButton
                    text="Testimonials"
                    href="#testimonials"
                    onClick={() => setMenuVisible(false)}
                />
                <NavButton
                    text="Features"
                    href="#features"
                    onClick={() => setMenuVisible(false)}
                />
                <NavButton
                    text="Research"
                    href="#research"
                    onClick={() => setMenuVisible(false)}
                />
                <NavButton
                    text="FAQs"
                    href="#faq"
                    onClick={() => setMenuVisible(false)}
                />
                <NavButton
                    text="Support us"
                    href="#support-us"
                    onClick={() => setMenuVisible(false)}
                />
                <NavButton
                    text="Contact us"
                    href="#contact-us"
                    onClick={() => setMenuVisible(false)}
                />
                <Button
                    text="Download"
                    type="accent"
                    iconSrc={downloadIcon}
                    onClick={() => {
                        window.open(
                            'https://play.google.com/store/apps/details?id=com.app.alexilearnapp'
                        );
                        setMenuVisible(false);
                    }}
                />
            </div>
        </div>
    );
}

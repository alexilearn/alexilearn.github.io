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
                <NavButton text="Testimonials" href="#testimonials" />
                <NavButton text="Features" href="#features" />
                <NavButton text="Research" href="#research" />
                <NavButton text="FAQs" href="#faq" />
                <NavButton text="Support us" href="#support-us" />
                <Button text="Download" type="accent" iconSrc={downloadIcon} />
            </div>
        </div>
    );
}

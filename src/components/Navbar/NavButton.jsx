import './NavButton.css';

export default function NavButton({ text, href, onClick }) {
    return (
        <a className="nav-button" href={href} onClick={onClick}>
            {text}
        </a>
    );
}

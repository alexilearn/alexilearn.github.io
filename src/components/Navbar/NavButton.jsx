import './NavButton.css';

export default function NavButton({ text, href }) {
    return (
        <a className="nav-button" href={href}>
            {text}
        </a>
    );
}

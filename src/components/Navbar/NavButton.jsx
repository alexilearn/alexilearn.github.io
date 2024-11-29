import './NavButton.css';

export default function NavButton({ text, href, onClick }) {
    return (
        <a
            className="nav-button"
            onClick={() => {
                document
                    .getElementById(href)
                    ?.scrollIntoView({ scrollBehavior: 'smooth' });
                onClick && onClick();
            }}
        >
            {text}
        </a>
    );
}

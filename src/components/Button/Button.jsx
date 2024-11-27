import './Button.css';

export default function Button({
    text,
    icon,
    iconAlignment,
    type = 'outline',
}) {
    return (
        <button className={`button ${type}`}>
            {iconAlignment == 'left' && icon}
            {text}
            {iconAlignment == 'right' && icon}
        </button>
    );
}

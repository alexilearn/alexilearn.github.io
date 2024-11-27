import './Button.css';

export default function Button({
    text,
    onClick,
    iconSrc,
    iconAlignment = 'left',
    type = 'outline',
}) {
    return (
        <button className={`button ${type}`} onClick={onClick}>
            {iconAlignment == 'left' && iconSrc && (
                <img src={iconSrc} width={20} />
            )}
            {text}
            {iconAlignment == 'right' && <img src={iconSrc} width={20} />}
        </button>
    );
}

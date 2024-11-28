import './Button.css';

export default function Button({
    text,
    onClick,
    iconSrc,
    iconAlignment = 'left',
    type = 'outline',
    children,
}) {
    return (
        <button className={`button ${type}`} onClick={onClick}>
            {iconAlignment == 'left' && iconSrc && (
                <img src={iconSrc} width={20} />
            )}
            {text}
            {children}
            {iconAlignment == 'right' && <img src={iconSrc} width={20} />}
        </button>
    );
}

import './Glow.css';
import glow from '../../assets/Glow.svg';

export default function Glow({ x = 0, y = 0, rotation = 0 }) {
    return (
        <img
            className="glow"
            src={glow}
            style={{
                marginLeft: `${-220 + x}px`,
                marginTop: `${-220 + y}px`,
                transform: `rotate(${rotation}deg)`,
            }}
        />
    );
}

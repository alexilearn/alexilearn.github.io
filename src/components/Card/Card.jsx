import './Card.css';

export default function Card({ width, children }) {
    return (
        <div className="card" style={{ width: width }}>
            {children}
        </div>
    );
}

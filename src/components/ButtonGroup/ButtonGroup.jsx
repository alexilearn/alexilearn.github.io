import './ButtonGroup.css';

export default function ButtonGroup({ direction = 'horizontal', children }) {
    return <div className={`button-group ${direction}`}>{children}</div>;
}

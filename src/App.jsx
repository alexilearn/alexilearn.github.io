import './App.css';
import Button from './components/Button/Button';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';

export default function App() {
    return (
        <div className="app dark-mode">
            <ButtonGroup direction="vertical">
                <Button text="Button" />
                <Button text="Button" />
                <Button text="Button" />
            </ButtonGroup>
        </div>
    );
}

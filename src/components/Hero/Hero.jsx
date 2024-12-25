import './Hero.css';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import googlePlayIcon from '../../assets/google-play-icon.svg';

export default function Hero() {
    return (
        <div className="hero" id="home">
            <h1 className="title">
                Improve <span className="gradient-text">Alexithymia</span> and
                Emotional Awareness
            </h1>
            <p className="description">
                Use <strong>advanced technologies</strong>,{' '}
                <strong>personalized </strong>
                solutions, and <strong>fun</strong> features to improve your
                emotional intelligence and understanding
            </p>
            <ButtonGroup direction="vertical">
                <Button
                    text="Google Play"
                    iconSrc={googlePlayIcon}
                    onClick={() =>
                        window.open(
                            'https://play.google.com/store/apps/details?id=com.app.alexilearnapp'
                        )
                    }
                />
                <Button
                    text="View demo video"
                    onClick={() =>
                        window.open(
                            'https://www.youtube.com/watch?v=jAQ472I9DGQ'
                        )
                    }
                />
            </ButtonGroup>
        </div>
    );
}

import './FAQ.css';
import { useState } from 'react';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import plusIcon from '../../assets/plus.svg';
import minusIcon from '../../assets/minus.svg';

export default function FAQ() {
    const [openedTabs, setOpenedTabs] = useState(Array(4).fill(false));

    function setTabs(tabIndex, open) {
        setOpenedTabs((prevOpenedTabs) =>
            prevOpenedTabs.map((prevOpenedTab, i) =>
                i === tabIndex ? open : prevOpenedTab
            )
        );
    }

    return (
        <div className="faq" id="faq">
            <h2>Frequently Asked Questions</h2>
            <ButtonGroup direction="vertical">
                <Button onClick={() => setTabs(0, !openedTabs[0])}>
                    <div className="faq-container">
                        <div className="faq-question-container">
                            <h4>Is AlexiLearn free? Does it have ads?</h4>
                            <img
                                src={openedTabs[0] ? minusIcon : plusIcon}
                                alt=""
                            />
                        </div>
                        <p
                            style={{
                                display: openedTabs[0] ? 'block' : 'none',
                                textAlign: 'start',
                                fontWeight: 'normal',
                            }}
                        >
                            Yes! AlexiLearn is free and ad-free. We would be
                            very grateful for your help to keep it this way. You
                            can support us by making a donation of any size.
                        </p>
                    </div>
                </Button>
                <Button onClick={() => setTabs(1, !openedTabs[1])}>
                    <div className="faq-container">
                        <div className="faq-question-container">
                            <h4>
                                Is this app for people with alexithymia and
                                autism?
                            </h4>
                            <img
                                src={openedTabs[1] ? minusIcon : plusIcon}
                                alt=""
                            />
                        </div>
                        <p
                            style={{
                                display: openedTabs[1] ? 'block' : 'none',
                                textAlign: 'start',
                                fontWeight: 'normal',
                            }}
                        >
                            AlexiLearn's features are mainly designed to assist
                            individuals with alexithymia understand, feel,
                            identify, and express emotions. However, certain
                            features, such as the facial expression recognition
                            system may be useful for certain people with autism
                            spectrum condition.
                        </p>
                    </div>
                </Button>
                <Button onClick={() => setTabs(2, !openedTabs[2])}>
                    <div className="faq-container">
                        <div className="faq-question-container">
                            <h4>Where can I download AlexiLearn?</h4>
                            <img
                                src={openedTabs[2] ? minusIcon : plusIcon}
                                alt=""
                            />
                        </div>
                        <p
                            style={{
                                display: openedTabs[2] ? 'block' : 'none',
                                textAlign: 'start',
                                fontWeight: 'normal',
                            }}
                        >
                            AlexiLearn can currently be downloaded for free on
                            the{' '}
                            <a
                                target="_blank"
                                href="https://play.google.com/store/apps/details?id=com.app.alexilearnapp&hl=en_US"
                                style={{ color: 'var(--body-text-color)' }}
                            >
                                Google Play Store
                            </a>{' '}
                            for free. If you enjoy the app, we would be grateful
                            for feedback on our app page!
                        </p>
                    </div>
                </Button>
                <Button onClick={() => setTabs(3, !openedTabs[3])}>
                    <div className="faq-container">
                        <div className="faq-question-container">
                            <h4>Why should I download this app?</h4>
                            <img
                                src={openedTabs[3] ? minusIcon : plusIcon}
                                alt=""
                            />
                        </div>
                        <p
                            style={{
                                display: openedTabs[3] ? 'block' : 'none',
                                textAlign: 'start',
                                fontWeight: 'normal',
                            }}
                        >
                            In addition to its innovative, unique, and helpful
                            features like the AI assistant and facial expression
                            recognition, AlexiLearn incorporates additional
                            functionalities like lessons, reflections,
                            practices, points, and minigames, to make the
                            experience more entertaining and effective.
                            <br />
                            <br />
                            This can all be downloaded for free in a lightweight
                            app without the interruption of ads.
                        </p>
                    </div>
                </Button>
            </ButtonGroup>
        </div>
    );
}

import './SupportUs.css';
import Card from '../Card/Card';
import Button from '../Button/Button';
import rightArrow from '../../assets/arrow-right.svg';
import createIcon from '../../assets/create.svg';

export default function SupportUs() {
    return (
        <div className="support-us">
            <h2>Support Us</h2>
            <div className="card-container">
                <div>
                    <Card>
                        <h4>Donate</h4>
                        <p>
                            Help us keep AlexiLearn free and ad-free by
                            supporting our app financially. Any amount is
                            greatly appreciated.
                        </p>
                    </Card>
                </div>
                <div>
                    {' '}
                    <Card>
                        <h4>Give us feedback</h4>
                        <p>
                            We try our best to continuously improve AlexiLearn,
                            and we need your suggestions to know what is good,
                            what needs improvement, and what features should be
                            added.
                            <br />
                            <br />
                            Help us by rating or reviewing our app on the Google
                            Play Store.
                        </p>
                        <Button
                            text="Rate AlexiLearn"
                            type="accent"
                            onClick={() =>
                                window.open(
                                    'https://play.google.com/store/apps/details?id=com.app.alexilearnapp&hl=en_US'
                                )
                            }
                            iconSrc={rightArrow}
                            iconAlignment="right"
                        />
                    </Card>
                    <Card>
                        <h4>Do you use iOS?</h4>
                        <p>
                            If you would be interested in using AlexiLearn but
                            have an iPhone, please let us know. With financial
                            support, we may be able to add our app to the App
                            Store.
                        </p>
                        <Button
                            text="I use iOS"
                            onClick={() => {
                                // TODO: increment Firebase value by one (in Realtime Database with lessons)
                            }}
                        />
                    </Card>
                </div>
                <div>
                    {' '}
                    <Card>
                        <h4>Make lessons</h4>
                        <p>
                            Our lessons are hand-made, and we need help making
                            them. If you are able to, we would be very grateful
                            for a contribution of a lesson for AlexiLearn
                        </p>
                        <Button
                            text="Write a lesson"
                            type="accent"
                            onClick={() => {
                                // TODO: create lesson page
                            }}
                            iconSrc={createIcon}
                            iconAlignment="right"
                        />{' '}
                    </Card>
                    <Card>
                        <h4>Spread the word</h4>
                        <p>
                            Help us by letting others know about this app.
                            Whether it is by making a post or simply word of
                            mouth, you can help more potential users find our
                            app and improve their emotional intelligence.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}

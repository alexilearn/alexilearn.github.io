import { useEffect } from 'react';
import './Features.css';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import Glow from './Glow';

export default function Features() {
    useEffect(() => {
        const shadowElements = document.getElementsByClassName('shadow');
        if (shadowElements.length > 0) {
            for (let shadowElement of shadowElements) {
                shadowElement.style.display = 'none';
            }
        }
    }, []);

    return (
        <div className="features" id="features">
            {/* FER feature */}
            <div className="feature">
                <div className="info">
                    <h3 className="title">
                        Real-time Facial Expression Recognition
                    </h3>
                    <p className="description">
                        Facial expressions are essential for understanding
                        emotions, especially in others. To aid users, AlexiLearn
                        contains a real-time facial expression recognition
                        system that <strong>detects the emotions</strong> of
                        each face seen by the camera. It is also possible to{' '}
                        <strong>upload images</strong> and recognize emotions
                        that way.
                    </p>
                    <h4>Minigame feature</h4>
                    <p className="description">
                        To practice, users may use the minigame feature, where
                        they are prompted to{' '}
                        <strong>express a facial expression</strong> in a
                        limited amount of time in order to earn{' '}
                        <strong>points</strong>.
                    </p>
                </div>
                <div>
                    <Glow x={-40} />
                    <DeviceFrameset
                        device="Galaxy Note 8"
                        width="352px"
                        height="693px"
                    >
                        <img
                            width="100%"
                            src="https://ph-files.imgix.net/779963bb-3025-4023-a6ea-6b7b0a6eeea1.png?auto=format&fit=crop"
                        />
                    </DeviceFrameset>
                </div>
            </div>

            {/* AI assistant feature */}
            <div className="feature">
                <div className="info">
                    <h3 className="title">AI emotional assistant</h3>
                    <h4>Daily event analysis</h4>
                    <p className="description">
                        <strong>Discuss a significant daily event</strong> with
                        your <strong>personal emotion assistant</strong>.
                        Describe sensations to reach a conclusion about what
                        event you felt, why you felt it, and what its
                        implications were.
                    </p>
                    <h4>General emotion conversation</h4>
                    <p className="description">
                        Ask your assistant any question you have about emotions
                        and receive a{' '}
                        <strong>detailed and personalized answer</strong> that
                        <strong>deepens your understanding of emotions</strong>,
                        body language, sensations, descriptions, causes,
                        effects, etc.
                    </p>
                </div>
                <div>
                    <Glow x={40} y={500} rotation={90} />
                    <DeviceFrameset
                        device="Galaxy Note 8"
                        width="352px"
                        height="693px"
                    >
                        <p>Add image</p>
                    </DeviceFrameset>
                </div>
            </div>
        </div>
    );
}

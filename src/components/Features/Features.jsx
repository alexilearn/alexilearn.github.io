import { useEffect } from 'react';
import './Features.css';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import Glow from './Glow';
import llmScreenshot from '../../assets/event_discussion_screenshot.png';
import practiceScreenshot from '../../assets/practice_screenshot.png';
import questionScreenshot from '../../assets/question_screenshot.png';
import reflectionScreenshot from '../../assets/reflection_screenshot.png';
import storeScreenshot from '../../assets/store_screenshot.png';

export default function Features() {
    useEffect(() => {
        const deletedElements = [
            document.getElementsByClassName('shadow'),
            document.getElementsByClassName('camera'),
            document.getElementsByClassName('sensors'),
            document.getElementsByClassName('more-sensors'),
        ];
        for (let element of deletedElements) {
            if (element.length > 0) {
                for (let i of element) {
                    i.style.display = 'none';
                }
            }
        }
        // const shadowElements = document.getElementsByClassName('shadow');
        // if (shadowElements.length > 0) {
        //     for (let shadowElement of shadowElements) {
        //         shadowElement.style.display = 'none';
        //     }
        // }
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
                        <strong>detailed and personalized answer</strong> that{' '}
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
                        <img src={llmScreenshot} width="100%" />
                    </DeviceFrameset>
                </div>
            </div>

            {/* Lesson feature */}
            <div className="feature">
                <div className="info">
                    <h3 className="title">Learning features</h3>
                    <h4>Emotion lessons</h4>
                    <p className="description">
                        Learn about the major emotions by completing{' '}
                        <strong>interactive, hand-made lessons</strong> with
                        descriptions, images, videos, and questions. Understand
                        the triggers, results, sensations, body language, and
                        types of each major emotion.
                    </p>
                    <h4>Emotion descriptons</h4>
                    <p className="description">
                        Read <strong>summaries</strong> of each basic emotion
                        and view thousands of images with{' '}
                        <strong>examples</strong> of each facial expression.
                    </p>
                </div>
                <div>
                    <Glow x={-50} y={300} rotation={90} />
                    <DeviceFrameset
                        device="Galaxy Note 8"
                        width="352px"
                        height="693px"
                    >
                        <img src={practiceScreenshot} width="100%" />
                    </DeviceFrameset>
                </div>
            </div>

            {/* Practice feature */}
            <div className="feature">
                <div className="info">
                    <h3 className="title">Practice</h3>
                    <h4>Quizzes</h4>
                    <p className="description">
                        Improve your emotional skills by answering questions
                        about <strong>facial expressions</strong> and{' '}
                        <strong>endless generated questions</strong> about
                        various emotion-related topics.
                    </p>
                    <h4>Simulated practice conversation</h4>
                    <p className="description">
                        It can be difficult to know what to say when others are
                        struggling emotionally.{' '}
                        <strong>Practice handling others' emotions</strong>{' '}
                        during a <strong>simulated conversation</strong> with
                        your AI assistant and receive{' '}
                        <strong>detailed feedback</strong> about your responses.
                    </p>
                </div>
                <div>
                    <Glow x={-70} y={500} rotation={0} />
                    <DeviceFrameset
                        device="Galaxy Note 8"
                        width="352px"
                        height="693px"
                    >
                        <img src={questionScreenshot} width="100%" />
                    </DeviceFrameset>
                </div>
            </div>

            {/* Reflection feature */}
            <div className="feature">
                <div className="info">
                    <h3 className="title">Emotional reflection</h3>
                    <p className="description">
                        Practice your <strong>emotioanl awareness</strong> by
                        answering how you feel and why you think you feel that
                        way every day. Your responses will be stored in a
                        calendar for later access.
                    </p>
                </div>
                <div>
                    <Glow x={80} y={100} rotation={90} />
                    <DeviceFrameset
                        device="Galaxy Note 8"
                        width="352px"
                        height="693px"
                    >
                        <img src={reflectionScreenshot} width="100%" />
                    </DeviceFrameset>
                </div>
            </div>

            {/* Upgrade store */}
            <div className="feature">
                <div className="info">
                    <h3 className="title">Points and upgrades</h3>
                    <p className="description">
                        <strong>Earn points</strong> by completing minigames and
                        practices. Use these points to buy upgrades for earning
                        more points, such as points per question, streak bonus,
                        and insurance for incorrect answers.
                    </p>
                </div>
                <div>
                    <Glow x={80} y={100} rotation={90} />
                    <DeviceFrameset
                        device="Galaxy Note 8"
                        width="352px"
                        height="693px"
                    >
                        <img src={storeScreenshot} width="100%" />
                    </DeviceFrameset>
                </div>
            </div>
        </div>
    );
}

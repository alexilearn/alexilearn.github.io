import './Research.css';
import Paper from './Paper';

export default function Research() {
    return (
        <div className="research" id="research">
            <div className="info">
                <h2 className="title">
                    Supported by <span className="gradient-text">research</span>
                </h2>
                <p>
                    Every aspect of AlexiLearn has been{' '}
                    <strong>meticulously researched and tested</strong>.
                    Existing research was referenced when deciding aspects of
                    this app to make it as useful as possible.
                    <br />
                    <br />
                    From the use of various techniques to improve the
                    performance of our facial expression recognition system to
                    the use of LLM technology for various applications, the
                    tools and features used throughout this app to provide a{' '}
                    <strong>
                        holistic, unique, and useful learning experience
                    </strong>{' '}
                    are based on <strong>cutting-edge</strong> research and
                    thoroughly implemented in the best way possible.
                </p>
            </div>
            <Paper />
        </div>
    );
}

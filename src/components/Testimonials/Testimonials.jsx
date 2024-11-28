import './Testimonials.css';
import Card from '../Card/Card';
import starIcon from '../../assets/star.svg';

export default function Testimonials() {
    let starIcons = [];
    for (let i = 0; i < 5; i++) {
        starIcons.push(
            <img
                src={starIcon}
                width={16}
                style={{ marginRight: '4px', marginBottom: '10px' }}
            />
        );
    }

    return (
        <div className="testimonials" id="testimonials">
            <div className="overlay"></div>
            <div className="horizontal-scroll">
                <Card width="200px">
                    {starIcons}
                    <p>"Simple and easy to use."</p>
                </Card>
                <Card width="200px">
                    {starIcons}
                    <p>
                        "Nice feature of describing the situations and reasons
                        behind the facial expressions."
                    </p>
                </Card>
                <Card width="200px">
                    {starIcons}
                    <p>"The examples are really helpful."</p>
                </Card>
            </div>
        </div>
    );
}

import { useState, useEffect } from 'react';
import InputField from '../components/InputField/InputField';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import plusIcon from '../assets/plus.svg';
import './LessonCreator.css';
import { getValue, setValue } from '../firebase';

export default function LessonCreator() {
    const [selectedEmotion, setSelectedEmotion] = useState('happiness');
    const [pageCards, setPageCards] = useState();
    const [lessonData, setLessonData] = useState({
        lesson_title: '',
        pages: [],
    });

    async function createLesson() {
        const lessons = await getValue(`lessons/${selectedEmotion}`);
        setValue(
            lessons ? [...lessons, lessonData] : [lessonData],
            `lessons/${selectedEmotion}`
        );
        setLessonData({
            lesson_title: '',
            pages: [],
        });
    }

    function deletePage(pageIndex) {
        setLessonData((prevLessonData) => {
            const updatedPages = prevLessonData.pages.filter(
                (_, index) => index !== pageIndex
            );
            return { ...prevLessonData, pages: updatedPages };
        });
    }

    function handleInputChange(e, pageIndex, field, answerIndex = null) {
        const { name, value } = e.target;

        setLessonData((prevLessonData) => {
            const updatedPages = [...prevLessonData.pages];
            const pageToUpdate = { ...updatedPages[pageIndex] };

            if (field === 'interactive_activity.question') {
                pageToUpdate.interactive_activity = {
                    ...pageToUpdate.interactive_activity,
                    question: value,
                };
            } else if (field === 'answers') {
                const updatedAnswers = [
                    ...pageToUpdate.interactive_activity.answers,
                ];
                updatedAnswers[answerIndex] = {
                    ...updatedAnswers[answerIndex],
                    value,
                };
                pageToUpdate.interactive_activity = {
                    ...pageToUpdate.interactive_activity,
                    answers: updatedAnswers,
                };
            } else if (field === 'answers.correct') {
                const updatedAnswers =
                    pageToUpdate.interactive_activity.answers.map(
                        (answer, idx) => ({
                            ...answer,
                            correct: idx === answerIndex,
                        })
                    );
                pageToUpdate.interactive_activity = {
                    ...pageToUpdate.interactive_activity,
                    answers: updatedAnswers,
                };
            } else {
                pageToUpdate[field] = value;
            }

            updatedPages[pageIndex] = pageToUpdate;

            return { ...prevLessonData, pages: updatedPages };
        });
    }

    function addPage() {
        setLessonData((prevLessonData) => {
            console.log({
                lesson_title: prevLessonData.lesson_title,
                pages: [
                    ...prevLessonData.pages,
                    {
                        title: '',
                        image_media_url: '',
                        video_media_url: '',
                        body_text: '',
                        interactive_activity: {
                            type: 'multiple_choice',
                            question: '',
                            answers: [
                                { correct: true, value: '' },
                                { correct: false, value: '' },
                                { correct: false, value: '' },
                                { correct: false, value: '' },
                            ],
                        },
                    },
                ],
            });
            return {
                lesson_title: prevLessonData.lesson_title,
                pages: [
                    ...prevLessonData.pages,
                    {
                        title: '',
                        image_media_url: '',
                        video_media_url: '',
                        body_text: '',
                        interactive_activity: {
                            type: 'multiple_choice',
                            question: '',
                            answers: [
                                { correct: true, value: '' },
                                { correct: false, value: '' },
                                { correct: false, value: '' },
                                { correct: false, value: '' },
                            ],
                        },
                    },
                ],
            };
        });
    }

    useEffect(() => {
        setPageCards(
            lessonData.pages.map((page, i) => {
                return (
                    <Card>
                        <InputField
                            value={page.title}
                            onChange={(e) => handleInputChange(e, i, 'title')}
                            name="title"
                            placeholder="Page title"
                        />

                        <h4 className="section-header">Media</h4>
                        <div className="h-separator-div">
                            <InputField
                                value={page.image_media_url}
                                onChange={(e) =>
                                    handleInputChange(e, i, 'image_media_url')
                                }
                                name="image_media_url"
                                placeholder="Image URL"
                            />
                            <InputField
                                value={page.video_media_url}
                                onChange={(e) =>
                                    handleInputChange(e, i, 'video_media_url')
                                }
                                name="video_media_url"
                                placeholder="Video URL"
                            />
                        </div>

                        <h4 className="section-header">Text</h4>
                        <InputField
                            value={page.body_text}
                            onChange={(e) =>
                                handleInputChange(e, i, 'body_text')
                            }
                            name="body_text"
                            placeholder="Body text"
                        />

                        <h4 className="section-header">Question</h4>
                        <InputField
                            value={page.interactive_activity.question}
                            onChange={(e) =>
                                handleInputChange(
                                    e,
                                    i,
                                    'interactive_activity.question'
                                )
                            }
                            name="interactive_activity.question"
                            placeholder="Enter the question"
                        />
                        {page.interactive_activity.answers.map(
                            (answer, answerIndex) => (
                                <div
                                    key={answerIndex}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '8px',
                                    }}
                                >
                                    <input
                                        type="radio"
                                        name={`correct-answer-${i}`}
                                        checked={answer.correct}
                                        onChange={(e) =>
                                            handleInputChange(
                                                e,
                                                i,
                                                'answers.correct',
                                                answerIndex
                                            )
                                        }
                                        style={{ marginRight: '8px' }}
                                    />
                                    <InputField
                                        value={answer.value}
                                        onChange={(e) =>
                                            handleInputChange(
                                                e,
                                                i,
                                                'answers',
                                                answerIndex
                                            )
                                        }
                                        placeholder={`Answer ${
                                            answerIndex + 1
                                        }`}
                                        style={{ flex: 1 }}
                                    />
                                </div>
                            )
                        )}
                        <Button
                            text="Delete Page"
                            onClick={() => deletePage(i)}
                            style={{
                                backgroundColor: 'red',
                                color: 'white',
                                marginTop: '16px',
                            }}
                        />
                    </Card>
                );
            })
        );
    }, [lessonData]);

    return (
        <div className="lesson-creator">
            <div className="emotion-selector">
                <h2>Emotion: </h2>
                <select
                    value={selectedEmotion}
                    onChange={(e) => setSelectedEmotion(e.target.value)}
                >
                    <option value="happiness">Happiness</option>
                    <option value="sadness">Sadness</option>
                    <option value="surprise">Surprise</option>
                    <option value="anger">Anger</option>
                    <option value="disgust">Disgust</option>
                    <option value="Fear">Fear</option>
                    <option value="neutrality">Neutrality</option>
                </select>
            </div>
            <div className="lesson-name-container">
                <InputField
                    value={lessonData.lesson_title}
                    setValue={setLessonData}
                    name="lesson_title"
                    placeholder="Lesson title"
                />
            </div>
            <div className="pages">
                {pageCards}
                <Button text="Add page" iconSrc={plusIcon} onClick={addPage} />
            </div>
            <Button text="Finish lesson" type="accent" onClick={createLesson} />
        </div>
    );
}

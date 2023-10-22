import React, { useState, useEffect } from 'react';
import styles from './question.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AccountLogo from '../../assets/account.png';
import LikeOption from '../../assets/like.png';

const Question = () => {
    const { id } = useParams();
    const [ques, setQues] = useState({});
    const [users, setUsers] = useState({});
    const [views, setViews] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (id) {
            axios
                .get(`http://localhost:5555/ques/${id}`)
                .then((response) => {
                    setQues(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        const updatedviews = ques.views + 1;
        setViews(updatedviews);
        const object = {
            title: ques.title,
            tags: ques.tags,
            views: views
        };
        axios.put(`http://localhost:5555/ques/${id}`, object)
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
            });
    }, [ques]);

    useEffect(() => {
        if (ques.user) {
            axios
                .get(`http://localhost:5555/user/${ques.user}`)
                .then((response) => {
                    setUsers(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [ques.user]);

    const calcDate = (created_on) => {
        const parsedDateTime = new Date(created_on);
        const formattedProvidedDateTime = parsedDateTime.toLocaleString();
        return formattedProvidedDateTime;
    }

    const incrementLikes = () => {
        const updatedLikes = ques.likes + 1;
        const object = {
            title: ques.title,
            tags: ques.tags,
            likes: updatedLikes
        };

        axios.put(`http://localhost:5555/ques/${id}`, object)
            .then((response) => {
                setQues({ ...ques, likes: updatedLikes });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    return (
        <div className={styles.main}>
            {loading ? (
                <p style={{ textAlign: 'center' }}>Loading...</p>
            ) : (
                <div className={styles.centerDiv}>
                    <div className={styles.info}>
                        <h4>{ques.title}</h4>
                        <button>Ask Question</button>
                    </div>
                    <div className={styles.quesInfo}>{calcDate(ques.created_on)} <span className={styles.bold}>Views:</span> {views} <span className={styles.bold}>Likes:</span> {ques.likes}</div>
                    <div className={styles.questionUploader}>
                        <div className={styles.options}>
                            <div className={styles.quesBody}><p>{ques.body}</p></div>
                            <img src={LikeOption} alt="likeIcon" onClick={incrementLikes} />
                        </div>
                        <div className={styles.userDetails}>
                            <div className={styles.timeStamp}>
                                <p>{calcDate(ques.created_on)}</p>
                            </div>
                            <div className={styles.userProfile}>
                                <img src={AccountLogo} alt="accountIcon" />
                                <p className={styles.userName}>{users.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.answers}>
                        <div className={styles.answer}></div>
                    </div>
                    <div className={styles.postAnswers}></div>
                </div>
            )}
        </div>
    );
}

export default Question;

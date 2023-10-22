import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import AccountLogo from '../../assets/account.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LikeOption from '../../assets/like.png'

export default function Home() {
  const [ques, setQues] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/ques')
      .then((response) => {
        setQues(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const incrementLikes = (id, title, tags, currentLikes) => {
    const updatedLikes = currentLikes + 1;
    const object = {
      title: title,
      tags: tags,
      likes: updatedLikes
    };
    axios.put(`http://localhost:5555/ques/${id}`, object)
      .then((response) => {
        setQues((prevQues) =>
          prevQues.map((que) =>
            que._id === id ? { ...que, likes: updatedLikes } : que
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const getUserName = (userId) => {
    axios
      .get(`http://localhost:5555/user/${userId}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return users.name;
  }
  const calcDate = (created_on) => {
    const parsedDateTime = new Date(created_on);
    const formattedProvidedDateTime = parsedDateTime.toLocaleString();
    return formattedProvidedDateTime;
  }
  return (
    <div className={styles.main}>
      {/* Filter (left div) */}
      <div className={styles.filter}>
        jhvbrvsjsd
      </div>

      {/* Questions (right div) */}
      <div className={styles.centerDiv}>
        <div className={styles.info}>
          <h4>All Questions</h4>
          <button>Ask Question</button>
        </div>
        <div className={styles.filters}>
        </div>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading...</p>
        ) : (
          <div className={styles.questions}>
            {ques.map((que, index) => (
              <div className={styles.question} key={que._id}>
                <div className={styles.questionSidebar}>
                  <div className={styles.likes}>
                    <p className={styles.count}>{que.likes}</p>
                    <p className={styles.text}>Likes</p>
                  </div>
                  <div className={styles.views}>
                    <p className={styles.count}>{que.views}</p>
                    <p className={styles.text}>Views</p>
                  </div>
                  <div className={styles.answers}>
                    <p className={styles.count}>{que.answers}</p>
                    <p className={styles.text}>Answers</p>
                  </div>
                </div>
                <div className={styles.questionBody}>
                  <div className={styles.questionBodyDescription}>
                    <Link className={styles.questionLink} to={`/question/${que._id}`}><p className={styles.mainQuestion}>{que.title}</p></Link>
                    <p className={styles.questionDesc}>{que.body}</p>
                    <div className={styles.tags}>
                      {que.tags.map((tag, index) => (
                        <p key={index} className={styles.tag}>{tag}</p>
                      ))}
                    </div>
                  </div>
                  <div className={styles.questionUploader}>
                    <div className={styles.options}>
                      <img src={LikeOption} alt="likeIcon" onClick={() => incrementLikes(que._id, que.title, que.tags, que.likes)} />
                    </div>
                    <div className={styles.userDetails}>
                      <div className={styles.timeStamp}>
                        <p>{calcDate(que.created_on)}</p>
                      </div>
                      <div className={styles.userProfile}>
                        <img src={AccountLogo} alt="accountIcon" />
                        <p className={styles.userName}>{getUserName(que.user)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

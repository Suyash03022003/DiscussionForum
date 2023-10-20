import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import AccountLogo from '../../assets/account.png';
import axios from 'axios'

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
              <div className={styles.question}>
                <div className={styles.questionSidebar}>
                  <div className={styles.views}>
                    <p className={styles.count}>{que.views}</p>
                    <p className={styles.text}>Views</p>
                  </div>
                  <div className={styles.likes}>
                    <p className={styles.count}>{que.likes}</p>
                    <p className={styles.text}>Likes</p>
                  </div>
                  <div className={styles.answers}>
                    <p className={styles.count}>{que.answers}</p>
                    <p className={styles.text}>Answers</p>
                  </div>
                </div>
                <div className={styles.questionBody}>
                  <div className={styles.questionBodyDescription}>
                    <p className={styles.mainQuestion}>{que.title}</p>
                    <p className={styles.questionDesc}>{que.body}</p>
                    <div className={styles.tags}>
                      {que.tags.map((tag, index) => (
                        <p className={styles.tag}>{tag}</p>
                      ))}
                    </div>
                  </div>
                  <div className={styles.questionUploader}>
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
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

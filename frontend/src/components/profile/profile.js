import React from 'react'
import styles from './profile.module.css';
import { CgProfile } from "react-icons/cg";

const Login = () => {

    // const user = {
    //     name: 'John Doe',
    //     email: 'john.doe@example.com',
    //     bio: 'Web Developer',
    //     avatar: 'https://example.com/avatar.jpg',
    //   };

  return (
    <div>
        <h1 className={styles.profileheading}>Profile</h1>
    <div className={styles.profilecontainer}>
    <div className={styles.profileavatar}>
      {/* <img src={user.avatar} alt="User Avatar" /> */}
      <CgProfile size={90}/>

    </div>
    <div className={styles.profileinfo}>
      <h1>Name</h1>
      <p>Email</p>
      <p>Bio</p>
    </div>
  </div>
  </div>
  )
}

export default Login
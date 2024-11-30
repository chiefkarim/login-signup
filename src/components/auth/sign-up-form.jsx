import React, { useState } from 'react';
import styles from './sign-up-form.module.css';
import { BsPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { MdLock } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import {useNavigate} from 'react-router-dom'


const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
  navigate('/signup2')
    //Your validation logic here
    console.log('Form submitted:', { fullName, email, password, phoneNumber });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
   <div className={styles.header}>
          <button className={styles.backButton}>←</button>
          <h2>Create Account</h2>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="fullName">Full Name</label>
            <div className={styles.iconInput}>
              <BsPersonFill className={styles.icon} />
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <div className={styles.iconInput}>
              <MdEmail className={styles.icon} />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.iconInput}>
              <MdLock className={styles.icon} />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className={styles.iconInput}>
              <MdLock className={styles.icon} />
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber">Phone number</label>
            <div className={styles.iconInput}>
              <BsTelephoneFill className={styles.icon} />
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                placeholder="+213"
              />
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>
            Next
          </button>
        </form>
      </div>

       <div className={styles.imageContainer}>
        <img src="/train.jpeg" alt="Train" className={styles.trainImage} />
          <div className={styles.overlay}/>
        <img src="/stream.png" alt="Stream" className={styles.streamImage} />
      </div>
 
    </div>
  );
};

export default SignUpForm;


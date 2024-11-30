
import React, { useState } from 'react';
import styles from './sign-up-form.module.css';
import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        // Add your form submission logic here (API call, etc.)
        console.log({ email, password, rememberMe });

        // Example redirect after successful login (replace with actual logic):
        navigate('/dashboard'); //Or any other page you want to redirect to after login.

    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.header}>
                    <button className={styles.backButton}>←</button>
                    <h2>Welcome Back</h2>
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit}>
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
                    <div className={styles.rememberMe}>
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Log in
                    </button>
                    <p className={styles.signupText}>
                        Don't have an account? <a href='/'>Create account</a>
                    </p>
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

export default SignInForm;

import React, { useState } from 'react';
import styles from './sign-up-form.module.css';
import { BsCalendarDateFill, BsPersonFill, BsGeoAltFill, BsBriefcaseFill } from 'react-icons/bs';
import {useNavigate} from "react-router-dom"

const SignUpForm2 = () => {
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [profession, setProfession] = useState('');
    const [province, setProvince] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        // Add your form submission logic here.  For now, just console logging:
        console.log({ dateOfBirth, profession, province, gender, address });
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.header}>
                    <button onClick={()=>navigate('/')} className={styles.backButton}>←</button>
                    <h2>Create Account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="dateOfBirth">Date of birth</label>
                        <div className={styles.iconInput}>
                            <BsCalendarDateFill className={styles.icon} />
                            <input
                                type="date"
                                id="dateOfBirth"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                placeholder="mm/dd/yyyy"
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="profession">Profession</label>
                        <div className={styles.iconInput}>
                            <BsBriefcaseFill className={styles.icon} />
                            <select
                                id="profession"
                                value={profession}
                                onChange={(e) => setProfession(e.target.value)}
                                required
                            >
                                <option value="">Select Profession</option>
                                {/* Add profession options here */}
                            </select>
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="province">Residential province</label>
                        <div className={styles.iconInput}>
                            <BsGeoAltFill className={styles.icon} />
                            <select
                                id="province"
                                value={province}
                                onChange={(e) => setProvince(e.target.value)}
                                required
                            >
                                <option value="">Select Province</option>
                                {/* Add province options here */}
                            </select>
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="gender">Gender</label>
                        <div className={styles.iconInput}>
                            <BsPersonFill className={styles.icon} />
                            <select
                                id="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                {/* Add other gender options as needed */}
                            </select>
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="address">Address</label>
                        <div className={styles.iconInput}>
                            <BsGeoAltFill className={styles.icon} />
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter your address"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Create Account
                    </button>
                    <p className={styles.loginText}>Already have an account? <a href="/signin">Log in</a></p>
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

export default SignUpForm2;

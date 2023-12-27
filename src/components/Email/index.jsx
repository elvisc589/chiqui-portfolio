import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef, useState, useEffect } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';


export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

    const [localTime, setLocalTime] = useState('');
    useEffect(() => {
        const getLocalTime = () => {
            const now = new Date();
            const offset = -5; // Offset for Eastern Standard Time (EST)
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const estTime = new Date(utc + 3600000 * offset);
            const formattedTime = estTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true});
            setLocalTime(formattedTime);
        };
        getLocalTime();
    }, []); // Empty array ensures this runs once on initial load

    const [data, setData] = useState({
        name: "",
        email: "",
        organization: "",
        services: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        organization: false,
        services: false,
        message: false
    });

    const validateForm = () => {
        let newErrors = {
            name: false,
            email: false,
            organization: false,
            services: false,
            message: false
        };

        // Validation for name
        if (data.name.trim().length < 3 || data.name.trim().length > 50 || /\d/.test(data.name)) {
            newErrors.name = true;
        }

        // Validation for email
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };

        if (!validateEmail(data.email)) {
            newErrors.email = true;
        }

        if (data.organization.trim().length > 150) {
            newErrors.organization = true;
        }
        if (data.services.trim().length > 150) {
            newErrors.services = true;
        }
        if (data.message.trim().length < 2 || data.message.trim().length > 2000) {
            newErrors.message = true;
        }

        // Update the errors state
        setErrors(newErrors);

        // Return the error object
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        // Here you can access the form data from the 'data' state object
        const formErrors = validateForm();

        // Check if there are any errors
        if (Object.values(formErrors).some((error) => error)) {
        // If there are errors, prevent form submission
            return;
        }

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if(response.status == 200){
            setData({
                name: '',
                email: '',
                organization: '',
                services: '',
                message: ''
            })
        }
    };


    return (
        <div className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/elvis_gray.jpg`}
                            />
                        </div>
                        <h2>Let's work</h2>
                        
                    </span>
                    <h2>together</h2>
                    <form>
                            <div className={styles.form}>
                                <div className={styles.question}>
                                    <label>What's your name?</label>
                                    <input 
                                    placeholder='John Doe'
                                    name='name'
                                    value={data.name}
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                    required
                            />
                                    {errors.name && <span className={styles.error}>Invalid</span>}

                                </div>
                                <div className={styles.question}>
                                    <label >What's your email?</label>
                                    <input 
                                    placeholder='john@doe.com'
                                    name='email'
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    required
                                    />
                                    {errors.email && <span className={styles.error}>Invalid</span>}


                                </div>
                                <div className={styles.question}>
                                    <label >What's the name of your organization?</label>
                                    <input 
                                    placeholder='John Doe LLC'
                                    name='organization'
                                    value={data.organization}
                                    onChange={(e) => setData({ ...data, organization: e.target.value })}
                                    />
                                    {errors.organization && <span className={styles.error}>Invalid</span>}

                
                                </div>

                                <div className={styles.question}>
                                    <label >What services are you looking for?</label>
                                    <input 
                                    placeholder='Web Design, Web Development ...'
                                    name='services'
                                    value={data.services}
                                    onChange={(e) => setData({ ...data, services: e.target.value })}
                                    />
                                    {errors.services && <span className={styles.error}>Invalid</span>}

                                </div>

                                <div className={styles.question}>
                                    <label >Your message</label>
                                    <input 
                                    placeholder='Hello Elvis, can you help me with ...'
                                    name='message'
                                    value={data.message}
                                    onChange={(e) => setData({ ...data, message: e.target.value })}
                                    required
                                    />
                                    {errors.message && <span className={styles.error}>Invalid</span>}

                                </div>
                            </div>
                        </form>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                      
                        <Rounded onClick={handleSubmit} backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                       
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2023 © Edition</p>
                        </span>
                        <span>
                            <h3>Local Time</h3>
                            <p>{localTime} EST</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>Socials</h3>
                            <a href="https://www.linkedin.com/in/elvischiqui/">
                            <Magnetic>
                                <p>LinkedIn</p>
                            </Magnetic>
                        </a>
                        </span>
                        <a href="https://github.com/elvisc589">
                        <Magnetic>
                            <p>Github</p>
                        </Magnetic>
                        </a>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}
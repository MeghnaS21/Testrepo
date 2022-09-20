import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import teamdata from './teamData';
import './team.css';

const Team = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zy5pejq', 'template_66e4yis', form.current, '63MCp6I3S1db38w6N')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div className='jobDescContainer row text-center'>
                {
                    teamdata.map((elm) => {
                        const { id, fname, email } = elm;
                        return (
                            <form ref={form} onSubmit={sendEmail} key={id}>
                                <label>{id}</label>
                                <label>Name</label>
                                <input type="text" name="user_name" value={fname} />
                                <label>Email</label>
                                <input type="email" name="user_email" value={email} />
                                <input type="submit" value="Send" />
                            </form>
                        )
                    })
                }



            </div>


        </>

    )
}

export default Team
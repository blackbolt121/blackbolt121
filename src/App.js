import React from "react";

import Id from "./Components/Id";

import './App.css';
import Title from "./Components/Title";
const Main = () => {
    const skills = [
        "Linux",
        "MySQL, PostgreSQL, Oracle and SQLite Databases",
        "Bash and Powershell Scripting",
        "C, C++, Java, Android, Python, PHP and Javascript (Vanilla and NodeJs) programming languages.",
        "Experience with Laravel, FastAPI, Flask y Spring Boot, React Js Frameworks.",
        "Deploy basic services in AWS and Microsoft Azure",
        "Git"
    ];
    const check__list = {
        "color": "rgba(23,106,184,255)",
        "fontSize": "2.5rem"
    }
    const contact = {
        "fa-solid fa-mobile" :              "(442) 128 3990",
        "fa-solid fa-phone":                "(442) 688 2277",
        "fa-solid fa-display":              "https://github.com/blackb0lt121",
        "fa-solid fa-at":                   "rgo1999@hotmail.com"

    };
    return <>
        <div className={"page"}>
            <div className={"line"}></div>
            <div>
                <div className={"content"}>
                    <div>
                        <div>
                            <Id/>
                        </div>
                        <Title title={"CARRER GOALS"}/>
                        <p className={"goals"}>
                            Increase skills and technicals capabilites
                            Manage high-impact software engineering
                            projects within organizations.
                        </p>
                        <Title title={"SKILLS"}/>
                        <div className={"check__list"}>
                            {
                                skills.map( x => {
                                    return <div className={"check__list--item"}>
                                        <i className="fa-solid fa-check" style={check__list}></i>
                                        {x}
                                    </div>
                                })
                            }
                        </div>
                        <Title title={"Contact"} />
                        <div className="check__list">
                            {Object.keys(contact).map( x => {
                                return <div className={"check__list--item"}>
                                    <i className={x} style={check__list}></i>
                                    {contact[x]}
                                </div>
                            })}
                        </div>
                        <Title title={"LANGUAGES"}/>
                        <ul className={"list"}>
                            <li>Spanish (Native)</li>
                            <li>English (Intermediate B1)</li>
                        </ul>
                    </div>
                    <div>
                        <Title title={"Education"}/>
                        <div>
                            <h1>
                                Tecnológico Nacional de México Campus Querétaro
                            </h1>
                            <p>
                                Bachelors Degree in Computer Systems Engineering
                            </p>
                            <ul className={"list"}>
                                <li>Active Member of ISACA Team</li>
                            </ul>
                        </div>
                        <div>
                            <h1>
                                Bootcamps and Online Education
                            </h1>
                            <ul className={"list"}>
                                <li>Front End Devolopment Libraries (freeCodeCamp)</li>
                                <li>Back End Development and APIs (freeCodeCamp)</li>
                                <li>School of Programming and Software Development (Platzi)</li>
                                <li>Java Backend Development (Platzi)</li>
                                <li>Web Backend Development with PHP (Platzi)</li>
                                <li>Backend Development with Python and Django (Platzi)</li>
                                <li>Javascript School (Platzi)</li>
                                <li>Pre Security Path (TryHackMe)</li>
                                <li>Complete Beginner (TryHackMe)</li>
                                <li>Jr Penetration Tester (TryHackMe (In progress))</li>
                            </ul>
                        </div>
                        <Title title={"INTERNSHIP AND PERSONAL PROJECTS"}/>
                        <p>
                            1. During the provision of social service, I made a simple web app with PHP, Javascript,
                            CSS, Bootstrap and Mysql for a survey campain of multiple intelligences and learning
                            styles (Kolb), with feedback of the results to end users. Then I did a report of all the
                            results for research purposes.<br/>
                            2. Creation of a basic mobile and web application with consumption of an API made in
                            vanilla PHP, for the management of pantry inventory control. (PHP, HTML, CSS,
                            Javascript (AJAX) and Android Studio)<br/>
                            3. Creation of a desktop application to extract data from a BanRegio account statement
                            to separate credits and charges, as well as the identification of who issued the
                            payment with Java Swing.<br/>
                            4. Web application made with Laravel Jetstream for inventory control and loan of
                            computer equipment.<br/>
                            5. Web application to list possible tourist destinations in Michoacán made in Laravel
                            and ReactJs.<br/>
                            6. Realization of a small compiler made in C++ with the help of the standard library
                            (STL), object oriented and use of data structure
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Main;
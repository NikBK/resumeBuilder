import React from "react";
import qa from "./QuestionAnswers";
import './resumeStyle.css'
import ReactToPdf from "react-to-pdf";
import Pdf from "react-to-pdf";
import { createRef } from 'react';
import { Link } from "react-router-dom";

const PersonalDetails = () => {
    return <>
        <div className='personal-details'>
            <h3>{qa.filter(obj => obj.q === 'Name')[0].a}</h3>
            <div>Email: {qa.filter(obj => obj.q === 'Email')[0].a}</div>
            <div>Contact no: {qa.filter(obj => obj.q === 'Mobile')[0].a}</div>
            <div className='external-links'>
                <a href={qa.filter(obj => obj.q === 'LinkedIn')[0].a} rel="noreferrer" target='_blank'>LinkedIn</a>
                <a href={qa.filter(obj => obj.q === 'Github')[0].a} rel="noreferrer" target='_blank'>Github</a>
            </div>
        </div>
    </>
}

const EducationDetails = () => {
    return <>
        <div className='education-details'>
            <div className='section-heading'>Education</div>
            <table>
                <thead>
                    <tr>
                        <td>Year</td>
                        <td>Degree/Examination</td>
                        <td>Institution/Board</td>
                        <td>CGPA/Percentage</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{qa.filter(obj => obj.q === 'Education To')[0].a}</td>
                        <td>{qa.filter(obj => obj.q === 'Degree')[0].a} ( {qa.filter(obj => obj.q === 'Discipline')[0].a} )</td>
                        <td>{qa.filter(obj => obj.q === 'School/College/University')[0].a}</td>
                        <td>{qa.filter(obj => obj.q === 'Marks/Percentage/CGPA')[0].a}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}

const ProjectDetails = () => {
    return <>
        <div className='projects-details'>
            <div className='section-heading'>Projects</div>
            <div>
                <h5>{qa.filter(obj => obj.q === 'Title')[0].a} | </h5>
                <a href={qa.filter(obj => obj.q === 'Link')[0].a} rel="noreferrer" target='_blank'>link</a>
                <div className='project-description-container'>
                    {qa.filter(obj => obj.q === 'Project Description')[0].a
                        .split('.')
                        .map(el => {
                            if (el.trim() !== '')
                                return <li key={el}>{el}</li>
                            return null;
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

const SkillsDetails = () => {
    return <>
        <div className='skills-details'>
            <div className='section-heading'>Skills</div>
            <div className='skills-container'>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)' }}>
                    {qa.filter(obj => obj.q === 'ex: Java 4, JS 3')[0].a
                        .split(',')
                        .map((el, ind) => {
                            let res = el.trim().split(' ');
                            let star = res[1];
                            return <>
                                <div key={ind + el} style={{ display: "flex", alignItems: 'center' }}>
                                    <span>{res[0]} </span>
                                    {starMaker(star)}
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

const ExperienceDetails = () => {
    return <>
        <div className='experience-details'>
            <div className='section-heading'>Experience</div>
            <div>
                <h5>{qa.filter(obj => obj.q === 'Organization')[0].a} | </h5>
                <span><i>{qa.filter(obj => obj.q === 'Position')[0].a}</i></span>
                <div className='experience-info'>
                    <div>{qa.filter(obj => obj.q === 'Experience Description')[0].a}</div>
                    <div>From : {qa.filter(obj => obj.q === 'Experience From')[0].a}</div>
                    <div>Till : {qa.filter(obj => obj.q === 'Experience To')[0].a}</div>
                </div>
            </div>
        </div>
    </>
}

const Resume = ({ setPage }) => {
    const ref = createRef();
    let pdfName = qa.filter(el => el.q === 'Name')[0].a.toString() + 'Resume';

    return (
        <>
            <div ref={ref} className='resume-container'>

                <PersonalDetails />

                <EducationDetails />

                <ProjectDetails />

                <SkillsDetails />

                <ExperienceDetails />

            </div>

            <ReactToPdf targetRef={ref} filename={pdfName}>
                {({ toPdf }) => (
                    <button onClick={toPdf} id='download'>Generate pdf</button>
                )}
            </ReactToPdf>

            {/* Another approach */}
            {/* <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf now</button>}
            </Pdf> */}

            <br />
            <Link to="/hobbies">
                <button id='next' onClick={() => setPage(prev => prev - 1)}>
                    Prev section
                </button>
            </Link>
        </>
    )
}

function starMaker(star) {
    let stars = [];
    star = star > 5 ? 5 : Math.round(star);
    for (let i = 0; i < star; i++) {
        stars.push(<span style={{ display: 'inline-block', fontSize: 25, color: '#f8b715' }}> &#9733; </span>);
    }
    if (star < 5) {
        for (let i = star; i < 5; i++)
            stars.push(<span style={{ display: 'inline-block', fontSize: 25, color: 'grey' }}> &#9733; </span>)
    }
    return stars
}

export default Resume;
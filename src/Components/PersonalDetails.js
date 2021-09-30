import { useState } from "react";
import { Link } from "react-router-dom";
import qa from './QuestionAnswers';

const InputField = ({ placeholder, handleChange }) => {
    const [showLegend, setShowLegend] = useState(false);
    return <div className='input-element'>
        <fieldset>
            {showLegend && {} && <legend>{placeholder}</legend>}
            <input
                onChange={handleChange}
                type='text'
                id={placeholder}
                placeholder={placeholder}
                onClick={() => setShowLegend(true)} />
        </fieldset>
    </div>
}

const PersonalDetails = ({ setPage }) => {
    const handleChange = (e) => {
        qa.map(el => {
            if (e.target.id === el.identity) {
                return el.a = e.target.value;
            }
        })
    }
    return <>
        <div id='input-fields-container'>
            <InputField placeholder='Name*' handleChange={handleChange} />
            <InputField placeholder='Email*' handleChange={handleChange} />
            <InputField placeholder='Mobile*' handleChange={handleChange} />
            <InputField placeholder='LinkedIn*' handleChange={handleChange} />
            <InputField placeholder='Github*' handleChange={handleChange} />
            <InputField placeholder='ex: Java 4, JS 3*' handleChange={handleChange} />
        </div>
        <Link to="/resumeBuilder/education">
            <button id='next' onClick={() => setPage(prev => prev+1)}>
                Next section
            </button>
        </Link>
    </>
}

export default PersonalDetails;
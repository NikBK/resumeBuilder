import { useState } from "react";
import { Link } from "react-router-dom";
import qa from './QuestionAnswers';
import './resumeStyle.css';

const TextArea = ({ placeholder, handleChange }) => {
    const [showLegend, setShowLegend] = useState(false);
    return <div className='input-element'>
        <fieldset>
            {showLegend && {} && <legend>{placeholder}</legend>}
            <textarea 
                type='text' 
                rows='5' 
                columns='20' 
                placeholder={placeholder}
                onChange={handleChange}
                id={placeholder} 
                onClick={() => setShowLegend(true)} />
        </fieldset>
    </div>
}

const Hobbies = ({ setPage }) => {
    const handleChange = (e) => {
        qa.map(el => {
            if(e.target.id === el.identity){
                return el.a = e.target.value;
            }
        })
    }
    return <>
        <div id='input-fields-container'>
            <TextArea handleChange={handleChange} placeholder='Hobbies Description*' />
        </div>
        <Link to="/projects">
            <button id='next' onClick={() => setPage(prev => prev-1)}>
                Prev section
            </button>
        </Link>
        <Link to="/success">
            <button id='next' onClick={() => setPage(prev => prev+1)}>
                Next section
            </button>
        </Link>
    </>
}

export default Hobbies;
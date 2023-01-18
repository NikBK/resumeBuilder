import { useState } from "react";
import { Link } from "react-router-dom";
import qa from './QuestionAnswers';
import './resumeStyle.css';

const InputField = ({ placeholder, handleChange }) => {
    const [showLegend, setShowLegend] = useState(false);
    return <div className='input-element'>
        <fieldset>
            {showLegend && {} && <legend>{placeholder}</legend>}
            <input
                onChange={handleChange}
                id={placeholder}
                type='text'
                placeholder={placeholder}
                onClick={() => setShowLegend(true)} />
        </fieldset>
    </div>
}

const DatePicker = ({ placeholder, handleChange }) => {
    return <div className='input-element'>
        <fieldset>
            <legend>{placeholder}</legend>
            <input
                onChange={handleChange}
                id={placeholder}
                type='date'
                placeholder={placeholder} />
        </fieldset>
    </div>
}

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

const CheckType = ({ placeholder, handleChange }) => {
    const [showLegend, setShowLegend] = useState(false);
    return <div className='input-element'>
        <fieldset>
            {showLegend && {} && <legend>{placeholder}</legend>}
            <div style={{ backgroundColor: 'white', color: 'black', minWidth: '400px', textAlign: 'left', cursor: 'pointer' }} >
                <input
                    onChange={handleChange}
                    id={placeholder}
                    type='checkbox'
                    style={{ margin: '5px', padding: '0', height: '20px', minWidth: '10px' }} />
                <span onClick={() => setShowLegend(true)}>{placeholder}</span>
            </div>
        </fieldset>
    </div>
}

const Experience = ({ setPage }) => {
    const handleChange = (e) => {
        qa.map(el => {
            if (e.target.id === el.identity) {
                return el.a = e.target.value;
            }
            return null;
        })
    }
    return <>
        <div id='input-fields-container'>
            <InputField handleChange={handleChange} placeholder='Organization*' />
            <InputField handleChange={handleChange} placeholder='Position*' />
            <CheckType handleChange={handleChange} placeholder='Present Job' />
            <DatePicker handleChange={handleChange} placeholder='Experience From*' />
            <DatePicker handleChange={handleChange} placeholder='Experience To*' />
            <TextArea handleChange={handleChange} placeholder='Experience Description*' />
        </div>
        <Link to="/education">
            <button id='next' onClick={() => setPage(prev => prev - 1)}>
                Prev section
            </button>
        </Link>
        <Link to="/projects">
            <button id='next' onClick={() => setPage(prev => prev + 1)}>
                Next section
            </button>
        </Link>
    </>
}

export default Experience;
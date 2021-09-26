import { useState } from "react";
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

const Hobbies = () => {
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
    </>
}

export default Hobbies;
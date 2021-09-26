import { useState } from "react";
import qa from './QuestionAnswers';
import './resumeStyle.css';

const InputField = ({ placeholder, handleChange  }) => {
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

const TextArea = ({ placeholder, handleChange  }) => {
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

const Projects = () => {
    const handleChange = (e) => {
        qa.map(el => {
            if(e.target.id === el.identity){
                return el.a = e.target.value;
            }
        })
    }
    return <>
        <div id='input-fields-container'>
            <InputField handleChange={handleChange} placeholder='Title*' />
            <InputField handleChange={handleChange} placeholder='Link*' />
            <TextArea handleChange={handleChange} placeholder='Project Description*' />
        </div>
    </>
}

export default Projects;
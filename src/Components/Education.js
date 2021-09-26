import { useState } from "react";
import qa from './QuestionAnswers';

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
            <input onChange={handleChange} id={placeholder} type='date' placeholder={placeholder} />
        </fieldset>
    </div>
}

const Education = () => {
    const handleChange = (e) => {
        qa.map(el => {
            if(e.target.id === el.identity){
                return el.a = e.target.value;
            }
        })
    }
    return <>
        <div id='input-fields-container'>
            <InputField handleChange={handleChange} placeholder='School/College/University*' />
            <InputField handleChange={handleChange} placeholder='Degree*' />
            <InputField handleChange={handleChange} placeholder='Discipline*' />
            <InputField handleChange={handleChange} placeholder='Marks/Percentage/CGPA*' />
            <DatePicker handleChange={handleChange} placeholder='Education From*' />
            <DatePicker handleChange={handleChange} placeholder='Education To*' />
        </div>
    </>
}

export default Education;
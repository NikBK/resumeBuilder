import { useState } from "react";
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

const PersonalDetails = () => {
    const handleChange = (e) => {
        qa.map(el => {
            if(e.target.id === el.identity){
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
    </>
}

export default PersonalDetails;
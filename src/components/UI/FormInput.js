import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
    let {
        inputLabel,
        inputType,
        inputName,
        inputValue,
        onHandleChange,
        customClass,
    } = props;

    return (
        <>
            <div className={customClass}>
                <label htmlFor={inputName}>{inputLabel}</label>
                <input
                    type={inputType}
                    name={inputName}
                    id={inputName}
                    value={inputValue}
                    onChange={onHandleChange}
                />
            </div>
        </>
    );
};

export default FormInput;

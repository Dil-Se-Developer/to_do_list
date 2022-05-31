import React from 'react'
import { useNavigate } from 'react-router-dom'
import SubHeader from '../UI/SubHeader'
import FormInput from '../UI/FormInput'
import './AddContact.css'

const AddContact = () => {

    const Navigate = useNavigate()

    const onAddContact = (event) => {
        event.preventDefault();
        Navigate('/');
    }

    return (
        <>
            <SubHeader
                customClass='subheader_section'
                subHeading='Add Contact'
                btnHandler={onAddContact}
                btnName={'Cancel'}
            />
            <div className="form_card">
                <form>
                    <FormInput
                        customClass={"form_input"}
                        inputLabel="Name:-"
                        inputType="text"
                        inputName="name"
                    // inputValue={formValues.firstname}
                    // onHandleChange={handleChange}
                    />
                    <FormInput
                        customClass={"form_input"}
                        inputLabel="Email ID:-"
                        inputType="email"
                        inputName="emailid"
                    // inputValue={formValues.emailid}
                    // onHandleChange={handleChange}
                    />
                </form>
            </div>
        </>
    )
}

export default AddContact
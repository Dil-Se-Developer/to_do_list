import React from 'react'
import './SubHeader.css'

const SubHeader = (props) => {
    let { customClass, subHeading, btnHandler, btnName } = props
    return (
        <div className={customClass}>
            <h2>{subHeading}</h2>
            <button onClick={btnHandler}>{btnName}</button>
        </div>
    )
}

export default SubHeader
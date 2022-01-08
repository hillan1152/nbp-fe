import React from 'react'

export default function Confirmation(props) {
    let { prospect } = props;
    console.log("prospect", prospect)
    return (
        <div>
            <h3>Please Confirm If Information is Correct</h3>
            <div style={{ display: 'flex'}}>
                <h4>Name: </h4>
                <p>{prospect.first_name} {prospect.last_name}</p>
            </div>
        </div>
    )
}

import React from 'react'

export default function Alerts(props) {
    const capitalise = (word) =>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        props.alert && <div>
           <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{capitalise(props.alert.type)}</strong> {props.alert.messege}

            </div>
        </div>
    )
}

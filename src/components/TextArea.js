import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        // console.log("Convert to Uppercase Clicked")
        // setText("You have chosen to Convert to Uppercase")
        props.showAlerts('success','Converted to Upper Case')
        let up = text.toUpperCase()
        setText(up)

    }
    const handleDnClick = () => {
        // console.log("Convert to Uppercase Clicked")
        // setText("You have chosen to Convert to Uppercase")
        props.showAlerts('success','Converted to Lower Case')
        let up = text.toLowerCase()
        setText(up)

    }

    const handleOnChange = (event) => {
        // console.log("Textarea value changed")
        setText(event.target.value)
    }

    return (
        <>
            <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
                <div className="mb-3">
                    <h1> {props.heading} </h1>
                    <textarea value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-dark" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-dark mx-3" onClick={handleDnClick}>Convert to Lowercase</button>

                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters </p>

                <h2>Preview</h2>
                <p>{text.length>0?text: 'Enter something in the above textbox to preview it here'}</p>
            </div>

        </>
    )
}

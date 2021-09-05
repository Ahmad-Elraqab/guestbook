import React from "react";
import './book.css'

const book = props => (
    <div className="book">
        <h5>{props.name} - {props.date}</h5>
        <h5>{props.email}</h5>
        <h5>{props.phoneNumber}</h5>
        <h5>{props.notes}</h5>
    </div>
)

export default book
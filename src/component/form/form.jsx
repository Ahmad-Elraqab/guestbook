import React from "react";
import './form.css'

const form = props => (

    <form className='form' onSubmit={props.handleSubmit}>

        <div className='form-grid'>

            <div className="form-grid-item">
                <label>Name:</label><br />
                <input type="text" id="name" required />
            </div>
            <div className="form-grid-item">
                <label>E-Mail:</label><br />
                <input type="text" id="email" required />
            </div>
            <div className="form-grid-item">
                <label>Phone Number:</label><br />
                <input type="text" id="phoneNumber" required />
            </div>
            <div className="form-grid-item">
                <label>Notes:</label><br />
                <input type="text" id="notes" required />
            </div>

            <button>Submit</button>

        </div>

    </form>
);

export default form
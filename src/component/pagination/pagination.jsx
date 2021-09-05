import React from "react";
import './pagination.css'

const pagination = props => (

    <div className="pagination">

        <span onClick={() => props.back()} className="button">&#x3c;</span>
        <div>{props.currentPage} / {props.pagesCount} </div>
        <span onClick={() => props.next()} className="button">&#x3e;</span>

    </div>
)

export default pagination
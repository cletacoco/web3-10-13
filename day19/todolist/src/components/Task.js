import React from 'react'

function Task(props){
    
    let day = new Date()
    
    return(
    <div className="task">
        <input type="checkbox" name="" id=""/>
        <p>{props.할일}</p>
        <span className="make-time">{day.getFullYear()}-{day.getMonth()+1}-{day.getDate()}</span>
        <div className="delete">삭제</div>
    </div>
    )
}

export default Task;
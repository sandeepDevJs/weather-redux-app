import React from 'react'

export default function FetchErr(props) {
    let errMsg = (props.msg) ? props.msg : "Could Not Found Data!!"
    return (
        <div className="bg-danger">
            <p style={{color:"White", paddingLeft:"5px"}}>{errMsg}</p>
        </div>
    )
}

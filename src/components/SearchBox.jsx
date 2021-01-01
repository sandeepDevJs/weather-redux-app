import React from 'react'

export default function SearchBox() {
    return (
        <div className="container searchBox-container">
            <div className="row">
                
                <div className="col-md-6 offset-md-3">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search City" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

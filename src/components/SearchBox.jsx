import React from 'react'
import { fetchByCity } from "../actions"
import { connect } from "react-redux"

class SearchBox extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            text:""
        }
    }

    fetchData = () =>{
        this.props.fetchByCity(this.state.text)
    }

    render(){
        return (
            <div className="container searchBox-container">
                <div className="row">
                    
                    <div className="col-md-6 offset-md-3">
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Search City" 
                                onChange={ e => this.setState({ text: e.target.value }) }    
                            />
                            <button className="btn btn-primary" onClick={this.fetchData} >Search</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default connect(null, {fetchByCity})(SearchBox)
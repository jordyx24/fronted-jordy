import axios from "axios"
import React, { Component } from "react"

export default class ThoughsBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items:[],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch("https://jordy-capstone-pj.herokuapp.com/thoughs/get")
        .then(response => response.json())
        .then(data => {
            this.setState({
                items: data,
                loading: false
            })
        })

        .catch(error => {
            console.log("Error getting items ", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderThoughs() {
        const itemsHTML = this.state.items.map(item => (
            <div className="single-t-container" key={item.id}>
            <p>"{item.thoughs}"     by {item.name}</p>
            </div>
        ))

        return itemsHTML
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="main-container">
                <h1>These are your thoughs</h1>
                <div className="single-t-container">
                <div className="loading">Loading...</div>      
                </div>

                

                
            </div>
            )
        }

        else if (this.state.error) {
            return (
                <div className="main-container">
                <h1>These are your thoughs</h1>
                <div className="single-t-container">
                <div className="error">An error occured... Please try again later.</div>
                </div>

                

                
            </div>
            )
        }

        else {
            return (
                <div className="main-container">
                <h1>These are your thoughs</h1>
                <div className="single-t-container">
                        {this.renderThoughs()}
                </div>

                

                
            </div>
            )
        }
    }
}
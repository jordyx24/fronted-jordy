import React, { Component } from "react";
import axios from "axios";

export default class AddItems extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            nameInput: "",
            thoughsInput: "",
            loading: true,

        }

        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value})
        console.log("hola", event);
    }

    submitHandler(event) {
        

        this.setState({
            loading: true,
            error: false
        })

        axios.post("https://jordy-capstone-pj.herokuapp.com/thoughs", {
         
            thoughs: this.state.thoughsInput,
            name: this.state.nameInput
            })
        
      
        .then(data => {
            if (data.id) {
                this.props.history.push("/thoughs")
            }
        })

        .catch(error => {
            console.log("Error adding item ", error)

            this.setState({
                loading: false,
                error: true
            })
        })
        


    }

     

     

    
    
    render() {
   


        return(
            <div className= "main-add-container">
            
                <h1>What's on your mind?</h1>

        

            <div className="add-container">

            <form onSubmit= {this.submitHandler} className="form-add">
                <div className="form_group field" >
                    

                    <div className="form__group field">
                        <input 
                        type="input" 
                        className="form__field" 
                        placeholder="" 
                        name="nameInput" id='name' 
                        value={this.state.nameInput}
                        onChange={this.changeHandler}
                        required />
                        <label htmlFor="name" className="form__label">What's your name?</label>
                    </div>
                    <div className="form__group field">
                        <input 
                        type="input" 
                        className="form__field" 
                        placeholder="" 
                        name="thoughsInput" id='name' 
                        value={this.state.thoughsInput}
                        onChange={this.changeHandler}
                        required />
                        <label htmlFor="name" className="form__label">What's on your mind?</label>
                    </div>

                    <button type="submit" className="submit-button"  >Got it</button>
                </div>
            </form>
            
            
            
            </div>

            

            </div>
               

            
                 
            

            

        );
    }
}
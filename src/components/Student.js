import React, { Component } from 'react';
import axios from 'axios';

import { Slider } from 'primereact/slider';

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: ' ',
            username: ' ',
            section: ' ',
            Branch: ' ',
            addres: ' ',
            val1: null,
            file: null


        };
        this.onChangeSlider1 = this.onChangeSlider1.bind(this);
        this.uploadSingleFile = this.uploadSingleFile.bind(this)

    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }
    onChangeSlider1(e) {
        this.setState({ val1: e.value });
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {

        let imgPreview;
        if (this.state.file) {
            imgPreview = <img src={this.state.file} alt='upload image' />;
        }
        const { userId, username, section, Branch, addres } = this.state
        return (

            <>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <hr />
                        <div className="form-group preview">
                            {imgPreview}
                        </div>
                        <div className="form-group">
                            <input type="file" style={{ display: " " }} className="form-control" onChange={this.uploadSingleFile} />
                        </div>
                        <label>StudentId:</label>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler} /><br />
                        <label>SName:</label>
                        <input type="text" name="username" value={username} onChange={this.changeHandler}></input><br />
                        <label>Branch:</label>
                        <input type="text" name="Branch" value={Branch} onChange={this.changeHandler}></input><br />
                        <label>section:</label>
                        <input type="text" name="section" value={section} onChange={this.changeHandler}></input><br />
                        <label>addres:</label>
                        <input type="text" name="addres" value={addres} onChange={this.changeHandler}></input><br />

                        <h3>Basic: {this.state.val1}</h3>
                        <Slider value={this.state.val1} onChange={this.onChangeSlider1} style={{ width: '14em' }} />
                        <hr />
                        <button type="submit"> submit</button>

                    </form>

                </div>
                <div >

                </div>
            </>

        )
    }

}

export default Student
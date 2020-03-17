import React, {Component} from 'react'
import axios from 'axios'
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import './Register.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { DropDownList } from '@progress/kendo-react-dropdowns';

import { Rating } from 'primereact/rating';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: ' ',
            lastname: ' ',
            gmail: ' ',
            phonenumber: ' ',
            Address: ' ',
            password: ' ',
            Countries: [
                { label: "Select country", value: 35},
                { label: "Albania", value: 355},
                { label: "Argentina", value: 54},
                { label: "Austria", value: 43},
                { label: "Cocos Islands", value: 61},
                { label: "Kuwait", value: 965},
                { label: "Sweden", value: 46},
                { label: "Venezuela", value: 58}
            ],
            date: new Date(),
            fruit: '',
            textarea: '',
            val2:null
        }
        this.dateChange = this.dateChange.bind(this);
       }
        dateChange(date) {
        this.setState({
        date: date
     });
    }
    changeHandler = (e) => {
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
      const {firstname,lastname,gmail,phonenumber,Address,password,Countries,textarea,val2}=this.state
        return (
            // <form>
            //     <h3>Sign Up</h3>

            //     <div className="form-group">
            //         <label>First name</label>
            //         <input type="text" className="form-control" placeholder="First name" />
            //     </div>

            //     <div className="form-group">
            //         <label>Last name</label>
            //         <input type="text" className="form-control" placeholder="Last name" />
            //     </div>

            //     <div className="form-group">
            //         <label>Email address</label>
            //         <input type="email" className="form-control" placeholder="Enter email" />
            //     </div>

            //     <div className="form-group">
            //         <label>Password</label>
            //         <input type="password" className="form-control" placeholder="Enter password" />
            //     </div>

            //     <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            //     <p className="forgot-password text-right">
            //         Already registered <a href="#">sign in?</a>
            //     </p>
            // </form>


            <div className="shiva1">

                <div className="dinesh">
                    <div className="col-md-offSet-3 col-md-6">

                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                FirstName:<input type="text" name="firstname" placeholder="First name" className="form-control"
                                    value={firstname} onChange={this.changeHandler} />

                            </div>
                            <div className="form-group">
                                LastName:<input type="text" name="lastname" placeholder="LastName " className="form-control"
                                    value={lastname} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                Gender:
                                <div onChange={this.changeHandler.bind(this)}>
                                    <input type="radio" value="MALE" name="gender" /> Male
                                <input type="radio" value="FEMALE" name="gender" /> Female
                                 </div>
                            </div>
                            <div className="form-group">
                                Gmail:<input type="text" name="gmail" placeholder="Gmail" className="form-control" value={gmail}
                                    onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                Phone Number:<input type="text" name="phonenumber" placeholder=" Phone Number" value={phonenumber}
                                    onChange={this.changeHandler} className="form-control" />
                            </div>
                            <div className="form-group">
                                Select Country
                                <Select options={Countries} />
                            </div>
                            <div className="form-group">
                                    Select State:
                                    <select value={this.state.value} onChange={this.changeHandler}>
                                    <option value="Telangana">Telangana</option>
                                    <option value="ap">ap</option>
                                    <option value="karnataka">karnataka</option>
                                    <option value="thamilnadu">thamilnadu</option>
                                </select>

                            </div>
                            <div className="form-group">
                            Select Hobbie :
                            <input onChange={this.changeHandler} type="checkbox" name="fruit" value="Cricket" />Cricket
                            <input onChange={this.changeHandler} type="checkbox" name="fruit" value="batminten" />batminten
                            <input onChange={this.changeHandler} type="checkbox" name="fruit" value="chess" />chess
                            </div>

                            <div className="form-group">
                                <label> Select Date :</label>
                                <DatePicker selected={this.state.date} onChange={this.dateChange}/>
                            </div>

                            <div className="form-group">
                                Address:<input type="text" name="Address" placeholder="Address" value={Address} onChange={this.changeHandler}
                                className="form-control" />
                            </div>

                            <div className="form-group">
                                Addtional Comments
                                <textarea name="textarea" value={textarea} onChange={this.changeHandler} cols={60} rows={3} />
                            </div>

                            <div className="form-group">
                                Password:<input type="text" name="password" placeholder="Password" value={password}
                                onChange={this.changeHandler} className="form-control" />
                            </div>

                           Rating
                            <Rating value={val2} name="val2" cancel={false}  onChange={this.changeHandler} />
                            <button className="btn btn-primary btn-block" type="submit">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}



export default Register
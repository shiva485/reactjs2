import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: '',
      userId: '',
      title: ''
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1' + this.props.match.params.id)
      .then(response => {
        this.setState({
          id: response.data.id,
          userId: response.data.userId,
          title: response.data.title
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  onChangePersonName(e) {
    this.setState({
      id: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      userId: e.target.value
    })
  }
  onChangeGstNumber(e) {
    this.setState({
      title: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      id: this.state.id,
      userId: this.state.userId,
      title: this.state.title
    };
    axios.post('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push('/index');
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Person Id:  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.id}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>UserId: </label>
            <input type="text"
              className="form-control"
              value={this.state.userId}
              onChange={this.onChangeBusinessName}
            />
          </div>
          <div className="form-group">
            <label>Title: </label>
            <input type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeGstNumber}
            />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Update Business"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default Edit
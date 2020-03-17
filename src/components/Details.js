import React, { Component } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';


class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],


        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
            })

    }

    deleteUser(userId) {
        if (window.confirm('are you sure')) {
            fetch('https://jsonplaceholder.typicode.com/posts/' + userId, {
                method: 'DELETE'
                // header: {
                //     'Accept': 'application/json',
                //     'content-type': 'application/json'

                // }
            })
        }
    }

    editproduct(productid) {
        console.log(productid)
    }
    render() {
        const { posts } = this.state
        return (


            <div  >

                {/* {posts.length ?
                    posts.map(post => <div key={post.id}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>UserId</th>
                                    <th>title</th>
                                </tr>
                            </thead>
                            <tbody  >
                                <tr>

                                    <td>{post.id}</td>
                                    <td> {post.userId}</td>
                                    <td>  {post.title}</td>
                                    <button className="mr-2" onClick={() => this.deleteUser(post.userId)} variant="dangar">Delete</button>
                                </tr>
                            </tbody>
                        </table>
                    </div>) :
                    null
                } */}

                <table className="table table-hover"></table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>UserId</th>
                        <th>title</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.length ?
                        posts.map(
                            post =>
                                <div key={post.id} >

                                    <tr>

                                        <td>{post.id}</td>
                                        <td> {post.userId}</td>
                                        <td>  {post.title}</td>
                                        <button className="mr-2" onClick={() => this.deleteUser(post.id)} variant="dangar">Delete</button>
                                        <td>
                                            <Link type="button" to={"/edit/" + post.id} >Edit</Link>
                                        </td>
                                        
                                    </tr>

                                </div>) :
                        null


                    }
                </tbody>
            </div>





        )
    }
}

export default Details











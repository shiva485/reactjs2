import React, {Component} from 'react';
import {Rating} from 'primereact/rating';
import Accordions from './Accordions'
import Imageupload from './Imageupload'


export class Ratings extends Component {

    constructor() {
        super();
        this.state = {
            val1: null,
            val2: null
        };
    }

    render() {
        return (  
            <> 
             <div>
                   <Imageupload/>
            </div>
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Rating</h1>
                        <p>Rating components is a star based selection input.</p>
                    
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Basic {this.state.val1}</h3>
                    <Rating value={this.state.val1} onChange={(e) => this.setState({val1: e.value})} />

                    <h3>No Cancel {this.state.val2}</h3>
                    <Rating value={this.state.val2} cancel={false} onChange={(e) => this.setState({val2: e.value})} />

                    <h3>ReadOnly</h3>
                    <Rating value={5} readonly={true} stars={10} cancel={false} />

                    <h3>Disabled</h3>
                    <Rating value={8} disabled={true} stars={10} />
                </div>
                
            </div>
            <div>
                   <Accordions/>
            </div>

            </>
        )
    }
}
import React from 'react';

export class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            dateString: Date().toString()
        }
    }
    render() {
        setInterval(()=>{
            this.setState({
                dateString: Date().toString()
            })
            console.log('HI');
        },1000)
        return (
            <div>
                <h1>{this.state.dateString}</h1>
            </div>
        );
    }
}
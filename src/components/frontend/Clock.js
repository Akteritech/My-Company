import React from 'react';

class Clock extends React.Component {
        state ={ date: new Date() };

    
    componentDidMount(){
       this.clockTimer = setInterval(() => this.tick(), 1000);
    }
    componentWillMount(){
         clearInterval(this.clockTimer);
    }
    tick(){
        this.setState({
            date: new Date(),
        });
    }
    render(){
        return (
        <h1 className="heading">
            <span className="text">{new Date().toLocaleTimeString(this.props.locale)}

            </span>
        </h1>
        );
    } 
}
export default Clock;
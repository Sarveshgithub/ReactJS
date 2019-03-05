import React, { Component } from 'react'

class Header extends Component {
    //contructors 
    constructor(props) {
        super(props);
        this.state = {
            title: 'keywords: ',
            keywords: ''
        }
    }
    //onchange events
    onchange(event) {
        this.setState({ keywords: event.target.value })
        console.log('values::', event.target.value);
    }
    //render functions
    render() {
        return (
            <header>
                <div className="logo">
                    Logo
                </div>
                <input onChange={this.onchange.bind(this)} />
                <div>
                    {this.state.title}
                    {this.state.keywords}
                </div>
            </header>
        )
    }
}

export default Header;

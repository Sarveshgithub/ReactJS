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
        this.setState({ keywords: event.target.value });
        this.props.searchStr(event.target.value);
    }
    //render functions
    render() {
        return (
            <header>
                <div className="logo">
                    Logo
                </div>
                <input onChange={this.onchange.bind(this)} />
            </header>
        )
    }
}

export default Header;

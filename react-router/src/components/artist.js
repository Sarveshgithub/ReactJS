import React, { Component } from 'react';
import Header from './header'
// REQUESTS URL
const URL_ARTIST = 'http://localhost:3004/artists'

class Home extends Component {
    constructor(props) {
        console.log(props)
        super(props)

        this.state = {
            artists: ''
        }
    }

    componentDidMount() {
        fetch(URL_ARTIST, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.setState({ artists: json })
            })
    }


    render() {
        return (
            <div>
                <Header />
                Hello artist
            </div>
        )
    }
}

export default Home;
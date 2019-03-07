import React, { Component } from 'react'
import Banner from '../components/banner'
import ArtistsList from '../components/artist'

const URL_Artist = 'http://localhost:3004/artists'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: ''
        }
    }
    componentDidMount() {
        fetch(URL_Artist, {
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
                <Banner />
                <ArtistsList allArtists={this.state.artists} />
            </div>
        )
    }
}

export default Home;
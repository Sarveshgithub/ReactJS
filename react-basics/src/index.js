import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';
//Components import from components folders
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: JSON,
            filterNews:JSON
        }
    }
    filterNews(keywords) {
        let filterBytitle = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        });
        this.setState({filterNews:filterBytitle})
    }
    render() {
        return (
            <div>
                <Header searchStr={keywords => this.filterNews(keywords)} />
                <NewsList news={this.state.filterNews} />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
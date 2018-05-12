import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Search_Bar from './components/heading.jsx'
import VDL from './components/VideoList.jsx'
import VDLD from './components/Description.jsx'
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyCf7pfH3mRKmkqQNFHPgXaRnhHDpXQQBLA';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null }

        this.videoSearch('surfboards')
    }

        videoSearch(term){

            YTSearch({ key: API_KEY, term: term }, data => { this.setState({ videos: data, selectedVideo: data[0] }); });
        }
    

    render() {
        return (
            <div>
                <Search_Bar onSearchTermChange={term => this.videoSearch(term).bind(this)} />
                <VDLD video={this.state.selectedVideo} />
                <VDL onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />

            </div>);
    }

}

ReactDOM.render(<App />, document.getElementById('root'));





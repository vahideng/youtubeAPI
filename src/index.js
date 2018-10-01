import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCI3HsGl3nfC99jw7oy_oItKCfzC1rxXlA";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo :null
    };
    this.videoSearch("na mehraboon")
  }

  videoSearch(term) {
    YTSearch({key: API_KEY,term: term}, (videos) => {
      this.setState({
        videos :videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    
    return (
      <div>
      <SearchBar onSearchTermChanged= {term=>this.videoSearch(term)}/>
      <VideoDetails video={this.state.selectedVideo} />
      <VideoList  onClickVideo={(video)=>this.setState({selectedVideo : video})} videos={this.state.videos}/>
    </div>
  );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

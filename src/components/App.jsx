
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.videos,
      nowPlaying: props.videos[0]
      
    };
    
  }

  processSearch(input) {
    console.log(input);
    window.searchYouTube(input);
  }

  updateState(data) {
    console.log(data);
    this.setState({data: data});
  }
 
  videoListEntryOnClick(clicked) {
    this.setState({nowPlaying: clicked});
  }



  // searchYT (query) {

  //   $.ajax({
  //     url: 'https://www.googleapis.com/youtube/v3/search',
  //     type: 'GET',
  //     data: $.extend({
  //       key: 'AIzaSyCZjYAHiCyd95PEhnKty730V0h7QsQ3grw',
  //       q: query,
  //       part: 'snippet'
  //     }, 
  //     {maxResults: 5, pageToken: $('#pageToken').val()}),

  //     contentType: 'application/json',
  //     success: function(data) {
  //       this.setState({data: data.items});
  //     },
  //     error: function(data) {
  //       console.log('FAILED to load data!');
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <nav className="navbar">
         
          <div className="col-md-6 offset-md-3">
            <div><Search onClick={this.processSearch.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer nowPlaying={this.state.nowPlaying} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.props.videos} onClick={this.videoListEntryOnClick.bind(this)}/></div>
          </div>
        </div>
      </div>
      
    );
      
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

var searchYouTube = (query, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: $.extend({
      key: 'AIzaSyCZjYAHiCyd95PEhnKty730V0h7QsQ3grw',
      q: query,
      part: 'snippet'
    }, 
    {maxResults: 5, pageToken: $('#pageToken').val()}),

    contentType: 'application/json',
    success: function(data) {
      console.log('returned from ajax: ');
      console.log(data.items);
      callback(data.items);
    },
    error: function(data) {
      console.log('FAILED to load data!');
    }
  });
};

window.searchYouTube = searchYouTube;

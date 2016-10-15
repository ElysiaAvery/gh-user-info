var apiKey = require('./../.env').apiKey;

function Repos() {

}

Repos.prototype.getRepos = function(username, displayUser){
  $.get('https://api.github.com/users/' + username + '/repos?page=1&per_page=100?access_token=' + apiKey).then(function(response){
    console.log(response);
    if(response.length === 0) {
      $("#output").append("<li>There are no repos by this user.</li>");
    } else {
      for(var i = 0; i < response.length; i ++) {
        displayUser(username, response[i].name, response[i].html_url, response[i].created_at, response[i].owner.avatar_url);
        console.log(response[i].html_url);
        console.log(response[i].created_at);
      }
    }
  }).fail(function(error){
    $('#output').text(error.responseJSON.message);
  });
};


exports.reposModule = Repos;

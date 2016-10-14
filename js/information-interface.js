var Repos = require('./../js/repos.js').reposModule;


var displayUser = function(username, repoName, repoUrl, repoCreation, userAvatar) {
  $('#gh-output').text(username);
  $('#output').append('<div class="well"><li><img src="' + userAvatar + '.png"/>' + '<h3>' + repoName + '</h3> ' + 'View <a href=' + repoUrl + '>here</a></li>' + '<li>This repo was created on: ' + moment(repoCreation).format('LLLL') + '</div></li>');
};

$(document).ready(function() {
  $('#ghForm').submit(function() {
    event.preventDefault();
    var newRepos = new Repos();
    var username = $('#username').val();
    newRepos.getRepos(username, displayUser);
  });
});

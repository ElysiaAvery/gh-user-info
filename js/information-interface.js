var Repos = require('./../js/repos.js').reposModule;


var displayUser = function(username, repoName, repoUrl, repoCreation, userAvatar) {
  $('#gh-output').text('Repositories By This User: ');
  $('#output').append('<div class="well"><li><h3>' + repoName + '</h3> ' + 'View <a href=' + repoUrl + '>here...</a></li>' + '<li>This repo was created on: ' + moment(repoCreation).format('LLLL') + '</div></li>');
};

var displayInfo = function(username, name, email, url, avatar) {
  $('#user-header').text('User Information: ');
  $('#info-output').append('<div class="well"><img src="' + avatar + '.png"/><h2>' + name + '</h2><h4>Email: ' + email + '</h4><h4>Visit Their GitHub page <a href="' + url + '">here...</a></h4></div>');
};

$(document).ready(function() {
  $('#ghForm').submit(function() {
    event.preventDefault();
    var newRepos = new Repos();
    var username = $('#username').val();
    newRepos.getRepos(username, displayUser);
    newRepos.getUserInfo(username, displayInfo);
  });
});

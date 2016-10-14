var Information = require('./../js/information.js').informationModule;

var displayUser = function(username, repoName, repoUrl) {
  $('#output').append('<li>' + repoName + ': ' + 'can be viewed <a href=' + repoUrl + '>here</a></li>');
};

$(document).ready(function() {
  $('#ghForm').submit(function() {
    event.preventDefault();
    var newInfo = new Information();
    var username = $('#username').val();
    newInfo.getRepos(username, displayUser);
  })
});

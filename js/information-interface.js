var Information = require('./../js/information.js').informationModule;

var displayUser = function(username, repoName, repoUrl, repoCreation) {
  $('#output').append('<li>' + repoName + ': ' + 'can be viewed <a href=' + repoUrl + '>here</a></li>' + '<li>This repo was created on: ' + moment(repoCreation).format('LLLL') + '</li>');
};

$(document).ready(function() {
  $('#ghForm').submit(function() {
    event.preventDefault();
    var newInfo = new Information();
    var username = $('#username').val();
    newInfo.getRepos(username, displayUser);
  })
});

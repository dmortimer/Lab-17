var app = angular.module('redditMod');

app.controller('redditController', function($scope, $http) {

            $scope.findPosts = function(subreddit) {
                console.log(subreddit);
                $http({
                    method: 'GET',
                    url: 'http://www.reddit.com/r/' + subreddit + '.json'
                }).then(function successCallback(response) {
                    $scope.posts = response.data.data.children;
                }, function(error) {
                    console.log(error);
                });



            });

        app.directive('post', function() {

            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'post.html'
            }

        });
        // url: 'http://www.reddit.com/r/' + {{subreddit}} + '.json'

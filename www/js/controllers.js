angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope, $cordovaNativeAudio, $cordovaMedia) {
	$scope.data = {};
	$scope.data.src = "myrecording.mp3";

	$scope.recordAudio = function() {

	    navigator.device.capture.captureAudio(function(mediaFiles) {

	    	

	        var i, len;
	        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
	        	$scope.data.src = mediaFiles[i].fullPath;
	        	/*var media = $cordovaMedia.newMedia(mediaFiles[i].fullPath).then(function() {
				    // success
				    alert("success!");
				    $scope.data.src = mediaFiles[i].fullPath;
				  }, function () {
				    // error
				    alert("error!");
				  });*/

	        	/*alert(JSON.stringify(mediaFiles[i]));
	        	alert(mediaFiles[i].fullPath);
	        	$cordovaNativeAudio
				    .preloadSimple('message', mediaFiles[i].fullPath)
				    .then(function (msg) {
				      alert(msg);
				    }, function (error) {
				      alert(error);
				    });*/

	            //uploadFile(mediaFiles[i]);
	            //alert(JSON.stringify(mediaFiles[i]));
	        }
	    }, function(error) {
	        var msg = 'An error occurred during capture: ' + error.code;
	        navigator.notification.alert(msg, null, 'Uh oh!');
	    });
	}

	$scope.playAudio = function() {

		// Please note: this code is not working yet
		alert($scope.data.src);
		var media = $cordovaMedia.newMedia(cordova.file.applicationDirectory + $scope.data.src).then(function() {
		    // success
		    alert("success!");
		  }, function () {
		    // error
		    alert("error!");
		  });
		media.play();

		//$cordovaNativeAudio.play('message');
	}
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

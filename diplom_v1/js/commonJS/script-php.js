window.addEventListener('DOMContentLoaded', function(){

	require('babel-polyfill');
	let fon = require('../parts/fon.js');
	let videoVidget = require('../parts/video_vidget.js');
	

	fon();
	videoVidget();
	
});
'use strict';

function getTags(text) {
	let initialText = text.split(' ');
	let tags = [];
	for(let i = 0; i < initialText.length; i++){
		if((initialText[i].substr(0, 1) === '#') && (isLowerCase(initialText[i])) && (correctLength(initialText[i]))){
			tags.push(initialText[i].substr(1));
		}
	}
	return tags;
}

function isLowerCase(text) {
	if(text.toLowerCase() === text) {
		return true;
	}
	return false;
}

function correctLength(text){
	if((text.length > 3) && (text.length < 121)){
		return true;
	}
	return false;
}
getTags('I hate when people smoke e-cigarettes indoors. #annoying #rude #whygodwhy');

module.exports = {
  getTags: getTags
};

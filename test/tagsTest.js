'use strict';

const should = require('should');
const tags = require('../tags.js').getTags;

describe('tags', function() {
	
	let text = 'I hate when people smoke e-cigarettes indoors. #annoying #rude #whygodwhy';
  let arrayTags = ['annoying', 'rude', 'whygodwhy'];
  
  it('Should return an array of tags for the string ' + text, function() {
    should(tags(text)).eql(arrayTags);
  });

  it('Should return an array of tags if they are lowercase', function() {
    should(tags(text)).eql(arrayTags);
  });

  it('Should return an array of tags if they have a minimum length of 3 characters and a maximun length of 120', function() {
    should(tags(text)).eql(arrayTags);
  });

});
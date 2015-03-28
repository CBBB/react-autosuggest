'use strict';

import React from 'react';
import Autosuggest from '../../../src/Autosuggest';
import suburbs from 'json!../suburbs.json';

function getLocations(input, callback) {
  var suburbMatchRegex = new RegExp('^' + input, 'i');
  var locations = suburbs.filter(function(suburbObj) {
    return suburbObj.suburb.search(suburbMatchRegex) !== -1;
  }).slice(0, 7).map(function(suburbObj) {
    return suburbObj.suburb;
  });

  // 'locations' will be an array of strings, e.g.:
  //   ['Mentone', 'Mill Park', 'Mordialloc']

  setTimeout(function() {
    callback(null, locations);
  }, 300);
}

class BasicExample extends React.Component {
  render() {
    var inputAttributes = {
      id: 'basic-example',
      placeholder: 'Where do you live?'
    };

    return (
      <Autosuggest inputAttributes={inputAttributes}
                   suggestions={getLocations}
                   key="basic-example" />
    );
  }
}

export default BasicExample;
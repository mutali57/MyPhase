const input = document.getElementById('lbsInput');
const output = document.getElementById('output');

output.style.visibility = 'hidden';

input.addEventListener('input', (e) => {
  let lbs = e.target.value;

  output.style.visibility = 'visible';

  let grams = document.getElementById('gOutput');
  grams.innerHTML = lbs/0.0022046;

  let kiloGrams = document.getElementById('kgOutput');
  kiloGrams.innerHTML = lbs/2.2046;

  let ounces = document.getElementById('ozOutput');
  ounces.innerHTML = lbs*16;

  e.preventDefault();
});
Code snippet:

var myList = [{"Position":1,"Team":"Manchester United","Played Matches":38,"Total Wins":28,"Total Draws":7,"Total Losses":3,"Total Goals Scored":97,"Total Goals Received":45,"Home Wins":15,"Home Draws":4,"Home Losses":0,"Home Goals Scored":59,"Home Goals Received":16,"Away Wins":13,"Away Draws":3,"Away Losses":3,"Away Goals Scored":38,"Away Goals Received":29,"Average Goals per Match":+52,"Points":91},
{"Position":2,"Team":"Arsenal","Played Matches":38,"Total Wins":22,"Total Draws":7,"Total Losses":9,"Total Goals Scored":73,"Total Goals Received":43,"Home Wins":14,"Home Draws":3,"Home Losses":2,"Home Goals Scored":42,"Home Goals Received":17,"Away Wins":8,"Away Draws":4,"Away Losses":7,"Away Goals Scored":31,"Away Goals Received":26,"Average Goals per Match":+30,"Points":73},
{"Position":3,"Team":"Leeds United","Played Matches":38,"Total Wins":21,"Total Draws":6,"Total Losses":11,"Total Goals Scored":58,"Total Goals Received":43,"Home Wins":12,"Home Draws":2,"Home Losses":5,"Home Goals Scored":29,"Home Goals Received":18,"Away Wins":9,"Away Draws":4,"Away Losses":6,"Away Goals Scored":29,"Away Goals Received":25,"Average Goals per Match":+15,"Points":69},
{"Position":4,"Team":"Liverpool","Played Matches":38,"Total Wins":19,"Total Draws":10,"Total Losses":9,"Total Goals Scored":51,"Total Goals Received":30,"Home Wins":11,"Home Draws":4,"Home Losses":4,"Home Goals Scored":28,"Home Goals Received":13,"Away Wins":8,"Away Draws":6,"Away Losses":5,"Away Goals Scored":23,"Away Goals Received":17,"Average Goals per Match":+21,"Points":67},
{"Position":5,"Team":"Chelsea","Played Matches":38,"Total Wins":18,"Total Draws":11,"Total Losses":9,"Total Goals Scored":53,"Total Goals Received":34,"Home Wins":12,"Home Draws":5,"Home Losses":2,"Home Goals Scored":35,"Home Goals Received":12,"Away Wins":6,"Away Draws":6,"Away Losses":7,"Away Goals Scored":18,"Away Goals Received":22,"Average Goals per Match":+19,"Points":65},
{"Position":6,"Team":"Aston Villa","Played Matches":38,"Total Wins":15,"Total Draws":13,"Total Losses":10,"Total Goals Scored":46,"Total Goals Received":35,"Home Wins":8,"Home Draws":8,"Home Losses":3,"Home Goals Scored":23,"Home Goals Received":12,"Away Wins":7,"Away Draws":5,"Away Losses":7,"Away Goals Scored":23,"Away Goals Received":23,"Average Goals per Match":+11,"Points":58},
{"Position":7,"Team":"Sunderland","Played Matches":38,"Total Wins":16,"Total Draws":10,"Total Losses":12,"Total Goals Scored":57,"Total Goals Received":56,"Home Wins":10,"Home Draws":6,"Home Losses":3,"Home Goals Scored":28,"Home Goals Received":17,"Away Wins":6,"Away Draws":4,"Away Losses":9,"Away Goals Scored":29,"Away Goals Received":39,"Average Goals per Match":+1,"Points":58},
{"Position":8,"Team":"Leicester City","Played Matches":38,"Total Wins":16,"Total Draws":7,"Total Losses":15,"Total Goals Scored":55,"Total Goals Received":55,"Home Wins":10,"Home Draws":3,"Home Losses":6,"Home Goals Scored":31,"Home Goals Received":24,"Away Wins":6,"Away Draws":4,"Away Losses":9,"Away Goals Scored":24,"Away Goals Received":31,"Average Goals per Match":0,"Points":55},
{"Position":9,"Team":"West Ham United","Played Matches":38,"Total Wins":15,"Total Draws":10,"Total Losses":13,"Total Goals Scored":52,"Total Goals Received":53,"Home Wins":11,"Home Draws":5,"Home Losses":3,"Home Goals Scored":32,"Home Goals Received":23,"Away Wins":4,"Away Draws":5,"Away Losses":10,"Away Goals Scored":20,"Away Goals Received":30,"Average Goals per Match":-1,"Points":55},
{"Position":10,"Team":"Tottenham Hotspur","Played Matches":38,"Total Wins":15,"Total Draws":8,"Total Losses":15,"Total Goals Scored":57,"Total Goals Received":49,"Home Wins":10,"Home Draws":3,"Home Losses":6,"Home Goals Scored":40,"Home Goals Received":26,"Away Wins":5,"Away Draws":5,"Away Losses":9,"Away Goals Scored":17,"Away Goals Received":23,"Average Goals per Match":+8,"Points":53},
{"Position":11,"Team":"Newcastle United","Played Matches":38,"Total Wins":14,"Total Draws":10,"Total Losses":14,"Total Goals Scored":63,"Total Goals Received":54,"Home Wins":10,"Home Draws":5,"Home Losses":4,"Home Goals Scored":42,"Home Goals Received":20,"Away Wins":4,"Away Draws":5,"Away Losses":10,"Away Goals Scored":21,"Away Goals Received":34,"Average Goals per Match":+9,"Points":52},
{"Position":12,"Team":"Middlesbrough","Played Matches":38,"Total Wins":14,"Total Draws":10,"Total Losses":14,"Total Goals Scored":46,"Total Goals Received":52,"Home Wins":8,"Home Draws":5,"Home Losses":6,"Home Goals Scored":23,"Home Goals Received":26,"Away Wins":6,"Away Draws":5,"Away Losses":8,"Away Goals Scored":23,"Away Goals Received":26,"Average Goals per Match":-6,"Points":52},
{"Position":13,"Team":"Everton","Played Matches":38,"Total Wins":12,"Total Draws":14,"Total Losses":12,"Total Goals Scored":59,"Total Goals Received":49,"Home Wins":7,"Home Draws":9,"Home Losses":3,"Home Goals Scored":36,"Home Goals Received":21,"Away Wins":5,"Away Draws":5,"Away Losses":9,"Away Goals Scored":23,"Away Goals Received":28,"Average Goals per Match":+10,"Points":50},
{"Position":14,"Team":"Coventry City","Played Matches":38,"Total Wins":12,"Total Draws":8,"Total Losses":18,"Total Goals Scored":47,"Total Goals Received":54,"Home Wins":12,"Home Draws":1,"Home Losses":6,"Home Goals Scored":38,"Home Goals Received":22,"Away Wins":0,"Away Draws":7,"Away Losses":12,"Away Goals Scored":9,"Away Goals Received":32,"Average Goals per Match":-7,"Points":44},
{"Position":15,"Team":"Southampton","Played Matches":38,"Total Wins":12,"Total Draws":8,"Total Losses":18,"Total Goals Scored":45,"Total Goals Received":62,"Home Wins":8,"Home Draws":4,"Home Losses":7,"Home Goals Scored":26,"Home Goals Received":22,"Away Wins":4,"Away Draws":4,"Away Losses":11,"Away Goals Scored":19,"Away Goals Received":40,"Average Goals per Match":-17,"Points":44},
{"Position":16,"Team":"Derby County","Played Matches":38,"Total Wins":9,"Total Draws":11,"Total Losses":18,"Total Goals Scored":44,"Total Goals Received":57,"Home Wins":6,"Home Draws":3,"Home Losses":10,"Home Goals Scored":22,"Home Goals Received":25,"Away Wins":3,"Away Draws":8,"Away Losses":8,"Away Goals Scored":22,"Away Goals Received":32,"Average Goals per Match":-13,"Points":38},
{"Position":17,"Team":"Bradford City","Played Matches":38,"Total Wins":9,"Total Draws":9,"Total Losses":20,"Total Goals Scored":38,"Total Goals Received":68,"Home Wins":6,"Home Draws":8,"Home Losses":5,"Home Goals Scored":26,"Home Goals Received":29,"Away Wins":3,"Away Draws":1,"Away Losses":15,"Away Goals Scored":12,"Away Goals Received":39,"Average Goals per Match":-30,"Points":36},
{"Position":18,"Team":"Wimbledon","Played Matches":38,"Total Wins":7,"Total Draws":12,"Total Losses":19,"Total Goals Scored":46,"Total Goals Received":74,"Home Wins":6,"Home Draws":7,"Home Losses":6,"Home Goals Scored":30,"Home Goals Received":28,"Away Wins":1,"Away Draws":5,"Away Losses":13,"Away Goals Scored":16,"Away Goals Received":46,"Average Goals per Match":-28,"Points":33},
{"Position":19,"Team":"Sheffield Wednesday","Played Matches":38,"Total Wins":8,"Total Draws":7,"Total Losses":23,"Total Goals Scored":38,"Total Goals Received":70,"Home Wins":6,"Home Draws":3,"Home Losses":10,"Home Goals Scored":21,"Home Goals Received":23,"Away Wins":2,"Away Draws":4,"Away Losses":13,"Away Goals Scored":17,"Away Goals Received":47,"Average Goals per Match":-32,"Points":31},
{"Position":20,"Team":"Watford","Played Matches":38,"Total Wins":6,"Total Draws":6,"Total Losses":26,"Total Goals Scored":35,"Total Goals Received":77,"Home Wins":5,"Home Draws":4,"Home Losses":10,"Home Goals Scored":24,"Home Goals Received":31,"Away Wins":1,"Away Draws":2,"Away Losses":16,"Away Goals Scored":11,"Away Goals Received":46,"Average Goals per Match":-42,"Points":24}];

// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(myList, selector);

  for (var i = 0; i < myList.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = myList[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
  }
}
// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(myList, selector);

  for (var i = 0; i < myList.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = myList[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
  }
}
// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(myList, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < myList.length; i++) {
    var rowHash = myList[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js').then( () => {
      console.log('Service Worker Registered')
    })
  })
}






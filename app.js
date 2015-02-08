var parseID='kizes@naver.com';
var parseRestKey='C1su7ImLDOLbvbr3vYtzsOLgJOlvBwIzOPPdBJCH';

$(document).ready(function(){
  getMessages();
  $("#send").click(funtion(){
    var username = $('input[name=username]').attr('value');
    var message = $('input[name=message]').attr('value');
    console.log('!'')
    $.ajax({
      url: 'https://api.parse.com/1/classes/MessageBoard',
      headers: {
        'X-Parse-Application-Id': parseID,
        'X-Parse-REST-API-Key': parseRestKey 
      },
      contentType: 'application/json',
      dataType: 'json',
      processData: false,
      data: JSON.stringify({
        'username': username,
        'message': message
      }),
      type: 'POST',
      success: function() {
        console.log('error');
      } // end of success
    }); // end of ajax
  });   // end of click
})      // end of ready

funtion getMessages() {
  $.ajax({
    url: 'https://api.parse.com/1/classes/MessageBoard',
    header: {
      'X-Parse-Application-Id': parseID,
      'X-Parse-REST-API-Key': parseRestKey 
    },
    contentType: 'application/json',
    dataType: 'GET',
    success: function(data) {
    console.log('get');
    updateView(data);
    },
    error: function() {
    console.log('error');
    }
  });
}

funtion updateView(messages) { 
  var table=$('.table tbody');
  table.html('');
  $.each(messages.results, function(index, value) {
    var trEl = 
      $('<tr><td>'
        + value.username
        + '</td><td>'
        + value.message +
        '</td></tr>');
    table.append(trEl);
  });
  console.log(messages);
}

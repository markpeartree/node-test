$('#submitLogin').click(function() {
  var login = {}
  login.email = $('#emaiLogin').val(),
  login.password = $('#passwordLogin').val()
  login.auth = document.cookie

  $.ajax({
    type: "POST",
    contentType: 'application/json',
    url: "/login",
    data: JSON.stringify(login),
    success: function (response) {
      console.log(JSON.parse(response));
      window.location = "/loggedin"
    },
    error: function(resp){
      console.log(resp);
      var msg = $('.container').append('<p>bad request</p>');
    }
  });
});

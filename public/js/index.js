$('#submitLogin').click(function() {
  var login = {}
  login.email = $('#emaiLogin').val(),
  login.password = $('#passwordLogin').val()

  $.ajax({
    type: "POST",
    contentType: 'application/json',
    url: "/test",
    data: JSON.stringify(login),
    success: function (response) {
      console.log(JSON.parse(response));
    },
  });


});

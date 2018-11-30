var $form = $('form#test-form'),
url = 'https://script.google.com/macros/s/AKfycbz-sJ6q2H2SLhLSo06up9QTu62oeM90YQN-7nOLPauNSYxVPRuM/exec'

$('#submit-form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url,
method: "GET",
dataType: "json",
data: $form.serializeObject()
}).success(
// do something
);
})

var script_url = 'https://script.google.com/macros/s/AKfycbz-sJ6q2H2SLhLSo06up9QTu62oeM90YQN-7nOLPauNSYxVPRuM/exec'
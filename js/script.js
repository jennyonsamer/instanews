// Built by LucyBot. www.lucybot.com

$('#select-article').on('change', function(){

  $('#content').empty();

  var selectVal = $('#select-article').val();

  var url = "https://api.nytimes.com/svc/topstories/v2/" + selectVal + ".json";
  url += '?' + $.param({
    'api-key': "80315f98187c49169c887403d2c3f766"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function (data) {

    console.log(data.results);

    $.each(data.results, function(index, object){
      console.log(object.title);

      $('#content').append(object.title);

    });

    // console.log(data.results[0].title);

  }).fail(function (err) {

    throw err;

  });

  
});
// Built by LucyBot. www.lucybot.com


$('#ajax-loader').hide();


$('#select-article').on('change', function () {


  $('#ajax-loader').show();
  $('#content').empty();
  

  var selectVal = $('#select-article').val();

  var url = 'https://api.nytimes.com/svc/topstories/v2/' + selectVal + '.json';
  url += '?' + $.param({
    'api-key': '80315f98187c49169c887403d2c3f766'
  });

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function (data) {

    
    console.log(data.results);

    // var sum = 0;
  //  $.filter(data.results,)

    $.each(data.results, function (index, value) {

      console.log(value.multimedia);

      if(value.multimedia.length){
      var output = '';
      output += '<li>' + value.abstract + '</li>';
      output += '<img src=' + value.multimedia[2].url + '>';

      $('#content').append(output);

    }

      if (index >= 11) {
        return false;
      }

    });


    // var resultCount = data.results.length;
    // console.log(resultCount);


    //   for (var i = 0; i < resultCount; i++){
    //       console.log('test');
    //     // total += data.results[i].title;
    //   }

    // $('#content').append('<li>' + data.results[total].title + '</li>')

    // $.each(data.results, function(index, object){
    //   console.log(object);

    //   // var output = '';
    //   output += '<h1>' + data.title + '</h1>';

    //   $('#content').append(output);

    // });

    // console.log(data.results[0].title);

  })
  .always(function(){

    $('#ajax-loader').hide();

  })
  .fail(function (err) {
    alert('an error occurred');
    throw err;

  });


});
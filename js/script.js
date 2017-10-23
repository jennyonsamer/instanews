// Built by LucyBot. www.lucybot.com

$('#select-article').on('change', function () {

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

    $.each(data.results, function( index, value ) {
      
      // sum += value;

    $('#content').filter( ':odd' ).css( 'background-color', 'red' );
          // console.log(value.title);
          // $('#content').slice()

          $('#content').append('<li>' + value.title + '</li>');
          if (index === 11) {
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

  }).fail(function (err) {

    throw err;

  });


});
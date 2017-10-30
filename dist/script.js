// Built by LucyBot. www.lucybot.com


$('#ajax-loader').hide();

$('#select-article').on('change', function () {

  $('#ajax-loader').show();
  $('#content').empty();

  if (!$('.siteheader').hasClass('siteheader-small')) {
    $('.siteheader').addClass('siteheader-small');
  }

  var selectVal = $('#select-article').val();

  var url = 'https://api.nytimes.com/svc/topstories/v2/' + selectVal + '.json';
  url += '?' + $.param({
    'api-key': '80315f98187c49169c887403d2c3f766'
  });

  $.ajax({
    url: url,
    method: 'GET'
  }).done(function (data) {

    console.log(data.results);

    // var sum = 0;
    //  $.filter(data.results,)

    $.each(data.results, function (index, value) {

      console.log(value);

      if (value.multimedia.length) {
        var output = '';
        output += '<div class="article" style="background-image:url(' + value.multimedia[4].url + ')"><a href="' + value.url + '">';
        // output += '<img src=' + value.multimedia[2].url + '>';
        output += '<p> ' + value.abstract + ' </p>';
        output += '</a></div>';

        // <a href="' + value.url '"> v</a>

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
  }).always(function () {

    $('#ajax-loader').hide();
  }).fail(function (err) {
    alert('Please choose a category');
    throw err;
  });
});
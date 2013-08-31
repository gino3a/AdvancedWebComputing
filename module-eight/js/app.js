$(function() {

    var app = {};
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json';


    function request(url, data, callback) {
        $.ajax({
            url: url,
            data: data,
            dataType: 'jsonp',
            success: callback
        });
    }
    function getTemplate(template_name, data) {
        var markup = "";
        var template = $('#' + template_name).html();
        var $template = Handlebars.compile(template);
        markup = $template(data);
        return markup;
    }
    function showBoxOffice(response) {
        var movie;
        for (var i = 0; i < response.movies.length; i++) {
            var movie = response.movies[i];
            $('ul').append(getTemplate('tpl-movie', movie));
        }

    }
    request(url, {apiKey:'hcrurhsttexasrgfm2y6yahm' }, showBoxOffice)
});
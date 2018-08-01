$(document).ready(function(){
    var drawGifs = function(data){
        var gif = "";
        var url = "";
        data.forEach(ele => {
            gif = ele.images.downsized_large.url;
            console.log(gif)
            url = ele.bitly_gif_url;
            $('#elements').append(armarTemplate(gif, url));
        });
    }


    var armarTemplate = function(gif,url){
        var t = `<div class= "element">
                    <img src"${gif}" width="200px"/>
                    <a href= "${url}">Ver mas</a>
                </div>`;
        return t;
    }

    var ajaxGif = function(gif){
        $.ajax({
            url: 'http://api.giphy.com/v1/gifs/search',
            type: 'GET',
            datatype: 'json',
            data: {
                q: gif,
                api_key: 'jwJNnrQBdjo5W9XASLAJfz6yHAv4iVjN'
            }
        })
        .done(function(response){
            console.log(response);
            drawGifs(response.data);
        })
        .fail(function(){
            console.log("error")
        })
    }

    $('#gif-search').click(function(event){
        console.log('Entro');
        $('#elements').empty();
        var gif = $("#gif-text").val();
        ajaxGif(gif);
    })
});
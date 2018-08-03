$(document).ready(function(){
    const drawGifs = (data) => {
 
        data.forEach(ele => {
            let gif = ele.images.downsized_large.url;
            let url = ele.bitly_gif_url;
            $('#elements').append(armarTemplate(gif, url));
        });
    }

    const armarTemplate = (gif,url) => {
        let t = `<div class= "element">
                    <img src="${gif}""/>
                    <a href= "${url}">Ver mas</a>
                </div>`;
        return t;
    }

    const ajaxGif = (gif) => {
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
        let gif = $("#gif-text").val();
        ajaxGif(gif);
    })
});


// Code From the Django Docs for allowing CSRF
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

var csrftoken = getCookie('csrftoken');

// Adding token from cookie
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

function onSuccess(data, textStatus) {
    var str = JSON.stringify(data, null, 2);
    $('#data-dump').text(str)
    $('#response').text("response: " + textStatus)
}

function onError(jqXHR, xhr, textStatus){
    $('#data-dump').text("")
    $('#response').text("response: " + textStatus)                           
}

$('#GET').click(function(){
    $('#request').text("GET http://127.0.0.1:8000/members/")
    $.ajax({
        url: 'http://127.0.0.1:8000/members/',
        type: 'GET',                   
        contentType: 'application/json',
        dataType: 'json',
        processData: false,
        success: onSuccess,
        error: onError
    })
})

$('#GET2').click(function(){
    $('#request').text("GET http://127.0.0.1:8000/members/1")
    $.ajax({
        url: 'http://127.0.0.1:8000/members/1',
        type: 'GET',                   
        contentType: 'application/json',
        dataType: 'json',
        processData: false,
        success: onSuccess,
        error: onError
    })
})

$('#POST').click(function(){
    $('#request').text("POST http://127.0.0.1:8000/members/")
    $.ajax({
        url: 'http://127.0.0.1:8000/members/',
        type: 'POST',                   
        contentType: 'application/json',
        dataType: 'json',
        data: '{"first_name": "Gavin","last_name": "Belson","email_address": "gb@hooli.com","phone_number":"805-252-1111","role": "regular"}',
        success: onSuccess,
        error: onError
    })
})

$('#PATCH').click(function(){
    $('#request').text("PATCH http://127.0.0.1:8000/members/9/")
    $.ajax({
        url: 'http://127.0.0.1:8000/members/9/',
        type: 'PATCH',                   
        contentType: 'application/json',
        dataType: 'json',
        data: '{"role": "regular"}',
        success: onSuccess,
        error: onError
    })
})

$('#DELETE').click(function(){
    var url = "http://127.0.0.1:8000/members/20/"
    $('#request').text("DELETE " + url)
    $('#data-dump').text("")
    $.ajax({
        url: url,
        type: 'DELETE',                   
        contentType: 'application/json',
        dataType: 'json',
        success: function(data, textStatus){
            $('#response').text("response: success")
        },
        error: onError
    })
})

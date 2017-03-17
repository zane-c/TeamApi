$('#GET').click(function(){
    $('#request').text("GET http://127.0.0.1:8000/members/")
    $.ajax({
        url: 'http://127.0.0.1:8000/members/',
        type: 'GET',                   
        contentType: 'application/json',
        dataType: 'json',
        processData: false,
        success: function(data, textStatus){
            var str = JSON.stringify(data, null, 2);
            $('#data-dump').text(str)
            $('#response').text("response: " + textStatus)
        },
        error: function(jqXHR, xhr, textStatus){
            $('#data-dump').text("Failed...")
            $('#response').text("response: " + textStatus)                           
       }
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
        success: function(data, textStatus){
            var str = JSON.stringify(data, null, 2);
            $('#data-dump').text(str)
            $('#response').text("response: " + textStatus)
        },
        error: function(jqXHR, xhr, textStatus){
            $('#data-dump').text("Failed...")
            $('#response').text("response: " + textStatus)                           
       }
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
        success: function(data, textStatus){
            var str = JSON.stringify(data, null, 2);
            $('#data-dump').text(str)
            $('#response').text("response: " + textStatus)
        },
        error: function(jqXHR, xhr, textStatus){
            $('#data-dump').text("Failed...")
            $('#response').text("response: " + textStatus)                           
       }
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
        success: function(data, textStatus){
            var str = JSON.stringify(data, null, 2);
            $('#data-dump').text(str)
            $('#response').text("response: " + textStatus)
        },
        error: function(jqXHR, xhr, textStatus){
            $('#data-dump').text("Failed...")
            $('#response').text("response: " + textStatus)                           
       }
    })
})

$('#DELETE').click(function(){
    $('#request').text("DELETE http://127.0.0.1:8000/members/15/")
    $.ajax({
        url: 'http://127.0.0.1:8000/members/10/',
        type: 'DELETE',                   
        contentType: 'application/json',
        dataType: 'json',
        success: function(data, textStatus){
            var str = JSON.stringify(data, null, 2);
            $('#data-dump').text("")
            $('#response').text("response: " + textStatus)
        },
        error: function(jqXHR, xhr, textStatus){
            $('#data-dump').text("")
            $('#response').text("response: " + textStatus)                           
       }
    })
})

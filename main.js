var $hidden = $('.hide')
var $text = $('#todo')
var $listToAdd = $('#addHere')

$('.subm').on('click', function(e){
    if ($text.val() == ""){
        alert("It's Empty")
        return false
    }
    else {
    var $div = $('<div>')
    .addClass('list-item')
    .text($text.val())
    .attr('draggable','true')
    $listToAdd.append($div)
    e.preventDefault()
    $text.val("")
    
    }
});
$(document).ready(function (){
    $(".lists").on("dragstart",".list-item", function(e){
        window.item = $(this)
        setTimeout(function(){
            $hidden.css("display","inline")
            $(e.target).css("display", "none")
        },1);
    })
    $(".lists").on("dragend",".list-item", function(e){
        e.stopPropagation();
        setTimeout(function(){
            $hidden.css("display","none")
            $(e.target).css("display", "block")
        },1);
    })

    $(".list").on("dragover", function(e){
        e.stopPropagation();
        e.preventDefault();
    })

    $(".list").on("dragenter", function(e){
        $(this).css("backgroundColor", "rgb(241, 241, 158)")
        e.stopPropagation();
    
    })
    $(".list").on("dragleave", function(e){
        $(this).css("backgroundColor", "rgb(0,0,0,0.1)")
        e.stopPropagation();
    })
    $(".list").on("drop", function(e){
        if ($(e.target).className == "hide"){
            $(window.item).remove(this);
        }
        else {
        $(e.target).append(window.item)
        $(this).css("backgroundColor", "rgb(0,0,0,0.1)")
        }
        $hidden.css("display","none")
    });

    $(".hide").on("dragenter", function (e){
        $(this).css("border","dashed")
    })

    $(".hide").on("dragleave", function (e){
        $(this).css("border","1px solid #000")
    })

});
$(document).ready(function() {

 var config = {
    apiKey: "AIzaSyAILvRIFRKLpEeCCdsrp0pA3wK8XaYpGLM",
    authDomain: "joeschedule-b8ec6.firebaseapp.com",
    databaseURL: "https://joeschedule-b8ec6.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "86088003878"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$('.shift').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('yes');
});

$('.mmc').on('click', function(e){
  e.preventDefault();
  if ($(this).hasClass('morn')){
    $('.one').addClass('yes');
  };
  if ($(this).hasClass('mid')){
    $('.two').addClass('yes');
  };
  if ($(this).hasClass('clos')){
    $('.three').addClass('yes');
  };

});



$('.h2').on('click', function(e){
  e.preventDefault();
  if ($(this).hasClass('mon1')){
    $('#mon1').addClass('yes');
    $('#mon2').addClass('yes');
    $('#mon3').addClass('yes');
  };
  if ($(this).hasClass('tues1')){
    $('#tues1').addClass('yes');
    $('#tues2').addClass('yes');
    $('#tues3').addClass('yes');
  };
  if ($(this).hasClass('wed1')){
    $('#wed1').addClass('yes');
    $('#wed2').addClass('yes');
    $('#wed3').addClass('yes');
  };
  if ($(this).hasClass('thur1')){
    $('#thur1').addClass('yes');
    $('#thur2').addClass('yes');
    $('#thur3').addClass('yes');
  };
  if ($(this).hasClass('fri1')){
    $('#fri1').addClass('yes');
    $('#fri2').addClass('yes');
    $('#fri3').addClass('yes');
  };
  if ($(this).hasClass('sat1')){
    $('#sat1').addClass('yes');
    $('#sat2').addClass('yes');
    $('#sat3').addClass('yes');
  };
  if ($(this).hasClass('sun1')){
    $('#sun1').addClass('yes');
    $('#sun2').addClass('yes');
    $('#sun3').addClass('yes');
  };

});



$('#comment-form').on('submit', function(e){
  e.preventDefault();

  $("#aval").html("AVAILABILITY ("+$('#date1').val()+"-"+$('#date2').val()+"):"+"<span id='div'></span>");

  $("#div").text('');
  if ($('#mon1').hasClass('yes')){
    $("#div").append(" mon1")
  }
  if ($('#mon2').hasClass('yes')){
    $("#div").append(" mon2")
  }
  if ($('#mon3').hasClass('yes')){
    $("#div").append(" mon3")
  }
  if ($('#tues1').hasClass('yes')){
    $("#div").append(" tues1")
  }
  if ($('#tues2').hasClass('yes')){
    $("#div").append(" tues2")
  }
  if ($('#tues3').hasClass('yes')){
    $("#div").append(" tues3")
  }
  if ($('#wed1').hasClass('yes')){
    $("#div").append(" wed1")
  }
  if ($('#wed2').hasClass('yes')){
    $("#div").append(" wed2")
  }
  if ($('#wed3').hasClass('yes')){
    $("#div").append(" wed3")
  }
  if ($('#thur1').hasClass('yes')){
    $("#div").append(" thur1")
  }
  if ($('#thur2').hasClass('yes')){
    $("#div").append(" thur2")
  }
  if ($('#thur3').hasClass('yes')){
    $("#div").append(" thur3")
  }
  if ($('#fri1').hasClass('yes')){
    $("#div").append(" fri1")
  }
  if ($('#fri2').hasClass('yes')){
    $("#div").append(" fri2")
  }
  if ($('#fri3').hasClass('yes')){
    $("#div").append(" fri3")
  }
  if ($('#sat1').hasClass('yes')){
    $("#div").append(" sat1")
  }
  if ($('#sat2').hasClass('yes')){
    $("#div").append(" sat2")
  }
  if ($('#sat3').hasClass('yes')){
    $("#div").append(" sat3")
  }
  if ($('#sun1').hasClass('yes')){
    $("#div").append(" sun1")
  }
  if ($('#sun2').hasClass('yes')){
    $("#div").append(" sun2")
  }
  if ($('#sun3').hasClass('yes')){
    $("#div").append(" sun3")
  }
  $("#div").append(", "+$('#extra').val());

var comment=$('#div').text();
var name=$('#name').val();
var idNumber;

if (name=="dilys") {idNumber="q"}

var commentsReference = database.ref('comments');

commentsReference.push({
  name: name,
  text: comment,
  id:idNumber,
});

});


function getComments() {
    database.ref('comments').on('value', function (results) {
      console.log(results.val());
      var allComments = results.val();

      for (var item in allComments) {

        var printComment = {
          text: allComments[item].text,
          name: allComments[item].name,
          id: allComments[item].id,
          commentId: item
        };

if (printComment.text.includes("mon1")){
  $('#mmon1').append(printComment.id)
}

if (printComment.text.includes("tues1")){
  $('#ttues1').append(printComment.id)
}

// if ($('printComment.text').is(':contains("mon1")')) { $('#mmon1').append(printComment.id)}
// if ($("printComment.text:contains('mon3')").length>=0) { $('#mmon3').append(printComment.id)}


          // $("div").append("<p>Comment: " + printComment.text + "<br> By: " + printComment.name + "</p>" + printComment.commentId)
          }

      }
    )
  }

getComments();



});

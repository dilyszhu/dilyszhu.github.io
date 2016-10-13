$( document ).ready(function() {
 var config = {
    apiKey: "AIzaSyAE5rtvtwC7r10179t_zgfr6Y6qKEto3jM",
    authDomain: "anxiety-q.firebaseapp.com",
    databaseURL: "https://anxiety-q.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "555747364253"
  };
 
 firebase.initializeApp(config);
 
 var database = firebase.database();


$('#comment-form').on('submit', function(e){
// console.log(e);
e.preventDefault();
$('#comments').html('');
//************

var comment=$('#comment').val();
// var name=$('#name').val();
var oked=0;
var titlecounter;

$('#comment').val('');
// $('#name').val('');

titles = ["lettuce", "tomato", "cucumber", "kale", "carrot", "broccoli"]
var random=Math.floor(Math.random()*6);
title=titles[random]



//Creates a table within our database called comments. (We can name it whatever) 
//Lets us access that table using commentsReference. 

var commentsReference = database.ref('comments');




commentsReference.push({
  // name: name,
  text: comment,
  title: title,
  mod: oked,

});

//push is used to add new objects/hashes into an array. 
//objects are stored in name -value pairs.
//json is an array of objects.
//firedbase creates a database of json

//firebase tables
//the table is a giant array full of hashes
//database will have several tables. 

//hashes are things with key value pairs. {name:Brian, text:Here's a comment.} vs. {1}

})





function getComments() {
    database.ref('comments').on('value', function (results) {
      console.log(results.val());
      var allComments = results.val();

      for (var item in allComments) {

        var printComment = {
          text: allComments[item].text,
          // name: allComments[item].name,
          title: allComments[item].title,
          commentId: item
        };
          if (allComments[item].mod===1){
          $("#comments").append("<li><b>&commat;" + printComment.title + ": </b>" + printComment.text + "</li>")
          }

      }
    })
  }

getComments();



$(window).resize(function () {
    console.log($(window).height())
    if($(window).width()>=936){
      $('#mobile-nav').hide();
    }
  })








var AnimationEnd='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function Bounce(){
    var BounceThings='animated bounce';
    $(this).addClass(BounceThings).one(AnimationEnd, 
        function () { $(this).removeClass(BounceThings);});
};

$('.your').mouseover(Bounce);





	// $("#submitmsg").click(function(){	
	// 	var clientmsg = $("#usermsg").val();
	// 	$.post(text: clientmsg);				
	// 	$("#usermsg").attr("value", "");
	// 	return false;
	// });

});
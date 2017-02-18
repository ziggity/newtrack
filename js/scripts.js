$(document).ready(function() {
  $("#formid").submit(function(event){
  event.preventDefault();
  var question1 = parseInt($("select#question1").val());
  var question2 = parseInt($("select#question2").val());
  var question3 = parseInt($("select#question3").val());
  var question4 = parseInt($("select#question4").val());
  var question5 = parseInt($("select#question5").val());
  // var radiobutton = $("input:radio[name=Start]:checked").val(); working on fixing this issue -  I'm trying to think how I can integrate a radiobutton properly
  $("#Youtheuser").text($("#Name").val());
  // <!--takes user's name and inputs it as text on the id of Youtheuser-->
  var answers = (question1 + question2 + question3 +question4 + question5);
  if (answers <= 5 ) {
    $("#rubyimg").slideDown("slow");
    $("#Youtheuser").show();
    $("#Name").show();
    $("#phpimg").hide();
    $("#javaimg").hide();
    $("#hidegreatnews").show();
    $("#radiobuttonresults").show();
    $("#csharpimg").hide();
// less than or equal to 5 it will show Ruby, which is accurate to the survey
  } else if (answers >=5 && answers <= 10) {
    $("#phpimg").fadeIn();
    $("#Youtheuser").show();
    $("#Name").show();
    $("#rubyimg").hide();
    $("#javaimg").hide();
    $("#hidegreatnews").show();
    $("#csharpimg").hide();
// greater & equal to 5, and less than equal to 10, gets php, which is accurate to survey
  } else if (answers >=13 && answers <=15){
    $("#javaimg").slideDown("slow");
    $("#Youtheuser").show();
    $("#Name").show();
    $("#phpimg").hide();
    $("#rubyimg").hide();
    $("#hidegreatnews").show();
    $("#csharpimg").hide();
    // greater than and equal 13 and less than 15 or equal = java
  } else {
    $("#csharpimg").slideDown();
    $("#phpimg").hide();
    $("#rubyimg").hide();
    $("#javaimg").hide();
    $("#hidegreatnews").show();
    }
  });
});

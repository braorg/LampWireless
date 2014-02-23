$(document).ready(function(){
	$("#submit-message").click(function(event){
		var subject = $("#subject").val();
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		var blocca = true;
		var textError = "*Campo obbligatorio";

		if(subject == ""){
			$("#subject").prev().text(textError).addClass("alertForm");
			blocca = false;
		}
		else{ 
			$("#subject").prev().text("");	
			$("#subject").css("border","1px solid #84E35F")
		}

		if(name == ""){
			$("#name").prev().text(textError).addClass("alertForm");
			blocca = false;
		}
		else{
			$("#name").prev().text("");	
			$("#name").css("border","1px solid #84E35F")
		}

		if(email == ""){
			$("#email").prev().text(textError).addClass("alertForm");
			blocca = false;
		}
		else{
			$("#email").prev().text("");
			$("#email").css("border","1px solid #84E35F")	
		}

		if(message == ""){
			$("#message").prev().text(textError).addClass("alertForm");
			blocca = false;
		}
		else{
			$("#message").prev().text("");	
			$("#message").css("border","1px solid #84E35F")
		}
		event.preventDefault();
	})
})
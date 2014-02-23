$(document).ready(function(){
  osBox.checkOs();
  osBox.initBinding(osBox);
  menu.initSwitchSelection();
  accordion.init();
  lang.init();
  utility.contaSpan();
  scrollUp.init();
})


/*$("a[data-object='arrow']").live("click", function(){

      var languageArrow = $("#language div").first().find("i");
      var valueClassArrow = $(languageArrow).hasClass("fa-angle-down");
      var selectedLanguage = $("#language div").first().text();

      if(selectedLanguage === "IT"){
        $("#SelectorLanguage li[data-language='IT']").css("display","none");
        $("#SelectorLanguage li[data-language='EN']").css("display","block");
      }
      else if(selectedLanguage === "EN"){
        $("#SelectorLanguage li[data-language='EN']").css("display","none");
        $("#SelectorLanguage li[data-language='IT']").css("display","block");
      }

      accordion("SelectorLanguage");

      if(valueClassArrow === true){
        $(languageArrow).removeClass("fa-angle-down").addClass("fa-angle-up");
      }
      else {
        $(languageArrow).removeClass("fa-angle-up").addClass("fa-angle-down");
      }
  });

  $("a[data-name='languageIT'],a[data-name='languageEN']").click(function(){
    accordion("SelectorLanguage");
  })*/






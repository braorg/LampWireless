var utility = {
  contaSpan: function(){
    var contatore = 0;
    var containerActive = $("#installer").children("ul");
    $(containerActive).each(function(){
        if(this.style.display === "block"){
            $(this).find("span").each(function(){
                contatore+=1;
                $(this).text(contatore);
            });
        }
    });
  },
  accordion: function(block){
    var window = $('#' + block);
    $(window).slideToggle("slow");
  }  
};

var osBox = {

  os: platform.os,
  windows: /Windows/,
  mac: /OS X/,
  android: /Android/,
  linux: /Linux/,
  boxAlert: '<p class="container alert-info shake animated">' +
                'Spiacente, ma questa app <b>non &egrave; supportata</b> dal tuo sistema operativo' +
              '</p>',
  cta: $("a[title='Maggiori info'],a[title='More info'],a.ctaDownload"),

  checkOs: function(){
    console.log("pippo");
    if(this.os.family.match(this.windows)){
      this.activeBoxDownload("#useWindows","article.windows","a[data-name='windows']");
    }

    else if(this.os.family.match(this.mac)){
      console.log("mac");
      this.activeBoxDownload("#useMac","article.mac","a[data-name='mac']");
      this.checkVersionMac();
    }
    else if(this.os.family.match(this.android)){
      console.log("android");
      this.activeBoxDownload("#useAndroid","article.android","a[data-name='android']");
      $("a[data-name='windows'],a[data-name='mac'],a[title='Maggiori info'],a[title='More info']").css("display","none");
    }

    else if((this.os.family.match(this.linux)) || (this.os.family.match("iphone")) || (this.os.family.match("iPod")) || (this.os.family.match("iPad"))){
      $(".windows, .mac, .android").addClass("disabled");
      $("a.mac, a.android, a.windows").css("visibility","hidden");
      $("#box-button-download").append(this.boxAlert);
    }
  },
  activeBoxDownload: function(objectUse,objectBox,objectLink){
    $(objectUse).css("display","block");
    $(objectUse).siblings("ul").css("display","none");
    $(objectBox).css("opacity","1");
    $(objectBox).children("figure,h3,p,div,ul").addClass("active");
    $(objectLink).addClass("shake animated").css("background-color","#333333");
    $(objectBox).siblings("article").addClass("disabled");
  }, 
  changeBoxTroubleshooting: function(objectUse){
    $(objectUse).siblings("ul").css("display","none");
    $(objectUse).css("display","block");
  },
  checkVersionMac: function(){
    if ((this.os.version.match("10.8")) || (this.os.version.match("10.9"))){
      $("a[data-name='mac']").attr("href","https://dl.dropboxusercontent.com/u/621599/work/Lamp-3.0-10.9.x.dmg");
    }
    else if ((this.os.version.match("10_6")) || (this.os.version.match("10_7"))){
      $("a[data-name='mac']").attr("href","https://dl.dropboxusercontent.com/u/621599/work/Lamp-3.0.dmg");
    }
  },
  changeBoxDownload: function(father, brothers, childrenBrothers){
    if(father.hasClass("windows")){
          this.changeBoxTroubleshooting("#useWindows");
        }
        else if(father.hasClass("mac")){
          this.changeBoxTroubleshooting("#useMac");
        }
        else if(father.hasClass("android")){
          this.changeBoxTroubleshooting("#useAndroid");
      }

      father.removeClass("disabled").css("opacity","1");
      father.children("figure,h3,p, ul, div").addClass("active");
      father.find(".ctaDownload").removeClass("disabled").css("background-color","#333333");
      brothers.addClass("disabled").removeAttr("style");
      childrenBrothers.removeClass("active");
      brothers.find(".ctaDownload").removeAttr("style").addClass("disabled");

      utility.contaSpan();
  },
  initBinding: function(owner){
    $("a[title='Maggiori info']").click(function(){
      console.log("maggiori info");
      var father = $(this).closest("article");
      var brothers = $(father).siblings("article");
      var childrenBrothers = $(brothers).children();

      owner.changeBoxDownload(father, brothers, childrenBrothers);
    });    
  }
};

var menu = {
  initSwitchSelection: function(){
    $("#menu a").click(function(){
      $("#menu a").removeClass("selected");
      $(this).addClass("selected");
    });
    $("#button-menu-responsive button").click(function(){
      utility.accordion("menu");
    });
  }
};

var accordion = {
  init: function(){
    $("#frequently-asked-questions dt").on("click",function(){

      var confirmHasClass = $(this).find("a").hasClass("toggle-according-open");

      $(this).next("dd").slideToggle("slow");

      if(confirmHasClass === true){
        $(this).find("a").removeClass("toggle-according-open").addClass("toggle-according-close");
      }
      else {
        $(this).find("a").removeClass("toggle-according-close").addClass("toggle-according-open");
      }
    });
  }
};

var lang = {
  init: function(){
    $("a[data-object='arrow']").live("click", function(){
      utility.accordion("SelectorLanguage");
    });
  }
};

var scrollUp = {
  init: function(){
    $(window).scroll(function(){
      if(this.scrollY > 100){
        $('#button-scroll-top').slideDown();
      }
      else {
        $('#button-scroll-top').slideUp();
      }
    });
  }
};
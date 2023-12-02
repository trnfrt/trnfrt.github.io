var language;

$(document).ready(function () {
  // Start (Back/Forward Cache)
  $(window).on("pageshow", function (event) {
    // Check if the page is being loaded from the back/forward cache
    if (event.originalEvent.persisted) {
      // Page is being loaded from cache
      // Add any additional logic you need for cached pages here
      console.log("Page loaded from the back/forward cache");
    } else {
      // Page is being loaded as a fresh navigation
      // Add your regular page initialization code here
      console.log("Page loaded as a fresh navigation");
    }
  });
  // End (Back/Forward Cache)

  // Start initial Language setup
  let langKey = localStorage.getItem("language");
  if (langKey == null) {
    changeLanguage("de");
  } else {
    changeLanguage(langKey);
  }
  // End initial Language setup

  // Start mobile Nav
  $(".section-link").click(function () {
    toggleMobileMenu();
  });

  $(".mobile-nav-links a").click(function () {
    toggleMobileMenu();
  });
  // End mobile Nav

  window.onscroll = function () {
    myFunction();
  };

  var navbar = $("#main-nav");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  }
});

function toggleMobileMenu() {
  $(".nav-links").toggleClass("d-xs-none");
  $(".nav-links").toggleClass("mobile-nav-links");
}

function changeLanguage(langKey) {
  //localStorage.getItem("language") == null ? setLanguage(langKey) : false;
  setLanguage(langKey);
  language = localStorage.getItem("language");
  var jsonUrl = "";

  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    //'http://localhost:5500/language/de.json'
    jsonUrl =
      window.location.origin +
      "/language/" +
      localStorage.getItem("language") +
      ".json";
  } else {
    jsonUrl =
      window.location.origin +
      window.location.pathname +
      "language/" +
      localStorage.getItem("language") +
      ".json";
  }

  $.ajax({
    url: jsonUrl,
    type: "HEAD",
    error: function () {
      console.log("The file does not exist.");
      jsonUrl =
        window.location.origin +
        window.location.pathname +
        "language/" +
        localStorage.getItem("language") +
        ".json";
    },
    success: function () {
      console.log("The file exists.");
    },
  });

  $.ajax({
    url: jsonUrl,
    dataType: "json",
    async: false,
    dataType: "json",
    success: function (lang) {
      language = lang;
    },
  });

  updateTranslations();

  $(".site-language img").css("opacity", "0.5");
  $(`.icon-${langKey} img`).css("opacity", "1");
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
}

function updateTranslations() {
  //language = localStorage.getItem("language");
  var newVal = language.date;
  $("[data-lang=date]").text(language.date);
  $("[data-lang=navigation_text_1]").text(language.navigation_text_1);
  $("[data-lang=navigation_text_2]").text(language.navigation_text_2);
  $("[data-lang=navigation_text_3]").text(language.navigation_text_3);
  $("[data-lang=navigation_text_4]").text(language.navigation_text_4);
  $("[data-lang=navigation_text_5]").text(language.navigation_text_5);
  $("[data-lang=navigation_text_6]").text(language.navigation_text_6);
  $("[data-lang=job_title]").text(language.job_title);
  $("[data-lang=job_short_description]").text(language.job_short_description);
  $("[data-lang=welcome_title]").text(language.welcome_title);
  $("[data-lang=contact_section_title]").text(language.contact_section_title);
  $("[data-lang=child_section_sub_title]").text(
    language.child_section_sub_title
  );
  $("[data-lang=child_list_item_1]").text(language.child_list_item_1);
  $("[data-lang=child_list_item_2]").text(language.child_list_item_2);
  $("[data-lang=child_list_item_3]").text(language.child_list_item_3);
  $("[data-lang=child_list_item_4]").text(language.child_list_item_4);
  $("[data-lang=child_list_item_5]").text(language.child_list_item_5);
  $("[data-lang=child_list_item_6]").text(language.child_list_item_6);
  $("[data-lang=child_list_item_7]").text(language.child_list_item_7);
  $("[data-lang=child_list_item_8]").text(language.child_list_item_8);
  $("[data-lang=child_list_item_9]").text(language.child_list_item_9);
  $("[data-lang=child_list_item_10]").text(language.child_list_item_10);
  $("[data-lang=child_list_item_11]").text(language.child_list_item_11);
  $("[data-lang=child_list_item_12]").text(language.child_list_item_12);
  $("[data-lang=child_list_item_13]").text(language.child_list_item_13);
  $("[data-lang=child_list_item_14]").text(language.child_list_item_14);
  $("[data-lang=child_drawing_info_1]").text(language.child_drawing_info_1);
  $("[data-lang=teenager_section_sub_title]").text(
    language.teenager_section_sub_title
  );
  $("[data-lang=teenager_list_item_1]").text(language.teenager_list_item_1);
  $("[data-lang=teenager_list_item_2]").text(language.teenager_list_item_2);
  $("[data-lang=teenager_list_item_3]").text(language.teenager_list_item_3);
  $("[data-lang=teenager_list_item_4]").text(language.teenager_list_item_4);
  $("[data-lang=teenager_list_item_5]").text(language.teenager_list_item_5);
  $("[data-lang=teenager_list_item_6]").text(language.teenager_list_item_6);
  $("[data-lang=teenager_list_item_7]").text(language.teenager_list_item_7);
  $("[data-lang=teenager_list_item_8]").text(language.teenager_list_item_8);
  $("[data-lang=teenager_list_item_9]").text(language.teenager_list_item_9);
  $("[data-lang=teenager_list_item_10]").text(language.teenager_list_item_10);
  $("[data-lang=adult_list_item_1]").text(language.adult_list_item_1);
  $("[data-lang=adult_list_item_2]").text(language.adult_list_item_2);
  $("[data-lang=adult_list_item_3]").text(language.adult_list_item_3);
  $("[data-lang=adult_list_item_4]").text(language.adult_list_item_4);
  $("[data-lang=adult_list_item_5]").text(language.adult_list_item_5);
  $("[data-lang=adult_list_item_6]").text(language.adult_list_item_6);
  $("[data-lang=adult_list_item_7]").text(language.adult_list_item_7);
  $("[data-lang=adult_list_item_8]").text(language.adult_list_item_8);
  $("[data-lang=adult_list_item_9]").text(language.adult_list_item_9);
  $("[data-lang=family_list_item_1]").text(language.family_list_item_1);
  $("[data-lang=family_list_item_2]").text(language.family_list_item_2);
  $("[data-lang=family_list_item_3]").text(language.family_list_item_3);
  $("[data-lang=game_therapy_info_1]").text(language.game_therapy_info_1);
  $("[data-lang=home_greeting_text]").text(language.home_greeting_text);
  $("[data-lang=weekday_1]").text(language.weekday_1);
  $("[data-lang=weekday_2]").text(language.weekday_2);
  $("[data-lang=weekday_3]").text(language.weekday_3);
  $("[data-lang=weekday_4]").text(language.weekday_4);
  $("[data-lang=weekday_5]").text(language.weekday_5);
  $("[data-lang=weekday_6]").text(language.weekday_6);
  $("[data-lang=weekday_7]").text(language.weekday_7);
  $("[data-lang=office1_openning_info]").text(language.office1_openning_info);
  $("[data-lang=office2_openning_info]").text(language.office2_openning_info);
  $("[data-lang=contact_by_social_media_text]").text(
    language.contact_by_social_media_text
  );
  $("[data-lang=address_title]").text(language.address_title);
}

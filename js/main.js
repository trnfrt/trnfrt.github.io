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
  $("[data-lang=child_list_item_15]").text(language.child_list_item_15);
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
  $("[data-lang=adult_list_item_10]").text(language.adult_list_item_10);
  $("[data-lang=adult_list_item_11]").text(language.adult_list_item_11);
  $("[data-lang=adult_list_item_12]").text(language.adult_list_item_12);
  $("[data-lang=adult_list_item_13]").text(language.adult_list_item_13);
  $("[data-lang=adult_list_item_14]").text(language.adult_list_item_14);
  $("[data-lang=family_list_item_1]").text(language.family_list_item_1);
  $("[data-lang=family_list_item_2]").text(language.family_list_item_2);
  $("[data-lang=family_list_item_3]").text(language.family_list_item_3);
  $("[data-lang=game_therapy_info_1]").text(language.game_therapy_info_1);
  $("[data-lang=home_greeting_text]").text(language.home_greeting_text);
}

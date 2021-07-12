

let itsOk = true
let path = window.location.href;
let file = path.slice(path.lastIndexOf("/"));
let counter = 0;
let strimgDescription = []

// let copyLink = document.getElementById("copyLink");
// let link = document.getElementById("linkToCopy");

console.log(document.cookie);
let landing_page_json = {
  name: "my_new",
  bg_color_page: "#ffffff",
  landing_page_dir: "left",
  first_label: "Full Name",
  second_label: "Email",
  third_label: "Message",
  four_label: "Phone",
  bg_color_button: "#FF639C",
  button_value: "submit",
  button_value_color: "#ffffff",
  title: "Add Title",

  title_color: "#384364de",

  content_value:
    "Add Description",
  content_color: "#384364de",
  required_of_first_label: "false",
  required_of_second_label: "true",
  required_of_third_label: "false",
  required_of_four_label: "false",
  check_content: "true",
  check_tb_title: "true",
  check_full_name: "true",
  check_email: "true",
  check_message: "true",
  check_phone: "true",
  check_videoDiv: "true",
  check_image: "true",
  to_whom_send_leads: [],
  redirect: "",
  height_of_content: "70px",
  order: [],
  video: ''
};
let image;
let url = window.location;
let uid
let usrName = url.pathname.split("/")[1];
let LandingPageList = [];
let name;
let jwtFromCookie
let isSubscribe



console.log(file)
if (!path.includes("view")) {
  jwtFromCookie = document.cookie.split(";")
    .filter(s => s.includes('jwt'))[0].split("=").pop();
}
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function () {

  $('#inWelcome').css("opacity", "0.1")
  $('#alertCopiedLink').hide()
  $("#getLink").hide()

  //   $.ajax({
  //     url: `https://pay.leader.codes/getUserPurchase/${usrName}`,
  //     method: "get",
  //     success: function (data) {
  //       console.log(data)
  // isSubscribe=data.find(x=> x==='Leader Funnel'||x==='All In One')
  // console.log(isSubscribe)

  //     }
  //     })


  $("#lobby_laeder").attr("href", "https://lobby.leader.codes/" + usrName);



  // $('.leaderBox').attr("href","https://box.leader.codes/" + usrName);
  // $('.hub').attr("href","https://hub.leader.codes/" + usrName);
  // $('.calendar').attr("href","https://calendar.leader.codes/" + usrName);

  // $('.stories').attr("href","https://stories.leader.codes/" + usrName);
  // $('.forms').attr("href", "https://forms.leader.codes/" + usrName + "/new");
  // $('.qoutes').attr("href","https://qoutes.leader.codes/" + usrName + "/new");
  //   $('.digitalCardApp').attr("href", `https://knowme.page/${uid}
  // `);
  //   $('.vloggerApp').attr("href", `https://vloger.codes/${uid}
  // `);
  //   $('#sites').attr("href", `https://sites.leader.codes/${uid}
  // `);
  $('#list').hide()
  $("#listAll").hide();

  if (path.includes("view")) {
    usrName = url.pathname.split("/")[2];
  }
  else {

    $(function () {
      $("#sortable").sortable();
      $("#sortable").disableSelection();
    });

  }
  if (file == "/thank.html") {
    let img
    img = JSON.parse(localStorage["img"]);
    console.log(`url(${img})`)

    let color = JSON.parse(localStorage["title_color"]);
    console.log(color)

    $("#thankDiv1").css("color", `${color}`);
    $("#thankDiv").css("background-image", `url("${img}")`)
    $("#thankDiv").css("background-repeat", "no-repeat")
      ;
  } else {


      fillLandingPageList();

      if (file !== "/new") {
        $("#button_save").css("display", "none");


        if (path.includes("view")) {
          $.ajax({
            url: `https://funnel.leader.codes/api/${uid}${file}`,

            headers: {
              "Content-Type": "application/json",
              "Authorization": "view"
            },
            method: "get",
            success: function (data) {
              console.log(data)
              let landing_page = data;
              console.log(landing_page.to_whom_send_leads)
              let dir = landing_page.landing_page_dir;

              let order = landing_page.order
              let order_h1 = order.indexOf("h1")

              $("#h1_view").css("order", order_h1 + 1)

              let order_p_description = order.indexOf("p_description")

              $("#p_description_view").css("order", order_p_description + 1)
              let order_image_view = order.indexOf("imageBama")

              $("#image_view").css("order", order_image_view + 1)


              $('#videoDiv_view').html(landing_page.video)

              $("#landingPage_view").css("text-align", dir);
              $("#landingPage_view").css("direction", dir == "right" ? "rtl" : "ltr");
              $("#p_description_view").css("color", landing_page.content_color);
              $("#p_description_view").css("height", landing_page.height_of_content);
              $("#p_description_view").val(landing_page.content_value);
              $("#h1_view").css("color", landing_page.title_color);
              $("#view").css("text-align", landing_page.landing_page_dir);
              $("#landingPage_view").css("background-color", landing_page.bg_color_page
              );

              $("#h1_view").text(landing_page.title);

              $("#submit_view").text(landing_page.button_value);
              $("#submit_view").css("background-color", landing_page.bg_color_button);
              $("#submit_view").css("color", landing_page.button_value_color);

              if (landing_page.img === undefined) {
                // $("#imageLp_view").attr("src", "/image/image.png")
                // $("#image_view").css
                $("#image_view").css("background-image", "url(/image/image.png)");


              } else {
                $("#image_view").css("background-image", `url(${landing_page.img})`);
                $("#image_view").css("background-size", "cover")
              }
              // { $("#imageLp_view").attr("src", landing_page.img); }

              $("#full_name1_view").text(landing_page.first_label);

              $("#email1_view").text(landing_page.second_label);
              $("#phone1_view").text(landing_page.four_label);
              $("#content1_view").text(landing_page.third_label);

              if (landing_page.required_of_first_label == true) {
                $("#full_name2_view").attr('required', true);

                $("#span_one_view").text("*");
              }

              if (landing_page.required_of_four_label == true) {
                $("#phone").attr("required", true);
                $("#span_four_view").text("*");
              }

              if (landing_page.required_of_second_label == true) {
                $("#content").attr("required", true);
                $("#span_two_view").text("*");
              }
              if (landing_page.required_of_third_label == true) {
                $("#email").attr("required", true);
                $("#span_three_view").text("*");
              }

              if (landing_page.check_content == false) {
                $("#p_description_view").css("display", "none");
              }
              if (landing_page.check_image == false) {
                $("#image_view").css("display", "none");
              }
              if (landing_page.check_videoDiv == false) {
                $("#videoDiv_view").css("display", "none");
              }
              if (landing_page.check_tb_title == false) {
                $("#h1_view").css("display", "none");
              }
              if (landing_page.check_full_name == false) {
                $("#input1_view").css("display", "none");
              }
              if (landing_page.check_email == false) {
                $("#input2_view").css("display", "none");
              }
              if (landing_page.check_message == false) {
                $("#input3_view").css("display", "none");
              }
              if (landing_page.check_phone == false) {
                $("#input4_view").css("display", "none");
              }


            }
          });
        } else {
          // initColorPicker1()

          $.ajax({
            url: `https://funnel.leader.codes/api/${uid}${file}`,
            headers: { Authorization: jwtFromCookie },
            method: "get",
            success: function (data) {

              console.log(data)

              landing_page_json = data;

              append_address(landing_page_json.to_whom_send_leads)

              fillPage(landing_page_json);
            }
          });
        }

      } else {

        $("#updateButton").css("display", "none");
        // if (landing_page_json.required_of_first_label == true) {
        // $("#full_name2").attr('required', true);
        // console.log($("#full_name2").attr('required'))
        $("#span_two").text("*");
        // }
        fillPage(landing_page_json);
      }


      $.ajax({
        url: `https://funnel.leader.codes/api/${uid}/getEmail`,
        headers: { Authorization: jwtFromCookie },
        method: "get",
        success: function (data) {
          if (file == "/new") {
            Add_an_address(data)
            // landing_page_json.to_whom_send_leads.push(data);
            // $("#div_to_whom").append(data);
            // // $("#to_whom").val(data);
            // console.log(landing_page_json.to_whom_send_leads);
          }
        },
      });



      //   initColorPicker1()


      $("#imgload").change(function () {

        let s = event.target;
        if (this.files && this.files[0]) {
          image = this.files[0];


          var reader = new FileReader();
          reader.onload = function (e) {
            $("#up").remove();
            $("#imageBama").css("background-image", `url(${e.target.result})`)

            $(".small_image").css("background-image", `url(${e.target.result})`)
            // $('.imgshow').attr('src', e.target.result);

            // $("#lableImg").css("background-image", `url(${e.target.result})`);
            // $("#imgshow").css("background-size", "cover");
            $(".small_image").css("background-size", "cover");
            // $('.imgshow').removeClass('d-none');

            img = e.target.result;

          };
        }
        reader.readAsDataURL(this.files[0]);
      });



      // if (file === "/thank.html") {
      //   // let img = "http://files.leader.codes/uploads/1600685881020__app.css";


      //   let color = JSON.parse(localStorage["title_color"]);
      //   console.log(color)
      //   img = JSON.parse(localStorage["img"]);
      //   $("#thankDiv1").css("color", `${color}`);
      //   $("#thankDiv").css("background-image", `url(${img})`);



      // }


    })

  }
});
$("#resetButton").hover(function () {
  $("#resetButton").css("opacity", "0.5")
})
$("#resetButton").mouseleave(function () {
  $("#resetButton").css("opacity", "1")
})

function changeImg() {
  $("#imgload").trigger("click")
  $('#collapseOne').collapse('show');

  //   $("#collapseOne").addClass("on show");
  //   // $('#button_value').addClass("focus")
  //   $('#wrap-configurator').animate({
  //     scrollTop: $('#imageBama').offset().top
  // },500); 
}

function onblurValueButton() {
  if (landing_page_json.button_value == "") {
    $("#button_value").val("submit")
    $("#submit").val("submit")
    landing_page_json.button_value = "submit"

  }
  $("#button_value").removeClass("focus");

  //   console.log(landing_page_json.button_value)
  //   if (landing_page_json.button_value== "submit") {

  //     $("#submit").val("submit")
  //     console.log($("#submit").val())
  //     $("#button_value").val("submit")
  //     landing_page_json.button_value="submit"
  // }
  // myButton = document.getElementById("submit"); 
  // submit.type = "button";
}

function changeValue(val) {
  $("#button_value").val(val);
  landing_page_json.button_value = val;

  // if (landing_page_json.button_value == "") {
  //   $("#button_value").val("submit");
  //   landing_page_json.button_value = "submit";
  // }


}

$("#ll").hover(function () {
  $("#ll").addClass("hover")


})
$("#ll").mouseleave(function () {


  $("#ll").removeClass("hover")


})

$("#imageBama").hover(function () {
  $("#imageBama").addClass("hover")


})
$("#imageBama").mouseleave(function () {


  $("#imageBama").removeClass("hover")


})


$("#landingPageForm").hover(function () {
  $("#landingPageForm").addClass("hover")


})
$("#landingPageForm").mouseleave(function () {


  $("#landingPageForm").removeClass("hover")


})


$("#h1").hover(function () {


  $("#h1").addClass("hover")


})
$("#h1").mouseleave(function () {

  $("#h1").removeClass("hover")


})

$("#p_description").hover(function () {


  $("#p_description").addClass("hover")


})
$("#p_description").mouseleave(function () {


  $("#p_description").removeClass("hover")


})


function fillPage(landing_page_json) {
  let dir = landing_page_json.landing_page_dir;

  console.log(landing_page_json)
  $("#getLink").text(`https://funnel.leader.codes/view/${usrName}/${landing_page_json.name}`)

  $("#landingPage").css("text-align", dir);
  $("#landingPage").css("direction", dir == "right" ? "rtl" : "ltr");
  let img
  if (landing_page_json.img == undefined) {
    img = "/image/image.png"
  } else {
    img = landing_page_json.img
  }
  let order = landing_page_json.order

  let order_h1 = order.indexOf("h1")

  $("#h1").css("order", order_h1 + 1)

  let order_p_description = order.indexOf("p_description")

  $("#p_description").css("order", order_p_description + 1)
  let order_image_view = order.indexOf("imageBama")

  $("#imageBama").css("order", order_image_view + 1)


  $(".small_image").css("background-image", `url(${img})`)

  $("#imageBama").css("background-image", `url(${img})`)

  $('.imgshow').attr("src",)
  $('#videoDiv').html(landing_page_json.video)

  $("#color_value_button").val(landing_page_json.button_value_color);

  $("#button_value").val(landing_page_json.button_value);
  $("#full_name1").val(landing_page_json.first_label);
  $("#email1").val(landing_page_json.second_label)
  $("#content1").val(landing_page_json.third_label);
  $("#phone1").val(landing_page_json.four_label);
  $("#heder").val(landing_page_json.title);
  $("#title_color").val(landing_page_json.title_color);
  // $("#p_description").text(landing_page_json.content_value);

  $("#Content").val(landing_page_json.content_value);
  $("#page_color").val(landing_page_json.bg_color_page);
  $("#landingPage").css("background-color", landing_page_json.bg_color_page);
  $("#content_color").val(landing_page_json.content_color);
  $("#page-color").val(landing_page_json.bg_color_page);
  $("#p_description").css("color", landing_page_json.content_color);
  $("#p_description").css("height", landing_page_json.height_of_content);
  $("#p_description").text(landing_page_json.content_value);
  $("#h1").css("color", landing_page_json.title_color);
  $("#linkToCopy").val(
    `https://funnel.leader.codes/view/${usrName}/${landing_page_json.name}`
  );
  $("#h1").text(landing_page_json.title);
  $("#submit").val(landing_page_json.button_value);
  $("#bg_color_button").val(landing_page_json.bg_color_button);
  $("#submit").css("background-color", landing_page_json.bg_color_button);
  $("#submit").css("color", landing_page_json.button_value_color);
  if (landing_page_json.required_of_first_label == true) {
    $("#input1").attr("required", true);
    $("#span_one").text("*");
  }
  if (landing_page_json.required_of_four_label == true) {
    $("#phone").attr("required", true);
    $("#span_four").text("*");
  }
  if (landing_page_json.required_of_second_label == true) {
    $("#content").attr("required", true);
    $("#span_two").text("*");
  }
  if (landing_page_json.required_of_third_label == true) {
    $("#email").attr("required", true);
    $("#span_three").text("*");
  }

  if (landing_page_json.check_content == false) {
    $("#p_description").css("display", "none");
  }
  if (landing_page_json.check_image == false) {
    $("#imageBama").css("display", "none");
  }
  if (landing_page_json.check_video == false) {
    $("#videoDiv").css("display", "none");
  }



  if (landing_page_json.check_tb_title == false) {
    $("#h1").css("display", "none");
  }
  if (landing_page_json.check_full_name == false) {
    $("#first_input").css("display", "none");
  }
  if (landing_page_json.check_email == false) {
    $("#second_input").css("display", "none");
  }
  if (landing_page_json.check_message == false) {
    $("#fourth_input").css("display", "none");
  }
  if (landing_page_json.check_phone == false) {
    $("#third_input").css("display", "none");
  }

}

// function update_landingPage() {
//   console.log("lkik")
//   $.get(`https://funnel.leader.codes/api/${uid}`, function (data) {
//     for (let index = 0; index < data.length; index++) {}
//   });
// }

function color_value_button(val) {
  landing_page_json.button_value_color = val;
  $("#submit").css("color", val);
}

function bg_color_button(val) {
  landing_page_json.bg_color_button = val;
  $("#submit").css("background-color", val);
}

function button_value(val) {
  $("#submit").val(val);
  landing_page_json.button_value = val;

  if (landing_page_json.button_value == "") {
    $("#submit").val("submit");
    landing_page_json.button_value = "submit";
  }
}

function checkbox1(val) {
  if (val == true) {
    landing_page_json.required_of_first_label = "true";
    $("#span_one").text("*");
  } else {
    landing_page_json.required_of_first_label = "false";
    $("#span_one").empty();
  }
}

function checkbox2(val) {
  if (val == true) {
    landing_page_json.required_of_second_label = "true";
    $("#span_two").text("*");
  } else {
    landing_page_json.required_of_second_label = "false";
    $("#span_two").empty();
  }
}

function checkbox3(val) {
  if (val == true) {
    landing_page_json.required_of_third_label = "true";
    $("#span_three").text("*");
  } else {
    landing_page_json.required_of_third_label = "false";
    $("#span_three").empty();
  }
}

function checkbox4(val) {
  if (val == true) {
    landing_page_json.required_of_four_label = "true";
    $("#span_four").text("*");
  } else {
    landing_page_json.required_of_four_label = "false";
    $("#span_four").empty();
  }
}

function input4(val) {
  $("#phone1").val(val);
  landing_page_json.four_label = val;

  if (landing_page_json.four_label == "") {
    $("#phone1").val("phone");
    landing_page_json.four_label = "phone";
  }
}

function input3(val) {
  $("#content1").val(val);
  landing_page_json.third_label = val;


}

function input2(val) {
  $("#email1").val(val);
  landing_page_json.second_label = val;
}

function input1(val) {
  $("#full_name1").val(val);
  landing_page_json.first_label = val;

}
function onblurEmail(Email) {
  if (landing_page_json.second_label == "") {
    $("#email1").val("Email");
    landing_page_json.second_label = "Email";
  }
  $("#input2").removeClass("focus");
  //   if (Email=="Email"){
  //     $("#collapseThree").removeClass("on show");
  //   }

}
function Name(val) {
  $("#input1").val(val);
  $("#full_name1").val(val);
  landing_page_json.first_label = val;

}
function onfocusEmail() {
  if (landing_page_json.second_label == "Email") {
    $("#email1").val("");
    landing_page_json.second_label = ""
  }
  ;

  $('#collapseThree').collapse('show');
  $('#input2').addClass("focus")
  $('#wrap-configurator').animate({
    scrollTop: $('#head-con').offset().top
  }, 500);
}


function onSubmit() {
  $('#collapseThree').collapse('show');
  $('#button_value').addClass("focus")
  $('#wrap-configurator').animate({
    scrollTop: $('#bg_color_button').offset().top
  }, 500);
  myButton = document.getElementById("submit");
  submit.type = "text";
  //   $("#submit").type("text")


}
function onfocusSubmit() {

  if (landing_page_json.button_value == "submit") {
    landing_page_json.button_value = ""
    $("#submit").val("");
  }

  $('#collapseTwo').collapse('show');
  $('#button_value').addClass("focus")
  $('#wrap-configurator').animate({
    scrollTop: $("#input1").offset().top
  }, 500);


  // if (landing_page_json.button_value =="submit") {
  //   landing_page_json.button_value ="submit"
  //   $("#button_value").val("");
  // }


  // if (landing_page_json.button_value =="submit") {
  //   $("#submit").val("");
  //   $("#button_value").val("");
  //   landing_page_json.button_value ="submit"
  // }


}


function onblurFullName() {
  if (landing_page_json.first_label == "") {
    $("#full_name1").val("Full Name");
    landing_page_json.first_label = "Full Name";
  }
  $("#input1").removeClass("focus");
  //   if (FullName=="FullName"){
  //     $("#collapseThree").removeClass("on show");
  //   }

}
function onblurPhone(Phone) {
  if (landing_page_json.four_label == "") {
    $("#phone1").val("Phone");
    landing_page_json.four_label = "Phone";
  }
  $("#input4").removeClass("focus");
  //   if (Phone=="Phone") {
  //       $("#collapseThree").removeClass("on show");

  //   }
}

function email(val) {
  $("#input2").val(val);
  landing_page_json.second_label = val;

}

function ph(val) {
  $("#input4").val(val);
  $("#phone1").val(val);
  landing_page_json.four_label = val;


}

function change_content(val) {
  $("#input3").val(val);
  landing_page_json.third_label = val;

}

function title_page(val) {
  $("#h1").text(val);
  landing_page_json.title = val;

}
function onfocusCon() {
  if (landing_page_json.third_label == "Message") {
    $("#content1").val("");
    landing_page_json.third_label = "";
  }

  $('#collapseThree').collapse('show');
  $('#input3').addClass("focus")
  $('#wrap-configurator').animate({
    scrollTop: $('#input1').offset().top
  }, 500);

}



function onblurTitle(h1) {

  if (landing_page_json.title == "") {
    $("#h1").text("Add Title");
    $("#heder").val("Add Title");
    landing_page_json.title = "Add Title";
    $("#heder").removeClass("focus");
  }
  //   if (h1=="h1") {
  //     $("#collapseOne").removeClass("on show"); 
  //   }

}
function onfocusPhone() {
  if (landing_page_json.four_label == "Phone") {
    landing_page_json.four_label = ""
    $("#phone1").val("");
  }

  $('#collapseThree').collapse('show');
  $('#input4').addClass("focus")
  $('#wrap-configurator').animate({
    scrollTop: $('#input1').offset().top
  }, 500);
}


function onfocusHeader() {

  $("#heder").val("");
  landing_page_json.title = ""
}

function onfocusTitle() {
  if (landing_page_json.title == "Add Title") {
    landing_page_json.title = ""
    $("#h1").text("");
  }

  $('#collapseOne').collapse('show');
  $('#heder').addClass("focus")
  $('#wrap-configurator').animate({
    scrollTop: $("#heder").offset().top
  }, 500);
  // $('#wrap-configurator').animate({ scrollTop: 200 }, 'fast');
  // $('#heder').offset({top: 50, left: 20})
  // $($(".ar")[parseInt($(this).attr("name"))]).addClass("active");
}

function onfocusFullMame() {
  if (landing_page_json.first_label == "Full Name") {
    $("#full_name1").val("");
    landing_page_json.first_label = ""
  }


  $('#collapseThree').collapse('show');
  $('#input1').addClass("focus")
  $('#wrap-configurator').animate({
    scrollTop: $('#head-con').offset().top
  }, 500);

}

function onfocusDescription() {

  landing_page_json.content_value = ""
  $("#Content").val("");
}
function onfocusContent() {
  if (landing_page_json.content_value == "Add Description") {
    landing_page_json.content_value = ""
    $("#p_description").text("");
  }

  $('#collapseOne').collapse('show');
  $('#Content').addClass("focus")
  $('#wrap-configurator').animate({
    scrollTop: $("#Content").offset().top
  }, 500);




}

function changeH1() {

  $("#heder").val($("#h1").text());
  landing_page_json.title = $("#h1").text();

}


function redirect(val) {
  landing_page_json.redirect = val;

}

function landingPageName(val) {
  landing_page_json.name = val;
  if (landing_page_json.name == "") {
    landing_page_json.name = "new";
  }
}
function videoIframe(val) {
  landing_page_json.video = val;
  $('#videoDiv').html(val)
}
function content(val) {
  $("#p_description").text(val);
  landing_page_json.content_value = val;
  $("#Content").on('input', function () {
    $("#p_description")
      .width(300)
      .height(50)
      .width(this.scrollWidth)
      .height(this.scrollHeight);
  });
}

function changeContent() {


  $("#Content").val($("#p_description").val());
  landing_page_json.content_value = $("#p_description").val();

  $("#p_description").on('input', function () {
    $(this)
      .width(300)
      .height(50)
      .width(this.scrollWidth)
      .height(this.scrollHeight);
  });

}


function onblurCon(Con) {





  if (landing_page_json.third_label == "") {
    $("#content1").val("Message");
    landing_page_json.third_label = "Message";
  }
  $("#input3").removeClass("focus");
  //   if (Con=="Con") {
  //       $("#collapseThree").removeClass("on show");

  //   }
}
$(document).mousedown(function () {
  let arr = Array.from(document.querySelectorAll('#wrap-configurator *'))
  if (arr.includes(event.target)) {

  } else {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');

    // $("#collapseOne").removeClass("on show");
    // $("#collapseTwo").removeClass("on show");
    // $("#collapseThree").removeClass("on show");
  }
  // if ($(event.target).attr("id") == "wrap-configurator") {
  //     console.log(event.parentNode.target.id)
  // }
  // let r=event.target
  // if (r.parent('div#wrap-configurator').length) {
  //     alert('Your clicked element is having div#hello as parent');
  // }
  // console.log(event.parentNode)
});


function onblurContent(p_description) {


  if (landing_page_json.content_value == "") {
    $("#p_description").text(
      "Add Description"
    );
    $("#Content").val(
      "Add Description"
    );
    landing_page_json.content_value =
      "Add Description";
  }
  //   $("#Content").removeClass("focus")



}


function page_color(val) {
  landing_page_json.bg_color_page = val;
  $("#landingPage").css("background-color", val);
}
function title_color(val) {
  landing_page_json.title_color = val;
  $("#h1").css("color", val);
}

function content_color(val) {
  landing_page_json.content_color = val;
  $("#p_description").css("color", val);
}

// $("#d").on("input", onInput);
// function onInput() {
//   var spanElm = this.nextElementSibling;
//   spanElm.textContent = this.value; // the hidden span takes the value of ;
//   this.style.width = spanElm.offsetWidth + "px"; // apply width of the span to the input
// }

async function viewLandingPage() {

  if (file == "/new") {
    saveLandingPage(false);
  } else {
    update();
  }

  window.open(`https://funnel.leader.codes/view/${usrName}/${landing_page_json.name}`);
  // window.location.href = `https://funnel.leader.codes/view/${uid}/${landing_page_json.name}`;
}

function update() {
  landing_page_json.height_of_content = $("#p_description").height() + "px"
  let elementInLeft = $(".elementInLeft ")
  console.log(elementInLeft[1].id)
  landing_page_json.order[0] = elementInLeft[0].id
  landing_page_json.order[1] = elementInLeft[1].id
  landing_page_json.order[2] = elementInLeft[2].id


  delete landing_page_json.viewers
  const landingPageForm = $("#formLandingPage")[0];
  const fd = new FormData(landingPageForm);
  const url = `https://funnel.leader.codes/api/${uid}/${landing_page_json.name}
    `;

  if (image) {
    fd.append("image", image, image ? image.name : image);
  }
  fd.append("funnel", JSON.stringify(landing_page_json))

  // let keys = Object.keys(landing_page_json);
  // keys.forEach((key) => fd.append(key, landing_page_json[key]));

  const settings = {
    url: url,
    headers: { Authorization: jwtFromCookie },
    method: "POST",
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: fd,
    async: false,
  };

  $.ajax(settings).done(function (response) {

  });
}

function lpDir(dir) {
  landing_page_json.landing_page_dir = dir;
  $("#landingPage").css("text-align", dir);
  $("#landingPage").css("direction", dir == "right" ? "rtl" : "ltr");

}

function check_image(val) {
  if (val == false) {
    $("#imageBama").css("display", "none");
    landing_page_json.check_image = "false";
  } else {
    $("#imageBama").show();
    landing_page_json.check_image = "true";
  }
}

function check_video(val) {
  if (val == false) {
    $("#videoDiv").css("display", "none");
    landing_page_json.check_videoDiv = "false";
  } else {
    $("#videoDiv").show();
    landing_page_json.check_videoDiv = "true";
  }
}


function check_content(val) {
  if (val == false) {
    $("#p_description").css("display", "none");
    landing_page_json.check_content = "false";
  } else {
    $("#p_description").show();
    landing_page_json.check_content = "true";
  }
}

function check_tb_title(val) {
  if (val == false) {
    $("#h1").css("display", "none");
    landing_page_json.check_tb_title = "false";
  } else {
    $("#h1").show();
    landing_page_json.check_tb_title = "true";
  }
}

function check_full_name(val) {
  if (val == false) {
    $("#first_input").css("display", "none");
    landing_page_json.check_full_name = "false";
  } else {
    $("#first_input").show();
    landing_page_json.check_full_name = "true";
  }
}
function check_email(val) {
  if (val == false) {
    $("#second_input").css("display", "none");
    landing_page_json.check_email = "false";
  } else {
    $("#second_input").show();
    landing_page_json.check_email = "true";
  }
}

function check_message(val) {
  if (val == false) {
    $("#fourth_input").css("display", "none");
    landing_page_json.check_message = "false";
  } else {
    $("#fourth_input").show();
    landing_page_json.check_message = "true";
  }
}

function check_phone(val) {
  if (val == false) {
    $("#third_input").css("display", "none");
    landing_page_json.check_phone = "false";
  } else {
    $("#third_input").show();
    landing_page_json.check_Phone = "true";
  }
}

function save_l() {
  let elementInLeft = $(".elementInLeft ")
  console.log(elementInLeft[1].id)
  landing_page_json.order[0] = elementInLeft[0].id
  landing_page_json.order[1] = elementInLeft[1].id
  landing_page_json.order[2] = elementInLeft[2].id
  console.log(landing_page_json.order)

  console.log(landing_page_json.order)

  landing_page_json.height_of_content = $("#p_description").height() + "px"
  console.log($("#p_description").height())
  const landingPageForm = $("#formLandingPage")[0];
  const fd = new FormData(landingPageForm);
  const url = `https://funnel.leader.codes/api/${uid}`;

  if (image) {
    console.log(image);

    fd.append("image", image, image ? image.name : image);
  }

  console.log(landing_page_json.to_whom_send_leads)
  fd.append("funnel", JSON.stringify(landing_page_json))
  // let keys = Object.keys(landing_page_json);
  // keys.forEach((key) => fd.append(key, landing_page_json[key]));
  const settings = {
    url: url,
    headers: { Authorization: jwtFromCookie },
    method: "POST",
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: fd,
    async: false,
  };
  console.log(fd)
  $.ajax(settings).done(function (response) {
    console.log(response);

    fillLandingPageList()

    window.location.href = `https://funnel.leader.codes/${usrName}/${landing_page_json.name}`;

  });



}





function saveLandingPage(save) {
  if (save) {
    $('#myModalLabel').text('Are you sure you want to save this landing page?')

    modalPublishConfirm(function (confirm) {

      if (confirm) {

        save_l()
        return
      }
    })
  } else {
    save_l()
  }

}

function submitForm() {

  event.preventDefault();
  $.ajax({
    url: `https://funnel.leader.codes/api/${uid}${file}`,

    headers: {
      "Content-Type": "application/json",
      "Authorization": "view"
    },
    method: "get",
    success: function (data) {
      let landing_page_json = data;
      let form = $("#landingPageForm_view");
      let values = []
      for (let i = 0; i < form[0].length; i++) {
        values[i] = form[0][i].value;
      }
      if (landing_page_json.required_of_first_label && values[0] === "") {
        $("#p1").text("This field is required")
        itsOk = false
      }
      if (values[1] === "") {
        $("#p2").text("This field is required")
        itsOk = false
      } else {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(String(values[1]).toLowerCase())
        if (!valid) {
          alert("Invalid email address")
          return
        }

      }
      if (landing_page_json.required_of_third_label && values[3] === "") {
        $("#p3").text("This field is required")
        itsOk = false
      }
      if (landing_page_json.required_of_four_label && values[2] === "") {
        $("#p4").text("This field is required")
        itsOk = false
      }
      if (itsOk == false) {
        itsOk = true

      }

      let day = getToday();
      let contactDetails = {
        fullName: values[0],
        email: values[1],
        phone: values[2],
        message: values[3],
        timestamp: new Date(),
        name_of_landing_page: file.substring(1),
      };

      let tableToSend = fillTable(values, landing_page_json.name);






      $.ajax({
        url: `https://funnel.leader.codes/api/${uid}/submit/${landing_page_json.name}`,
        // headers: { Authorization: jwtFromCookie },
        headers: {
          "Content-Type": "application/json",
          "Authorization": "view"
        },
        type: "POST",
        withCradentials: true,
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({ "body": tableToSend, "list": landing_page_json.to_whom_send_leads, "submition": JSON.stringify(contactDetails) }),
        success: function (data) {

          if (landing_page_json.redirect !== "") {
            window.location.href = `${landing_page_json.redirect}`;
          } else {
            localStorage["title_color"] = JSON.stringify(
              landing_page_json.bg_color_button
            );

            if (landing_page_json.img == undefined) {
              localStorage["img"] = JSON.stringify("/image/image.png")
            } else { localStorage["img"] = JSON.stringify(landing_page_json.img); }


            window.location.href = "/thank.html";
          }
          console.log("success", data);
        },
      });
    }
  })
}

function Add_an_address(val) {

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = re.test(String(val).toLowerCase())



  if (val === '')
    return
  if (!valid) {
    alert("Invalid email address")
    return
  }
  landing_page_json.to_whom_send_leads.push(val);
  append_address(landing_page_json.to_whom_send_leads)
}
function append_address(address) {
  $("#div_to_whom").empty();
  $("#to_whom").val("");
  for (
    let index = 0;
    index < address.length;
    index++
  ) {
    let new_address = `
      <div class="input-group my-1">
      <div class=" input-group-prepend  p-0">
      <input id="new_add${index}" class="form-control p-0" value="${address[index]}" disabled> </input>
  
  
      <button class="btn btn-outline-secondray py-0" id="delete" onclick="delete_address(new_add${index}.value)">    <span  class="material-icons align-middle " >
      clear
   </span></button>
      </div>
      </div>`;
    $("#div_to_whom").append(new_address);
  }
}

function getToday() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  (curYear = today.getFullYear()),
    (curHour =
      today.getHours() > 12
        ? today.getHours() - 12
        : today.getHours() < 10
          ? "0" + today.getHours()
          : today.getHours()),
    (curMinute =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()),
    (curSeconds =
      today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()),
    (curMeridiem = today.getHours() > 12 ? "PM" : "AM");
  let date =
    dd +
    "/" +
    mm +
    "/" +
    yyyy +
    " " +
    curHour +
    ":" +
    curMinute +
    "." +
    curSeconds +
    " " +
    curMeridiem;
  return date;
}
function openLandingePageList() {
  if ($("#list").css("display") === "flex") {
    $("#list").css("display", "none");
    // $("#section").css("opacity", "1");
  } else {
    $("#list").css("display", "flex");
    // $("#section").css("opacity", "0.2");
  }
}
function fillList() {
  counter = LandingPageList.length;

  if (file == "/new") {
    landing_page_json.name += counter
    $("#landingPageName").val(landing_page_json.name);
  } else { $("#landingPageName").val(landing_page_json.name); }

  $("#landingPageList").empty();
  $("#allList").empty();
  for (let i = 0; i < LandingPageList.length; i++) {
    let imageOfList
    if (LandingPageList[i].img == undefined) {
      imageOfList = "/image/image.png"
    } else {
      imageOfList = LandingPageList[i].img
    }

    let element = `
          <div class="card text-center cardElemntInList col-md-2 mb-3"  onclick="openSelectedlandingPage(${i})">
         <div style="background-image: url('${imageOfList}') !important; background-size:cover !important;  background-repeat: no-repeat;"  class="card-body elemnt p-0"   >
             <h5 class="card-title"></h5>
         </div>
         <div class="card-footer text-muted font-weight-bold">
             ${LandingPageList[i].name}
         </div>

         <div  class="d-flex justify-content-center"><span class="material-icons iconList" onclick="selectremove(${i})">
         delete
         </span><span class="material-icons iconList" onclick="selectduplicate(${i})">
             file_copy
             </span></div>

     </div>`;
    // $(`#imgOF${i}`).css("background-color", "red")
    $("#allList").append(element);
  }
  LandingPageList = LandingPageList.reverse()

  for (let index = 0; index < LandingPageList.length && index < 10; index++) {
    let bg = "#e9ebf1"
    if ("/" + LandingPageList[index].name == file) {
      bg = "#5a5a5a"
    }
    let choice = LandingPageList.length - index - 1
    console.log(choice)
    let element = `
    <div id="landingPageInList" onclick="openSelectedlandingPage(${choice})"><div id="InList" style="background-color:${bg};" class="rounded InList${index} mt-3 mx-3 mb-1"></div><p class="m-1">${LandingPageList[index].name}</p><span class="material-icons iconList" onclick="selectremove(${index})">
    delete
    </span><span class="material-icons iconList" onclick="selectduplicate(${index})">
        file_copy
        </span></div></div>
    `

    $("#landingPageList").append(element);
    bg = "#e9ebf1"
  }
  LandingPageList = LandingPageList.reverse()
}




function fillLandingPageList() {

  $.ajax({
    url: `https://funnel.leader.codes/api/${uid}`,
    headers: { Authorization: jwtFromCookie },
    method: "get",
    success: function (data) {
      console.log("klklk")
      LandingPageList = data;
      fillList()
    }
  });
}

function openNewLandingPage() {

  $.ajax({
    url: `https://funnel.leader.codes/api/${uid}`,
    headers: { Authorization: jwtFromCookie },
    method: "get",
    success: function (data) {
      window.location.href = `https://funnel.leader.codes/${usrName}/new`;
    }
  });
}
function openSelectedlandingPage(index) {

  $.ajax({
    url: `https://funnel.leader.codes/api/${uid}`,
    headers: { Authorization: jwtFromCookie },
    method: "get",
    success: function (data) {

      console.log(data)

      for (let j = 0; j < data.length; j++) {
        if (data[j].name == LandingPageList[index].name) {
          window.location.href = `https://funnel.leader.codes/${usrName}/${data[index].name}`;
          return
        }

      }

    }
  });
}

function delete_address(val) {
  for (
    let index = 0; index < landing_page_json.to_whom_send_leads.length; index++
  ) {
    if (landing_page_json.to_whom_send_leads[index] == val) {
      landing_page_json.to_whom_send_leads.splice(index, 1);
    }
  }

  $("#div_to_whom").empty();
  for (
    let index = 0;
    index < landing_page_json.to_whom_send_leads.length;
    index++
  ) {
    let new_address = `
    <div class="d-flex justify-content-between">
    <input id="new_add${index}" class="form-control m-1" value="${landing_page_json.to_whom_send_leads[index]}" disabled> </input>

    <button class="btn" id="delete" onclick="delete_address(new_add${index}.value)">x</button>
    </div>`;
    $("#div_to_whom").append(new_address);
  }
}




$(".collapse").on("show.bs.collapse", function () {
  $($(".ar")[parseInt($(this).attr("name"))]).addClass("active");
  $(this).prev().css('border', 'none')

});

$(".collapse").on("hide.bs.collapse", function () {
  $($(".ar")[parseInt($(this).attr("name"))]).removeClass("active");
  $(this).prev().css('border', ' 1px solid #b1b1b1')

});

function openNewlandingPage() {
  window.location.href = `https://funnel.leader.codes/${usrName}/new`;
}

function openAll() {
  $("#listAll").toggle()
}

$('#group_radius').mouseleave(function () {
  $('#fram_divLabel').hide();
  $('#fram_radius').removeClass('bgOnOpen')


})

function selectremove(index) {

  $('#myModalLabel').text('Are you sure you want to delete this landing page?')
  $("#modal-btn-si").removeClass("btn-primary")
  $("#modal-btn-si").addClass("btn-default")
  $("#modal-btn-no").removeClass("btn-default")
  $("#modal-btn-no").addClass("btn-primary")

  event.stopPropagation();

  modalPublishConfirm(function (confirm) {
    $("#modal-btn-si").removeClass("btn-default")
    $("#modal-btn-si").addClass("btn-primary")
    $("#modal-btn-no").removeClass("btn-primary")
    $("#modal-btn-no").addClass("btn-default")
    if (confirm) {
      // LandingPageList.reverse()

      console.log(LandingPageList[index].name)
      removeLandingPage(LandingPageList[index]._id, LandingPageList[index].name)


      // LandingPageList.reverse()

    }
  })



}
function resert() {
  location.reload()
}

function removeLandingPage(LandingPageId, name) {
  console.log(LandingPageId)
  var settings = {

    "url": `https://funnel.leader.codes/api/removeLandingPage/${uid}/${LandingPageId}`,
    "method": "DELETE",
    "timeout": 0,
    "headers": {
      "Authorization": jwtFromCookie,
      "Content-Type": "application/json",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    // LandingPageList.pop(LandingPageList.find(x => x._id === LandingPageId))
    fillLandingPageList()
    if (file !== "/new" && file === "/" + name) { window.location.href = `https://funnel.leader.codes/${usrName}/new`; }



  });



}

function fillTable(values, name) {

  let table = ` <div dir="rtl">
  <h3 style="text-align:left; backgroun-color:red">${name}</h3> 
  <br>
  <a style="text-align:left" href="https://funnel.leader.codes/view/${usrName}/${name}">link to this landing page</a>
  <br>
  <table style="text-align:left; border-collapse: collapse  width:100%">
    <tr>
      <thstyle=" border: 1px solid #dddddd; font-weight: bold;
      padding: 8px;">#</th>
      <th " border: 1px solid #dddddd; font-weight: bold;
      padding: 8px;" >Answer</th>
    </tr>
    <tr>
      <td style=" border: 1px solid #dddddd; font-weight: bold;
      padding: 8px;">full Name</td>
      <td style=" border: 1px solid #dddddd; padding: 8px;">${values[0]}</td>
      </td>
    </tr>
    <tr>
      <td style=" border: 1px solid #dddddd; font-weight: bold;
      padding: 8px;">Email</td>
      <td style=" border: 1px solid #dddddd; padding: 8px;">${values[1]}</td>
      </td>
    </tr>
    <tr>
    <td style=" border: 1px solid #dddddd; font-weight: bold;
    padding: 8px;">Phone</td>
    <td style=" border: 1px solid #dddddd; padding: 8px;">${values[2]}</td>
    </td>
  </tr>
  <tr>
  <td style=" border: 1px solid #dddddd; font-weight: bold;
  padding: 8px;">Message</td>
  <td style=" border: 1px solid #dddddd; padding: 8px;">${values[3]}</td>
  </td>
  </tr>
  </table>
  </div>
  `
  //   <h3 style="text-align:left; backgroun-color:red">${landing_page_json.name}</h3>`
  //   <a style="text-align:left" href="https://funnel.leader.codes/${usrName}/${landing_page_json.name}">link to this landing page</a>
  //   `




  return (table)
}

$('.copyButton').click(function () {
  console.log("sesesesese")

  if ($("#updateButton").css("display") == "none") {
    alert("You need to save and then you can copy the link!")
    return
  }
  $(this).siblings('input.linkToCopy').select();
  document.execCommand("copy");
  $('#alertCopiedLink').show()
});

function hideWelcome() {
  $("#Welcome").hide();
  $("#inWelcome").hide();


}

function selectduplicate(index) {

  event.preventDefault();

  // LandingPageList.reverse()
  let landingPageToDuplicate = LandingPageList[index]
  console.log(landingPageToDuplicate)
  // LandingPageList.reverse()
  event.stopPropagation();
  // let nameFormToduplicate = $(event.currentTarget.closest('.elementInListText')).children('p').text()

  // let formToDuplicate = formsOfUser.find(x => x.name === nameFormToduplicate);

  duplicateLandingPage(landingPageToDuplicate._id)


}

function duplicateLandingPage(landingPageId) {
  console.log(landingPageId)
  var settings = {
    "url": `https://funnel.leader.codes/api/duplicateLandingPage/${uid}/${landingPageId}`,
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": jwtFromCookie,
      "Content-Type": "application/json",
    },

  }
  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log("hhhhhhh")
    fillLandingPageList()
    // formsOfUser.push(response.newForm)
    // let element = createElementInList(formsOfUser.length - 1, "#f0f0f0")
    // $('#formsList').prepend(element);
  });
}
function getUidByUserName(usrName) {
  return new Promise((resolve, rject) => {
    $.ajax({
      url: "https://funnel.leader.codes/api/getUser/" + usrName,
      method: "GET",
      withCradentials: true,
      dataType: "json",
      contentType: "application/json",
      success: function (data) {
        console.log(data)
        uid = data.uid;
        resolve(uid)
      },
      error: function (err) { console.log(err) }
    })
  }
  )
}


// function initColorPicker1() {
//     let canvas = document.getElementById('colorCanvasBG');
//     let canvasContext = canvas.getContext('2d');

//     let gradient = canvas.getContext('2d').createLinearGradient(0, 0, canvas.width, 0)
//     gradient.addColorStop(0, '#ff0000')
//     gradient.addColorStop(1 / 6, '#ffff00')
//     gradient.addColorStop((1 / 6) * 2, '#00ff00')
//     gradient.addColorStop((1 / 6) * 3, '#00ffff')
//     gradient.addColorStop((1 / 6) * 4, '#0000ff')
//     gradient.addColorStop((1 / 6) * 5, '#ff00ff')
//     gradient.addColorStop(1, '#ff0000')
//     canvas.getContext('2d').fillStyle = gradient
//     canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)

//     gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height)
//     gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
//     gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
//     gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
//     canvas.getContext('2d').fillStyle = gradient
//     canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)

//     gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height)
//     gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
//     gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)')
//     gradient.addColorStop(1, 'rgba(0, 0, 0, 1)')
//     canvas.getContext('2d').fillStyle = gradient
//     canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)


//     canvas.onclick = function (e) {
//         console.log()
//         let imgData = canvasContext.getImageData((e.offsetX / canvas.clientWidth) * canvas.width, (e.offsetY / canvas.clientHeight) * canvas.height, 1, 1)
//         let rgba = imgData.data;
//         let color = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";

//         console.log("%c" + color, "color:" + color)

//         $('#landingPage').css('background-color', color);
//         landing_page_json.bg_color_page=color;
//         console.log(landing_page_json.bg_color_page)

//     }


// let canvas2=document.getElementById("colorCanvasTitle")


// let canvasContext2 = canvas2.getContext('2d');

// let gradient2 = canvas.getContext('2d').createLinearGradient(0, 0, canvas2.width, 0)
// gradient2.addColorStop(0, '#ff0000')
// gradient2.addColorStop(1 / 6, '#ffff00')
// gradient2.addColorStop((1 / 6) * 2, '#00ff00')
// gradient2.addColorStop((1 / 6) * 3, '#00ffff')
// gradient2.addColorStop((1 / 6) * 4, '#0000ff')
// gradient2.addColorStop((1 / 6) * 5, '#ff00ff')
// gradient2.addColorStop(1, '#ff0000')
// canvas2.getContext('2d').fillStyle = gradient2
// canvas2.getContext('2d').fillRect(0, 0, canvas2.width, canvas2.height)

// gradient2 = canvas2.getContext('2d').createLinearGradient(0, 0, 0, canvas2.height)
// gradient2.addColorStop(0, 'rgba(255, 255, 255, 1)')
// gradient2.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
// gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)')
// canvas2.getContext('2d').fillStyle = gradient2
// canvas2.getContext('2d').fillRect(0, 0, canvas2.width, canvas2.height)

// gradient2 = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas2.height)
// gradient2.addColorStop(0, 'rgba(0, 0, 0, 0)')
// gradient2.addColorStop(0.5, 'rgba(0, 0, 0, 0)')
// gradient2.addColorStop(1, 'rgba(0, 0, 0, 1)')
// canvas2.getContext('2d').fillStyle = gradient2
// canvas2.getContext('2d').fillRect(0, 0, canvas2.width, canvas2.height)


// canvas2.onclick = function (e) {
//     console.log()
//     let imgData = canvasContext2.getImageData((e.offsetX / canvas2.clientWidth) * canvas2.width, (e.offsetY / canvas.clientHeight) * canvas.height, 1, 1)
//     let rgba = imgData.data;
//     let color = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";

//     console.log("%c" + color, "color:" + color)

//     landing_page_json.title_color = color;
//     $("#h1").css("color", color);

// }



// let canvas3=document.getElementById("colorCanvasContent")


// let canvasContext3 = canvas3.getContext('2d');

// let gradient3 = canvas3.getContext('2d').createLinearGradient(0, 0, canvas3.width, 0)
// gradient3.addColorStop(0, '#ff0000')
// gradient3.addColorStop(1 / 6, '#ffff00')
// gradient3.addColorStop((1 / 6) * 2, '#00ff00')
// gradient3.addColorStop((1 / 6) * 3, '#00ffff')
// gradient3.addColorStop((1 / 6) * 4, '#0000ff')
// gradient3.addColorStop((1 / 6) * 5, '#ff00ff')
// gradient3.addColorStop(1, '#ff0000')
// canvas3.getContext('2d').fillStyle = gradient3
// canvas3.getContext('2d').fillRect(0, 0, canvas3.width, canvas3.height)

// gradient3 = canvas3.getContext('2d').createLinearGradient(0, 0, 0, canvas3.height)
// gradient3.addColorStop(0, 'rgba(255, 255, 255, 1)')
// gradient3.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
// gradient3.addColorStop(1, 'rgba(255, 255, 255, 0)')
// canvas3.getContext('2d').fillStyle = gradient3
// canvas3.getContext('2d').fillRect(0, 0, canvas3.width, canvas3.height)

// gradient3 = canvas3.getContext('2d').createLinearGradient(0, 0, 0, canvas3.height)
// gradient3.addColorStop(0, 'rgba(0, 0, 0, 0)')
// gradient3.addColorStop(0.5, 'rgba(0, 0, 0, 0)')
// gradient3.addColorStop(1, 'rgba(0, 0, 0, 1)')
// canvas3.getContext('2d').fillStyle = gradient3
// canvas3.getContext('2d').fillRect(0, 0, canvas3.width, canvas3.height)


// canvas3.onclick = function (e) {
//     console.log()
//     let imgData = canvasContext3.getImageData((e.offsetX / canvas3.clientWidth) * canvas3.width, (e.offsetY / canvas3.clientHeight) * canvas3.height, 1, 1)
//     let rgba = imgData.data;
//     let color = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";

//     console.log("%c" + color, "color:" + color)

//     landing_page_json.content_color = color;
//     $("#p_description").css("color",color);

// }


// let canvas4=document.getElementById("colorCanvasBG_Button")


// let canvasContext4 = canvas4.getContext('2d');

// let gradient4 = canvas4.getContext('2d').createLinearGradient(0, 0, canvas4.width, 0)
// gradient4.addColorStop(0, '#ff0000')
// gradient4.addColorStop(1 / 6, '#ffff00')
// gradient4.addColorStop((1 / 6) * 2, '#00ff00')
// gradient4.addColorStop((1 / 6) * 3, '#00ffff')
// gradient4.addColorStop((1 / 6) * 4, '#0000ff')
// gradient4.addColorStop((1 / 6) * 5, '#ff00ff')
// gradient4.addColorStop(1, '#ff0000')
// canvas4.getContext('2d').fillStyle = gradient4
// canvas4.getContext('2d').fillRect(0, 0, canvas4.width, canvas4.height)

// gradient4 = canvas4.getContext('2d').createLinearGradient(0, 0, 0, canvas4.height)
// gradient4.addColorStop(0, 'rgba(255, 255, 255, 1)')
// gradient4.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
// gradient4.addColorStop(1, 'rgba(255, 255, 255, 0)')
// canvas4.getContext('2d').fillStyle = gradient3
// canvas4.getContext('2d').fillRect(0, 0, canvas4.width, canvas4.height)

// gradient4 = canvas4.getContext('2d').createLinearGradient(0, 0, 0, canvas4.height)
// gradient4.addColorStop(0, 'rgba(0, 0, 0, 0)')
// gradient4.addColorStop(0.5, 'rgba(0, 0, 0, 0)')
// gradient4.addColorStop(1, 'rgba(0, 0, 0, 1)')
// canvas4.getContext('2d').fillStyle = gradient4
// canvas4.getContext('2d').fillRect(0, 0, canvas4.width, canvas4.height)


// canvas4.onclick = function (e) {
//     console.log()
//     let imgData = canvasContext4.getImageData((e.offsetX / canvas4.clientWidth) * canvas4.width, (e.offsetY / canvas4.clientHeight) * canvas4.height, 1, 1)
//     let rgba = imgData.data;
//     let color = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";

//     console.log("%c" + color, "color:" + color)
//     landing_page_json.bg_color_button = color;
//     $("#submit").css("background-color", color);

// }



// let canvas5=document.getElementById("colorCanvasColorValueButton")


// let canvasContext5 = canvas5.getContext('2d');

// let gradient5 = canvas5.getContext('2d').createLinearGradient(0, 0, canvas5.width, 0)
// gradient5.addColorStop(0, '#ff0000')
// gradient5.addColorStop(1 / 6, '#ffff00')
// gradient5.addColorStop((1 / 6) * 2, '#00ff00')
// gradient5.addColorStop((1 / 6) * 3, '#00ffff')
// gradient5.addColorStop((1 / 6) * 4, '#0000ff')
// gradient5.addColorStop((1 / 6) * 5, '#ff00ff')
// gradient5.addColorStop(1, '#ff0000')
// canvas5.getContext('2d').fillStyle = gradient5
// canvas5.getContext('2d').fillRect(0, 0, canvas5.width, canvas5.height)

// gradient5 = canvas5.getContext('2d').createLinearGradient(0, 0, 0, canvas5.height)
// gradient5.addColorStop(0, 'rgba(255, 255, 255, 1)')
// gradient5.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
// gradient5.addColorStop(1, 'rgba(255, 255, 255, 0)')
// canvas5.getContext('2d').fillStyle = gradient5
// canvas5.getContext('2d').fillRect(0, 0, canvas5.width, canvas5.height)

// gradient5 = canvas5.getContext('2d').createLinearGradient(0, 0, 0, canvas5.height)
// gradient5.addColorStop(0, 'rgba(0, 0, 0, 0)')
// gradient5.addColorStop(0.5, 'rgba(0, 0, 0, 0)')
// gradient5.addColorStop(1, 'rgba(0, 0, 0, 1)')
// canvas5.getContext('2d').fillStyle = gradient5
// canvas5.getContext('2d').fillRect(0, 0, canvas5.width, canvas5.height)


// canvas5.onclick = function (e) {
//     console.log()
//     let imgData = canvasContext4.getImageData((e.offsetX / canvas5.clientWidth) * canvas5.width, (e.offsetY / canvas5.clientHeight) * canvas5.height, 1, 1)
//     let rgba = imgData.data;
//     let color = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";

//     // console.log("%c" + color, "color:" + color)
//     landing_page_json.button_value_color =color;
//   $("#submit").css("color",color);

// }



//   }


//   $('.collapse').on('show.bs.collapse', function () {
//     $(this).prev().css('border', 'none')

// });

// $('.collapse').on('hide.bs.collapse', function () {
//     $(this).prev().css('border', ' 1px solid #b1b1b1')
// });‏

var modalPublishConfirm = function (callback) {
  $("#mi-modal").modal('show');
  $("#modal-btn-si").on("click", function () {
    callback(true);
    $("#mi-modal").modal('hide');
  });

  $("#modal-btn-no").on("click", function () {
    callback(false);
    $("#mi-modal").modal('hide');
  });
};

$('#sortable').sortable({

  start: function (e, ui) {

    console.log(ui.item.data())
    console.log(ui.item.index())
    // creates a temporary attribute on the element with the old index
    $(this).attr('data-previndex', ui.item.index());
  },
  update: function (e, ui) {
    console.log(ui.item[0].id)
    console.log(ui.item.index())
    // gets the new and old index then removes the temporary attribute
    var newIndex = ui.item.index();
    var oldIndex = $(this).attr('data-previndex');
    $(this).removeAttr('data-previndex');


  }
});
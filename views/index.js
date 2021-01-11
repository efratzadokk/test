const baseUrl=window.location.origin;

//כשמעלים לשרת להחליף את זה!!!!
// const baseUrlClient=window.location.origin;
const baseUrlClient="http://localhost:3000"

console.log(baseUrl)

const firebaseConfig = {
    apiKey: "AIzaSyDK4XGnKfHz_rKMKKNU5oix6BJJfDsmGrM",
    authDomain: "knowme-page-dev.firebaseapp.com",
    projectId: "knowme-page-dev",
    storageBucket: "knowme-page-dev.appspot.com",
    messagingSenderId: "474755504683",
    appId: "1:474755504683:web:4782fa2eb9c2c4acc2286e",
    measurementId: "G-71ZR37P1C5"
  };

//   var firebaseConfig = {
//     apiKey: "AIzaSyBG4FbB6eBy-U665nLOA_153D0YE-gSV9k",
//     authDomain: "knowmepage.firebaseapp.com",
//     projectId: "knowmepage",
//     storageBucket: "knowmepage.appspot.com",
//     messagingSenderId: "74025733902",
//     appId: "1:74025733902:web:a737a1219326a4d3fc115f",
//     measurementId: "G-RMEN31486N"
//   };

firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL;

$(document).ready(function () {
    firebase
        .auth()
        .signOut()
        .then(function () {
            console.log("logged out");
            document.cookie = 'jwt' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.knowme.page';
        })
        .catch(function (error) {});


    $("#loginBtn").click(function (e) {
        e.preventDefault();
        //alert("dhdh")
        let password = $("input#password").val();
        let email = $("input#email").val();
        if (password != "" && email != "") {
            let res = firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(function (error) {
                    alert(error);
                    res.catch(function (error) {
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        console.log(errorMessage);
                        console.log(errorCode);
                    });
                });
        }
    });

    $("#signupBtn").click(function (e) {
     
        let password = $("input#password").val();
        let email = $("input#email").val();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                alert(error);
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
            });
    });

    $("#google").click(function (e) {
        provider = new firebase.auth.GoogleAuthProvider();
        signInWithProvider(provider);
    });
    $("#facebook").click(function (e) {
        provider = new firebase.auth.FacebookAuthProvider();
        signInWithProvider(provider);
    });
    $("#twitter").click(function (e) {
        provider = new firebase.auth.TwitterAuthProvider();
        signInWithProvider(provider);
    });
});

function signInWithProvider(base_provider) {
    firebase
        .auth()
        .signInWithPopup(base_provider)
        .then(function (result) {
            console.log(result);
            console.log("success");
        })
        .catch(function (err) {
            console.log(err);
            console.log("failed");
        });
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user);
        firebase
            .auth()
            .currentUser.getIdToken(true)
            .then((firebaseToken) => {
                $.ajax({
                    url: `${baseUrl}/register/getAccessToken`,
                    method: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify({
                        action: "firebaseloginwithcredentials",
                        jwt: firebaseToken,
                    }),
                    success: function (data) {
                        checkPermission(data);
                    },
                });
            })
            .catch(function (error) {
                alert(error);
            });
    }
});

function checkPermission(data) {
    let TokenToString = data.accessToken.toString();
    let dataToProfilePage = {
        action: "loginCheckPermission",
        token: TokenToString
    };


    $.ajax({
        url: `${baseUrl}/register/checkPermission`,
        headers: {
            Authorization: TokenToString
        },
        method: "post",
        dataType: "json",
        contentType: "application/json",
        withCradentials: true,
        data: JSON.stringify(dataToProfilePage),
        success: function (data) {
            console.log('in success checkPermission');
            let jsonWebToken = data.jwt;
            let usename = data.userName;
            console.log(usename,data.is_username)
            let noQuotesJwtData = jsonWebToken.split('"').join("");
            let now = new Date();
               now.setMonth( now.getMonth() + 1 );
            // document.cookie = "jwt=" + noQuotesJwtData + ";domain=.knowme.page" + "; path=/; Expires="+now.toUTCString()+";"
            document.cookie =`Expires=${now.toUTCString()};`
            document.cookie =`path=/;`
            document.cookie = `jwt=${noQuotesJwtData};`
            document.cookie =`domain=.localhost:4000;`
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const des = urlParams.get('des')
            const routes = urlParams.get('routes')
            let redirectUrl = ''
            if (des) {
                
                redirectUrl =des + '/' + usename;
            

                if (routes) {
                    redirectUrl += '/' + routes
                }
                window.location.href = redirectUrl
            } else {
                window.location.href = (!data.is_username) ? `${baseUrl}/wizard` : `${baseUrlClient}/usename`
            }
        }
    });
}



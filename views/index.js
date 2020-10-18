var firebaseConfig = {
    apiKey: "AIzaSyBfZ4ae-W40v1mPivzlPZ7g1ctjls3VwrM",
    authDomain: "leader-5fc0d.firebaseapp.com",
    databaseURL: "https://leader-5fc0d.firebaseio.com",
    projectId: "leader-5fc0d",
    storageBucket: "leader-5fc0d.appspot.com",
    messagingSenderId: "1014543713524",
    appId: "1:1014543713524:web:e76b414c151e7525888aa1",
    measurementId: "G-ZER890028H",
};

firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL;

$(document).ready(function () {
    firebase
        .auth()
        .signOut()
        .then(function () {
            console.log("logged out");
            document.cookie = 'jwt' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.leader.codes';
        })
        .catch(function (error) {});


    $("#loginBtn").click(function (e) {
        e.preventDefault();
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
                    url: "https://api.leader.codes/register/getAccessToken",
                    method: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify({
                        action: "firebaseloginwithcredentials",
                        jwt: firebaseToken,
                    }),
                    success: function (data) {
                        checkPremission(data);
                    },
                });
            })
            .catch(function (error) {
                alert(error);
            });
    }
});

function checkPremission(data) {
    let TokenToString = data.accessToken.toString();
    let dataToProfilePage = {
        action: "loginCheckPermission",
        token: TokenToString
    };
    $.ajax({
        url: "https://api.leader.codes/register/checkPremission",
        headers: {
            Authorization: TokenToString
        },
        method: "post",
        dataType: "json",
        contentType: "application/json",
        withCradentials: true,
        data: JSON.stringify(dataToProfilePage),
        success: function (data) {
            let jsonWebToken = data.jwt;
            let usename = data.userName;
            let noQuotesJwtData = jsonWebToken.split('"').join("");
            document.cookie = "jwt=" + noQuotesJwtData + ";domain=.leader.codes" + "; path=/;";
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const des = urlParams.get('des')
            const routes = urlParams.get('routes')
            let redirectUrl = ''
            if (des) {
                redirectUrl = "https://" + des + '/' + usename;
                if (routes) {
                    redirectUrl += '/' + routes
                }
                window.location.href = redirectUrl
            } else {
                window.location.href = (!data.is_username) ? "https://leader.codes/wizard" : "https://knowme.page/" + usename
            }
        }
    });
}




// const is_existingUsername = await usernameExistCheck(uid)
// console.log(is_existingUsername)
// debugger

// const usernameExistCheck = (uid) => {
//     return new Promise((s, j) => {
//         fetch('https://api.leader.codes/register/checkPremission', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 uid: uid
//             })
//         }).then($ => {
//             $.json
//         }).then(s($.is_existingUsername))
//     })
// }
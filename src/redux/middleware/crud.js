import $, { error } from "jquery";
const url = `https://funnel.leader.codes`
// const url = `http://localhost:3008`

//////////login
// export const getUserByJWT = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'EXTRACT_JWT') {
 
//         let params = (new URL(document.location)).searchParams;
//         let jwtGlobal = params.get('jwt');
//         if (jwtGlobal) {
//           let newUrl = window.location.href
//           newUrl = newUrl.split('?jwt=')
//           newUrl = newUrl[0]
//           let date = new Date(Date.now() + 86400e3);
//           date = date.toUTCString();
//           var expires = "expires=" + date;
//           document.cookie = "devJwt" + "=" + jwtGlobal + ";" + expires + ";path=/";
//           window.location.replace(newUrl)
//         }}
//         let url = window.location///

//     return next(action)
// }
export const saveOrUpdate = ({ dispatch, getState }) => next => action => {
    if (action.type === '[funnel] SAVE_OR_UPDATE') {
        dispatch({ type: '[funnel] CHANGE_LOADING'})
        // dispatch({ type: '[funnel] UPLOAD_FILE', payload: action.payload }).then((res) => {
            // if (getState().funnel.idFunnel)
            //     dispatch({ type: '[funnel] UPDATE_FUNNEL' })
            // else
                dispatch({ type: '[funnel] CREAT_FUNNEL' })
                dispatch({ type: '[funnel] GET_ALL_FUNNELS'})
        // })
    }
    return next(action)
}

export const duplicateFunnel = ({ dispatch, getState }) => next => action => {
    if (action.type === '[funnel] DUPLICATE_FUNNEL') {
        debugger
        // console.log(getState().funnel.jsonPage);
        $.ajax({
            url:`${url}/api/duplicateFunnel/${action.payload}`,//5f6b069358a042177629086b
            type: 'POST',
            // data: { url: "efrat1", json: JSON.stringify(getState().funnel.jsonPage) },
            // data: { 'name': getState().funnel.name, json: JSON.stringify(getState().funnel.jsonPage) },
            success: function (data) {
                debugger
                console.log(data);
                // dispatch({ type: '[funnel] SET_ID_FUNNEL', payload: data.funnel._id  })
                // dispatch({ type: '[funnel] CHANGE_LOADING'})
                dispatch({ type: '[funnel] GET_ALL_FUNNELS'})
            },
            error: function (err) {
                debugger
                console.log();
                alert(JSON.parse(err.responseText).message)
            }
        })
    }
    return next(action)

}

export const updateFunnel1 = ({ dispatch, getState }) => next => action => {
    if (action.type === '[funnel] UPDATING_FUNNEL1') {
        dispatch({ type: '[funnel] CHANGE_LOADING'})
        // dispatch({ type: '[funnel] UPLOAD_FILE', payload: action.payload }).then((res) => {
            // if (getState().funnel.idFunnel)
            //     dispatch({ type: '[funnel] UPDATE_FUNNEL' })
            // else
                dispatch({ type: '[funnel] UPDATE_FUNNEL' })
                dispatch({ type: '[funnel] GET_ALL_FUNNELS'})
        // })
    }
    return next(action)
}

export const getFromServer = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_JSON')
        $.ajax({
            url: 'https://randomuser.me/api/?results=10&seed=abc',
            type: 'GET',
            success: function (data) {
                console.log(data);
            }
        })
    return next(action)
}
export const removeFunnel = ({ dispatch, getState }) => next => action => {
    debugger
    if (action.type === '[funnel] REMOVE_FUNNEL1') {
        debugger
        $.ajax({
            url: `${url}/api/deleteFunnel/${action.payload}`,
            type: 'DELETE',
            success: function (data) {
                debugger
                console.log(data);
                // dispatch({ type: '[funnel] GET_ALL_FUNNELS'})
                // dispatch({ type: '[funnel] REMOVE_FUNNEL'})
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
    return next(action)
}
//////////good
export const creatFunnel = ({ dispatch, getState }) => next => action => {
    if (action.type === '[funnel] CREAT_FUNNEL') {
        console.log(getState().funnel.jsonPage);
        $.ajax({
            // url: `${url}/api/createFunnel/${getState().user.userId}/${getState().funnel.name}`,
            url:`${url}/api/createFunnel/${getState().user.userId}/${getState().funnel.name}`,//5f6b069358a042177629086b
            type: 'POST',
            data: { url: "efrat1", json: JSON.stringify(getState().funnel.jsonPage) },
            // data: { 'name': getState().funnel.name, json: JSON.stringify(getState().funnel.jsonPage) },
            success: function (data) {
                debugger
                console.log(data);
                dispatch({ type: '[funnel] SET_ID_FUNNEL', payload: data.funnel._id  })
                dispatch({ type: '[funnel] CHANGE_LOADING'})
                dispatch({ type: '[funnel] GET_ALL_FUNNELS'})
            },
            error: function (err) {
                debugger
                console.log();
                alert(JSON.parse(err.responseText).message)
            }
        })
    }
    return next(action)

}
export const updateFunnel = ({ dispatch, getState }) => next => action => {
    if (action.type === '[funnel] UPDATE_FUNNEL') {
        console.log(getState().funnel.jsonPage);
        $.ajax({
            url: `${url}/api/updateFunnelDetails/${getState().user.userId}/${getState().funnel.idFunnel}`,
            type: 'POST',
            data: { name: getState().funnel.name, json: JSON.stringify(getState().funnel.jsonPage),lastUpdate:Date.now(),
            url: getState().funnel.urlFunnel},
            success: function (data) {
                console.log(data);

                debugger
                dispatch({ type: '[funnel] CHANGE_LOADING'})
                dispatch({ type: '[funnel] GET_ALL_FUNNELS'})
            },
            error: function (err) {
                console.log();
                alert(JSON.parse(err.responseText).message)
            }
        })
    }
    return next(action)
}

export const getUidByUserName = ({ dispatch, getState }) => next => action => {
    if (action.type === '[user] GET_UID_BY_USER_NAME') {
        // let url = window.location;
        // let userName = url.pathname.split('/')[1]
        $.ajax({
            url: `${url}/api/getuser/${getState().user.userName}`,
            type: 'GET',
            success: function (data) {
                console.log(data);
                debugger
                let newUid = data.uid;
                dispatch({ type: '[user] SET_USER_ID', payload: newUid })
                dispatch({ type: '[funnel] GET_ALL_FUNNELS'})

                if (getState().funnel.name !== 'new')
                    dispatch({ type: '[user] GET_FUNNEL', payload: newUid })
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
    return next(action)

}

export const getAllFunnelByUserId = ({ dispatch, getState }) => next => action => {
    if (action.type === '[funnel] GET_ALL_FUNNELS') {
        debugger
        let uid1=`${getState().user.userId}`
        console.log(uid1);
         let url1= `${url}/api/getAllFunnels/${uid1}`;
         
         console.log(url1);
        $.ajax({
            // url: `${url}/api/getAllFunnels/${getState().user.userId}`,
            url: url1,//5f6b069358a042177629086b
            type: 'GET',
            success: function (data) {
                // console.log(data);
                debugger
                dispatch({ type: '[funnel] SET_ALL_FUNNELS', payload: data.funnels })
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
    return next(action)
}
 export const getFunnelByName = ({ dispatch, getState }) => next => action => {

     if (action.type === '[user] GET_FUNNEL') {
//         const uid = getState().user.userId ? getState().user.userId : action.payload
//         debugger
//         $.ajax({
//             url: `${url}/api/${uid}/${getState().funnel.name}`,
//             type: 'GET',
//             success: function (data) {
//                 debugger
//                 console.log(data);
//                 if (data.result) {
//                     debugger
//                     console.log(JSON.parse(data.result.json));
//                     console.log(data.result._id);
//                     dispatch({ type: '[funnel] SET_ID_FUNNEL', payload: data.result._id })
//                     dispatch({ type: '[funnel] SET_JSON_PAGE', payload: JSON.parse(data.result.json) })
//                 }
//                 else {
//                     debugger
//                     alert('Page not found')
//                     window.location.href = `${getState().funnel.urlPage}/${getState().user.userName}/new`
//                 }
//             },
//             error: function (err) {
//                 debugger
//                 console.log(err);

//             }
//         })
    }
    return next(action)

 }
export const uploadFile = ({ dispatch, getState }) => next => action => {
    return new Promise((resolve, reject) => {
        if (action.type === '[funnel] UPLOAD_FILE') {
            const fil = action.payload
            console.log(fil);
            const myFile = new FormData()
            myFile.append("file", action.payload)


            $.ajax({
                url: `${url}/api/uploadFile/${getState().user.userId}/${getState().user.userName}`,
                type: 'POST',
                data: myFile,
                contentType: false,
                processData: false,
                headers: {
                    Authorization: 'view'
                },
                success: function (data) {
                    console.log(data);
                    dispatch({ type: '[funnel] SET_IMAGE_FILE', payload: data })
                    resolve(data)
                },
                error: function (err) {
                    console.log(err);
                    reject(err)
                }
            })
        }
        return next(action)
    })
}
// export const getUserByJwt = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'EXTRACT_JWT') {

//         let params = (new URL(document.location)).searchParams;
//         let jwtGlobal = params.get('jwt');
//         if (jwtGlobal) {
//             let newUrl = window.location.href
//             newUrl = newUrl.split('?jwt=')
//             newUrl = newUrl[0]
//             let date = new Date(Date.now() + 86400e3);
//             date = date.toUTCString();
//             var expires = "expires=" + date;
//             document.cookie = "devJwt" + "=" + jwtGlobal + ";" + expires + ";path=/";
//             window.location.replace(newUrl)
//         }
//         let url = window.location  
//     }
//     return next(action)
// }
// export const uploadImage = ({ dispatch, getState }) => next => action => {
//     return new Promise((resolve, reject) => {
//     if (action.type === '[funnel] UPLOAD_IMAGE')
//     console.log(action.payload.get('file'))
//     $.ajax({
//         type: "POST",
//         url: "https://files.leader.codes/api/" + "WzM020nw4TgcAo1XIyl94g0Z0152" + "/upload",
//         headers:  {
//             Authorization: 'view'
//           },

//         data: action.payload,
//         processData: false,
//         contentType: false,
//         success: function (data) {
//             console.log(data);
//             // return data.data.url
//             resolve(data.data.url)
//         },
//         error: function (err) {
//             alert(err);
//             // return false
//             resolve(false)
//         },

//     });

//         return next(action)
// })
// }





// import $, { error } from "jquery";
// export const saveOrUpdate = ({ dispatch, getState }) => next => action => {
//     if (action.type === '[funnel] SAVE_OR_UPDATE') {
//         dispatch({ type: '[funnel] UPLOAD_FILE', payload: action.payload }).then((res) => {
//             if (getState().funnel.idFunnel)
//                 dispatch({ type: '[funnel] UPDATE_FUNNEL' })
//             else
//                 dispatch({ type: '[funnel] CREAT_FUNNEL' })
//         })
//     }
//     return next(action)
// }


// export const getFromServer = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'GET_JSON')
//         $.ajax({
//             url: 'https://randomuser.me/api/?results=10&seed=abc',
//             type: 'GET',
//             success: function (data) {
//                 console.log(data);
//             }
//         })
//     return next(action)
// }
// export const creatFunnel = ({ dispatch, getState }) => next => action => {
//     if (action.type === '[funnel] CREAT_FUNNEL') {
//         console.log(getState().funnel.jsonPage);
//         $.ajax({
//             url: `https://funnel.dev.leader.codes/api/${getState().user.userId}`,
//             type: 'POST',
//             data: { 'name': getState().funnel.name, json: JSON.stringify(getState().funnel.jsonPage) },
//             success: function (data) {
//                 console.log(data);
//             },
//             error: function (err) {
//                 console.log();
//                 alert(JSON.parse(err.responseText).message)
//             }
//         })
//     }
//     return next(action)

// }
// export const updateFunnel = ({ dispatch, getState }) => next => action => {
//     if (action.type === '[funnel] UPDATE_FUNNEL') {
//         console.log(getState().funnel.jsonPage);
//         $.ajax({
//             url: `https://funnel.dev.leader.codes/api/updateFunnel/${getState().user.userId}/${getState().funnel.idFunnel}`,
//             type: 'POST',
//             data: { name: getState().funnel.name, json: JSON.stringify(getState().funnel.jsonPage) },
//             success: function (data) {
//                 console.log(data);
//             },
//             error: function (err) {
//                 console.log();
//                 alert(JSON.parse(err.responseText).message)
//             }
//         })
//     }
//     return next(action)
// }
// export const getAllFunnelByUserId = ({ dispatch, getState }) => next => action => {
//     new Promise((resolve, reject) => {
//         if (action.type === '[funnel] GET_ALL_FUNNELS') {
//             $.ajax({
//                 url: `https://funnel.dev.leader.codes/api/${getState().user.userId}`,
//                 type: 'GET',
//                 success: function (data) {
//                     console.log(data);
//                     dispatch({ type: '[funnel] SET_ALL_FUNNELS', payload: data.result })
//                     resolve(data)
//                     // dispatch({ type: '[funnel] SET_FLAG_ALL_FUNNELS'})
//                 },
//                 error: function (err) {
//                     console.log(err);
//                     reject(err)
//                 }
//             })
//         }
//         return next(action)
//     })
// }
// export const getUidByUserName = ({ dispatch, getState }) => next => action => {
//     if (action.type === '[user] GET_UID_BY_USER_NAME') {
//         // let url = window.location;
//         // let userName = url.pathname.split('/')[1]
//         $.ajax({
//             url: `https://funnel.dev.leader.codes/api/getuser/${getState().user.userName}`,
//             type: 'GET',
//             beforeSend: function () {
//             },
//             success: function (data) {
//                 console.log(data);
//                 let newUid = data.uid;
//                 dispatch({ type: '[user] SET_USER_ID', payload: newUid })
//                 if (getState().funnel.name !== 'new')
//                     dispatch({ type: '[user] GET_FUNNEL', payload: newUid })

//             },
//             error: function (err) {
//                 console.log(err);
//             }
//         })
//     }
//     return next(action)

// }
// export const getFunnelByName = ({ dispatch, getState }) => next => action => {

//     if (action.type === '[user] GET_FUNNEL') {
//         const uid = getState().user.userId ? getState().user.userId : action.payload
//         $.ajax({
//             url: `https://funnel.dev.leader.codes/api/${uid}/${getState().funnel.name}`,
//             type: 'GET',
//             success: function (data) {
//                 console.log(data);
//                 if (data.result) {
//                     console.log(JSON.parse(data.result.json));
//                     console.log(data.result._id);
//                     dispatch({ type: '[funnel] SET_ID_FUNNEL', payload: data.result._id })
//                     dispatch({ type: '[funnel] SET_JSON_PAGE', payload: JSON.parse(data.result.json) })
//                 }
//                 else {
//                     alert('Page not found')
//                     window.location.href = `${getState().funnel.urlPage}/${getState().user.userName}/new`
//                 }
//             },
//             error: function (err) {
//                 console.log(err);

//             }
//         })
//     }
//     return next(action)

// }
// export const removeFunnel = ({ dispatch, getState }) => next => action => {

//     if (action.type === '[funnel] REMOVE_FUNNEL') {
//         $.ajax({
//             url: `https://funnel.dev.leader.codes/api/removeFunnel/${action.payload}`,
//             type: 'DELETE',
//             success: function (data) {
//                 console.log(data);
//             },
//             error: function (err) {
//                 console.log(err);
//             }
//         })
//     }
//     return next(action)
// }
// // export const uploadFile = ({ dispatch, getState }) => next => action => {
// //     return new Promise((resolve, reject) => {
// //         if (action.type === '[funnel] UPLOAD_FILE') {
// //             const fil = action.payload
// //             console.log(fil);
// //             const myFile = new FormData()
// //             myFile.append("file", action.payload)
// //             $.ajax({
// //                 url: `https://funnel.dev.leader.codes/api/uploadFile/${getState().user.userId}/${getState().user.userName}`,
// //                 type: 'POST',
// //                 data: myFile,
// //                 contentType: false,
// //                 processData: false,
// //                 headers: {
// //                     Authorization: 'view'
// //                 },
// //                 success: function (data) {
// //                     console.log(data);
// //                     dispatch({ type: '[funnel] SET_IMAGE_FILE', payload: data })
// //                     resolve(data)
// //                 },
// //                 error: function (err) {
// //                     console.log(err);
// //                     reject(err)
// //                 }
// //             })
// //         }
// //         return next(action)
// //     })
// // }

// // export const uploadImage = ({ dispatch, getState }) => next => action => {
// //     return new Promise((resolve, reject) => {
// //     if (action.type === '[funnel] UPLOAD_IMAGE')
// //     console.log(action.payload.get('file'))
// //     $.ajax({
// //         type: "POST",
// //         url: "https://files.leader.codes/api/" + "WzM020nw4TgcAo1XIyl94g0Z0152" + "/upload",
// //         headers:  {
// //             Authorization: 'view'
// //           },

// //         data: action.payload,
// //         processData: false,
// //         contentType: false,
// //         success: function (data) {
// //             console.log(data);
// //             // return data.data.url
// //             resolve(data.data.url)
// //         },
// //         error: function (err) {
// //             alert(err);
// //             // return false
// //             resolve(false)
// //         },

// //     });

// //         return next(action)
// // })
// // }



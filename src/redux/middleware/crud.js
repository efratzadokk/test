import $, { error } from "jquery";
import { actions } from '../actions/funnel-try.action'


import keys,{API_File} from '../../config/env/keys'
//רלוונטי רק ל build
const url=keys.API_URL_BASE_CLIENT
// const url = `https://funnel.dev.leader.codes`
// const url = `http://localhost:3008`

// import API_File from '../../config/env/keys'
// console.log(url2)
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
    if (action.type === 'SAVE_OR_UPDATE') {
        dispatch(actions.changeLoading())
        dispatch(actions.creatFunnel())
        dispatch(actions.getAllFunnels())
    }
    return next(action)
}

export const duplicateFunnel = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DUPLICATE_FUNNEL') {
        $.ajax({
            url: `${url}/api/duplicateFunnel/${action.payload}`,//5f6b069358a042177629086b
            type: 'POST',
            success: function (data) {
                dispatch(actions.getAllFunnels())
            },
            error: function (err) {
                alert(JSON.parse(err.responseText).message)
            }
        })
    }
    return next(action)

}

export const updatingFunnel = ({ dispatch, getState }) => next => action => {
    if (action.type === 'UPDATING_FUNNEL') {
        dispatch(actions.changeLoading())
        dispatch(actions.updateFunnel())
        dispatch(actions.getAllFunnels())
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
    if (action.type === 'REMOVE_FUNNEL') {
        $.ajax({
            url: `${url}/api/deleteFunnel/${action.payload}`,
            type: 'DELETE',
            success: function (data) {
                // console.log(data)
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
    return next(action)
}
export const creatFunnel = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CREAT_FUNNEL') {
        console.log(getState().funnel.jsonPage);
        $.ajax({
            url: `${url}/api/createFunnel/${getState().user.userId}/${getState().funnel.name}`,//5f6b069358a042177629086b
            type: 'POST',
            data: { url: "efrat1", json: JSON.stringify(getState().funnel.jsonPage) },
            success: function (data) {
                console.log(data);
                dispatch(actions.setIdFunnel(data.funnel._id))
                dispatch(actions.changeLoading())
                dispatch(actions.getAllFunnels())
            },
            error: function (err) {
                console.log();
                alert(JSON.parse(err.responseText).message)
            }
        })
    }
    return next(action)

}
export const updateFunnel = ({ dispatch, getState }) => next => action => {
    if (action.type === 'UPDATE_FUNNEL') {
        console.log(getState().funnel.jsonPage);
        $.ajax({
            url: `${url}/api/updateFunnelDetails/${getState().user.userId}/${getState().funnel.idFunnel}`,
            type: 'POST',
            data: {
                name: getState().funnel.name, json: JSON.stringify(getState().funnel.jsonPage), lastUpdate: Date.now(),
                url: getState().funnel.urlFunnel
            },
            success: function (data) {
                console.log(data);
                dispatch(actions.changeLoading())
                dispatch(actions.getAllFunnels())
            },
            error: function (err) {
                console.log();
                alert(JSON.parse(err.responseText).message)
            }
        })
    }
    return next(action)
}
///V
export const getUidByUserName = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_UID') {
        $.ajax({
            url: `${url}/api/getuser/${getState().user.userName}`,
            type: 'GET',
            success: function (data) {
                let newUid = data.user._id;
                dispatch(actions.setUserId(newUid))
                dispatch(actions.getAllFunnels())
                dispatch(actions.getAllFiles())
                if (getState().funnel.name !== 'new')
                    dispatch(actions.getFunnel(newUid))
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
    return next(action)
}
export const getAllFilesByUserName = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_FILES') {
        let url = `${API_File}/api/${getState().user.userName}`// + userName
        $.ajax({
            url: url,
            // headers: { Authorization: jwtFromCookie },
            headers: { "authorization": "liveChat/userWithOutJwt" },
            type: 'GET',
            success: function (data) {
                dispatch(actions.setAllFiles(data))
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
    return next(action)
}
export const downladFileFromServer = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DOWNLOAD_FILE') {
        fetch(
            `${API_File}/api/${getState().user.userName}/download/${action.payload.url}`,
            {
                method: "GET",
                // headers: {Authorization: jwt,},
                headers: { "authorization": "liveChat/userWithOutJwt" },
            }
        ).then((resp) => resp.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.style.display = "none";
                a.href = url;
                a.download = action.payload.name.split("__")[1];
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                console.log("your file has downloaded!");
            })
            .catch(() => console.log("oh no!"));
    }
    return next(action)
}
export const removeFile = ({ dispatch, getState }) => next => action => {
    if (action.type === 'REMOVE_FILE') {
        try {
            $.ajax({
                type: "DELETE",
                url: `${API_File}/api/${getState().user.userName}/remove/${action.payload.url}`,
                // headers: { Authorization: jwtFromCookie },
                headers: { "authorization": "liveChat/userWithOutJwt" },
                success: function (data) {
                    dispatch(actions.delImgGallery(action.payload))
                },
                error: function (err) {
                    console.log(err.message);
                },
            });
        } catch (err) {
            console.log(err.message);

        }
    }
    return next(action)
}
export const getAllFunnelByUserId = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_FUNNELS') {
        $.ajax({
            url: `${url}/api/getAllFunnels/${getState().user.userId}`,
            type: 'GET',
            success: function (data) {
                console.log("data=",data)
                dispatch(actions.setAllFunnels(data.funnels))
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
    return next(action)
}
export const getFunnelByName = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_FUNNEL') {
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
export const uploadFiles = ({ dispatch, getState }) => next => action => {
    if (action.type === 'UPLOAD_FILES') {
        var formData = new FormData
        var files = getState().funnel.imgsToUpload//jsonPage.arrSections.map((item, a) => {
        var myFiles = Object.values(files)
        if (myFiles.length < 1) { alert("ooops... not files to upload") }
        else {
            myFiles.forEach((file, index) => {
                formData.append("files" + index, file)
            })
        }
        if (!!formData.entries().next().value == true) {
            $.ajax({
                url: `${API_File}/api/${getState().user.userName}/uploadMultipleFiles`,
                method: 'post',
                contentType: false,
                processData: false,
                headers: { "authorization": "liveChat/userWithOutJwt" },
                data: formData,
                success: (data) => {
                    var myData ={"files":data.filesData}
                    console.log("finish first ajax  " + JSON.stringify(myData));
                    dispatch(actions.addImgs(Object.values(data.filesData)))
                    setTimeout(() => {
                        $.ajax({
                            url: `${API_File}/api/${getState().user.userName}/savedMultiFilesDB`,
                            method: 'POST',
                            headers: { "authorization": "liveChat/userWithOutJwt" },
                            data: myData,
                            success: (data) => {
                                alert("upload success");
                                console.log("upload success", data)
                                //Reset the 'imgToUpload' array
                                // getState().funnel.imgToUpload = []
                                dispatch(actions.delImgsArr())
                                // resolve(data)
                            },
                            error: function (err) {
                                // debugger
                                console.log(err);
                                // reject(err)
                            }
                        })
                    }, 2000);
                    // resolve(data)
                },
                error: function (err) {
                    console.log(err);
                    // reject(err)
                }
            })
        }
    }
    return next(action)
    // })
}
export const uploadFile = ({ dispatch, getState }) => next => action => {
    return new Promise((resolve, reject) => {
        if (action.type === 'UPLOAD_FILE') {
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
                    dispatch(actions.setImageFile(data))
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

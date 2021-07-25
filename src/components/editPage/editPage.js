import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './editPage.css'
import $ from "jquery";
import {actions} from '../../redux/actions/funnel-try.action'



function EditPage(props) {
    const { stylePage, setStylePage, opacityfromJson, namePage, setNamePage } = props
    const [image, setImage] = useState(stylePage.backgroundImage ? stylePage.backgroundImage : '');
    const [bgColor, SetBgColor] = useState()
    // const [opacity,setOpacity]=useState('1')
    // useEffect(()=>{
    //     setStylePage('backgroundColor',stylePage.backgroundColor.replace(/[\d\.]+\)$/g, opacity));
    // },[opacity])
    //////////
    // useEffect(() => {
    //     SetBgColor(RGBAToHexA(stylePage.backgroundColor))
    // }, [stylePage])

    const setColor = (value) => {
        var hex = value.replace('#', '');
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        var r = parseInt(hex.substring(0, 2), 16),
            g = parseInt(hex.substring(2, 4), 16),
            b = parseInt(hex.substring(4, 6), 16);

        // props.iframe.contentWindow.postMessage( JSON.stringify({function:"set style page" ,params:{property:'backgroundColor',value:'rgba(' + r + ',' + g + ',' + b + ',' + opacityfromJson + ')'}}), '*')
        setStylePage('backgroundColor', 'rgba(' + r + ',' + g + ',' + b + ',' + opacityfromJson + ')');
    }
    const setOpacity = (value) => {
        // setOpacityPage(value)
        // props.iframe.contentWindow.postMessage( JSON.stringify({function:"set style page" ,params:{property:'backgroundColor',value:stylePage.backgroundColor.replace(/[\d\.]+\)$/g, value + ')')}}), '*')
        setStylePage('backgroundColor', stylePage.backgroundColor.replace(/[\d\.]+\)$/g, value + ')'));
    }
    const changeImgOnClick = () => {
        // debugger
        $('#inputFileImage').trigger('click')
    }

    // const chooseImg = (e) => {
    //     debugger

    //     // if (event !== undefined) {
    //         // setSelectedLogoFileImage(event)
    //         // setChannelLogoLoaded(true);
    //         let reader = new FileReader();
    //         var url = URL.createObjectURL(e)

    //         reader.onloadend = () => {
    //             debugger
    //             setStylePage('backgroundImage',`url(${url})`) //img
    //             // setChannelLogoPreviewUrlImage(url) //PreviewUrlImage
    //         }
    //     // }
        
    //     // console.log(e.target.files)
    //     // const files = Array.from(e.target.files)
    //     // console.log("files:", files)
    //     // handleFiles(files)
    // }

    const chooseImg = (e) => {
        // debugger
        if(e.target.files[0])
        {
        const files = Array.from(e.target.files)
        console.log("files:", files)
        handleFiles(files)
        }
    }

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        console.log("yes")
        return true;
    }
    const handleFiles = async (files) => {
        // debugger
        console.log(files[0])
        if (validateFile(files[0])) {
            // setFile(!file)
            const myFile = new FormData()
            myFile.append("file", files[0])
            console.log(myFile.get('file'))

          
            // console.log(image)
            console.log(files)
            // openImageModal(files[0])
            //  await props.uploadImage(myFile).then((url) => {
            //     console.log(url);
            // })
            ////////// ככה שומרים את הקובץ ולא את ה URL 
            // setStylePage("backgroundImage",myFile.get('file'))
            let url = URL.createObjectURL(files[0]);
            setStylePage("backgroundImage",url)


            // debugger
            // $.ajax({
            //     type: "POST",
            //     url: "https://files.leader.codes/api/" + "WzM020nw4TgcAo1XIyl94g0Z0152" + "/upload",
            //     headers: {
            //         Authorization: 'view'
            //     },
            //     data: myFile,
            //     processData: false,
            //     contentType: false,
            //     success: await function (data) {
            //         debugger
            //         console.log(data);
            //         // data.data ?
            //         setStylePage('backgroundSize', '100% 100%')
            //         setStylePage('backgroundImage', data.data.url)
            //         setImage(data.data.url)
            //         // : alert('error')
            //         // return data.data.url
            //         // resolve(data.data.url)
            //     },
            //     error: await function (err) {
            //         debugger
            //         alert(err);
            //         // return false
            //         // resolve(false)
            //     },
            // });

        };
    }

    // const bgColorPage=stylePage.backgroudColor
// ????????????????????????????????
    function RGBAToHexA(rgba) {

        let r = (+rgba[0]).toString(16),
            g = (+rgba[1]).toString(16),
            b = (+rgba[2]).toString(16),
            a = Math.round(+rgba[3] * 255).toString(16);

        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        if (a.length == 1)
            a = "0" + a;
        console.log("#" + r + g + b + a)
        return "#" + r + g + b + a;


    }
    const changeDir = (dir) => {
        console.log(dir)
        // props.iframe.contentWindow.postMessage( JSON.stringify({function:"set style page" ,params:{property:'direction',value:dir}}), '*')
       
    }
    const setName=(value)=>{
        // props.iframe.contentWindow.postMessage( JSON.stringify({function:"set name page" ,params:value}), '*')
    }
    return (
        <div className="card button_collapse p-0">
            <div className="card-header p-0" id="headingOne">
                <h5 className="m-0">
                    <button className="btn btn-link d-flex justify-content-between p-0 px-1  align-items-center" data-toggle="collapse"
                        data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Page Setting <span className="material-icons align-middle arrow-collapse">
                            keyboard_arrow_right
        </span>

                    </button>
                    <button className="btn btn-link d-flex justify-content-between p-0 px-1  align-items-center" data-toggle="collapse"
                        data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        My Funnel <span className="material-icons align-middle arrow-collapse">
                            keyboard_arrow_right
        </span>
        
                    </button>

                </h5>
            </div>
            <div id="collapseOne" className="collapse" name="0" aria-labelledby="headingOne"
                data-parent="#accordion">
                <div id="pageSetting-body" className="card-body p-2">
                    <label for="">Name</label>
                    <input type="text" className="form-control input" value={namePage} id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setName(e.target.value)} />
ז                <label for="">Aligment</label>
                    <div>
                        <span class="material-icons" onClick={() => changeDir('left')}>
                            format_align_left
</span>
                        <span class="material-icons" onClick={() => changeDir('right')}>
                            format_align_right
</span>
                    </div>

                    <label for="">Page Background Color</label>
                    <input type="color" className="form-control input"  defaultValue={stylePage.backgroundColor} id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setColor(e.target.value)} />
                    <label for="">Page Background Opacity</label>
                    <input type="range" className="slider" defaultValue={stylePage.backgroundColor.replace(/^.*,(.+)\)/, '$1')} id="" data-toggle="tooltip" data-placement="bottom" placeholder="" onChange={(e) => setOpacity(e.target.value)} min="0" max="0.99" step="0.0001" />

                    <label for="">Page Background Image</label>
                    <input type="file" id="inputFileImage" className="form-control " style={{ display: 'none' }} onChange={(e) => chooseImg(e)} />
                    <div onClick={() => changeImgOnClick()} className="col-md-10" style={image ? { height: '60px', backgroundColor: 'red', backgroundSize: '100% 100%', backgroundImage: `url(${image})` } : { height: '60px', backgroundColor: 'red' }}></div>
                </div>
            </div>
        </div>)
}
export default connect(
    (state) => {
        return {
            stylePage: state.funnel.jsonPage.settings.style,
            opacityfromJson: state.funnel.jsonPage.settings.opacity,
            namePage: state.funnel.jsonPage.name,
            // iframe:state.funnel.iframe



        }
    },
    (dispatch) => {
        return {
            setStylePage: (property, newValue) => { dispatch(actions.setStylePage({ property: property, value: newValue })) },
            setOpacityPage: (newValue) => { dispatch(actions.setOpacityPage(newValue)) },
            setNamePage: (newName) => { dispatch(actions.setNamePage(newName)) },
            setValueMe: (newValue,type) => { dispatch(actions.setValueMe({ value: newValue, type:type })) },
        }
    }
)(EditPage)
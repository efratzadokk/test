


import produce from 'immer'
import createReducer from "./reducerUtil";
import defualtValue from '../../assets/defultimgbig700.png'
import mylogo from '../../assets/mylogo.svg'
const initialState = {
    urlPage: '',//'http://localhost:3000'
    // urlPage:'http://funnel.dev.leader.codes',
    userName: window.location.pathname.split('/')[2],
    newElementTypeAndValue: {},
    loading: false,
    message: false,
    myComputer:'a',
    newElement: {},
    elementInEditing: {},
    sectionInEditing: {},
    indexSectionInEditing: '',
    isOpenConfigurator: true,
    thumbtack: false,
    borderPart: false,
    isOpenAllFunnels: false,
    editMode: true,
    collapseIsOpen: '',
    posElement: '',
    imgsToUpload: [],
    imgsGallery: [],
    name: 'firstFunnel4',// window.location.pathname.split('/')[3],
    allFunnels: [],
    idFunnel: '',
    urlFunnel: '',
    newVal: [
        { index: 0, type: 'logo', border: false, path: '', opacity: '0.6', borderRadius: "", width: "", height: "", alignItem: "center",textAlign: "center" },
        { index: 1, type: 'title', border: false, text: "Welcome enter your title!", backgroundColor: "transparent", color: "black", textAlign: "center", fontSize: "25", fontFamily: 'Arial, Helvetica, sans-serif' },
        { index: 2, type: 'button', fontSize: "25", text: "Button ", color: "white", backgroundColor: "#13436c", textAlign: "center", fontFamily: 'Arial, Helvetica, sans-serif', borderRadius: '0', width: '100' },
        { index: 3, type: 'image', border: false, path: '', backgroundColor: "", width: "20", borderRadius: "", height: "10", textAlign: "center", opacity: '0.6' },
        {
            index: 4, type: 'paragraph', text: "Welcome to the family Thanks to you we grew up and now we are over 2000 members  You are welcome to start an activity to get started Click here",
            border: false, color: "black", textAlign: "center", fontSize: "16", fontFamily: 'Arial, Helvetica, sans-serif', backgroundColor: "transparent"
        },
        { index: 5, type: 'video', border: false, path: '', backgroundColor: "transparent", width: "20", borderRadius: "", height: "10", textAlign: "center", opacity: '0.6' },
        { index: 6, type: 'gallery', images: [], border: false, path: '', backgroundColor: "", width: "20", borderRadius: "", height: "10", alignItem: "center", opacity: '0.6' },
        { index: 7, type: 'spacer', border: false, color: "#D3D3D3", borderRadius: "2", width: "20", height: "5" },
        { index: 8, type: 'emoji', border: false, opacity: '1', fontSize: '20', color: "black", backgroundColor: "#0AB0FE", textAlign: "center", borderRadius: "2", width: "20", height: "1" },
        { index: 9, type: 'form', border: false, text: "Welcome enter your title!", color: "black", textAlign: "center", fontSize: "25px", fontFamily: 'Arial, Helvetica, sans-serif' },
        { index: 10, type: 'html', border: false, text: "", color: "white", backgroundColor: "#0AB0FE", textAlign: "center", fontFamily: "Arial, Helvetica, sans-serif", width: "20", height: "1" },
        { index: 11, type: 'sharing', border: false, text: "START ACTIVE", color: "white", backgroundColor: "#0AB0FE", textAlign: "center", borderRadius: "2", width: "20", height: "1" },

    ],

    jsonPage: {
        num_elements: 1,
        num_sections: 1,
        image_funnel: '',
        settings: {
            style: { color: '', backgroundColor: 'rgba(255,255,255,0.99)', opacity: '0.99' }
            , opacity: '0.99'
        },
        arrSections: [
            {arrParts:[
                {
                    arrElements:[
                        {
                            backgroundColor: "",
                            border: false,
                            id:`myId${0}`,
                            settings: {borderStyle: "none", width: "30%", height: "30%", opacity: "0.99",maxHeight:'10vh', textAlign: "left"},
                            textAlign: "left",
                            type: "Logo",
                            value: mylogo
                     },{
                        backgroundColor: "transparent",
                        border: false,
                        borderRadius: undefined,
                        color: "black",
                        fontFamily: "Acme !important",
                        fontSize: "30",
                        id: `myId${1}`,
                        settings: {},
                        textAlign: "center",
                        type: "Title",
                        value: "START CREATE \n LANDING PAGE",
                        height:"100%"
                     },{
                        backgroundColor: "transparent",
                        border: false,
                        borderRadius: undefined,
                        color: "#193880",
                        fontFamily: "Acme",
                        fontSize: "15",
                        id: `myId${2}`,
                        settings: {borderStyle: "none"},
                        textAlign: "center",
                        type: "Paragraph",
                        value: "Lorem ipsum dolor sit amet,\r\n consectetuer adipiscing elit,\r\n sed diam "
                     },
                     {
                        backgroundColor: "#13436c",
                        borderRadius: "30",
                        color: "#ffffff",
                        fontFamily: "Acme",
                        fontSize: "16",
                        id: `myId${3}`,
                        settings: {},
                        textAlign: "left",
                        type: "Button",
                        value: "Learn more",
                        // width: "50",
                        // height:"10"
                     }
                     ],
                    settings:{
                        style:{}
                    }
                },

                {
                    arrElements:[
                        {
                            backgroundColor: "",
                            border: false,
                            id:`myId${4}`,
                            settings: {borderStyle: "none", width: "auto", height: "100%", opacity: "0.99",maxHeight:'50vh'},
                            textAlign: "center",
                            type: "Image",
                             value: defualtValue
                            // value: "blob:http://localhost:3000/b18ecc35-9cb2-4b31-9d95-c3da0c0cc9dd"

                            // "blob:http://localhost:3000/7d846e07-f4ea-47b"

                        },
                       
                    ],
                    settings:{
                        style:{}
                    }
                }
            ],
            gridType:"b",
            id:0,
                settings:{
                style:{
                    backgroundColor:""
                }
            }
        }

        ]




    },

    
}

const funnelReducer = {
    removeReducer(state,action){
        state.allFunnels.map((item, a) => {
            if (item._id == action.payload) {
                state.allFunnels.splice(a, 1)
            }
        });
        return state
    },
    setNameFunnel(state,action){
        return state;
    },
    setNameChosenFunnel(state,action){
        return state;
    },
    setJsonServer(state,action){
        return state;
    },
    setIsOpenCon(state, action) {
        return { ...state, isOpenConfigurator: action.payload }
    },
    setFlagthumbtack(state, action) {
        state.thumbtack = action.payload
        return state;
    },
    addSection(state, action) {
        let newSection = action.payload.newSection
        newSection.id = action.payload.id
        newSection.gridType = action.payload.s
        state.jsonPage.arrSections.push(newSection)
        state.jsonPage.num_sections++
        console.log(state.jsonPage.num_sections)
        return state
    },
    addSection2(state, action) {
        console.log(action)
        let newSection = action.payload.newSection
        newSection.id = action.payload.id
        newSection.gridType=action.payload.s
        let place=action.payload.place
        state.jsonPage.arrSections.splice(place,0,newSection)
        state.jsonPage.num_sections++
        console.log(state.jsonPage.num_sections)
        return state
    },
    setBorderParts(state, action) {
        state.borderPart = action.payload
        return state;
    },
    setPosElement(state, action) {
        // console.log("action.payload:",action.payload)
        state.posElement = action.payload
        return state
    },
    setMyComputer(state, action) {
        // console.log("action.payload:",action.payload)
        state.myComputer = action.payload
        return state
    },
    addElement(state, action) {
        // debugger
        let newElement
        if (action.payload.type === 'Title' || action.payload.type === 'Paragraph') {

            newElement = { type: action.payload.type, value: action.payload.value.value, color: action.payload.value.color, fontSize: action.payload.value.fontSize, border: action.payload.value.border, textAlign: action.payload.value.textAlign, fontFamily: action.payload.value.fontFamily, backgroundColor: action.payload.value.backgroundColor, borderRadius: action.payload.value.borderRadius, settings: {}, id: action.payload.id }
        }
        else if (action.payload.type === 'Button') {
            newElement = { type: action.payload.type, value: action.payload.value.value, color: action.payload.value.color, fontSize: action.payload.value.fontSize, borderRadius: action.payload.value.borderRadius, textAlign: action.payload.value.textAlign, fontFamily: action.payload.value.fontFamily, backgroundColor: action.payload.value.backgroundColor, width: action.payload.value.width, settings: {}, id: action.payload.id }

        }
        else if (action.payload.type === 'Spacer') {
            newElement = { type: action.payload.type, color: action.payload.value.color, height: action.payload.value.height, settings: {}, id: action.payload.id }

        }
        else if (action.payload.type === 'Image' || action.payload.type === 'Video' || action.payload.type === 'Logo') {
            // if (action.payload.type == 'Gallery')
            //     action.payload.value = []
            newElement = { type: action.payload.type, value: action.payload.value.value, textAlign: action.payload.value.textAlign, backgroundColor: action.payload.value.backgroundColor, border: action.payload.value.border, settings: {}, id: action.payload.id }

            // newElement = { type: action.payload.type, value: action.payload.value.value, images: action.payload.value.images, textAlign: action.payload.value.textAlign, backgroundColor: action.payload.value.backgroundColor, border:action.payload.value.border , settings: {}, id: action.payload.id}
        }
        else if (action.payload.type === 'Emoji' || action.payload.type === 'Form' || action.payload.type === 'Sharing') {
            newElement = { type: action.payload.type, value: action.payload.type, color: action.payload.value.color, opacity: action.payload.value.opacity, textAlign: action.payload.value.textAlign, fontSize: action.payload.value.fontSize, settings: {}, id: action.payload.id }
        }
        else if (action.payload.type === 'Html') {
            newElement = { type: action.payload.type, value: action.payload.value.value, color: action.payload.value.color, fontFamily: action.payload.value.fontFamily, textAlign: action.payload.value.textAlign, fontSize: action.payload.value.fontSize, settings: {}, id: action.payload.id }
        }
        else if (action.payload.type === 'Gallery') {
            newElement = { type: action.payload.type, value: action.payload.value.value, images: action.payload.value.images, textAlign: action.payload.value.textAlign, backgroundColor: action.payload.value.backgroundColor, border: action.payload.value.border, settings: {}, id: action.payload.id }
        }
        console.log(newElement)

        if (state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements !== []) {

            const y = action.payload.posY
            // console.log("y newElement:",y)
            // state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.reverse().map((element)=>{
            // var elem= document.getElementById(element.id)
            // if(y<elem.getBoundingClientRect.y)
            // afterId=element.id
            // })

        }
        // afterIndex=state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.findIndex(func)
        // state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.splice(afterIndex+1,0,newElement)
        state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.push(newElement)
        state.elementInEditing = newElement;
        state.collapseIsOpen = "element"
        state.jsonPage.num_elements++
        // state.editinigElement = true
        return state
    },
    addElement1(state, action) {
        //avant
        // const newElement = { type: action.payload.type, value: action.payload.value}
        //apres
        let newElement
        console.log(action.payload.type)
        if (action.payload.type === 'Title' || action.payload.type === 'Paragraph') {
            // console.log('he enter a itle or addelement1')

            newElement = { type: action.payload.type, value: action.payload.value.text, color: action.payload.value.color, fontSize: action.payload.value.fontSize, border: action.payload.value.border, textAlign: action.payload.value.textAlign, fontFamily: action.payload.value.fontFamily, backgroundColor: action.payload.value.backgroundColor, borderRadius: action.payload.value.borderRadius }
            //  newElement={ type: action.payload.type, value: action.payload.value.text}

        }
        else if (action.payload.type === 'Image' || action.payload.type === 'Video' || action.payload.type==='Logo') {
            // newElement = { type: action.payload.type, value: action.payload.value.path, images: action.payload.value.images, alignItem: action.payload.value.alignItem, backgroundColor: action.payload.value.backgroundColor }
            newElement = { type: action.payload.type, value: action.payload.value.path, textAlign: action.payload.value.textAlign, border: action.payload.value.border, backgroundColor: action.payload.value.backgroundColor }


        }
        else if (action.payload.type === 'Emoji' || action.payload.type === 'Form' || action.payload.type === 'Sharing') {
            newElement = { type: action.payload.type, value: action.payload.type, color: action.payload.value.color, opacity: action.payload.value.opacity, textAlign: action.payload.value.textAlign, fontSize: action.payload.value.fontSize }
        }
        else if (action.payload.type === 'Button') {
            newElement = { type: action.payload.type, value: action.payload.value.text, color: action.payload.value.color, fontSize: action.payload.value.fontSize, border: action.payload.value.borderRadius, textAlign: action.payload.value.textAlign, fontFamily: action.payload.value.fontFamily, backgroundColor: action.payload.value.backgroundColor, borderRadius: action.payload.value.borderRadius, width: action.payload.value.width }

        }
        else if (action.payload.type === 'Spacer') {
            newElement = { type: action.payload.type, color: action.payload.value.color, height: action.payload.value.height }

        }
        else if (action.payload.type === 'Html') {
            newElement = { type: action.payload.type, value: action.payload.value.text, color: action.payload.value.color, fontFamily: action.payload.value.fontFamily, textAlign: action.payload.value.textAlign, fontSize: action.payload.value.fontSize, settings: {}, id: action.payload.id }
        }
        else if (action.payload.type === 'Gallery') {
            newElement = { type: action.payload.type, value: action.payload.value.path, images: action.payload.value.images, alignItem: action.payload.value.alignItem, backgroundColor: action.payload.value.backgroundColor }
        }

        // state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.push(newElement)
        // state.elementInEditing = newElement;
        // state.collapseIsOpen = "element"
        // state.jsonPage.num_elements++
        state.newElementTypeAndValue = newElement
        // state.editinigElement = true
        return state
    },
    setValueElement(state, action) {
        console.log(action.payload.value)
        state.elementInEditing.value = action.payload.value
        state.jsonPage.arrSections.map((item, a) => {
            item.arrParts.map((item, b) => {
                item.arrElements.map((item, c) => {
                    if (item.id == state.elementInEditing.id) {
                        item.value = action.payload.value
                    }
                })
            })
        })
        return state
    },
    setValueMe(state, action) {
        let stv = action.payload.type
        state.jsonPage.arrSections.map((item, a) => {
            item.arrParts.map((item, b) => {
                item.arrElements.map((item, c) => {
                    // debugger
                    if (item.id == state.elementInEditing.id) {
                        item[stv] = action.payload.value
                    }
                })
            })
        })
        return state

    },
    setMonIndex(state, action) {
        state.monindex = action.payload
        return state
    },
    setValueElement(state, action) {
        state.elementInEditing.value = action.payload.value
        state.jsonPage.arrSections.map((item, a) => {
            item.arrParts.map((item, b) => {
                item.arrElements.map((item, c) => {
                    if (item.id == state.elementInEditing.id) {
                        // debugger
                        item.value = action.payload.value
                    }
                })
            })
        })
        return state
    },
    moveElementInPart(state, action) {
        // let a= state.jsonPage.arrSections[0].arrParts[0].arrElements;
        // state.jsonPage.arrSections[0].arrParts[0].arrElements.splice(2, 0,state.jsonPage.arrSections[0].arrParts[0].arrElements.splice(2,1)[0] );
        // // state.jsonPage.arrSections[0].arrParts[0].arrElements=a
        // const components = prevState.components.slice(0);
        // components.splice(0, 0, element);
        // return { components };
        let a = state.jsonPage.arrSections[0].arrParts[0].arrElements.splice(action.payload.dragIndex, 1)
        state.jsonPage.arrSections[0].arrParts[0].arrElements.splice(action.payload.hoverIndex, 0, a[0])
        return state
    },
    elementInEditing(state, action) {
        state.jsonPage.arrSections.map((item, a) => {
            item.arrParts.map((item, b) => {
                item.arrElements.map((item, c) => {
                    if (item.id == action.payload.id) {
                        state.elementInEditing = item
                    }
                })
            })
        })
        state.editinigElement = true
        return state
    },
    sectionInEditing(state, action) {
        state.indexSectionInEditing = action.payload
        return state
    },
    removeSection(state, action) {
        state.jsonPage.arrSections.splice(action.payload, 1)
        return state
    },
    setCollapseOpen(state, action) {
        // debugger
        state.collapseIsOpen = action.payload.collapse
        console.log(action.payload.collapse)
        console.log(action.payload.id)
        //    console.log(ac)
        if (action.payload.collapse == "element") {
            state.jsonPage.arrSections.map((item, a) => {
                item.arrParts.map((item, b) => {
                    item.arrElements.map((item, c) => {
                        if (item.id == action.payload.id) {
                            state.elementInEditing = item
                        }
                    })
                })
            })
        }
        if (action.obj == "section") {

            state.jsonPage.arrSections.map((item, a) => {
                if (item.id == action.obj.id) {
                    state.sectionInEditing = item
                }
            })
        }

        return state
    },
    removeElement(state, action) {
        state.jsonPage.arrSections.map((item, a) => {
            item.arrParts.map((item, b) => {
                item.arrElements.map((item, c) => {
                    if (item.id == action.payload.id) {
                        state.jsonPage.arrSections[a].arrParts[b].arrElements.splice(c, 1)
                    }
                })
            })
        })
        return state
    },
    saveInLocalStorage(state, action) {
        console.log(state.jsonPage)
        localStorage.setItem("json", JSON.stringify(state.jsonPage));
        window.open(`${state.urlPage}/${state.userName}/${state.name}`)
        return state
    },
    changeEditMode(state, action) {
        state.editMode = action.payload
        return state
    },
    setAllFiles(state, action) {
        action.payload.map((img) => {
            state.imgsGallery.push({ name: img.name, url: img.url })
        })
        return state
    },
    delImgsArr(state, action) {
        state.imgsToUpload = []
        return state
    },
    addImgs(state, action) {
        action.payload.map(image => {
            state.imgsGallery.map((img, index) => {
                //fix the if
                if (img.name == image.name)
                    state.imgsGallery.splice(index, 1)
            })
            // state.imgsGallery.push({ name: img.name, url: img.url })
            state.imgsGallery.push(image)
        })
        return state
    },
    addImgToSlider(state, action) {
        state.elementInEditing.images.push({ original: action.payload.url, thumbnail: action.payload.url });
        state.jsonPage.arrSections.map((item, a) => {
            item.arrParts.map((item, b) => {
                item.arrElements.map((item, c) => {
                    if (item.id == state.elementInEditing.id) {
                        item.images.push({ original: action.payload.url, thumbnail: action.payload.url });
                        item.index = [a, b, c]
                    }
                })
            })
        })
        return state
    },
    addImgToGallery(state, action) {
        state.imgsToUpload.push(action.payload.file);
        state.imgsGallery.push({ name: action.payload.file.name, url: action.payload.url });
        return state

    },
    delImgGallery(state, action) {
        state.imgsGallery.map((img, index) => {
            if (img.url == action.payload.url)
                state.imgsGallery.splice(index, 1)
        })
        return state
    },
    setJsonPage(state, action) {
        state.jsonPage = action.payload
        return state
    },
    setOpacityPage(state, action) {
        state.jsonPage.settings.opacity = action.payload
        return state
    },
    setStylePage(state, action) {
        state.jsonPage.settings.style[action.payload.property] = action.payload.value
        return state
    },
    setNamePage(state, action) {
        state.name = action.payload
        return state
    },
    setIdFunnel(state, action) {
        state.idFunnel = action.payload
        return state
    },
    setHrefButton(state, action) {
        state.elementInEditing.value = action.payload.value
        state.jsonPage.arrSections.map((item, a) => {
            item.arrParts.map((item, b) => {
                item.arrElements.map((item, c) => {
                    if (item.id == state.elementInEditing.id) {
                        item.href = action.payload.value
                    }
                })
            })
        })
        return state
    },
    setStyleImage(state, action) {
        state.elementInEditing.settings[action.payload.property] = action.payload.value
        state.jsonPage.arrSections.map((item, a) => {
            item.arrParts.map((item, b) => {
                item.arrElements.map((item, c) => {
                    if (item.id === state.elementInEditing.id) {
                        item.settings[action.payload.property] = action.payload.value
                    }
                })
            })
        })
        return state
    },
    setAllFunnels(state, action) {
        state.allFunnels = action.payload
        return state
    },
    setFlagAllFunnels(state, action) {
        state.isOpenAllFunnels = !state.isOpenAllFunnels
        return state
    },
    setStyleSection(state, action) {
        switch (action.payload.property) {
            case 'backgroundColor':
                state.jsonPage.arrSections[action.payload.indexSection].settings.style[action.payload.property] = action.payload.val
                break;
            case 'opacity':
                state.jsonPage.arrSections[action.payload.indexSection].settings.style["opacity"] = action.payload.val
                break;
            default: break;
        }
        // arrSections[indexSectionInEditing].settings.style.backgroundColor.replace(action.payload.val)

        return state
    },
    setImageFile(state, action) {
        state.jsonPage.image_funnel = action.payload
        return state
    },
    changeLoading(state, action) {
        state.loading = !state.loading
        return state
    },
    changeMessage(state, action) {
        state.message = !state.message
        return state
    },
    setOrderSection(state, action) {
        let a = state.jsonPage.arrSections.indexOf(state.jsonPage.arrSections.find(x => `${x.id}` === action.payload.old_index))
        let b = action.payload.new_index ? state.jsonPage.arrSections.indexOf(state.jsonPage.arrSections.find(x => `${x.id}` === action.payload.new_index)) : undefined
        if (b >= state.jsonPage.arrSections.length) {
            var k = b - state.jsonPage.arrSections.length + 1;
            while (k--) {
                state.jsonPage.arrSections.push(undefined);
            }
        }
        state.jsonPage.arrSections.splice(b - 1, 0, state.jsonPage.arrSections.splice(a, 1)[0]);
        return state; // for testing
    }
}
export default produce((state, action) => createReducer(state, action, funnelReducer), initialState)


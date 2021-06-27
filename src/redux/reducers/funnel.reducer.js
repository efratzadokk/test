

import {SET_MON_INDEX, SET_VALUE_ME, SET_IS_OPEN_CON, SET_THUMBTACK, SET_COLLAPSE_OPEN, SET_JSON_PAGE, SET_STYLE_PAGE, SET_OPACITY_PAGE, REMOVE_SECTION, ADD_SECTION, SET_BORDER_PARTS, CHANGE_EDIT_MODE, ADD_ELEMENT, ADD_ELEMENT1, SET_VALUE_ELEMENT, MOVE_ELEMENT_IN_PART, REMOVE_ELEMENT, ELEMENT_IN_EDITING } from '../actions/funnel.action'
import produce from 'immer'

const initialState = {
    urlPage: '',//'http://localhost:3000'
    // urlPage:'http://funnel.dev.leader.codes',
    userName: window.location.pathname.split('/')[2],
    // iframe: {},
    newElementTypeAndValue: {},
    loading: false,//true
    message: false,
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
    // num_elements: 0,
    posElement:'',
    name: 'firstFunnel4',// window.location.pathname.split('/')[3],
    allFunnels: [],
    idFunnel: '',
    urlFunnel: '',




    newVal: [
        { index: 0, type: 'logo', border: false, path: '', backgroundColor: "", borderRadius: "", width: "", height: "", alignItem: "center" },
        { index: 1, type: 'title', border: false, text: "Welcome enter your title!", backgroundColor: "transparent", color: "black", textAlign: "center", fontSize: "25", fontFamily: 'Arial, Helvetica, sans-serif' },
        { index: 2, type: 'button', fontSize: "25", text: "Button ", color: "black", backgroundColor: "grey", textAlign: "center", fontFamily: 'Arial, Helvetica, sans-serif', borderRadius: '0', width: '100' },
        { index:3 ,  type: 'image', border: false, path: '',  backgroundColor: "", width: "20", borderRadius: "", height: "10", textAlign: "center" , opacity:'0.6'},
        { index:4 ,type: 'paragraph',text: "Welcome to the family Thanks to you we grew up and now we are over 2000 members  You are welcome to start an activity to get started Click here",
        border: false,  color: "black", textAlign: "center", fontSize: "16", fontFamily:'Arial, Helvetica, sans-serif' , backgroundColor: "transparent"
    },
    {index:5 ,  type: 'video', border: false, path: '',  backgroundColor: "transparent", width: "20", borderRadius: "", height: "10", textAlign: "center" , opacity:'0.6'},


        {
            index: 6, images: [
                {
                    original: 'https://picsum.photos/id/1018/1000/600/',
                    thumbnail: 'https://picsum.photos/id/1018/250/150/',
                },
                {
                    original: 'https://picsum.photos/id/1015/1000/600/',
                    thumbnail: 'https://picsum.photos/id/1015/250/150/',
                }
            ], type: 'gallery', border: false, path: '', backgroundColor: "", width: "20", borderRadius: "", height: "10", alignItem: "center", opacity: '0.6'
        },
        
        { index: 7, type: 'spacer', border: false, color: "#D3D3D3", borderRadius: "2", width: "20", height: "5" },
        { index: 8, type: 'icon', border: false, opacity: '1', fontSize: '20', color: "black", backgroundColor: "#0AB0FE", textAlign: "center", borderRadius: "2", width: "20", height: "1" },
        { index: 9, type: 'form', border: false, text: "Welcome enter your title!", color: "black", textAlign: "center", fontSize: "25px", fontFamily: 'Arial, Helvetica, sans-serif' },
        { index: 10, type: 'html', border: false, text: "", color: "white", backgroundColor: "#0AB0FE", textAlign: "center", fontFamily: "Arial, Helvetica, sans-serif", width: "20", height: "1" },
        { index: 11, type: 'sharing', border: false, text: "START ACTIVE", color: "white", backgroundColor: "#0AB0FE", textAlign: "center", borderRadius: "2", width: "20", height: "1" },

    ],

   
    jsonPage: {
        num_elements: 0,
        num_sections: 0,
        image_funnel: '',
        settings: {
            style: { color: '', backgroundColor: 'rgba(255,255,255,0.99)', opacity: '0.99' }
            , opacity: '0.99'
        },
        arrSections: [

        ]




    }


}






export default produce((state = initialState, action) => {
    switch (action.type) {
        // case '[funnel] SET_ID_FUNNEL':
        //     state.idFunnel = action.payload;
        //     return state
        // case '[funnel] SET_IFRAME':
        //     state.iframe = action.payload;
        //     return state
        case '[funnel] SET_NEW_ELEMENT':
            state.newElement = action.payload;
            return state
        case SET_IS_OPEN_CON:
            return { ...state, isOpenConfigurator: action.payload }
        case SET_THUMBTACK:
            // return { ...state, thumbtack: action.payload }
            state.thumbtack = action.payload
            return state
        case ADD_SECTION:
            {
            // state.jsonPage = state.jsonPage.arrSections.concat(action.payload)
            // return {...state}

            // return{...state,
            //     arrSections: [...state.jsonPage.arrSections, action.payload]}
            // debugger
            let newSection = action.payload
            newSection.id = action.id
            newSection.gridType=action.s
            state.jsonPage.arrSections.push(newSection)
            state.jsonPage.num_sections++
            console.log(state.jsonPage.num_sections)

            return state
        }
        case SET_BORDER_PARTS: {
            debugger
            state.borderPart = action.payload
            // return { ...state, borderPart: action.payload }
            return state;
        }

        case '[funnel] SET_POS_ELEMENT':{
            console.log("action.payload:",action.payload)
            state.posElement=action.payload
            return state
        }

        case ADD_ELEMENT: {
            debugger
            let newElement
            if (action.payload.type === 'Title' || action.payload.type === 'Paragraph') {

                newElement = { type: action.payload.type, value: action.payload.value.value, color: action.payload.value.color, fontSize: action.payload.value.fontSize, border: action.payload.value.border, textAlign: action.payload.value.textAlign, fontFamily: action.payload.value.fontFamily, backgroundColor: action.payload.value.backgroundColor, borderRadius: action.payload.value.borderRadius, settings: {}, id: action.payload.id }
            }
            else if (action.payload.type === 'Button') {
                newElement = { type: action.payload.type, value: action.payload.value.value, color: action.payload.value.color, fontSize: action.payload.value.fontSize, borderRadius: action.payload.value.borderRadius, textAlign: action.payload.value.textAlign, fontFamily: action.payload.value.fontFamily, backgroundColor: action.payload.value.backgroundColor,  width: action.payload.value.width, settings: {}, id: action.payload.id }

            }
            else if (action.payload.type === 'Spacer') {
                newElement = { type: action.payload.type, color: action.payload.value.color, height: action.payload.value.height, settings: {}, id: action.payload.id }

            }
            else if (action.payload.type === 'Image' || action.payload.type=== 'Video') {
                // if (action.payload.type == 'Gallery')
                //     action.payload.value = []
             newElement = { type: action.payload.type, value: action.payload.value.value, textAlign: action.payload.value.textAlign,backgroundColor:action.payload.value.backgroundColor,border:action.payload.value.border, settings: {}, id: action.payload.id}
              
                // newElement = { type: action.payload.type, value: action.payload.value.value, images: action.payload.value.images, textAlign: action.payload.value.textAlign, backgroundColor: action.payload.value.backgroundColor, border:action.payload.value.border , settings: {}, id: action.payload.id}
            }
            else if (action.payload.type === 'Icon' || action.payload.type ==='Form' || action.payload.type === 'Sharing') {
                newElement = { type: action.payload.type, value: action.payload.type, color: action.payload.value.color, opacity: action.payload.value.opacity, textAlign: action.payload.value.textAlign, fontSize: action.payload.value.fontSize, settings: {}, id: action.payload.id }
            }
            else if (action.payload.type === 'Html') {
                newElement = { type: action.payload.type, value: action.payload.value.value, color: action.payload.value.color, fontFamily: action.payload.value.fontFamily, textAlign: action.payload.value.textAlign, fontSize: action.payload.value.fontSize, settings: {}, id: action.payload.id }
            }
            else if (action.payload.type === 'Gallery') {
                newElement = { type: action.payload.type, value: action.payload.value.value, images: action.payload.value.images, textAlign: action.payload.value.textAlign, backgroundColor: action.payload.value.backgroundColor, border:action.payload.value.border , settings: {}, id: action.payload.id}
            }
            console.log(newElement)

if(state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements!==[]){

const y=action.payload.posY
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
        }
        case ADD_ELEMENT1: {
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
            else if (action.payload.type === 'Image' || action.payload.type === 'Video' ) {
                // newElement = { type: action.payload.type, value: action.payload.value.path, images: action.payload.value.images, alignItem: action.payload.value.alignItem, backgroundColor: action.payload.value.backgroundColor }
                newElement = { type: action.payload.type, value: action.payload.value.path ,textAlign: action.payload.value.textAlign,border:action.payload.value.border,backgroundColor:action.payload.value.backgroundColor}


            }
            else if (action.payload.type === 'Icon' || action.payload.type === 'Form' || action.payload.type === 'Sharing') {
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
        }
        case SET_VALUE_ELEMENT: {
            debugger
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
        }
        case SET_VALUE_ME: {
           
            console.log(action.payload.value)
            console.log(action.payload.type)
            let stv= action.payload.type
         
            state.jsonPage.arrSections.map((item, a) => {
                item.arrParts.map((item, b) => {
                    item.arrElements.map((item, c) => {
                        debugger
                        if (item.id == state.elementInEditing.id) {
                    
                             item[stv]=action.payload.value
 
 
 
                        }
                    })
                })
            })
            return state

        }
        case SET_MON_INDEX:
            {
                debugger
                //console.log('i am here')
                state.monindex=action.payload
                return state
    
            }
    
        case SET_VALUE_ELEMENT: {
            // if()
            state.elementInEditing.value = action.payload.value
            state.jsonPage.arrSections.map((item, a) => {
                item.arrParts.map((item, b) => {
                    item.arrElements.map((item, c) => {
                        if (item.id == state.elementInEditing.id) {
                            debugger
                            item.value = action.payload.value
                        }
                    })
                })
            })
            return state
        }
        case MOVE_ELEMENT_IN_PART: {

            // let a= state.jsonPage.arrSections[0].arrParts[0].arrElements;
            // state.jsonPage.arrSections[0].arrParts[0].arrElements.splice(2, 0,state.jsonPage.arrSections[0].arrParts[0].arrElements.splice(2,1)[0] );
            // // state.jsonPage.arrSections[0].arrParts[0].arrElements=a
            // const components = prevState.components.slice(0);
            // components.splice(0, 0, element);
            // return { components };
            let a = state.jsonPage.arrSections[0].arrParts[0].arrElements.splice(action.payload.dragIndex, 1)
            state.jsonPage.arrSections[0].arrParts[0].arrElements.splice(action.payload.hoverIndex, 0, a[0])
            return state
        }
        case ELEMENT_IN_EDITING: {
            console.log(action.payload.id)
            state.jsonPage.arrSections.map((item, a) => {
                item.arrParts.map((item, b) => {
                    item.arrElements.map((item, c) => {
                        if (item.id == action.payload.id) {
                            state.elementInEditing = item
                        }
                    })
                })
            })
            // state.elementInEditing = findElementById(action.payload.id)
            state.editinigElement = true
            return state
        }
        case '[funnel] SECTION_IN_EDITING': {
            // console.log(action.payload.id)
            debugger
            state.indexSectionInEditing = action.payload
            return state
        }
        case REMOVE_SECTION:{
            console.log(action)
            state.jsonPage.arrSections.splice(action.payload, 1)
            return state
        }
        case SET_COLLAPSE_OPEN:{
            // debugger
            state.collapseIsOpen = action.obj.collapse
            console.log(action.obj.collapse)
            console.log(action.obj.id)
            //    console.log(ac)
            if (action.obj.collapse == "element") {
                state.jsonPage.arrSections.map((item, a) => {
                    item.arrParts.map((item, b) => {
                        item.arrElements.map((item, c) => {
                            if (item.id == action.obj.id) {
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
        }
        case REMOVE_ELEMENT:{
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

        }
        case '[funnel] SAVE_IN_LOCAL_STORAGE':{
            console.log(state.jsonPage)
            localStorage.setItem("json", JSON.stringify(state.jsonPage));
            window.open(`${state.urlPage}/${state.userName}/${state.name}`)
            return state}
        case CHANGE_EDIT_MODE:{
            state.editMode = action.payload
            return state}
        case SET_JSON_PAGE:{
            state.jsonPage = action.payload
            return state}
        case SET_OPACITY_PAGE:{
            state.jsonPage.settings.opacity = action.payload
            return state}
        case SET_OPACITY_PAGE:{
            state.jsonPage.settings.opacity = action.payload
            return state}
        case SET_STYLE_PAGE:{
            debugger
            state.jsonPage.settings.style[action.payload.property] = action.payload.value
            return state}
        case '[funnel] SET_NAME_PAGE':{
            state.name = action.payload
            return state}
        case '[funnel] SET_ID_FUNNEL':{
            state.idFunnel = action.payload
            return state}
        case '[funnel] SET_HREF_BUTTON':{
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
            return state}
        case '[funnel] SET_STYLE_IMAGE':{
            debugger
            // state.jsonPage.settings.style[action.payload.property] = action.payload.value    
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
            debugger
            return state
        }
        case '[funnel] SET_ALL_FUNNELS':{
            state.allFunnels = action.payload
            return state}
        case '[funnel] SET_FLAG_ALL_FUNNELS':{
            state.isOpenAllFunnels = !state.isOpenAllFunnels
            return state}
        case '[funnel] SET_STYLE_SECTION':{
            debugger
            switch (action.payload.property) {
                case 'backgroundColor':
                    state.jsonPage.arrSections[action.payload.indexSection].settings.style[action.payload.property] = action.payload.val
                    break;
                case 'opacity':
                    state.jsonPage.arrSections[action.payload.indexSection].settings.style["opacity"] = action.payload.val
                    break;
                default:break;
            }
            // arrSections[indexSectionInEditing].settings.style.backgroundColor.replace(action.payload.val)

            return state}
        case '[funnel] SET_IMAGE_FILE':{
            state.jsonPage.image_funnel = action.payload
            return state;}
        case '[funnel] CHANGE_LOADING':{
            state.loading = !state.loading
            return state;}
        case '[funnel] CHANGE_MESSAGE':{
            state.message = !state.message
            // console.log(action.payload)
            return state;}
        case '[funnel] SET_ORDER_SECTION':{

            let a = state.jsonPage.arrSections.indexOf(state.jsonPage.arrSections.find(x => `${x.id}` === action.old_index))
            let b = action.new_index ? state.jsonPage.arrSections.indexOf(state.jsonPage.arrSections.find(x => `${x.id}` === action.new_index)) : undefined
            if (b >= state.jsonPage.arrSections.length) {
                var k = b - state.jsonPage.arrSections.length + 1;
                while (k--) {
                    state.jsonPage.arrSections.push(undefined);
                }
            }
            state.jsonPage.arrSections.splice(b - 1, 0, state.jsonPage.arrSections.splice(a, 1)[0]);
            return state; // for testing
        }
        default:
            return state
    }
})
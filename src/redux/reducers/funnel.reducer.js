

import { SET_IS_OPEN_CON, SET_THUMBTACK, SET_COLLAPSE_OPEN, ADD_SECTION_IN_IFRAME, SET_JSON_PAGE, SET_STYLE_PAGE, CHANE_LOADING, SET_OPACITY_PAGE, REMOVE_SECTION, SET_STYLE_IMAGE, ADD_SECTION, SET_BORDER_PARTS, CHANGE_EDIT_MODE, ADD_ELEMENT,ADD_ELEMENT1, SET_VALUE_ELEMENT, MOVE_ELEMENT_IN_PART, REMOVE_ELEMENT, ELEMENT_IN_EDITING } from '../actions/funnel.action'
import produce from 'immer'
// import { act } from 'react-dom/test-utils'
import { act } from 'react-dom/test-utils'
import img from '../../Sunflower-on-Blue-bkgd-2.jpg'

const initialState = {
    urlPage:'' ,//'http://localhost:3000'
    // urlPage:'http://funnel.dev.leader.codes',
    userName: window.location.pathname.split('/')[2],
    // iframe: {},
    newElementTypeAndValue:{},
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
    name:'firstFunnel4',// window.location.pathname.split('/')[3],
    allFunnels: [],
    idFunnel: '',
    urlFunnel:'',
    jsonPage: {
        num_elements: 4,
        num_sections: 1,
        image_funnel: '',
        settings: {
            style: { color: '', backgroundColor: 'rgba(255,255,255,0.99)', opacity: '0.99',backgroundImage:'' }
            , opacity: '0.99'
        },
        arrSections: [
            {
                arrParts:[{
                    arrElements:[{
                        id:0,
                        settings:{},
                        type:"Image",
                        value: ""
                    },{
                        id:1,
                        settings:{},
                        type:"Title",
                        value: "<h1 class=\"ql-align-center\">Welcome to A customer makes contact!</h1>"
                    },{
                        id:2,
                        settings:{},
                        type:"Text",
                        value: "<p class='ql-align-center'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.,</p>"
                         
                    },{
                        id:3,
                        settings:{},
                        type:"Button",
                        value: "<h1 class=\"ql-align-center\">start creating</h1>"
                    }

                    ],settings:{style:{}}
                }],
                id:4,
                settings:{
                    style:{
                        backgroundColor:""
                    }
                }
            }
            // image_funnel:"",

            // {
            //     settings: { backgroundColor: 'blue' },
            //     arrParts: [
            //         {
            //             settings: { backgroundColor: 'white' },
            //             arrElements: [
            //                 {
            //                     settings: { type: 'text' }
            //                 },
            //                 {
            //                     settings: { type: 'title' }
            //                 }
            //             ]
            //         },
            //         {
            //             settings: { backgroundColor: 'red' },
            //             arrElements: [
            //                 {
            //                     settings: { type: 'text' }
            //                 },
            //                 {
            //                     settings: { type: 'title' }
            //                 }
            //             ]
            //         },
            //         {
            //             settings: { bgColor: 'gray' },
            //             arrElements: [
            //                 {
            //                     settings: { type: 'text' }
            //                 },
            //                 {
            //                     settings: { type: 'title' }
            //                 }
            //             ]
            //         }]
            // },
            // {
            //     settings: { bgColor: 'black' },
            //     arrParts: [
            //         {
            //             settings: { bgColor: 'green' },
            //             arrElements: [
            //                 {
            //                     settings: { type: 'text' }
            //                 },
            //                 {
            //                     settings: { type: 'title' }
            //                 }
            //             ]
            //         }]
            // }
        ]
    }
    // jsonPage: {
    //     settings: {},
    //     arrSections: [{
    //         settings: {},
    //         arrParts: [{
    //             settings: {},
    //             arrElements: [{ settings: {} }]
    //         }]
    //     }]

    // }


}



// function findElementById(idElement){

//     initialState.jsonPage.arrSections.map((item, a) => {
//         item.arrParts.map((item, b) => {
//             item.arrElements.map((item, c) => {
//                 if (item.id == idElement) {
//                    return item
//                 }
//             })
//         })
//     })
// }
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
            // state.jsonPage = state.jsonPage.arrSections.concat(action.payload)
            // return {...state}

            // return{...state,
            //     arrSections: [...state.jsonPage.arrSections, action.payload]}
            // debugger
            let newSection = action.payload
            newSection.id = action.id
            state.jsonPage.arrSections.push(newSection)
            state.jsonPage.num_sections++
            console.log(state.jsonPage.num_sections)

            return state
        case SET_BORDER_PARTS: {
            debugger
            state.borderPart=action.payload
            // return { ...state, borderPart: action.payload }
            return state;
        }
        case ADD_ELEMENT: {
            debugger
            const newElement = { type: action.payload.type, value: action.payload.value, settings: {}, id: action.payload.id }
            state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.push(newElement)
            state.elementInEditing = newElement;
            state.collapseIsOpen = "element"
            state.jsonPage.num_elements++

            // state.editinigElement = true

            return state
        }
        case ADD_ELEMENT1: {
            // debugger
            const newElement = { type: action.payload.type, value: action.payload.value }
            // state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.push(newElement)
            // state.elementInEditing = newElement;
            // state.collapseIsOpen = "element"
            // state.jsonPage.num_elements++
            state.newElementTypeAndValue=newElement

            // state.editinigElement = true

            return state
        }
        case SET_VALUE_ELEMENT: {
            // if()
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
        case REMOVE_SECTION:
            console.log(action)
            state.jsonPage.arrSections.splice(action.payload, 1)
            return state

        case SET_COLLAPSE_OPEN:
            // debugger
            state.collapseIsOpen = action.obj.collapse
            console.log(action.obj.collapse)
            if (action.obj.collapse === "element") {
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
            if (action.obj.collapse === "section") {

                state.jsonPage.arrSections.map((item, a) => {
                    if (item.id == action.obj.id) {
                        state.sectionInEditing = item
                    }
                })
            }
            return state
        case REMOVE_ELEMENT:
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
        case '[funnel] SAVE_IN_LOCAL_STORAGE':
            console.log(state.jsonPage)
            localStorage.setItem("json", JSON.stringify(state.jsonPage));
            window.open(`${state.urlPage}/${state.userName}/${state.name}`)
            return state
        case CHANGE_EDIT_MODE:
            state.editMode = action.payload
            return state

        case SET_JSON_PAGE:
            state.jsonPage = action.payload
            return state
        case SET_OPACITY_PAGE:
            state.jsonPage.settings.opacity = action.payload
            return state
        case SET_OPACITY_PAGE:
            state.jsonPage.settings.opacity = action.payload
            return state
        case SET_STYLE_PAGE:
            debugger
            state.jsonPage.settings.style[action.payload.property] = action.payload.value
            return state
        case '[funnel] SET_NAME_PAGE':
            state.name = action.payload
            return state
        case '[funnel] SET_ID_FUNNEL':
            state.idFunnel = action.payload
            return state
        case '[funnel] SET_HREF_BUTTON':
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
        case '[funnel] SET_STYLE_IMAGE':
            debugger
            // state.jsonPage.settings.style[action.payload.property] = action.payload.value    
            state.elementInEditing.settings[action.payload.property] = action.payload.value
            state.jsonPage.arrSections.map((item, a) => {
                item.arrParts.map((item, b) => {
                    item.arrElements.map((item, c) => {
                        if (item.id == state.elementInEditing.id) {
                            item.settings[action.payload.property] = action.payload.value
                        }
                    })
                })
            })
            debugger
            return state

        case '[funnel] SET_ALL_FUNNELS':
            state.allFunnels = action.payload
            return state
        case '[funnel] SET_FLAG_ALL_FUNNELS':
            state.isOpenAllFunnels = !state.isOpenAllFunnels
            return state
        case '[funnel] SET_STYLE_SECTION':
             debugger
            switch (action.payload.property) {
                case 'backgroundColor':
                    state.jsonPage.arrSections[action.payload.indexSection].settings.style[action.payload.property] = action.payload.val
                case 'opacity':
                    state.jsonPage.arrSections[action.payload.indexSection].settings.style["opacity"] = action.payload.val

            }
            // arrSections[indexSectionInEditing].settings.style.backgroundColor.replace(action.payload.val)

            return state
        case '[funnel] SET_IMAGE_FILE':
            state.jsonPage.image_funnel = action.payload
            return state;
        case '[funnel] CHANGE_LOADING':
            state.loading = !state.loading
            return state;
        case '[funnel] CHANGE_MESSAGE':
            state.message = !state.message
            // console.log(action.payload)
            return state;
        case '[funnel] SET_ORDER_SECTION':

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

        default:
            return state
    }



})
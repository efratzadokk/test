

import { SET_VALUE_ME,SET_IS_OPEN_CON, SET_THUMBTACK, SET_COLLAPSE_OPEN, ADD_SECTION_IN_IFRAME, SET_JSON_PAGE, SET_STYLE_PAGE, CHANE_LOADING, SET_OPACITY_PAGE, REMOVE_SECTION, SET_STYLE_IMAGE, ADD_SECTION, SET_BORDER_PARTS, CHANGE_EDIT_MODE, ADD_ELEMENT,ADD_ELEMENT1, SET_VALUE_ELEMENT, MOVE_ELEMENT_IN_PART, REMOVE_ELEMENT, ELEMENT_IN_EDITING } from '../actions/funnel.action'
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
    // newVal: [
    //     { index:0 ,type: 'logo', border: false, path: '',  backgroundColor: "", borderRadius: "", width: "", height: "", alignItem: "center" },
    //     { index:1  ,type: 'title', border: false,  text: "Welcome enter your title!", color: "black",  textAlign: "center", fontSize: "25px", fontFamily:'Arial, Helvetica, sans-serif' },
    //     { index:2 , type: 'button', border: false, text: "START ACTIVE",  color: "white", backgroundColor: "#0AB0FE", textAlign: "center", borderRadius: "2", width: "20", height: "1", alignItem: "-webkit-center" },
    //     {index:3 ,  type: 'image', border: false, path: '',  backgroundColor: "", width: "20", borderRadius: "", height: "10", alignItem: "center" , opacity:'0.6'},
    //     { index:4 ,type: 'paragraph',
    //       text: "Welcome to the family Thanks to you we grew up and now we are over 2000 members  You are welcome to start an activity to get started Click here",
    //         border: false,  color: "black", textAlign: "center", fontSize: "16", fontFamily:'Arial, Helvetica, sans-serif'
    //     },
    //   ],


    // newVal: [
    //     { index:0 ,type: 'logo', border: false, path: '',  backgroundColor: "", borderRadius: "", width: "", height: "", alignItem: "center" },
    //     { index:1  ,type: 'title', border: false,  text: "Welcome enter your title!", color: "black",  textAlign: "center", fontSize: "25px", fontFamily:'Arial, Helvetica, sans-serif' },
    //     { index:2 , type: 'button', border: false, text: "START ACTIVE",  color: "white", backgroundColor: "#0AB0FE", textAlign: "center", borderRadius: "2", width: "20", height: "1", alignItem: "-webkit-center" },
    //     {index:3 ,  type: 'image', border: false, path: '',  backgroundColor: "", width: "20", borderRadius: "", height: "10", alignItem: "center" , opacity:'0.6'},
    //     { index:4 ,type: 'paragraph',text: "Welcome to the family Thanks to you we grew up and now we are over 2000 members  You are welcome to start an activity to get started Click here",
    //         border: false,  color: "black", textAlign: "center", fontSize: "16", fontFamily:'Arial, Helvetica, sans-serif'
    //     },
    //     {index:5 ,  type: 'video', border: false, path: '',  backgroundColor: "", width: "20", borderRadius: "", height: "10", alignItem: "center" , opacity:'0.6'},
    //     {index:6 ,  type: 'gallery', border: false, path: '',  backgroundColor: "", width: "20", borderRadius: "", height: "10", alignItem: "center" , opacity:'0.6'},

    //   ],

    newVal: [
        { index:0 ,type: 'logo', border: false, path: '',  backgroundColor: "", borderRadius: "", width: "", height: "", alignItem: "center"},
        { index:1  ,type: 'title', border: false,  text: "Welcome enter your title!" , backgroundColor: "transparent",color: "black",  textAlign: "center", fontSize: "25", fontFamily:'Arial, Helvetica, sans-serif' },
        { index:2 , type: 'button',fontSize: "25", text: "Button ",  color: "black", backgroundColor: "grey", textAlign: "center", fontFamily:'Arial, Helvetica, sans-serif',borderRadius:'0',width:'100' },
        
        { index:3 ,  type: 'image', border: false, path: '',  backgroundColor: "", width: "20", borderRadius: "", height: "10", textAlign: "center" , opacity:'0.6'},
        { index:4 ,type: 'paragraph',text: "Welcome to the family Thanks to you we grew up and now we are over 2000 members  You are welcome to start an activity to get started Click here",
            border: false,  color: "black", textAlign: "center", fontSize: "16", fontFamily:'Arial, Helvetica, sans-serif' , backgroundColor: "transparent"
        },
        {index:5 ,  type: 'video', border: false, path: '',  backgroundColor: "transparent", width: "20", borderRadius: "", height: "10", textAlign: "center" , opacity:'0.6'},
        {index:6 ,  type: 'gallery', border: false, path: '',  backgroundColor: "transparent", width: "20", borderRadius: "", height: "10", textAlign: "center" , opacity:'0.6'},
        { index:7 , type: 'spacer', border: false,  color: "#D3D3D3",  borderRadius: "2", width: "20", height: "5"},
        { index:8 , type: 'icon', border: false,  opacity: '1',fontSize:'20', color: "black", backgroundColor: "#0AB0FE", textAlign: "center", borderRadius: "2", width: "20", height: "1"},
        { index:9  ,type: 'form', border: false,  text: "Welcome enter your title!", color: "black",  textAlign: "center", fontSize: "25px", fontFamily:'Arial, Helvetica, sans-serif' },
        { index:10 , type: 'html', border: false, text: "",  color: "white", backgroundColor: "#0AB0FE", textAlign: "center", fontFamily: "Arial, Helvetica, sans-serif", width: "20", height: "1"},
        { index:11 , type: 'sharing', border: false, text: "START ACTIVE",  color: "white", backgroundColor: "#0AB0FE", textAlign: "center", borderRadius: "2", width: "20", height: "1"},

      ],

    // jsonPage: {
    //     num_elements: 4,
    //     num_sections: 1,
    //     image_funnel: '',
    //     settings: {
    //         // 'rgba(255,255,255,0.99)'
    //         // 'rgba(255,255,255,0.99)'
    //         style: { color: '', backgroundColor:'rgba(99,44,222,0.99)' , opacity: '0.99',backgroundImage:"blob:http://localhost:3000/8c11b757-3bf4-49ca-90bb-44f1dd1348d1" }
    //         , opacity: '0.99'
    //     },
    //     arrSections: [
    //         {
    //             arrParts:[{
    //                 arrElements:[{
    //                     id:0,
    //                     settings:{},
    //                     type:"Image",
    //                     value: ""
    //                 },{
    //                     id:1,
    //                     settings:{},
    //                     type:"Title",
    //                     value: "Welcome to A customer makes contact!"
    //                 },{
    //                     id:2,
    //                     settings:{},
    //                     type:"Text",
    //                     value: "<p class='ql-align-center'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetu sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.,</p>"
                         
    //                 },{
    //                     id:3,
    //                     settings:{},
    //                     type:"Button",
    //                     value: "<h1 class=\"ql-align-center\">start creating</h1>"
    //                 }

    //                 ],settings:{style:{}}
    //             }],
    //             id:4,
    //             settings:{
    //                 style:{
    //                     backgroundColor:""
    //                 }
    //             }
    //         }
    //         // image_funnel:"",

    //         // {
    //         //     settings: { backgroundColor: 'blue' },
    //         //     arrParts: [
    //         //         {
    //         //             settings: { backgroundColor: 'white' },
    //         //             arrElements: [
    //         //                 {
    //         //                     settings: { type: 'text' }
    //         //                 },
    //         //                 {
    //         //                     settings: { type: 'title' }
    //         //                 }
    //         //             ]
    //         //         },
    //         //         {
    //         //             settings: { backgroundColor: 'red' },
    //         //             arrElements: [
    //         //                 {
    //         //                     settings: { type: 'text' }
    //         //                 },
    //         //                 {
    //         //                     settings: { type: 'title' }
    //         //                 }
    //         //             ]
    //         //         },
    //         //         {
    //         //             settings: { bgColor: 'gray' },
    //         //             arrElements: [
    //         //                 {
    //         //                     settings: { type: 'text' }
    //         //                 },
    //         //                 {
    //         //                     settings: { type: 'title' }
    //         //                 }
    //         //             ]
    //         //         }]
    //         // },
    //         // {
    //         //     settings: { bgColor: 'black' },
    //         //     arrParts: [
    //         //         {
    //         //             settings: { bgColor: 'green' },
    //         //             arrElements: [
    //         //                 {
    //         //                     settings: { type: 'text' }
    //         //                 },
    //         //                 {
    //         //                     settings: { type: 'title' }
    //         //                 }
    //         //             ]
    //         //         }]
    //         // }
    //     ]
    // }
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

        // case SET_VALUE_ME: {
        //     // if()
        //   //  debugger
        //     console.log(action.payload.value)
        //     console.log(action.payload.type)
        //     console.log (state.elementInEditing.color)
        //     // if(action.payload.type='image')
        //     // {

        //     ///c pas..
        //    //     state.elementInEditing.color = action.payload.value
        //     // }
            
        //     //console.log(state.elementInEditing)

        //     state.jsonPage.arrSections.map((item, a) => {
        //         item.arrParts.map((item, b) => {
        //             item.arrElements.map((item, c) => {
        //                 debugger
        //                 if (item.id == state.elementInEditing.id) {
        //                     if(action.payload.type=='color')
        //                         item.color = action.payload.value
        //                     else if(action.payload.type=='fontSize')
        //                         item.fontSize= action.payload.value+'px'
        //                     else if (action.payload.type=='textAlign')
        //                         item.textAlign=action.payload.value
        //                     else if(action.payload.type=='fontFamily')
        //                         item.fontFamily=action.payload.value
        //                      else if(action.payload.type=='image')
        //                      item.value=action.payload.value
        //                      else if (action.payload.type=='alignItem')
        //                      item.alignItem=action.payload.value

        //                 }
        //             })
        //         })
        //     })
        //     return state
        // }

        case ADD_ELEMENT: {
            
            debugger
          // console.log(action.payload.text)
           console.log(action.payload.value)
           console.log(action.payload.type)

         let newElement
         if(action.payload.type=='Title' ||action.payload.type== 'Paragraph')

          { 
        
                newElement = { type: action.payload.type, value: action.payload.value.value, color:action.payload.value.color,fontSize:action.payload.value.fontSize, border:action.payload.value.border,textAlign:action.payload.value.textAlign ,fontFamily:action.payload.value.fontFamily,backgroundColor:action.payload.value.backgroundColor,borderRadius:action.payload.value.borderRadius ,settings: {}, id: action.payload.id}
          }
           else if (action.payload.type=='Button')
           {
               newElement = { type: action.payload.type, value: action.payload.value.value, color:action.payload.value.color,fontSize:action.payload.value.fontSize, borderRadius:action.payload.value.borderRadius,textAlign:action.payload.value.textAlign ,fontFamily:action.payload.value.fontFamily,backgroundColor:action.payload.value.backgroundColor,borderRadius:action.payload.value.borderRadius ,width:action.payload.value.width ,settings: {}, id: action.payload.id}
               
           }
           else if(action.payload.type=='Spacer')
           {
               newElement = { type: action.payload.type,  color:action.payload.value.color,height:action.payload.value.height,settings: {}, id: action.payload.id}

           }

          else if(action.payload.type=='Image' || action.payload.type== 'Video'|| action.payload.type== 'Gallery')
          {
           newElement = { type: action.payload.type, value: action.payload.value.value, textAlign: action.payload.value.textAlign,backgroundColor:action.payload.value.backgroundColor, settings: {}, id: action.payload.id}
  
          }
          // console.log(newElement)
          else if( action.payload.type== 'Icon' || action.payload.type== 'Form'|| action.payload.type== 'Sharing' )
          {
              newElement={type: action.payload.type, value:action.payload.type,color:action.payload.value.color ,opacity:action.payload.value.opacity, textAlign:action.payload.value.textAlign, fontSize: action.payload.value.fontSize,settings: {}, id: action.payload.id}
          }
          else if( action.payload.type== 'Html' )
          {
              newElement={type: action.payload.type, value:action.payload.value.value,color:action.payload.value.color ,fontFamily:action.payload.value.fontFamily, textAlign:action.payload.value.textAlign, fontSize: action.payload.value.fontSize,settings: {}, id: action.payload.id}
          }


          //avant
         //  const newElement = { type: action.payload.type, value: action.payload.value, settings: {}, id: action.payload.id }
       
       
       
       
           //  const newElement={type: action.payload.type, value: action.payload.value}
           console.log(newElement)
           state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.push(newElement)
           state.elementInEditing = newElement;
           state.collapseIsOpen = "element"
           state.jsonPage.num_elements++

           // state.editinigElement = true

           return state
       }
       case ADD_ELEMENT1: {
            debugger
        
           //avant
         // const newElement = { type: action.payload.type, value: action.payload.value}
         
         
//apres
       let newElement
       console.log(action.payload.type)
       if(action.payload.type=='Title' ||action.payload.type== 'Paragraph' )
       {
        // console.log('he enter a itle or addelement1')

        newElement = { type: action.payload.type, value: action.payload.value.text ,color:action.payload.value.color,fontSize:action.payload.value.fontSize, border:action.payload.value.border,textAlign:action.payload.value.textAlign,fontFamily:action.payload.value.fontFamily,backgroundColor:action.payload.value.backgroundColor,borderRadius:action.payload.value.borderRadius}
  //  newElement={ type: action.payload.type, value: action.payload.value.text}

       }
       else if(action.payload.type=='Image' || action.payload.type== 'Video' ||  action.payload.type== 'Gallery')
       { 
        newElement = { type: action.payload.type, value: action.payload.value.path ,textAlign: action.payload.value.textAlign,backgroundColor:action.payload.value.backgroundColor}

       }
       else if( action.payload.type== 'Icon' || action.payload.type== 'Form' || action.payload.type== 'Sharing')
       {
           newElement={type: action.payload.type, value:action.payload.type,color:action.payload.value.color ,opacity:action.payload.value.opacity, textAlign:action.payload.value.textAlign,fontSize:action.payload.value.fontSize}
       }
       else if(action.payload.type=='Button'){
           newElement = { type: action.payload.type, value: action.payload.value.text, color:action.payload.value.color,fontSize:action.payload.value.fontSize, border:action.payload.value.borderRadius,textAlign:action.payload.value.textAlign ,fontFamily:action.payload.value.fontFamily,backgroundColor:action.payload.value.backgroundColor,borderRadius:action.payload.value.borderRadius ,width:action.payload.value.width}

       }
       else if(action.payload.type=='Spacer')
       {
           newElement = { type: action.payload.type,  color:action.payload.value.color,height:action.payload.value.height}

       }
       else if( action.payload.type== 'Html' )
       {
           newElement={type: action.payload.type, value:action.payload.value.text,color:action.payload.value.color ,fontFamily:action.payload.value.fontFamily, textAlign:action.payload.value.textAlign, fontSize: action.payload.value.fontSize,settings: {}, id: action.payload.id}
       }

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
           // if()
         //  debugger
           console.log(action.payload.value)
           console.log(action.payload.type)
          // console.log (state.elementInEditing.color)
           // if(action.payload.type='image')
           // {

           ///c pas..
          //     state.elementInEditing.color = action.payload.value
           // }
           
           //console.log(state.elementInEditing)

           state.jsonPage.arrSections.map((item, a) => {
               item.arrParts.map((item, b) => {
                   item.arrElements.map((item, c) => {
                       debugger
                       if (item.id == state.elementInEditing.id) {
                           if(action.payload.type=='color')
                               item.color = action.payload.value
                           else if(action.payload.type=='fontSize')
                               item.fontSize= action.payload.value
                           else if (action.payload.type=='textAlign')
                               item.textAlign=action.payload.value
                           else if(action.payload.type=='fontFamily')
                               item.fontFamily=action.payload.value
                            else if(action.payload.type=='image' ||action.payload.type=='video' )
                            item.value=action.payload.value
                            else if (action.payload.type=='textAlign')
                            item.textAlign=action.payload.value
                            else if (action.payload.type=='backgroundColor')
                            item.backgroundColor=action.payload.value
                            else if (action.payload.type=='borderRadius')
                            item.borderRadius=action.payload.value
                            else if (action.payload.type=='width')
                            item.width=action.payload.value
                            else if (action.payload.type=='height')
                            item.height=action.payload.value
                            else if (action.payload.type=='opacity')
                            item.opacity=action.payload.value




                       }
                   })
               })
           })
           return state
       }
        // case SET_VALUE_ME: {
        //     // if()
        //   //  debugger
        //     console.log(action.payload.value)
        //     console.log(action.payload.type)
        //     console.log (state.elementInEditing.color)
        //     // if(action.payload.type='image')
        //     // {

        //     ///c pas..
        //    //     state.elementInEditing.color = action.payload.value
        //     // }
            
        //     //console.log(state.elementInEditing)

        //     state.jsonPage.arrSections.map((item, a) => {
        //         item.arrParts.map((item, b) => {
        //             item.arrElements.map((item, c) => {
        //                 debugger
        //                 if (item.id == state.elementInEditing.id) {
        //                     if(action.payload.type=='color')
        //                         item.color = action.payload.value
        //                     else if(action.payload.type=='fontSize')
        //                         item.fontSize= action.payload.value+'px'
        //                     else if (action.payload.type=='textAlign')
        //                         item.textAlign=action.payload.value
        //                     else if(action.payload.type=='fontFamily')
        //                         item.fontFamily=action.payload.value
        //                      else if(action.payload.type=='image' ||action.payload.type=='video' )
        //                      item.value=action.payload.value
        //                      else if (action.payload.type=='alignItem')
        //                      item.alignItem=action.payload.value

        //                 }
        //             })
        //         })
        //     })
        //     return state
        // }
//         case ADD_ELEMENT: {
            
//             debugger
//           // console.log(action.payload.text)
//            console.log(action.payload.value)
//            console.log(action.payload.type)

//          let newElement
//          if(action.payload.type=='Title' ||action.payload.type== 'Paragraph')

//           { debugger
//         // console.log('he enter a itle or paragraph')
//               console.log(action.payload.value)
//               console.log(action.payload.id)
//                 newElement = { type: action.payload.type, value: action.payload.value.value, color:action.payload.value.color,fontSize:action.payload.value.fontSize, border:action.payload.value.border,textAlign:action.payload.value.textAlign ,fontFamily:action.payload.value.fontFamily ,settings: {}, id: action.payload.id}
//            //    newElement={ type: action.payload.type, value: action.payload.value}
//           }
//           else if(action.payload.type=='Image' || action.payload.type== 'Video'|| action.payload.type=='Gallery')
//           {
//            newElement = { type: action.payload.type, value: action.payload.value.value, alignItem: action.payload.value.alignItem,backgroundColor:action.payload.value.backgroundColor, settings: {}, id: action.payload.id}
  
//           }
//           // console.log(newElement)


//           //avant
//          //  const newElement = { type: action.payload.type, value: action.payload.value, settings: {}, id: action.payload.id }
       
       
       
       
//            //  const newElement={type: action.payload.type, value: action.payload.value}
//            console.log(newElement)
//            state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.push(newElement)
//            state.elementInEditing = newElement;
//            state.collapseIsOpen = "element"
//            state.jsonPage.num_elements++

//            // state.editinigElement = true

//            return state
//        }
//        case ADD_ELEMENT1: {
//             debugger
        
//            //avant
//          // const newElement = { type: action.payload.type, value: action.payload.value}
         
         
// //apres
//        let newElement
//        console.log(action.payload.type)
//        if(action.payload.type=='Title' ||action.payload.type== 'Paragraph')
//        {
//         // console.log('he enter a itle or addelement1')

//         newElement = { type: action.payload.type, value: action.payload.value.text ,color:action.payload.value.color,fontSize:action.payload.value.fontSize, border:action.payload.value.border,textAlign:action.payload.value.textAlign,fontFamily:action.payload.value.fontFamily}
//   //  newElement={ type: action.payload.type, value: action.payload.value.text}

//        }
//        else if(action.payload.type=='Image' || action.payload.type== 'Video' ||  action.payload.type=='Gallery')
//        { 
//         newElement = { type: action.payload.type, value: action.payload.value.path ,alignItem: action.payload.value.alignItem,backgroundColor:action.payload.value.backgroundColor}

//        }


//           // state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.push(newElement)
//            // state.elementInEditing = newElement;
//            // state.collapseIsOpen = "element"
//            // state.jsonPage.num_elements++

//          state.newElementTypeAndValue=newElement

//            // state.editinigElement = true

//            return state
//        }

//         case ADD_ELEMENT: {
//             debugger

     

//             // state.editinigElement = true
//          let newElement
//          if(action.payload.type=='Title' ||action.payload.type== 'Paragraph'){

// //         // console.log('he enter a itle or paragraph')
// //               console.log(action.payload.value)
// //               console.log(action.payload.id)
//                 newElement = { type: action.payload.type, value: action.payload.value.value, color:action.payload.value.color,fontSize:action.payload.value.fontSize, border:action.payload.value.border,textAlign:action.payload.value.textAlign ,fontFamily:action.payload.value.fontFamily ,settings: {}, id: action.payload.id}
// //            //    newElement={ type: action.payload.type, value: action.payload.value}
//          } else if(action.payload.type=='Image')
//           {
//            newElement = { type: action.payload.type, value: action.payload.value.value, alignItem: action.payload.value.alignItem,backgroundColor:action.payload.value.backgroundColor, settings: {}, id: action.payload.id}
  
//           }
// //           // console.log(newElement)


// //           //avant
// //          //  const newElement = { type: action.payload.type, value: action.payload.value, settings: {}, id: action.payload.id }
       
// // const newElement = { type: action.payload.type, value: action.payload.value, settings: {}, id: action.payload.id }
// state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.push(newElement)
// state.elementInEditing = newElement;
// state.collapseIsOpen = "element"
// state.jsonPage.num_elements++
// //            //  const newElement={type: action.payload.type, value: action.payload.value}
// //            console.log(newElement)
      


// //            // state.editinigElement = true

//             return state
//         }
//         case ADD_ELEMENT1: {
//             // debugger
//             // const newElement = { type: action.payload.type, value: action.payload.value }
//             // state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.push(newElement)
//             // state.elementInEditing = newElement;
//             // state.collapseIsOpen = "element"
//             // state.jsonPage.num_elements++
           

//             // state.editinigElement = true

//             let newElement
//                    console.log(action.payload.type)
//                    if(action.payload.type=='Title' ||action.payload.type== 'Paragraph')
//                    {
//                     // console.log('he enter a itle or addelement1')
            
//                     newElement = { type: action.payload.type, value: action.payload.value.text ,color:action.payload.value.color,fontSize:action.payload.value.fontSize, border:action.payload.value.border,textAlign:action.payload.value.textAlign,fontFamily:action.payload.value.fontFamily}
//               //  newElement={ type: action.payload.type, value: action.payload.value.text}
            
//                    }
//                    else if(action.payload.type=='Image')
//                    { 
//                     newElement = { type: action.payload.type, value: action.payload.value.path ,alignItem: action.payload.value.alignItem,backgroundColor:action.payload.value.backgroundColor}
            
//                    }
          
//                    state.newElementTypeAndValue=newElement

//             return state
//         }


//         case ADD_ELEMENT: {
            
//             debugger
//           // console.log(action.payload.text)
//            console.log(action.payload.value)
//            console.log(action.payload.type)

//          let newElement
//          if(action.payload.type=='Title' ||action.payload.type== 'Paragraph')

//           { debugger
//         // console.log('he enter a itle or paragraph')
//               console.log(action.payload.value)
//               console.log(action.payload.id)
//                 newElement = { type: action.payload.type, value: action.payload.value.value, color:action.payload.value.color,fontSize:action.payload.value.fontSize, border:action.payload.value.border,textAlign:action.payload.value.textAlign ,fontFamily:action.payload.value.fontFamily ,settings: {}, id: action.payload.id}
//            //    newElement={ type: action.payload.type, value: action.payload.value}
//           }
//           else if(action.payload.type=='Image')
//           {
//            newElement = { type: action.payload.type, value: action.payload.value.value, alignItem: action.payload.value.alignItem,backgroundColor:action.payload.value.backgroundColor, settings: {}, id: action.payload.id}
  
//           }
//           // console.log(newElement)


//           //avant
//          //  const newElement = { type: action.payload.type, value: action.payload.value, settings: {}, id: action.payload.id }
       
       
       
       
//            //  const newElement={type: action.payload.type, value: action.payload.value}
//            console.log(newElement)
//            state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.push(newElement)
//            state.elementInEditing = newElement;
//            state.collapseIsOpen = "element"
//            state.jsonPage.num_elements++

//            // state.editinigElement = true

//            return state
//        }
//        case ADD_ELEMENT1: {
//             debugger
        
//            //avant
//          // const newElement = { type: action.payload.type, value: action.payload.value}
         
         
// //apres
//        let newElement
//        console.log(action.payload.type)
//        if(action.payload.type=='Title' ||action.payload.type== 'Paragraph')
//        {
//         // console.log('he enter a itle or addelement1')

//         newElement = { type: action.payload.type, value: action.payload.value.text ,color:action.payload.value.color,fontSize:action.payload.value.fontSize, border:action.payload.value.border,textAlign:action.payload.value.textAlign,fontFamily:action.payload.value.fontFamily}
//   //  newElement={ type: action.payload.type, value: action.payload.value.text}

//        }
//        else if(action.payload.type=='Image')
//        { 
//         newElement = { type: action.payload.type, value: action.payload.value.path ,alignItem: action.payload.value.alignItem,backgroundColor:action.payload.value.backgroundColor}

//        }


//           // state.jsonPage.arrSections[action.payload.section].arrParts[action.payload.part].arrElements.push(newElement)
//            // state.elementInEditing = newElement;
//            // state.collapseIsOpen = "element"
//            // state.jsonPage.num_elements++

//          state.newElementTypeAndValue=newElement

//            // state.editinigElement = true

//            return state
//        }



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
        case REMOVE_SECTION:
            console.log(action)
            state.jsonPage.arrSections.splice(action.payload, 1)
            return state

        // case SET_COLLAPSE_OPEN:
        //     // debugger
        //     state.collapseIsOpen = action.obj.collapse
        //     console.log(action.obj.collapse)
        //     if (action.obj.collapse === "element") {
        //         state.jsonPage.arrSections.map((item, a) => {
        //             item.arrParts.map((item, b) => {
        //                 item.arrElements.map((item, c) => {
        //                     if (item.id == action.obj.id) {
        //                         state.elementInEditing = item
        //                     }
        //                 })
        //             })
        //         })
        //     }
        //     if (action.obj.collapse === "section") {

        //         state.jsonPage.arrSections.map((item, a) => {
        //             if (item.id == action.obj.id) {
        //                 state.sectionInEditing = item
        //             }
        //         })
        //     }
        //     return state

        case SET_COLLAPSE_OPEN:
           // debugger
            state.collapseIsOpen = action.obj.collapse
          console.log(action.obj.collapse)
          console.log(action.obj.id)
      //    console.log(ac)
            if (action.obj.collapse == "element") 
            {
                state.jsonPage.arrSections.map((item, a) => {
                    item.arrParts.map((item, b) => {
                        item.arrElements.map((item, c) => {
                            if (item.id == action.obj.id) 
                            {
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
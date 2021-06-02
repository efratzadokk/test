import { connect } from "react-redux"
export const SET_VALUE_ME='[funnel] SET_VALUE_ME '
export const SET_IS_OPEN_CON='[funnel] SET_IS_OPEN_CON'
export const SET_THUMBTACK ='[funnel] SET_THUMBTACK'
export const ADD_SECTION ='[funnel] ADD_SECTION'
export const SET_BORDER_PARTS='[funnel] SET_BORDER_PARTS'
export const ADD_ELEMENT='[funnel] ADD_ELEMENT'
export const ADD_ELEMENT1='[funnel] ADD_ELEMENT1'
export const SET_VALUE_ELEMENT='[funnel] SET_VALUE_ELEMENt'
export const MOVE_ELEMENT_IN_PART='[funnel] MOVE_ELEMENT_IN_PART'
export const REMOVE_SECTION ='[funnel] REMOVE_SECTION'
export const REMOVE_ELEMENT ='[funnel] REMOVE_ELEMENT'
export const ELEMENT_IN_EDITING ='[funnel] ELEMENT_IN_EDITING'
export const SET_COLLAPSE_OPEN ='[funnel] SET_COLLAPSE_OPEN'
export const UPLOAD_IMAGE ='[funnel] UPLOAD_IMAGE'
export const CHANGE_EDIT_MODE='[funnel] CHANGE_EDIT_MODE'
export const SET_JSON_PAGE='[funnel] SET_JSON_PAGE'
export const SET_STYLE_PAGE='[funnel] SET_STYLE_PAGE'
export const SET_OPACITY_PAGE='[funnel] SET_OPACITY_PAGE'
export const CREAT_FUNNEL='[funnel] CREAT_FUNNEL'
export const GET_ALL_FUNNELS='[funnel] GET_ALL_FUNNELS'
export const SET_STYLE_IMAGE='[funnel] SET_STYLE_IMAGE'
export const CHANE_LOADING ='[funnel] CHANE_LOADING'
// export const ADD_SECTION_IN_IFRAME ='[funnel] ADD_SECTION_IN_IFRAME'

export function setFlagToggleCon(newFlag) {
    return {
        type: SET_IS_OPEN_CON,
        payload: newFlag
    }
}
export function setFlagthumbtack(newFlag) {
    return {
        type: '[funnel] SET_THUMBTACK',
        payload: newFlag
    }
}

export function setValueMe(val){
    return{
        type: SET_VALUE_ME,
        payload:val

    }
}
export function addSection(newSection,id) {
    return {
        type: ADD_SECTION,
        payload: newSection,
        id:id
    }
}
export function setFlagBorderParts(newFlag) {
    debugger
    return {
        type: SET_BORDER_PARTS,
        payload: newFlag
    }
}
export function addElement(newElement) {
    return {
        type: ADD_ELEMENT,
        payload: newElement
    }
}
export function addElement1(newElement) {
    return {
        type: ADD_ELEMENT1,
        payload: newElement
    }
}
export function setValueElement(nv) {
    return {
        type: SET_VALUE_ELEMENT,
        payload: nv
    }
}
export function moveElementInPart(ob) {
    return {
        type: MOVE_ELEMENT_IN_PART,
        payload: ob
    }
}
export function removeSection(index) {
    return {
        type: REMOVE_SECTION,
        payload: index
    }
}
export function removeElement(index) {
    return {
        type: REMOVE_ELEMENT,
        payload: index
    }
}
export function elementInEditing(id) {
    return {
        type: ELEMENT_IN_EDITING,
        payload: id
    }
}
export function sectionInEditing(indexSection) {
    return {
        type: '[funnel] SECTION_IN_EDITING',
        payload: indexSection
    }
}
export function setStyleSection(o) {
    return {
        type: '[funnel] SET_STYLE_SECTION',
        payload: o
    }
}
export function setCollapseOpen(o) {
    return {
        
        type: SET_COLLAPSE_OPEN,
        obj:o
    }
}

export function getJson() {
    return {
        type: 'GET_JSON'
    }
}
export function uploadImage(file) {
    return {
        type: UPLOAD_IMAGE,
        payload: file
    }
}
export function chageEditMode(nf) {
    return {
        type: CHANGE_EDIT_MODE,
        payload: nf
    }
}
export function setJsonPage(json) {
    return {
        type: SET_JSON_PAGE,
        payload: json
    }
}

export function setStylePage(obj) {
    debugger
    return {
        type: SET_STYLE_PAGE,
        payload: obj
    }
}
export function setOpacityPage(value) {
    return {
        type: SET_OPACITY_PAGE,
        payload: value
    }
}
export function creatFunnel() {
    return {
        type: CREAT_FUNNEL,
    }
}
export function updateFunnel() {
    return {
        type: '[funnel] UPDATE_FUNNEL',
    }
}
export function getAllFunnel() {
    return {
        type: '[funnel] GET_ALL_FUNNELS'
    }
}
export function getUid() {
    return {
        type: '[user] GET_UID_BY_USER_NAME',
    }
}
export function setUid(nId) {
    return {
        type: '[user] SET_USER_ID',
        payload: nId
    }
}
export function getFunnel() {
    return {
        type: '[user] GET_FUNNEL'
    }
}
export function setNamePage(value) {
    return {
        type: '[funnel] SET_NAME_PAGE',
        payload: value
    }
}
export function setStyleImage(ob) {
    return {
        type: '[funnel] SET_STYLE_IMAGE',
        payload: ob
    }
}
export function removeFunnel(value) {
    return {
        type: '[funnel] REMOVE_FUNNEL',
        payload: value
    }
}
export function setHrefButton(value) {
    return {
        type: '[funnel] SET_HREF_BUTTON',
        payload: value
    }
}
export function setAllFunnels(value) {
    return {
        type: '[funnel] SET_ALL_FUNNELS',
        payload: value
    }
}
export function setFlagAllFunnnels() {
    return {
        type: '[funnel] SET_FLAG_ALL_FUNNELS'
    }
}
export function uploadFile(file) {
    return {
        type: '[funnel] UPLOAD_FILE',
        payload: file
    }
}
export function setOrderSection(new_index, old_index) {
    return {
        type: '[funnel] SET_ORDER_SECTION',
        new_index: new_index,
        old_index: old_index
    }

}
export function save(file) {
    return {
        type: '[funnel] SAVE_OR_UPDATE',
        payload: file
    }
}
export function updateFunnel1(file) {
    return {
        type: '[funnel] UPDATING_FUNNEL1',
        payload: file
    }
}
export function setIdFunnel(id) {
    return {
        type: '[funnel] SET_ID_FUNNEL',
        payload: id
    }
}
export function changeLoading(){
    return{
        type:'[funnel] CHANE_LOADING',
     
    }
}
// export function addSectionInIframe(newSection){
//     return{
//         type:'[funnel] ADD_SECTION_IN_IFRAME',
//         payload:newSection
     
//     }
// }
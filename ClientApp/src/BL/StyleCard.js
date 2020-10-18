import $ from 'jquery'

export function onChangeHandlerImage(event, changeUrlFunc, elementId) {
    let reader = new FileReader();
    if (event != null) {
        reader.onloadend = () => {
            var url = reader.result;
            console.log(reader.result)
            changeUrlFunc(`transparent url(${url}) center no-repeat padding-box`);
            $(elementId).css("background-size", "cover");
        }
        reader.readAsDataURL(event)
    }

}

export function openfileDialog(loadId, openVcardStyle = null) {
    $(loadId).click((event) => { event.stopPropagation(); });
    $(loadId).click();
    if (openVcardStyle)
        openVcardStyle();
}
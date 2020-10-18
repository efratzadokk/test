import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import '../../Css/helpComponentCss/IconCard.css'
import { useEffect } from 'react';

const mapStateToProps = (state) => {
    return {
        screenSize: state.card.screenSize
    };
}


export default connect(mapStateToProps)(function IconCard(props) {

    const { title, background, iconShap, icon, titleColor, screenSize } = props;


    function getColorIcon() {
        for (var i = 0; i < document.getElementsByClassName("j").length; i++)
            document.getElementsByClassName("j")[i].children[0].setAttribute("fill", background);
    }
    
    useEffect(function () {
        getColorIcon();
    }, [background]);

    

    return (
        <div className="container-fluid">
            {/* iconContactDesktop */}
            <div className={screenSize === 0 ? "row iconContact  d-flex align-items-center justify-content-center" :
                "row iconContactDesktop  d-flex align-items-center justify-content-center"}
                style={{
                    borderColor: background,
                    borderRadius: iconShap,
                    borderWidth: "medium"
                }}
            >
                <FontAwesomeIcon icon={icon} className="j" />
            </div>
            <div className="row  d-flex justify-content-center" >
                <label className="addiconContact text-center" style={{ color: titleColor }} hidden={screenSize === 0 ? false : true}>{title ? title : "Icon"}</label>
            </div>
        </div>
    );

});



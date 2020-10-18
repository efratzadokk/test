import React from "react";
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom'
import { Redirect, withRouter } from 'react-router-dom'
import { useEffect } from 'react';
import $ from 'jquery'
import Card from './Card'

import '../Css/Nav.css'

const mapStateToProps = (state) => {
    return {
        currentCard: state.card.currentCard
    };
}

export default withRouter(connect(mapStateToProps)(function CardHook(props) {
    const { currentCard} = props;
    let match = useRouteMatch();
    const allChildProps = { match };

    useEffect(function () {
        $("#agent").css("background-size", "cover");
        $("#agentDesktop").css("background-size", "cover");
        $("#iconAgent").css("background-size", "cover");
        $("#picAgent").css("background-size", "cover");
    }, [currentCard]);
   
    if (currentCard.agentDetails.fullName === "") {
        return <Redirect to={{ pathname: '/' }} />
    }
    return (
        <Card {...allChildProps}></Card>
    );
}));

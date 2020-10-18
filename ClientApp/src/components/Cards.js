import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { actions } from '../Redux/actions/Action';
import { createNewCard } from '../BL/NewCard'

import '../Css/Cards.css'
import '../custom.css'


class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div className="container-fluid h-25 " >
                <div className="row h-100 m-2">
                    <div className="col-2 d-flex flex-column">
                        <button className=" add_new_button text-center d-flex align-items-center justify-content-center border rounded-0"
                         onClick={() => this.props.createNewCard(createNewCard())}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16">
                                <g fill="#FFFF"><path d="M1.143,38.286H6.286V33.143A1.143,1.143,0,0,1,7.429,32H8.571a1.143,1.143,0,0,1,1.143,1.143v5.143h5.143A1.143,1.143,0,0,1,16,39.429v1.143a1.143,1.143,0,0,1-1.143,1.143H9.714v5.143A1.143,1.143,0,0,1,8.571,48H7.429a1.143,1.143,0,0,1-1.143-1.143V41.714H1.143A1.143,1.143,0,0,1,0,40.571V39.429A1.143,1.143,0,0,1,1.143,38.286Z" transform="translate(0 -32)" /></g></svg>
                        </button>
                        <label className="text-center">
                            Add New
                        </label>
                    </div>
                    {
                        this.props.cards ?
                            this.props.cards.map((card, i) => {
                                return <Link key={i} to="/card" className="col-2 d-flex flex-column align-items-stretch">
                                    <button   style={{background:card.vCardStyle.coverImg,backgroundSize:"cover",opacity:"0.5"}}
                                        className="  card_button text-center d-flex align-items-center justify-content-center border rounded-0"
                                        onClick={() => this.props.fillCurrentCard(i)}
                                    > <div className="rounded-circle h-50 w-50 border border-dark" style={{background:card.vCardStyle.logoImg,backgroundSize:"cover"}}></div></button>
                                    <label className="text-center">
                                        Card {i + 1}
                                    </label>
                                </Link>
                            }) : ""
                    }
                </div>

                
            </div >

        );
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.card.cards
    };
}

const mapDispatchToProps = (dispatch) => ({

    fillCurrentCard: (index) => dispatch(actions.setCard(index)),

    createNewCard:(newCard)=>dispatch(actions.setNewCard(newCard))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards);






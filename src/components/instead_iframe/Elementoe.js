
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import Frame from 'react-styled-frame';
import styled, { css } from 'styled-components';
import { actions } from '../../redux/actions/action'
import { mobile, tab, desktop } from './devices'





const initialContent = `
<!DOCTYPE html>
<html >
  <head>
  
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
    crossorigin="anonymous"
  />
 
  <style>
  body, html { 
    width: 100%;
    height: 100%;
    padding: 0 !important;
    margin: 0 !important;
}
  .mount,
  .frame-content,
  .div-component {
    height:100%;
  } 
*::-webkit-scrollbar {
  width: 0em;
}
</style>
  </head>
  <body>
    <div class="mount"></div>
  </body>
</html>
`;

class Emulator extends Component {
    static propTypes = {
        url: PropTypes.string,
        children: PropTypes.element,
    };


    renderFrameComponent = ({ children }) => {
        return (
            <Elementor
                {...this.state}
                {...this.props}
            >
                <ElementorFrame
                    {...this.state}
                    initialContent={initialContent}
                >
                    {children}
                </ElementorFrame>
            </Elementor>
        );
    }
    // }

    render() {
        return (
            <Container>
                <ElementorContainer>
                    {(this.renderFrameComponent(this.prop))}

                </ElementorContainer>

            </Container>

        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    setScreenSizeStatuse: (status) => dispatch(actions.setScreenSizeStatuse(status)),
    setOpenRightNav: (status) => dispatch(actions.setOpenRightNav(status)),
    setScreenSize: (size) => dispatch(actions.setScreenSize(size)),
    setView: (status) => dispatch(actions.setView(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(Emulator)

const Container = styled.div`
height:100%;
width:100%;
display:flex;
justify-content: space-between;
background: #f8f9fa;
`;

const ElementorContainer = styled.div`
width:100%;
display:flex;
justify-content: center;
background: #FFFFFF;
overflow: auto;
`;






const Elementor = styled.div`
height: ${props => (props.frame.screenSizeStatuse === 2 && '97%') ||
        (props.frame.screenSizeStatuse === 1 && '1024px') || '100%'
    };
width: ${props => (props.frame.screenSizeStatuse === 2 && '43vh') ||
        (props.frame.screenSizeStatuse === 1 && '768px') || '100%'
    };
 
border:${props => (props.frame.screenSizeStatuse === 0 ? 'none' : '10px solid #f1f2f3')};
border-top-width: 50px;
border-bottom-width: 50px;
border-radius:${props => (props.frame.screenSizeStatuse === 0 ? '0px' : '50px')};
overflow: hidden;
 box-shadow: 0 3px 6px rgb(0 0 0 / 96%);
`;

const ElementorFrame = styled(Frame)`
width:100%;
height: 100%;
position: relative;
border: none
`;
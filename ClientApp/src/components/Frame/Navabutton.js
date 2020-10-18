import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Cards from '../Cards'
import '../../Css/Nav.css'
import '../../Css/Fram/NavButton.css'



export default function NavButton(props) {
    const { titleNavButton } = props
    return (
        <div className="container d-flex align-items-center justify-contant-center">
            <div className="row d-flex justify-content-center">
                <PopupState className="row d-flex justify-content-center" variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                        <div>
                            <Button className="col  d-flex justify-content-center m-0 p-0"{...bindTrigger(popupState)}>
                                {titleNavButton}
                                <ExpandMoreSharpIcon></ExpandMoreSharpIcon>
                            </Button>
                            <Popover style={{ marginTop: "50px", zIndex: "1" }}
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Box p={2} style={{ width: "70vw", overflowX: "auto" }} >
                                    <Typography component={'span'}>
                                        <Cards></Cards>
                                    </Typography>
                                </Box>
                            </Popover>
                        </div>
                    )}
                </PopupState>

                <div className="col">
                    <FontAwesomeIcon icon={'chevron-down'} className="icon"></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};



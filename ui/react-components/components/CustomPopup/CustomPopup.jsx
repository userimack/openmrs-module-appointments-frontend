import Popup from "reactjs-popup";
import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import {customPopup} from './CustomPopup.module.scss';

const CustomPopup = props => {

    const {triggerComponent, popupContent} = props;

    const contentStyle = {
        width: "470px",
    };

    return (
        <Popup className={classNames(customPopup, 'popup-overlay')}
            trigger={triggerComponent}
            contentStyle={contentStyle}
            closeOnDocumentClick
            closeOnEscape
            modal>
            {
                close => (React.cloneElement(popupContent, {close: close}))
            }
        </Popup>
    );
};

CustomPopup.propTypes = {
    triggerComponent: PropTypes.object.isRequired,
    popupContent: PropTypes.object.isRequired
};

export default CustomPopup;
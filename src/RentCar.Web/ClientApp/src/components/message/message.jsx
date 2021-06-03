import React from 'react';
import { inject, observer } from 'mobx-react';
import Enums from '../../utils/helpers/enums';
import './message.css';

export const Message = inject('RootStore')(observer(({ RootStore }) => {

    let timeOut;

    const getIconClass = () => {
        switch (RootStore.messageStore.messageType) {
            case Enums.eventTypesForBus.success:
                return "check";
            case Enums.eventTypesForBus.error:
                return "exclamation"
            default:
                return "exclamation"
        }
    }

    const renderMessage = () => {
        if (RootStore.messageStore.showMessage) {
            timeOut = setTimeout(() => RootStore.messageStore.setShowMessage(false), 5000);

            return <div className={`system-message system-${RootStore.messageStore.messageType}-message`}>
                <div className={`system-${RootStore.messageStore.messageType}-message-first-section`}>
                    <i className={`fas-fa-${getIconClass()}`}></i>
                </div>
                <button className="system-message-text">
                    {RootStore.messageStore.messageText}
                </button>
                <div className="system-message-last-section">
                    <i onClick={onclickHideMessage} className="fas fa-times system-message-icon"></i>
                </div>
            </div>
        }
    };

    const onclickHideMessage = () => {
        RootStore.messageStore.setShowMessage(false);
        if (timeOut !== undefined) {
            clearTimeout(timeOut)
        }
    }

    return (
        <>
            {RootStore.messageStore.showMessage ? renderMessage() : null}
        </>
    )
}))

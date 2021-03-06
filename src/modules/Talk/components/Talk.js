import React from 'react';
import PropTypes from 'prop-types';

import Looking from './Looking';
import ListenerFound from './ListenerFound';
import RoomReady from './RoomReady';
import ListenerNotFound from './ListenerNotFound';
import PopupBlocked from 'components/PopupBlocked';

const Talk = (props) => {
  const styles = require('./Talk.scss');
  return (
    <div className={styles.talk}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            {props.pipeline === 'looking' ? <Looking /> : null}
            {props.pipeline === 'listenerFound' ? <ListenerFound /> : null}
            {props.pipeline === 'roomReady' ? <RoomReady /> : null}
            {props.pipeline === 'listenerNotFound' ? <ListenerNotFound startSearch={props.startSearch} totalListeners={props.totalListeners} /> : null}
            {props.pipeline === 'popupBlocked' ? <PopupBlocked openWindow={props.openRoom} /> : null}
          </div>
        </div>
      </div>
    </div>
  )
};

Talk.propTypes = {
  pipeline: PropTypes.string.isRequired,
  totalListeners: PropTypes.number
}

export default Talk;

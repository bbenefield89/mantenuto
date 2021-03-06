/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RemoteVideoPlaceholder from './RemoteVideoPlaceholder';

const Video = (props) => {
  const styles = require('./Video.scss');

  const attachLocalStream = (element) => {
    if(element) {
      element.srcObject = props.localStream
    }
  }

  const attachRemoteStream = (element) => {
    if(element) {
      element.srcObject = props.remoteStream
    }
  }

  const localVideoOn = () => {
    if(!props.localStream) {
      return false;
    }
    // TODO: put this is redux state
    // no reason for this logic here
    if(props.localStream.getVideoTracks().length === 0) {
      return false;
    }
    return true;
  }

  const { callStarted, callAccepted, connectionState, callInProgress } = props;

  return (
    <div className={`embed-responsive embed-responsive-4by3 ${styles.embedResponsive} ${callInProgress ? styles.glow : ''}`}>
      {callStarted || callAccepted ?
        <div className={styles.CallState}>
          {callStarted ? <span>... <i className='fa fa-volume-control-phone fa-3x' /></span>: null }
          {callAccepted ? 'You are connected!' : null }
        </div> : null
      }
      <div className='embed-responsive-item'>
        {props.remoteVideo ? <video ref={attachRemoteStream} autoPlay /> : <RemoteVideoPlaceholder />}
      </div>
      <div className={`${styles.LocalPlayer}`}>
        <video ref={attachLocalStream} autoPlay muted />
        {/* <video src={props.localStream} autoPlay muted /> */}
        {!localVideoOn() ? <i className='fa fa-5x fa-user' /> : null}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const {
    callInProgress,
    localStream,
    remoteStream,
    // remoteAudio, TODO: indicator that remote audio is on?
    remoteVideo
  } = state.calls;
  return {
    localStream,
    remoteStream,
    remoteVideo,
    callInProgress
  }
};

export default connect(mapStateToProps)(Video);

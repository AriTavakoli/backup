import React from 'react';
import ShareLargeIcon from '../../ShareLargeicon';
const getResizeDirection = require('./util/getResizeDirection');
const updateResizeState = require('./util/updateResizeState');
const updateCursorState = require('./util/updateCursorState');



export default class DraggableV2 extends React.Component {

  constructor(props) {
    super(props);

    this.ref = React.createRef(null);



    this.state = {


      windowed: false,

      isDragging: false,
      isResizing: false,

      aspectRatio: true,

      aspectRatioDimensions: 1,

      cursor: 'default',

      resize: {
        left: false,
        right: false,
        top: false,
        bottom: false,
        topleft: false,
        topright: false,
        bottomleft: false,
        bottomright: false,
      },

      originalX: 0,
      originalY: 0,

      translateX: 0,
      translateY: 0,

      lastTranslateX: 0,
      lastTranslateY: 0,

      width: 250,
      height: 250,

    };
  }


  componentDidMount() {

    window.addEventListener('mousemove', this.handleMouseOver);
    window.addEventListener('mousedown', this.handleMouseDown);
  }


  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseOver = ({ clientX, clientY }) => {

    this.setState(prevState => updateCursorState(this.ref, clientX, clientY));

  }



  handleMouseDown = ({ clientX, clientY }) => {

    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    const boundingRect = this.ref.current.getBoundingClientRect();




    this.ref.current.style.pointerEvents = 'none';



    //check if the current ClientX and ClientY are within the bounds of the element
    if (!(clientX > boundingRect.left && clientX < boundingRect.right && clientY > boundingRect.top && clientY < boundingRect.bottom)) {
      return;
    }




    const resizeDirection = getResizeDirection(this.ref, clientX, clientY);

    this.setState({
      isDragging: false,
      isResizing: resizeDirection.isResizing,
      resize: resizeDirection.resize,
    });

    // this.ref.current.style.position = 'absolute';



    if (this.props.onDragStart) {
      this.props.onDragStart();
    }

    this.setState(prevState => ({
      ...prevState,
      originalX: clientX,
      originalY: clientY,
      isDragging: true

    }));



  };




  handleWindowState = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      windowed: !prevState.windowed
    }));
  }


  handleMouseMove = ({ clientX, clientY, movementX, movementY }) => {
    const { isDragging, isResizing } = this.state;
    const { onDrag } = this.props;
    const { left, right, bottom, top } = this.state.resize;
    const { aspectRatio, aspectRatioDimensions } = this.state;

    // console.log(this.ref.current.style);

    const ratio = window.devicePixelRatio;

    if (isResizing) {

      this.setState(prevState => updateResizeState(this.ref, clientX, clientY, movementX, movementY, prevState, ratio, prevState.aspectRatio, prevState.aspectRatioDimensions));
      return;

    }

    if (!isDragging) {
      return;
    }


    if (isDragging) {
      this.setState(prevState => ({
        translateX: clientX - prevState.originalX + prevState.lastTranslateX,
        translateY: clientY - prevState.originalY + prevState.lastTranslateY
      }));
    };

  }

  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);



    this.ref.current.style.pointerEvents = 'auto';

    // this.ref.current.style.width = '50px';
    // this.ref.current.style.height = '50px';
    // this.ref.current.style.position = 'relative';
    this.setState(prevState => (
      {
        ...prevState,
        originalX: 0,
        originalY: 0,
        lastTranslateX: this.state.translateX,
        lastTranslateY: this.state.translateY,

        isDragging: false,
        isResizing: false,
        resize: {
          left: false,
          right: false,
          top: false,
          bottom: false
        },
        cursor: 'default'
      })
    );
  };




  render() {
    const { children } = this.props;
    const { translateX, translateY, isDragging, width, cursor, height, windowed } = this.state;

    <ShareLargeIcon></ShareLargeIcon>

    return (
      <>


        <div
          ref={this.ref}
          onMouseDown={this.handleMouseDown}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}

          style={{
            backgroundColor: 'rgb(64,64,64)',
            width: windowed ? `${width}px` : '100%',
            height: `${height}px`,
            cursor: `${cursor}`,
            transform: `translate(${translateX}px, ${translateY}px)`,
            opacity: isDragging ? 0.8 : 1,
            position: windowed ? 'fixed' : 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',

          }}
        >
          <div className="panelmover" style={{ width: '100%', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(43,43,43)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
          </div>

          {children}

        </div>
      </>



    );
  }
}

import React from 'react';
const getResizeDirection = require('./util/getResizeDirection');
const updateResizeState = require('./util/updateResizeState');
const updateCursorState = require('./util/updateCursorState');


export default class DraggableV2 extends React.Component {

  constructor(props) {
    super(props);

    this.ref = React.createRef(null);

    this.state = {
      isDragging: false,
      isResizing: false,

      aspectRatio: true,

      aspectRatioDimensions: 1,

      cursor: 'default',

      resize: {
        left: false,
        right: false,
        top: false,
        bottom: false
      },

      originalX: 0,
      originalY: 0,

      translateX: 0,
      translateY: 0,

      lastTranslateX: 0,
      lastTranslateY: 0,

      width: 50,
      height: 50,

    };
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

    const resizeDirection = getResizeDirection(this.ref, clientX, clientY);

    this.setState({
      isDragging: false,
      isResizing: resizeDirection.isResizing,
      resize: resizeDirection.resize,
    });



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

  handleMouseMove = ({ clientX, clientY, movementX, movementY }) => {
    const { isDragging, isResizing } = this.state;
    const { onDrag } = this.props;
    const { left, right, bottom } = this.state.resize;
    const { aspectRatio, aspectRatioDimensions } = this.state;
    console.log('movementX', movementX);



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

      }), () => {
        if (onDrag) {
          onDrag({
            translateX: this.state.translateX,
            translateY: this.state.translateY
          });
        }
      });
    };

  }

  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

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
      }),
      () => {
        if (this.props.onDragEnd) {
          this.props.onDragEnd();
        }
      }
    );
  };



  render() {
    const { children } = this.props;
    const { translateX, translateY, isDragging, width, cursor, height } = this.state;

    return (
      <div
        ref={this.ref}
        onMouseDown={this.handleMouseDown}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}

        style={{
          backgroundColor: 'red',
          position: 'relative',
          width: `${width}px`,
          height: `${height}px`,
          cursor: `${cursor}`,
          transform: `translate(${translateX}px, ${translateY}px)`,
          opacity: isDragging ? 0.8 : 1,
          // transition: 'transform 250ms, opacity 250ms'
        }}
      >
        {children}
      </div>
    );
  }
}

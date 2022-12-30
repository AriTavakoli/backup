import React from 'react';
import { getDragClass } from './util';
const getResizeDirection = require('./ResizeDirection');

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
    switch (true) {

      case Math.abs(this.ref.current.getBoundingClientRect().left - clientX) <= 15:
        console.log('left');
        this.setState(prevState => ({
          ...prevState,
          cursor: 'w-resize',
        }))
        return;
      case Math.abs(this.ref.current.getBoundingClientRect().right - clientX) <= 15:
        console.log('right');
        this.setState(prevState => ({
          ...prevState,
          cursor: 'w-resize',
        }))
        return

      case Math.abs(this.ref.current.getBoundingClientRect().bottom - clientY) <= 15:
        console.log('bottom');
        this.setState(prevState => ({
          ...prevState,
          cursor: 'ns-resize',
        }))
        return;
      default:
        this.setState(prevState => ({
          ...prevState,
          cursor: 'grab',
        }))
    }
  }

  handleMouseOut = () => {
    this.setState({
      ...this.state,
      cursor: 'default'
    })
  }



  handleMouseDown = ({ clientX, clientY }) => {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    //TODO::

    console.log();
    // if (Math.abs(this.ref.current.getBoundingClientRect().left - clientX) <= 15 &&
    //   Math.abs(this.ref.current.getBoundingClientRect().bottom - clientY) <= 15) {
    //   this.setState({
    //     ...this.state,
    //     isDragging: false,
    //     isResizing: true,
    //     resize: {
    //       left: true,
    //       bottom: true,
    //     }
    //   })
    //   return;
    // }

    // if (Math.abs(this.ref.current.getBoundingClientRect().right - clientX) <= 15 &&
    //   Math.abs(this.ref.current.getBoundingClientRect().bottom - clientY) <= 15) {
    //   this.setState({
    //     ...this.state,
    //     isDragging: false,
    //     isResizing: true,
    //     resize: {
    //       right: true,
    //       bottom: true,
    //     }
    //   })
    //   return;
    // }



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

      switch (true) {

        case left && bottom:

          if (aspectRatio) {
            console.log('left bottom');
            this.setState(prevState => ({
              ...prevState,
              cursor: 'w-resize',
              width: prevState.width - (clientX - this.ref.current.getBoundingClientRect().left),
              translateX: prevState.translateX + (clientX - this.ref.current.getBoundingClientRect().left),
              height: prevState.width - (clientX - this.ref.current.getBoundingClientRect().left) * aspectRatioDimensions
            }))
            return;
          } else {
            console.log('left bottom');
            this.setState(prevState => ({
              ...prevState,
              cursor: 'w-resize',
              width: prevState.width - (clientX - this.ref.current.getBoundingClientRect().left),
              translateX: prevState.translateX + (clientX - this.ref.current.getBoundingClientRect().left),
              height: prevState.height + movementY / ratio
            }))
          }
          return;
        case right && bottom:
          console.log('right bottom');
          if (aspectRatio) {
            this.setState(prevState => ({
              ...prevState,
              cursor: 'w-resize',
              width: prevState.width + movementX / ratio,
              height: prevState.width + movementX / ratio * aspectRatioDimensions
            }))
          } else {
            this.setState(prevState => ({
              ...prevState,
              cursor: 'w-resize',
              width: prevState.width + movementX / ratio,
              height: prevState.height + movementY / ratio
            }))
          }
          return;
        case left:
          console.log('left');
          this.setState(prevState => ({
            ...prevState,
            cursor: 'w-resize',
            width: prevState.width - (clientX - this.ref.current.getBoundingClientRect().left),
            translateX: prevState.translateX + (clientX - this.ref.current.getBoundingClientRect().left)
          }))
          return;

        case right:
          console.log('right');
          this.setState(prevState => ({
            ...prevState,
            cursor: 'w-resize',
            width: prevState.width + movementX / ratio
          }))
          return

        case bottom:
          console.log('bottom');
          this.setState(prevState => ({
            ...prevState,
            cursor: 'ns-resize',
            height: prevState.height + movementY / ratio
          }))
          return;

        default:
          console.log('default');
      }
    }




    if (!isDragging) {
      return;
    }



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

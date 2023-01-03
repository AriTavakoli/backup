
const updateResizeState = (ref, clientX, clientY, movementX, movementY, state, ratio, aspectRatio, aspectRatioDimensions) => {
  const { left, right, bottom, top } = state.resize;


  switch (true) {
    case left && bottom:
      if (aspectRatio) {
        return {
          ...state,
          cursor: 'w-resize',
          width: state.width - (clientX - ref.current.getBoundingClientRect().left),
          translateX: state.translateX + (clientX - ref.current.getBoundingClientRect().left),
          height: state.width - (clientX - ref.current.getBoundingClientRect().left) * aspectRatioDimensions,
        };
      } else {
        return {
          ...state,
          cursor: 'w-resize',
          width: state.width - (clientX - ref.current.getBoundingClientRect().left),
          translateX: state.translateX + (clientX - ref.current.getBoundingClientRect().left),
          height: state.height + movementY / ratio,
        };
      }

    case right && bottom:
      if (aspectRatio) {
        return {
          ...state,
          cursor: 'w-resize',
          width: state.width + movementX / ratio,
          height: state.width + movementX / ratio * aspectRatioDimensions,
        };
      } else {
        return {
          ...state,
          cursor: 'w-resize',
          width: state.width + movementX / ratio,
          height: state.height + movementY / ratio,
        };
      }

    case left:
      return {
        ...state,
        cursor: 'w-resize',
        width: state.width - (clientX - ref.current.getBoundingClientRect().left),
        // translateX: state.translateX + (clientX - ref.current.getBoundingClientRect().left),
      };

    case right:
      return {
        ...state,
        cursor: 'w-resize',
        width: state.width + movementX / ratio,
      };

    case bottom:
      return {
        ...state,
        cursor: 'ns-resize',
        height: state.height + movementY / ratio,
      };
    default:

      return state;
  }
};

module.exports = updateResizeState;

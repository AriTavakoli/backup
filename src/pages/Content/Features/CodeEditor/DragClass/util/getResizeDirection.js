const getResizeDirection = (ref, clientX, clientY) => {
  let isResizing = false;
  let resize = {};

  switch (true) {
    //bottom left corner boundary
    case Math.abs(ref.current.getBoundingClientRect().left - clientX) <= 15 &&
      Math.abs(ref.current.getBoundingClientRect().bottom - clientY) <= 15:
      isResizing = true;
      resize = {
        left: true,
        bottom: true,
      };
      break;
    //bottom right corner boundary
    case Math.abs(ref.current.getBoundingClientRect().right - clientX) <= 15 &&
      Math.abs(ref.current.getBoundingClientRect().bottom - clientY) <= 15:
      isResizing = true;
      resize = {
        right: true,
        bottom: true,
      };
      break;
    // top left corner boundary
    case Math.abs(ref.current.getBoundingClientRect().left - clientX) <= 15:
      isResizing = true;
      resize = {
        left: true,
      };
      break;
    // top right corner boundary
    case Math.abs(ref.current.getBoundingClientRect().right - clientX) <= 15:
      isResizing = true;
      resize = {
        right: true,
      };
      break;
    // bottom boundary
    case Math.abs(ref.current.getBoundingClientRect().bottom - clientY) <= 15:
      isResizing = true;
      resize = {
        bottom: true,
      };
      break;

    default:
    // Do nothing
  }

  return {
    isResizing,
    resize,
  };
}

module.exports = getResizeDirection;

const updateCursorState = (ref, clientX, clientY) => {
  switch (true) {

    case Math.abs(ref.current.getBoundingClientRect().left - clientX) <= 15 && Math.abs(ref.current.getBoundingClientRect().bottom - clientY) <= 15:
      return {
        cursor: 'nesw-resize',
      };


    case Math.abs(ref.current.getBoundingClientRect().left - clientX) <= 15 && Math.abs(ref.current.getBoundingClientRect().top - clientY) <= 15:
      return {
        cursor: 'nwse-resize',
      };
      


    case Math.abs(ref.current.getBoundingClientRect().right - clientX) <= 15 && Math.abs(ref.current.getBoundingClientRect().bottom - clientY) <= 15:
      return {
        cursor: 'nwse-resize',
      };


    case Math.abs(ref.current.getBoundingClientRect().left - clientX) <= 15:
      return {
        cursor: 'w-resize',
      };
    case Math.abs(ref.current.getBoundingClientRect().right - clientX) <= 15:
      return {
        cursor: 'w-resize',
      };
    case Math.abs(ref.current.getBoundingClientRect().bottom - clientY) <= 15:
      return {
        cursor: 'ns-resize',
      };
    default:
      return {
        cursor: 'grab',
      };
  }
};

module.exports = updateCursorState;

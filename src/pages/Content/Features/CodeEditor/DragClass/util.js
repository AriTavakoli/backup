module.exports = {
  isWithinLeftBottomBoundary: function (ref, clientX, clientY) {
    if (Math.abs(ref.current.getBoundingClientRect().left - clientX) <= 15 &&
      Math.abs(ref.current.getBoundingClientRect().bottom - clientY) <= 15) {
      return true;
    }
    return false;
  }
}

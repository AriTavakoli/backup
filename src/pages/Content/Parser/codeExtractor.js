export default class CodeExtractor {






  mutationObserverElementWithSelector(selector) {

    console.log(`Waiting for element: ${selector} -- invoked by mutationObserverElementWithSelector()`);
    return new Promise(resolve => {

      if (document.querySelector(selector)) {
        console.log('resolved', selector)
        return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver(mutations => {

        //**listen Element CODE css */
        let listenElement = document.querySelectorAll(selector)[1]

        if (listenElement) {

          //get the export modal and display none

          // console.log('resolved', listenElement.textContent)
          console.log('successfull extraction');

          resolve(listenElement);
          observer.disconnect();
        }

      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }







  async extractCss() {


    const cssContent = await this.mutationObserverElementWithSelector('code')

    console.log(`StyleSheet extraction successfully completed`);

    console.log(cssContent, 'cssContent');

    const cssContentText = cssContent.textContent
    // console.log(cssContentText, 'cssContentText');

    return cssContentText;

  }





   convertCssToJson(cssText) {
    const cssLines = cssText.split('\n');
    const cssJson = {};

    let currentClass = '';
    cssLines.forEach((line) => {
      if (line.startsWith('.')) {
        currentClass = line.substring(1, line.indexOf(' {'));
        cssJson[currentClass] = {};
      } else {
        const parts = line.split(':');
        if (parts.length === 2) {
          const key = parts[0].trim();
          const value = parts[1].trim();
          cssJson[currentClass][key] = value;
        }
      }
    });

    return cssJson;
  }







}


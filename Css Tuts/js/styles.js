const htmlString = "<h2>Hello All</h2>\n<p><span style=\"font-size: 30px;\">Testing</span></p>";

function parseStylesFromHtmlString(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString;
  const elementsWithStyles = div.querySelectorAll('*[style]');
  const styles = {};
  elementsWithStyles.forEach(element => {
    const elementStyles = element.getAttribute('style');
    styles[element.tagName] = elementStyles;
  });
  return styles;
}


console.log((parseStylesFromHtmlString(htmlString)));
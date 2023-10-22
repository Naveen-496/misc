



const htmlString =
  '<h2>Hello All</h2>\n<p><span style="font-size: 30px; color: green;">Testing</span></p>';

function parseStylesFromHtmlString(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  const elementsWithStyles = div.querySelectorAll("*[style]");
  const styles = {};
  elementsWithStyles.forEach((element) => {
    const elementStyles = element.getAttribute("style");
    styles[element.tagName] = elementStyles;
  });
  console.log(styles);
  return styles;
}

function MyComponent() {
  const section = { textContent: htmlString };
  const styles = parseStylesFromHtmlString(section.textContent);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: section.textContent }}
      style={styles["DIV"]}
    ></div>
  );
}

function Switch(props) {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
}
document.xpath = function(expression) {
  let dom = document.evaluate(
    expression,
    document,
    null,
    XPathResult.ANY_TYPE,
    null
  );
  switch (dom.resultType) {
    case 1:
      return dom.numberValue;
    case 2:
      return dom.stringValue;
    case 3:
      return dom.booleanValue;
    case 4:
    case 5:
      a = [];
      while ((e = dom.iterateNext())) {
        a.push(e);
      }
      return a;
    default:
      return dom;
  }
};

window.onload = function() {
  let fileHeaders = document.xpath(
    "//div[@class='file-header'][span[text()='Outdated']]"
  );

  for (index in fileHeaders) {
    fileHeaders[index].nextElementSibling.setAttribute("hidden", true);
    fileHeaders[index].nextElementSibling.nextElementSibling.setAttribute(
      "hidden",
      true
    );
  }
};

// external links

function externalLinks() {
  var anchors = document.getElementsByTagName('a'),
      anchor,
      i;
  for (i = 0; i < anchors.length; i++) {
    anchor = anchors[i];
    if (anchor.getAttribute('href') && anchor.getAttribute('rel') === 'external') {
      anchor.target = "_blank";
    }
  }
}

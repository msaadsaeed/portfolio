const root = document.documentElement;
const footerElementsDisplayed = getComputedStyle(root).getPropertyValue("--footer-elements-displayed");
const footerContent = document.querySelector("ul.footer-content");

root.style.setProperty("--footer-elements", footerContent.children.length);

for(let i=0; i<footerElementsDisplayed; i++) {
  footerContent.appendChild(footerContent.children[i].cloneNode(true));
}
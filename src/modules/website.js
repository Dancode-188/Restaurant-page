import { createAboutSection } from "./home";
import { createHeader } from "./header";
import { createFooter } from "./footer";

createAboutSection();
createHeader();
createFooter();

export function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createAboutSection());
  content.appendChild(createFooter());
}

export function createAboutSection() {
  const aboutSection = document.createElement("section");
  aboutSection.setAttribute("id", "about-section");
  const title = document.createElement("h2");
  title.textContent = "Eat Healthy Stay Healthy";
  title.setAttribute("id", "title")
  aboutSection.appendChild(title);

  const para = document.createElement("p");
  para.textContent =
    "Our restaurant offers guests a culinary experience with exquisite dishes crafted using high-quality ingredients in a warm and inviting ambiance. Knowledgeable and friendly staff provide suggestions and ensure an unforgettable dining experience. Come savor every moment with every dish a masterpiece.";
  para.setAttribute("id", "description");
  aboutSection.appendChild(para);

  const button = document.createElement("button");
  button.textContent = "See More";
  button.addEventListener("click", () => {
    window.location.href = "about.html";
  });
  button.setAttribute("id", "action");
  aboutSection.appendChild(button);

  return aboutSection;
}

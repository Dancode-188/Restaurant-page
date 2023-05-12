export function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = "<h4>Khanate Restaurant</h4>";

    const nav = document.createElement('nav');
    nav.innerHTML =
      "<ul><li><a href='#'>Home</a></li><li><a href='#'>Menu</a></li><li><a href='#'>Contact Us</a></li><li><a href='#'>About Us</a></li></ul>";
    header.appendChild(nav);
    return header;
}
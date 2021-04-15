$nav = document.getElementById('nav')
$hamburger = document.getElementById('hamburger')
$hidden = document.getElementById('hidden')

let bounding = $hidden.getBoundingClientRect()

if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
) {
    console.log('yes')
    if ($hidden.style.display === "none") {
        $hidden.style.display = "block";
      } else {
        $hidden.style.display = "none";
      }
} else {
    console.log('no')
    
}

let about = document.createElement('a');
about.setAttribute('href', '#about');
about.textContent = 'About';

let services = document.createElement('a');
services.setAttribute('href', '#services');
services.textContent = 'Services';

function addNav() {
    nav.insertBefore(about, nav.secondChild)
    nav.insertBefore(services, nav.secondChild)
  }

$hamburger.addEventListener('click', function() {
    addNav()
})
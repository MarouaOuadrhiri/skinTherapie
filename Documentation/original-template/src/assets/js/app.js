/*
Dermato - Dermatology & Aesthetic Clinic
Main Application Script
*/

// CSS File Import
import "../css/style.css";

// Fonts Import
import "@fontsource/aileron/300.css";
import "@fontsource/aileron/400.css";
//import "@fontsource/aileron/500.css";
import "@fontsource/aileron/600.css";
import "@fontsource/aileron/700.css";


// Preline Plugin File Import
import "preline";

import './components/gallary';
import './components/animation';
import './components/swiper';

var stickyNav = document.querySelector(".nav-sticky")

if (stickyNav) {
    window.addEventListener("scroll", function () {
        var scTop = window.pageYOffset || document.documentElement.scrollTop

        if (scTop >= 100) {
            stickyNav.classList.add("nav-sticky-on")
        } else {
            stickyNav.classList.remove("nav-sticky-on")
        }
    })
}

var mainNavbar = document.querySelector("#navbar")
if (mainNavbar) {
    window.addEventListener("scroll", function () {
        var scTop = window.pageYOffset || document.documentElement.scrollTop

        if (scTop > 20) {
            mainNavbar.classList.add("shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)]")
        } else {
            mainNavbar.classList.remove("shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)]")
        }
    })
}


document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.replace(/\/$/, "")

    document.querySelectorAll("#navbar a[href]").forEach((link) => {
        const href = link.getAttribute("href")?.replace(/\/$/, "")
        if (!href) return

        if (currentPath === href || currentPath.endsWith(href)) {
            link.classList.add("active")
        }
    })
})


document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.replace(/\/$/, "")

    document.querySelectorAll("#offcanvasSidebar ul a[href]").forEach((link) => {
        const href = link.getAttribute("href")?.replace(/\/$/, "")
        if (!href) return

        if (currentPath === href || currentPath.endsWith(href)) {
            link.classList.add("active")
        }
    })
})
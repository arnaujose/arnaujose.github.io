/*!
* Start Bootstrap - arnaujose v1.0.0 (https://arnaujose.github.io/)
* Copyright 2013-2024 Arnau José
* Licensed under CC-BY-NC-ND-4.0 (https://github.com/StartBootstrap/arnaujose/blob/master/LICENSE)
*/
//
// Scripts
//

const documentCreateElement = (tag, className = "", innerHTML = "") => {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = innerHTML;
    return element;
};

window.addEventListener("DOMContentLoaded", (event) => {
    // Navbar shrink function
    var navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector("#mainNav");

        if (!navbarCollapsible) {
            return;
        }

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Shrink the navbar
    //navbarShrink();

    // Shrink the navbar when page is scrolled
    //document.addEventListener("scroll", navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");

    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            rootMargin: "0px 0px -40%",
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");

    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );

    responsiveNavItems.map((responsiveNavItem) => {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

    // Change behaviour when the toggler is visible:
    const setLinkTargets = () => {
        const isMobileMenu =
            window.getComputedStyle(navbarToggler).display !== "none";
        responsiveNavItems.forEach((link, index) => {
            if (index === 0) return;
            link.setAttribute("target", isMobileMenu ? "_self" : "_blank");
        });
    };

    setLinkTargets();
    window.addEventListener("resize", setLinkTargets);
});

// Display news
document.addEventListener("DOMContentLoaded", () => {
    // News list
    const newsList = [
        {
            title: "Actualitzat el projecte",
            descr: "Restablert el projecte, aquest cop com a fork del tema de Bootstrap <a href='https://github.com/startbootstrap/startbootstrap-grayscale' target='_blank'>Grayscale</a>.",
            date: "15/10/2024",
            image: "",
            items: [
                "Solucionats, també, alguns errors menors relacionats amb la interfície del bloc, i afegida nova funcionalitat dinàmica (segons l'amplada del dispositiu) al menú.",
            ],
        },

        {
            title: "Nou bloc!",
            descr: "El bloc estrena nova url! Es troba, per ara, en procés de mudança des de <a href='https://arnaudev.wordpress.com'>arnaudev.wordpress.com</a>.",
            date: "13/10/2024",
            image: "",
            items: [
                "Properament s'afegiran les pàgines d'EDU i DEV, que ara es troben redirigides a l'antic bloc.",
                "El bloc és una adaptació —una branch— de la pàgina web de <a href='https://natacast.github.io/topologia/' target='_blank'>Topologia (Grau en Matemàtiques, UAB, Curs 2021/22)</a> de Natàlia Castellana.",
            ],
        },
    ];

    // Container
    const newsContainer = document.querySelector(".news-section .container");

    newsList.forEach((news) => {
        // Create an element for the news
        const itemDiv = documentCreateElement("div", "post");

        // Title
        const title = documentCreateElement("h4", "", news.title);
        itemDiv.appendChild(title);

        // Date and description
        const desc = documentCreateElement(
            "p",
            "text-black-50",
            `(${news.date}) ${news.descr}`
        );
        itemDiv.appendChild(desc);

        // Item list
        const itemList = documentCreateElement("ul", "text-black-50");

        news.items.forEach((detail) => {
            const listItem = documentCreateElement("li", "", detail);
            itemList.appendChild(listItem);
        });
        itemDiv.appendChild(itemList);

        // Add the news to the container
        newsContainer.appendChild(itemDiv);
    });
});

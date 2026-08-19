document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       HEADER
    ===================================================== */

    const header =
        document.getElementById("header");


    function updateHeader() {

        if (window.scrollY > 35) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenu =
        document.getElementById("mobileMenu");

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const menuClose =
        document.getElementById("mobileMenuClose");


    function openMenu() {

        mobileMenu.classList.add("open");

        document.body.classList.add("menu-open");

    }


    function closeMenu() {

        mobileMenu.classList.remove("open");

        document.body.classList.remove("menu-open");

    }


    menuButton.addEventListener(
        "click",
        openMenu
    );


    menuClose.addEventListener(
        "click",
        closeMenu
    );


    mobileMenu
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                closeMenu
            );

        });



    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                mobileMenu.classList.contains("open")
            ) {

                closeMenu();

            }

        }
    );



    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const id =
                        link.getAttribute("href");


                    if (
                        !id ||
                        id === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(id);


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    const headerHeight =
                        header.offsetHeight;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        headerHeight;


                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }
            );

        });



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
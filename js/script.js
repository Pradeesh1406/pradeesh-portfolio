document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       HEADER
    ===================================================== */

    const header =
        document.getElementById("header");


    function updateHeader() {

        if (!header) return;

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
       HERO TEXT ANIMATION
    ===================================================== */

    const hero =
        document.querySelector(".hero");

    const heroStatus =
        document.querySelector(".hero-status");

    const heroTitle =
        document.querySelector(".hero h1");

    const heroLower =
        document.querySelector(".hero-lower");

    const heroFooter =
        document.querySelector(".hero-footer");


    /*
       Add animation classes automatically.
       This means you don't need to change the HTML.
    */

    if (hero) {

        hero.classList.add("hero-ready");

    }


    /*
       Status animation
    */

    if (heroStatus) {

        setTimeout(function () {

            heroStatus.classList.add("hero-show");

        }, 150);

    }


    /*
       Main heading animation
    */

    if (heroTitle) {

        setTimeout(function () {

            heroTitle.classList.add("hero-show");

        }, 350);

    }


    /*
       Description + buttons
    */

    if (heroLower) {

        setTimeout(function () {

            heroLower.classList.add("hero-show");

        }, 750);

    }


    /*
       Bottom technology line
    */

    if (heroFooter) {

        setTimeout(function () {

            heroFooter.classList.add("hero-show");

        }, 1050);

    }



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

        if (!mobileMenu) return;

        mobileMenu.classList.add("open");

        document.body.classList.add("menu-open");

        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    }


    function closeMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.remove("open");

        document.body.classList.remove("menu-open");

        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            openMenu
        );

    }


    if (menuClose) {

        menuClose.addEventListener(
            "click",
            closeMenu
        );

    }


    /*
       Close menu when navigation link
       is clicked.
    */

    if (mobileMenu) {

        mobileMenu
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    closeMenu
                );

            });

    }



    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                mobileMenu &&
                mobileMenu.classList.contains("open")
            ) {

                closeMenu();

            }

        }
    );



    /* =====================================================
       CLOSE MOBILE MENU ON RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 700 &&
                mobileMenu &&
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


                    /*
                       Ignore empty "#"
                    */

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
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        headerHeight;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

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



    /* =====================================================
       PROJECT IMAGE FALLBACK
    ===================================================== */

    document
        .querySelectorAll(".project-image img")
        .forEach(function (image) {

            image.addEventListener(
                "error",
                function () {

                    image.style.display =
                        "none";

                }
            );

        });



    /* =====================================================
       BUTTON TOUCH FEEDBACK
    ===================================================== */

    document
        .querySelectorAll(
            ".button, .contact-button, .header-cta"
        )
        .forEach(function (button) {

            button.addEventListener(
                "touchstart",
                function () {

                    button.classList.add(
                        "touch-active"
                    );

                },
                {
                    passive: true
                }
            );


            button.addEventListener(
                "touchend",
                function () {

                    setTimeout(function () {

                        button.classList.remove(
                            "touch-active"
                        );

                    }, 150);

                },
                {
                    passive: true
                }
            );

        });

});
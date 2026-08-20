document.addEventListener("DOMContentLoaded", function () {


/* =====================================================
   FAQ ACCORDION + SMOOTH WORD REVEAL
===================================================== */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(function (item) {

    const question =
        item.querySelector(".faq-question");

    const answer =
        item.querySelector(".faq-answer p");


    if (!question || !answer) {
        return;
    }


    /*
       Store the original answer.
    */

    const originalText =
        answer.textContent.trim();


    /*
       Clear the original text.
    */

    answer.textContent = "";


    /*
       Split into WORDS instead of characters.

       This prevents the browser from breaking
       individual words in strange places.
    */

    const words =
        originalText.split(/\s+/);


    words.forEach(function (word, index) {

        const span =
            document.createElement("span");


        span.className =
            "faq-word";


        span.textContent =
            word;


        answer.appendChild(span);


        /*
           Add a normal space after each word.
        */

        if (index < words.length - 1) {

            answer.appendChild(
                document.createTextNode(" ")
            );

        }

    });


    /*
       Reveal words smoothly.
    */

    function writeAnswer() {

        const wordElements =
            answer.querySelectorAll(
                ".faq-word"
            );


        wordElements.forEach(function (
            word,
            index
        ) {

            setTimeout(function () {

                word.classList.add(
                    "visible"
                );

            }, index * 55);

        });

    }


    /*
       Hide words again.
    */

    function resetAnswer() {

        const wordElements =
            answer.querySelectorAll(
                ".faq-word"
            );


        wordElements.forEach(function (
            word
        ) {

            word.classList.remove(
                "visible"
            );

        });

    }


    /*
       QUESTION CLICK
    */

    question.addEventListener(
        "click",
        function () {

            const isActive =
                item.classList.contains(
                    "active"
                );


            /*
               Close every other FAQ.
            */

            faqItems.forEach(function (
                otherItem
            ) {

                if (
                    otherItem !== item
                ) {

                    otherItem.classList.remove(
                        "active"
                    );


                    const otherButton =
                        otherItem.querySelector(
                            ".faq-question"
                        );


                    if (otherButton) {

                        otherButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }


                    const otherAnswer =
                        otherItem.querySelector(
                            ".faq-answer p"
                        );


                    if (otherAnswer) {

                        otherAnswer
                            .querySelectorAll(
                                ".faq-word"
                            )
                            .forEach(function (
                                word
                            ) {

                                word.classList.remove(
                                    "visible"
                                );

                            });

                    }

                }

            });


            /*
               If already open,
               close it.
            */

            if (isActive) {

                item.classList.remove(
                    "active"
                );


                question.setAttribute(
                    "aria-expanded",
                    "false"
                );


                resetAnswer();

                return;

            }


            /*
               Open selected FAQ.
            */

            item.classList.add(
                "active"
            );


            question.setAttribute(
                "aria-expanded",
                "true"
            );


            /*
               Wait slightly for the answer
               container to begin expanding.
            */

            setTimeout(function () {

                writeAnswer();

            }, 220);

        }
    );

});


    /* =====================================================
   PREMIUM PAGE LOADER
===================================================== */

const pageLoader =
    document.getElementById("pageLoader");

const loaderBar =
    document.getElementById("loaderProgressBar");

const loaderCounter =
    document.getElementById("loaderCounter");


let loaderStart =
    performance.now();


const loaderDuration =
    1450;


let pageLoaded =
    false;


function animateLoader(timestamp) {

    if (!pageLoader) {
        return;
    }


    const elapsed =
        timestamp - loaderStart;


    let progress =
        Math.min(
            elapsed / loaderDuration,
            1
        );


    /*
       Smooth easing.

       Starts gently,
       moves faster in the middle,
       slows near 100%.
    */

    const eased =
        1 - Math.pow(1 - progress, 3);


    const percentage =
        Math.round(eased * 100);


    if (loaderBar) {

        loaderBar.style.width =
            percentage + "%";

    }


    if (loaderCounter) {

        loaderCounter.textContent =
            String(percentage).padStart(2, "0");

    }


    if (progress < 1) {

        requestAnimationFrame(
            animateLoader
        );

    } else {

        finishPageLoader();

    }

}


function finishPageLoader() {

    if (pageLoaded) {
        return;
    }


    pageLoaded = true;


    /*
       Make sure the counter reaches 100.
    */

    if (loaderBar) {

        loaderBar.style.width =
            "100%";

    }


    if (loaderCounter) {

        loaderCounter.textContent =
            "100";

    }


    /*
       Small pause after 100%
       before revealing the website.
    */

    setTimeout(function () {

        if (pageLoader) {

            pageLoader.classList.add(
                "loaded"
            );

        }

    }, 180);

}


/*
   Start animation.
*/

requestAnimationFrame(
    animateLoader
);


/*
   If the website takes longer to load,
   don't hide the loader until the page
   is actually ready.

   But never keep the client waiting
   excessively.
*/

window.addEventListener(
    "load",
    function () {

        const elapsed =
            performance.now() - loaderStart;


        if (
            elapsed >=
            loaderDuration
        ) {

            finishPageLoader();

        } else {

            const remaining =
                loaderDuration - elapsed;


            setTimeout(
                finishPageLoader,
                remaining
            );

        }

    }
);


/*
   Safety fallback.
*/

setTimeout(function () {

    finishPageLoader();

}, 10000);

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



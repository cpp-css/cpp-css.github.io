/* 
=================================
        Table of Contents
=================================
1. Global variables
2. Navigation bar color transition
3. Smooth scrolling to sections on button click
4. Mission card description on hover
5. E-board picture and description carousel
6. Events tooltip show on click
7. Parallax scrolling effects
8. Scrolling progress bar
9. Dynamic scroll indicator at bottom of screen
10. Mobile events section animations
*/

// wait until the document is fully loaded to load the javascript code
$(document).ready(function() {

    /* 
    =====================
    1. Global variables
    =====================
    */
    const homepage = document.querySelector('header');
    const navbar = document.querySelector('nav');
    const about = document.querySelector('#about');
    const mission = document.querySelector('#mission');
    const eboard = document.querySelector('#e-board');
    const projects = document.querySelector('#projects');
    const contactUs = document.querySelector('#contact-us');

    // scroll indicator at bottom of screen
    const scrollIndicatorText = document.querySelector('.scroll-indicator');
    const scrollIndicatorArrow = document.querySelector('.arrow');

    // get dimensions of user's viewport
    const viewportHeight = document.documentElement.clientHeight;
    const viewportWidth = document.documentElement.clientWidth;

    // desktop media query
    let desktop = window.matchMedia('(min-width: 768px)');

    /* 
    ====================================
    2. Navigation bar color transition
    ====================================
    */
    const homepageOptions = {
        // set the margin for when exactly the navigation bar changes color
        rootMargin: '-10px'
    };

    const navbarOnScroll = new IntersectionObserver((entries, navbarOnScroll) => {
        entries.forEach(entry => {
            // if the homepage is not on the viewport and satisfies desktop media query size
            if (!entry.isIntersecting && desktop.matches) {
                navbar.classList.add('header-scrolled');
            } 
            else {
                navbar.classList.remove('header-scrolled');
            }
        });
    }, homepageOptions);

    // event listener so navigation bar animation only occurs on desktop window sizes
    desktop.addEventListener('resize', navbarOnScroll.observe(homepage));    

    /* 
    ====================================================
    3. Smooth scrolling to sections on button click/tap
    ====================================================
    */
    const scrollButton = $('.smoothScroll');

    scrollButton.click(function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        // how much time it takes to smooth scroll in milliseconds
        }, 1500);
    });

    /* 
    ======================================
    4. Mission card description on hover
    ======================================
    */

    const cardItem = document.querySelectorAll('.card-item');

    cardItem.forEach(card => {
        // select all elements to be animated inside specific card item
        const cardTitle = card.querySelector('.card-title');
        const cardDesc = card.querySelector('.card-description');
        const cardImg = card.querySelector('.mission-image');

        // when the card item is hovered over
        card.addEventListener('mouseover', function() {
            cardTitle.classList.add('card-title-hover');
            cardDesc.classList.add('card-description-hover');
            /* check if the first card is selected because it requires different alignment to
            match other cards */
            if (cardImg.classList.contains('first-mission-image')) {
                cardImg.classList.add('first-mission-image-hover');
            }
            else {
                cardImg.classList.add('mission-image-hover');
            }
        });

        // when the cursor leaves the card item
        card.addEventListener('mouseout', function() {
            cardTitle.classList.remove('card-title-hover');
            cardDesc.classList.remove('card-description-hover');
            cardImg.classList.remove('mission-image-hover');
            /* check if the first card is selected because it requires different alignment to
            match other cards */
            if (cardImg.classList.contains('first-mission-image')) {
                cardImg.classList.remove('first-mission-image-hover');
            }
            else {
                cardImg.classList.remove('mission-image-hover');
            }
        });
    });

    /* 
    ============================================
    5. E-board picture and description carousel
    ============================================
    */

    const eboardDescContainer = document.querySelector('.e-board-description-container');
    const eboardDescriptions = document.querySelectorAll('.e-board-description');
    const eboardCarousel = document.querySelector('.e-board-gallery');
    const eboardPhotos = document.querySelectorAll('.e-board-picture');
    const leftBttn = document.querySelector('#gallery-left-button');
    const rightBttn = document.querySelector('#gallery-right-button');

    // counter and size variables for array eboardPhotos
    let counter = 0;
    const photoSize = eboardPhotos[0].clientWidth;
    const paragraphSize = eboardDescriptions[0].clientWidth;

    // event listeners to buttons
    leftBttn.addEventListener('click', ()=> {
        // stop the translation when clicking right button when user has reached the end
        if (counter >= 1) {
            // remove active class and add inactive class to the previous image and paragraph
            eboardPhotos[counter].classList.add('e-board-picture-inactive');
            eboardPhotos[counter].classList.remove('e-board-picture-active');
            eboardDescriptions[counter].classList.add('e-board-description-inactive');
            eboardDescriptions[counter].classList.remove('e-board-description-active');

            // translate to the previous picture and paragraph
            counter--;
            eboardCarousel.style.transform = `translateX(${-photoSize * counter}px)`
            eboardDescContainer.style.transform = `translateX(${-paragraphSize * counter}px)`

            /* increment counter and add the active photo class and remove the inactive class from the
            element */
            eboardPhotos[counter].classList.add('e-board-picture-active');
            eboardPhotos[counter].classList.remove('e-board-picture-inactive');
            eboardDescriptions[counter].classList.add('e-board-description-active');
            eboardDescriptions[counter].classList.remove('e-board-description-inactive');
        }
    });

    rightBttn.addEventListener('click', ()=> {

        // stop the translation when clicking right button when user has reached the end
        if (counter <= eboardPhotos.length - 2) {
            // remove active class and add inactive class to the previous image
            eboardPhotos[counter].classList.add('e-board-picture-inactive');
            eboardPhotos[counter].classList.remove('e-board-picture-active');
            eboardDescriptions[counter].classList.add('e-board-description-inactive');
            eboardDescriptions[counter].classList.remove('e-board-description-active');
            // translate to the next picture
            eboardCarousel.style.transform = `translateX(${-photoSize * (counter + 1)}px)`
            eboardDescContainer.style.transform = `translateX(${-paragraphSize * (counter + 1)}px)`


            /* increment counter and add the active photo class and remove the inactive class from the
            element */
            counter++;
            eboardPhotos[counter].classList.add('e-board-picture-active');
            eboardPhotos[counter].classList.remove('e-board-picture-inactive');
            eboardDescriptions[counter].classList.add('e-board-description-active');
            eboardDescriptions[counter].classList.remove('e-board-description-inactive');
        }
    });

    /*
    ================================
    6. Events tooltip show on click
    ================================
    */

    // eventsItemContainers = document.querySelectorAll('.events-item-container');

    // eventsItemContainers.forEach(container => {
    //     // get the text and tooltip within each events item container
    //     eventsItem = container.querySelector('.events-item');
    //     tooltip = container.querySelector('.tooltip');

    //     eventsItem.addEventListener('click', () => {

    //         // check if the item has already been clicked on
    //         if (container.classList.contains('events-item-click')) {

    //         }
    //         else {
    //             // change text color to white
    //             container.classList.add('events-item-click');

    //             // now check if the tooltip is supposed to translate above or below the event text
    //             if (tooltip.classList.contains('above-tooltip')) {
    //                 tooltip.classList.add('above-tooltip-click');
    //             }
    //         }            
    //     });
    // });

    $('.events-item').click(function() {
        eventsItem = $(this);


        // select the sibling div tooltip
        let tooltip = $(this).siblings();

        if (tooltip.hasClass('above-tooltip')) {
            // the tooltip is supposed to translate up above the text
            if (tooltip.hasClass('above-tooltip-click')) {
                // tooltip is already on screen after clicking event text
                eventsItem.css({'color':'var(--blue)'});
                tooltip.removeClass('above-tooltip-click');
            }
            else {
                // the event text has not been clicked on and tooltip is not on screen
                eventsItem.css({'color':'white'});
                tooltip.addClass('above-tooltip-click');
            }
        }
        else {
            // the tooltip is supposed to translate down below the text
            if (tooltip.hasClass('below-tooltip-click')) {
                // tooltip is already on screen after clicking event text
                eventsItem.css({'color':'var(--blue)'});
                tooltip.removeClass('below-tooltip-click');
            }
            else {
                // the event text has not been clicked on and tooltip is not on screen
                eventsItem.css({'color':'white'});
                tooltip.addClass('below-tooltip-click');
            }
        }
        
    });

    $(document).scroll(function() {

        // get current scrollbar location
        let scrollbarLocation = window.pageYOffset;

        /* 
        ===============================
        7. Parallax scrolling effects
        ===============================
        */

        /* 
        ========================
         About Section Parallax
        ========================
        */
        const aboutOffset = about.getBoundingClientRect();
        const aboutHeight = about.offsetHeight;
        const aboutTitle = document.querySelector('.about-title');
        const aboutQuestionMark = document.querySelector('.about-question-mark');
        const blueLine = document.querySelector('.blue-line');
        const aboutDesc = document.querySelector('.about-desc-wrapper');
        const typingComputer = document.querySelector('.computer');

        const aboutOptions = {
        };

        const aboutObserver = new IntersectionObserver((entries, aboutObserver) => {
            entries.forEach(entry => {
                // make sure parallax effects only occur when the scroll position is near the page
                if (entry.isIntersecting) {
                    /*  - the math below basically simplifies to making sure the parallax is most obvious only when
                    the elements are on viewport 
                    - the sign of the number being multiplied is important:
                        - negative for translating up while scrolling
                        - positive for translating down while scrolling
                    */
                    aboutTitle.style.transform = 
                            `translateY(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -150 + 150}px)`;
                    aboutDesc.style.transform = 
                            `translateY(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -100 + 100}px)`;

                    // do these animations only for desktop
                    if (desktop.matches) {
                        // translate blue line in desktop
                        blueLine.style.transform = 
                            `translateY(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -150 + 150}px)`;
                        blueLine.style.height = `${viewportHeight + scrollbarLocation * 0.1}vh`;
                        // scale the computer gif up if scroll position above section
                        if (aboutOffset.top >= 0) {
                            typingComputer.style.transform =
                                `translateX(${scrollbarLocation / (aboutOffset.top + aboutHeight) * 150 - 150}px)
                                scale(${scrollbarLocation / (aboutOffset.top + aboutHeight) * 0.5 + 0.5})`
                        }
                        /* make the computer gif smaller up until the user has scrolled past the section by 25% of their viewport
                        height */
                        else if (aboutOffset.top >= -0.75 * viewportHeight) {
                            typingComputer.style.transform =
                                `translateX(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -150 + 150}px)
                                scale(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -0.5 + 1.5})`;
                        }
                        else {
                            typingComputer.style.transform =
                                `translateX(${-250}px)
                                scale(${0.5})`
                            aboutTitle.style.transform = 'translateY(-150px)';
                            blueLine.style.transform = 'translateY(-150px)';
                            blueLine.style.height = '100vh';
                            aboutDesc.style.transform = 'translateY(-100px)';
                        }
                    }
                    // do these separate parallax effects only for mobile
                    else {
                        typingComputer.style.transform = 
                            `translateY(${scrollbarLocation / (aboutOffset.top + aboutHeight) * -150 + 150}px)`;
                    }
                }
            });
        }, aboutOptions);

        desktop.addEventListener('resize', aboutObserver.observe(about));

        /* 
        ==========================
         Mission Section Parallax
        ==========================
        */
        const missionHeight = mission.offsetHeight;
        const missionOffset = mission.getBoundingClientRect();
        const missionTitle = document.querySelector('.mission-title');
        const cardColumn1 = document.querySelector('#card-column-1');
        const cardColumn2 = document.querySelector('#card-column-2');
        const cardColumn3 = document.querySelector('#card-column-3');

        const missionOptions = {
        };

        const missionObserver = new IntersectionObserver((entries, missionObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && desktop.matches) {
                    // effects when scroll position is above the section
                    if (missionOffset.top <= viewportHeight) {
                        missionTitle.style.transform = 
                            `translateY(${scrollbarLocation / (missionOffset.top + missionHeight) * -175 + 350}px)`;
                        cardColumn1.style.transform = 
                            `translateY(${scrollbarLocation / (missionOffset.top + missionHeight) * -200 + 400}px)`;
                        cardColumn2.style.transform = 
                            `translateY(${scrollbarLocation / (missionOffset.top + missionHeight) * -150 + 300}px)`;
                        cardColumn3.style.transform = 
                            `translateY(${scrollbarLocation / (missionOffset.top + missionHeight) * -100 + 200}px)`;
                    }
                    // prevent translation of elements from disrupting page flow when viewport is not on this section
                    else if (missionOffset.top <= -1 * viewportHeight) {
                        missionTitle.style.transform = 
                            `translateY(0px)`;
                        cardColumn1.style.transform = 
                            `translateY(0px)`;
                        cardColumn2.style.transform = 
                            `translateY(0px)`;
                        cardColumn3.style.transform = 
                            `translateY(0px)`;
                    }
                }

            });
        }, missionOptions);

        desktop.addEventListener('resize', missionObserver.observe(mission));

        /* 
        ==========================
         E-board Section Parallax
        ==========================
        */

        const eboardHeight = eboard.offsetHeight;
        const eboardOffset = eboard.getBoundingClientRect();
        const eboardTitle = document.querySelector('.e-board-title');
        const eboardDesc = document.querySelector('.e-board-description');
        const eboardGallery = document.querySelector('.e-board-gallery-container');

        const eboardOptions = {
        };

        const eboardObserver = new IntersectionObserver((entries, eboardObserver) => {
            entries.forEach(entry => {
                
            });
        }, eboardOptions);

        /* 
        ==========================
        8. Scrolling progress bar
        ==========================
        */
        
        // get the percentage of the website scrolled
        // const scrolled = document.documentElement.scrollTop;
        // const height = document.documentElement.scrollHeight - viewportHeight;
        // const scrollProgress = (scrolled / height) * 100;

        // // change the width of the progress bar according to how much the user has scrolled
        // document.querySelector('.progress-bar').style.width = scrollProgress + '%';
    });

    /* 
    ================================================
    9. Dynamic scroll indicator at bottom of screen
    ================================================
    */

    // home page scroll indicator
    const homeIndicatorOptions = {
        threshold: 0.90
    };

    const homeIndicator = new IntersectionObserver((entries, homeIndicator) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // change color of scroll indicator and link to about section
                scrollIndicatorArrow.style.borderColor = 'white';
                scrollIndicatorText.style.color = 'white';
                scrollIndicatorArrow.href = '#about';
            }
        });
    }, homeIndicatorOptions);

    homeIndicator.observe(homepage);

    // about section scroll indicator
    const aboutIndicatorOptions = {
        threshold: 0.01
    };

    const aboutIndicator = new IntersectionObserver((entries, aboutIndicator) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // change styles of scroll indicator at bottom of screen
                scrollIndicatorText.style.color = 'black';
                scrollIndicatorArrow.style.borderColor = 'black';
                scrollIndicatorArrow.href = '#mission';
            }
        });
    }, aboutIndicatorOptions);

    aboutIndicator.observe(about);

    // mission section scroll indicator
    const missionIndicatorOptions = {
        threshold: 0.01
    };

    const missionIndicator = new IntersectionObserver((entries, missionIndicator) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // change link of scroll indicator at bottom of screen
                scrollIndicatorArrow.href = '#e-board';
            }
        });
    }, missionIndicatorOptions);

    missionIndicator.observe(mission);

    // e-board section scroll indicator
    const eboardIndicatorOptions = {
        threshold: 0.01
    };

    const eboardIndicator = new IntersectionObserver((entries, eboardIndicator) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // change link of scroll indicator at bottom of screen
                scrollIndicatorArrow.href = '#events';
            }
        });
    }, eboardIndicatorOptions);

    eboardIndicator.observe(eboard);

    // events section scroll indicator
    const eventsIndicatorOptions = {
        threshold: 0.01
    };

    const eventsIndicator = new IntersectionObserver((entries, eventsIndicator) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // change link and color of scroll indicator at bottom of screen
                scrollIndicatorArrow.href = '#projects';
                scrollIndicatorArrow.style.borderColor = 'white';
                scrollIndicatorText.style.color = 'white';
            }
        });
    }, eventsIndicatorOptions);

    eventsIndicator.observe(events);

    // projects section scroll indicator
    const projectsIndicatorOptions = {
        threshold: 0.01
    };

    const projectsIndicator = new IntersectionObserver((entries, projectsIndicator) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // change link and color of scroll indicator at bottom of screen
                scrollIndicatorArrow.href = '#contact-us';
            }
        });
    }, projectsIndicatorOptions);

    projectsIndicator.observe(projects);

    // contact us section scroll indicator
    const contactUsIndicatorOptions = {
        threshold: 0.01
    };

    const contactUsIndicator = new IntersectionObserver((entries, contactUsIndicator) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // make scroll indicator disappear at bottom of page
                scrollIndicatorArrow.style.opacity = '0';
                scrollIndicatorText.style.opacity = '0';
            }
            else {
                scrollIndicatorArrow.style.opacity = '1';
                scrollIndicatorText.style.opacity = '1';
            }
        });
    }, contactUsIndicatorOptions);

    contactUsIndicator.observe(contactUs);

    /* 
    =====================================
    10. Mobile events section animations
    =====================================
    */

    // all the mobile event descriptions
    const mobileCSSPI = document.querySelector('#mobile-csspi');
    const mobileWebDesign = document.querySelector('#mobile-web-design');
    const mobileSpeaker = document.querySelector('#mobile-speaker');
    const mobilereCruiter = document.querySelector('#mobile-recruiter');
    const mobileWorkshops = document.querySelector('#mobile-workshops');

    // different colors to choose from for mobile events background when clicking on events
    const recruiterColor = 'rgba(103, 121, 255, 0.8)';
    const csspiColor = 'rgba(244, 143, 143, 0.8)';
    const speakerColor = 'rgba(40, 240, 140, 0.8)';
    const workshopsColor = 'rgba(255, 177, 77, 0.8)';
    const webDesignColor = 'rgba(167, 0, 255, 0.8)';


    const mobileEventsBackground = document.querySelector('.events-mobile-background');

    const mobileEventsButtons = document.querySelectorAll('.mobile-events-button-container');

    mobileEventsButtons.forEach(button => {
        // function to run when it is clicked
        button.addEventListener('click', () => {

            // switch statement to figure out which event to display on click depending on id of button
            switch (button.id) {
                case 'first-mobile-event':
                    mobileEventsBackground.style.backgroundColor = csspiColor;
                    mobileEventsBackground.classList.add('events-mobile-background-active');
                    mobileCSSPI.classList.add('mobile-events-item-container-active');
                    break;
            }
        });
    });

});





    

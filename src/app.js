// import call to action images
import illPt1p from './img/cta-ill/cta-ill-1.png';
import illPt2p from './img/cta-ill/cta-ill-2.png';
import illPt3p from './img/cta-ill/cta-ill-3.png';
import illPt4p from './img/cta-ill/cta-ill-4.png';
import illPt5p from './img/cta-ill/cta-ill-5.png';
import illPt6p from './img/cta-ill/cta-ill-6.png';
// import exhibit images
import exStatsArt from './img/ex-stats/bulbs.jpg';
import exStatsArt2 from './img/ex-stats/bulbs2.jpg';
import exStatsArt3 from './img/ex-stats/bulbs3.jpg';

// animate on scroll library
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// -------------------------------------------------------
function home() {
    function homeContent() {
        const app = document.querySelector('main');
        // call to action section
        function callToAction() {
            // create call to action element
            const callToActionSec = document.createElement('section');
            callToActionSec.setAttribute(`class`, 'call-to-action row-sb-c nw');
            // append the call to action section
            app.appendChild(callToActionSec);
            // callToAction.setAttribute(`class`, '');

            // create call to action backdrop
            // const backdrop = document.createElement('div');
            // backdrop.setAttribute(`class`, 'backdrop');
            // backdrop.setAttribute(`data-aos`, 'fade-down');

            // create call to action content
            const ctaContent = document.createElement('div')
            ctaContent.setAttribute(`class`, 'cta-content col-fs');
            ctaContent.setAttribute(`data-aos`, 'fade-down');

            // call to action title
            const ctaTitle = document.createElement('h1')
            ctaTitle.textContent = `There's something about Art that always moves us.`;

            // call to action subtitle
            const ctaSub = document.createElement('p')
            ctaSub.textContent = 'The Winter 2019 Exhibit theme is Hodgepodge.';

            // call to action ex dates
            const ctaExDates = document.createElement('h2')
            ctaExDates.textContent = 'Exhibit Dates: Dec. 2, 2019 - Feb. 12, 2019';

            // call to action button
            const ctaButton = document.createElement('button')
            ctaButton.setAttribute(`class`, 'cta-button');
            ctaButton.textContent = 'View Exhibit';

            // append call to action content elements to the content
            ctaContent.appendChild(ctaTitle);
            ctaContent.appendChild(ctaSub);
            ctaContent.appendChild(ctaExDates);
            ctaContent.appendChild(ctaButton);

            // create call to action illustration
            const ctaIll = document.createElement('div')
            ctaIll.setAttribute(`class`, 'cta-ill nw');

            // the call to action art will be loaded in sequentially
            const illPt1 = document.createElement('img');
            illPt1.setAttribute(`data-aos`, 'fade-down');
            illPt1.setAttribute(`data-aos-delay`, '100');
            illPt1.src = illPt1p;
            const illPt2 = document.createElement('img');
            illPt2.setAttribute(`data-aos`, 'fade-down');
            illPt2.setAttribute(`data-aos-delay`, '200');
            illPt2.src = illPt2p;
            const illPt3 = document.createElement('img');
            illPt3.setAttribute(`data-aos`, 'fade-down');
            illPt3.setAttribute(`data-aos-delay`, '300');
            illPt3.src = illPt3p;
            const illPt4 = document.createElement('img');
            illPt4.setAttribute(`data-aos`, 'fade-down');
            illPt4.setAttribute(`data-aos-delay`, '400');
            illPt4.src = illPt4p;
            const illPt5 = document.createElement('img');
            illPt5.setAttribute(`data-aos`, 'fade-down');
            illPt5.setAttribute(`data-aos-delay`, '500');
            illPt5.src = illPt5p;
            const illPt6 = document.createElement('img');
            illPt6.setAttribute(`data-aos`, 'fade-down');
            illPt6.setAttribute(`data-aos-delay`, '600');
            illPt6.src = illPt6p;
            // append the illustration to its parent
            ctaIll.appendChild(illPt1);
            ctaIll.appendChild(illPt2);
            ctaIll.appendChild(illPt3);
            ctaIll.appendChild(illPt4);
            ctaIll.appendChild(illPt5);
            ctaIll.appendChild(illPt6);

            // append the main call to action elements
            // callToAction.appendChild(backdrop);
            callToActionSec.appendChild(ctaContent);
            callToActionSec.appendChild(ctaIll);
        };

        function exStats() {
            // create content area element
            const exStatsSec = document.createElement('section');
            exStatsSec.setAttribute(`class`, 'ex-stats row-sa  nw');
            // append the call to action section
            app.appendChild(exStatsSec);

            // create ex illustration section
            const exIllWrapper = document.createElement('div');
            exIllWrapper.setAttribute(`class`, 'ex-stats-art');


            // import ex illustration
            const exIll = document.createElement('img');
            exIll.src = exStatsArt;
            exIll.setAttribute(`class`, 'exIll');

            exIll.setAttribute(`data-aos`, 'fade-in');
            exIll.setAttribute(`data-aos-delay`, '100');

            const exIll2 = document.createElement('img');
            exIll2.src = exStatsArt2;
            exIll2.setAttribute(`class`, 'exIll-2');

            exIll2.setAttribute(`data-aos`, 'fade-in');
            exIll2.setAttribute(`data-aos-offset`, '400');
            exIll2.setAttribute(`data-aos-delay`, '800');
            exIll2.setAttribute(`data-aos-once`, 'false');
            exIll2.setAttribute(`data-aos-disableMutationObserver`, 'true');
            exIll2.setAttribute(`data-aos-duration`, '230');

            const exIll3 = document.createElement('img');
            exIll3.src = exStatsArt3;
            exIll3.setAttribute(`class`, 'exIll-3');

            exIll3.setAttribute(`data-aos`, 'fade-in');
            exIll3.setAttribute(`data-aos-offset`, '900');
            exIll3.setAttribute(`data-aos-delay`, '200');
            exIll3.setAttribute(`data-aos-once`, 'false');
            exIll3.setAttribute(`data-aos-disableMutationObserver`, 'true');
            exIll3.setAttribute(`data-aos-duration`, '230');

            // append the illustration to its parent
            exIllWrapper.appendChild(exIll);
            exIllWrapper.appendChild(exIll2);
            exIllWrapper.appendChild(exIll3);
            // create the exhibit stat content section
            const exStatsContent = document.createElement('div');
            exStatsContent.setAttribute(`class`, 'ex-stats-content col-c');

            // create the three main fact elements
            const fact1 = document.createElement('div');
            fact1.setAttribute(`class`, 'fact');
            fact1.setAttribute(`data-aos`, 'fade-up');
            fact1.setAttribute(`data-aos-offset`, '500');
            const fact2 = document.createElement('div');
            fact2.setAttribute(`class`, 'fact');
            fact2.setAttribute(`data-aos`, 'fade-up');
            fact2.setAttribute(`data-aos-offset`, '400');
            const fact3 = document.createElement('div');
            fact3.setAttribute(`class`, 'fact');
            fact3.setAttribute(`data-aos`, 'fade-up');
            fact3.setAttribute(`data-aos-offset`, '300');

            // fact 1 content
            const fact1Header = document.createElement('h1');
            fact1Header.textContent = `8`;
            const fact1Sub = document.createElement('h2');
            fact1Sub.textContent = `Different Showcases`;

            // fact 2 content
            const fact2Header = document.createElement('h1');
            fact2Header.textContent = `15`;
            const fact2Sub = document.createElement('h2');
            fact2Sub.textContent = `Different events`;

            // fact 2 list
            const listData = [
                'Lunch with Sea Monsters',
                `Eastern Washington fire bans`,
                'Fire smoke from Canada',
                'Pizza across the street',
                'Orange river water',
                'The four seasons of Spokane'
            ];

            const listElement = document.createElement('ul');

            // Set up a loop that goes through the items in listItems one at a time
            const numberOfListItems = listData.length;
            for (var i = 0; i < numberOfListItems; ++i) {
                // create an item for each one
                const listItem = document.createElement('li');

                listItem.setAttribute(`data-aos`, 'fade-right');
                listItem.setAttribute(`data-aos-delay`, i * 100);
                listItem.innerHTML = listData[i];
                listElement.appendChild(listItem);
            }

            // fact 3 content
            const fact3Header = document.createElement('h1');
            fact3Header.textContent = `450`;
            const fact3Sub = document.createElement('h2');
            fact3Sub.textContent = `Pieces for Sale`;

            // append fact 1
            fact1.appendChild(fact1Header);
            fact1.appendChild(fact1Sub);
            exStatsContent.appendChild(fact1);

            // append fact 2
            fact2.appendChild(fact2Header);
            fact2.appendChild(fact2Sub);
            fact2.appendChild(listElement);
            exStatsContent.appendChild(fact2);

            // append fact 3
            fact3.appendChild(fact3Header);
            fact3.appendChild(fact3Sub);
            exStatsContent.appendChild(fact3);


            exIllWrapper.appendChild(exStatsContent);
            exStatsSec.appendChild(exIllWrapper);
            exStatsSec.appendChild(exStatsContent);
        };

        function about() {
            // create content area element
            const aboutCTA = document.createElement('section');
            aboutCTA.setAttribute(`class`, 'about-cta col-c nw');
            aboutCTA.setAttribute(`data-aos`, 'fade-up');

            // append the call to action section
            app.appendChild(aboutCTA);

            // create about cta title
            const aboutCTATitle = document.createElement('h1');
            aboutCTATitle.textContent = `Learn what we're about.`;

            // call to action button
            const aboutCTAButton = document.createElement('button')
            aboutCTAButton.setAttribute(`class`, 'about-cta-button');
            aboutCTAButton.textContent = 'About Us';

            aboutCTA.appendChild(aboutCTATitle);
            aboutCTA.appendChild(aboutCTAButton);

        }
        callToAction();
        exStats();
        about();
    }
    homeContent();
}
home();
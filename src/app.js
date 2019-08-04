// import call to action images
import illPt1p from './img/cta-ill/cta-ill-1.png';
import illPt2p from './img/cta-ill/cta-ill-2.png';
import illPt3p from './img/cta-ill/cta-ill-3.png';
import illPt4p from './img/cta-ill/cta-ill-4.png';
import illPt5p from './img/cta-ill/cta-ill-5.png';
import illPt6p from './img/cta-ill/cta-ill-6.png';


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
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// -------------------------------------------------------
function home() {
    function homeContent() {
        const app = document.querySelector('main');
        // call to action section
        // create call to action element
        const callToAction = document.createElement('section');
        callToAction.setAttribute(`class`, 'call-to-action row-sa-c nw');
        // append the call to action section
        app.appendChild(callToAction);
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

        // call to action exhibit dates
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
        callToAction.appendChild(ctaContent);
        callToAction.appendChild(ctaIll);

    }
    homeContent();
}
home();
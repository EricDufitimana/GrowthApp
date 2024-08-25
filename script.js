// FAQ Javascript
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-group-all-qns');
    const openSection = faqContainer.querySelectorAll('.open');
    const allSections = faqContainer.querySelectorAll('.faq-group');
    const sectionAll = faqContainer.querySelectorAll('.faq-group.all');
    const sectionGet = faqContainer.querySelectorAll('.faq-group.get-started');
    const sectionPricing= faqContainer.querySelectorAll('.faq-group.pricing');

    const faqList = document.querySelectorAll('.faq-list li');


    
    
    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-qn-heading-icon');
        if( !groupHeader) return;
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-para');
        const icon = groupHeader.querySelector('i');

        icon.classList.toggle('fa-minus');
        icon.classList.toggle('fa-plus');

        groupBody.classList.toggle('appear');

        const otherGroups = faqContainer.querySelectorAll('.faq-qn');
        otherGroups.forEach((otherGroup) => {
            if (otherGroup != group){
                const otherGroupBody = otherGroup.querySelector('.faq-para');
                const otherIcon = otherGroup.querySelector('.faq-qn-heading-icon i');

                otherGroupBody.classList.remove('appear');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus')
            }
        } )
    })

    faqList.forEach(item => {
        item.addEventListener('click', () => {
            faqList.forEach(item => item.classList.remove('active'));

            item.classList.add('active');

            const category = item.getAttribute('data-category');
            console.log(`Selected Category: ${category}`);
            
            sectionGet.forEach(section => section.classList.remove('open'));
            sectionAll.forEach(section => section.classList.remove('open'));
            sectionPricing.forEach(section => section.classList.remove('open'));

            if(category === "get-started"){
                sectionGet.forEach(section => section.classList.add('open'));
            }
            else if(category === "pricing"){
                sectionPricing.forEach(section => section.classList.add('open'));
            }
            else if(category === "all"){
                sectionAll.forEach(section => section.classList.add('open'));
            }
        })
    })


})
document.addEventListener('DOMContentLoaded', () => {
    const menuOpen = document.querySelector('.harmburger-menu')
    const menuClose = document.querySelector('.menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuOpen.addEventListener('click', () => {
        mobileMenu.classList.add('ready');
    })
    
    menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('ready');
    })
    
})
const loaderrWrapper = document.querySelector('.loader-wrapper');
    const site = document.querySelector('.home-container')
    
    function init() {
        setTimeout(() => {
        loaderrWrapper.style.opacity = 0;
        loaderrWrapper.style.display = 'none';

        site.style.display = 'block';
        setTimeout(() => site.style.opacity = 1, 50);

    
        }, 6000);
    }
    
    init();
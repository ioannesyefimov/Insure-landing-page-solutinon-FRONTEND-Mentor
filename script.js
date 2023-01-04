const hamburgerBtn = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('.menu')
const mainContent = document.querySelector('main')
const navLinks = document.querySelector('.nav-links')


hamburgerBtn.addEventListener('click', () => {
    const menuState = navMenu.getAttribute('data-is-active') === 'false'
    const linksState = navLinks.getAttribute('data-is-active') === 'false'
    
    if((menuState && linksState) ) {
        navLinks.setAttribute('data-is-mobile', 'true')
        navMenu.setAttribute('data-is-active', 'true')
        navLinks.setAttribute('data-is-active', 'true')
        hamburgerBtn.children[0].classList.add('hidden')
        hamburgerBtn.children[1].classList.remove('hidden')
        mainContent.style.display = 'none'
    }
   else if ((menuState && linksState) === false) {
        
        navMenu.setAttribute('data-is-active', 'false')
        navLinks.setAttribute('data-is-active', 'false')
        hamburgerBtn.children[0].classList.remove('hidden')
        hamburgerBtn.children[1].classList.add('hidden')
        mainContent.style.display = 'grid'
    }
    
})

const mediaQuery = window.matchMedia('(min-width: 650px)')
function handleTabletChange(e) {
    const menuState = navMenu.getAttribute('data-is-active') === 'true'
    const linksState = navLinks.getAttribute('data-is-active') === 'false'
    if(e.matches) {
        
        navMenu.setAttribute('data-is-active', 'true');
        navLinks.setAttribute('data-is-active', 'true');
        navLinks.setAttribute('data-is-mobile', 'false')
        hamburgerBtn.children[0].classList.remove('hidden')
        hamburgerBtn.children[1].classList.add('hidden')
        if(mainContent.style.display === 'none'){
           mainContent.style.display = 'grid'
         }
     }
     else {
        navLinks.setAttribute('data-is-active', 'false')
     }
    
    
    
        

}
mediaQuery.addEventListener('change', handleTabletChange)

handleTabletChange(mediaQuery)
const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('section');
const head = document.getElementById("head");
const burgerMenu = document.getElementById("burger");
const navbar_link1 = document.getElementById("navbar1")
const navbar_link2 = document.getElementById("navbar2")
const navbar_link3 = document.getElementById("navbar3")
const navbar_link4 = document.getElementById("navbar4")

burgerMenu.addEventListener('click', ()=> {
  if(navbar_link1.style.display === 'none')
  {
      navbar_link1.style.display = 'block';
      navbar_link2.style.display = 'block';
      navbar_link3.style.display = 'block';
      navbar_link4.style.display = 'block';

  }
  else {
      navbar_link1.style.display = 'none';
      navbar_link2.style.display = 'none';
      navbar_link3.style.display = 'none';
      navbar_link4.style.display = 'none';
  }
});




  document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById("text1");
    const text1 = "Hi I'm Worameth Siriwarin";
    let index = 0;
    function typeText() {
      if (index < text1.length) {
        textContainer.textContent += text1[index];
        index++;
        setTimeout(typeText, 100); // 100ms delay between characters
      }
    }
    typeText();
  });
  document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById("text2");
    const text2 = "Computer Engineering KMUTT";
    let index = 0;
    function typeText() {
      if (index < text2.length) {
        textContainer.textContent += text2[index];
        index++;
        setTimeout(typeText, 100); // 100ms delay between characters
      }
    }
    typeText();
  });
  document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById("text3");
    const text3 = "นักศึกษาชั้นปี่ 1 ของมหาวิทยาลัยพระจอมเกล้าธนบุรี คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์";
    let index = 0;
    function typeText() {
      if (index < text3.length) {
        textContainer.textContent += text3[index];
        index++;
        setTimeout(typeText, 50); // 100ms delay between characters
      }
    }
    typeText();
  });





let currentSection = 'home';
window.addEventListener('scroll',()=>{
  
  sectionEls.forEach(sectionEl=>{
    if(window.scrollY >= sectionEl.offsetTop){
      currentSection = sectionEl.id;
      
      
    }
  });
  
  navLinkEls.forEach(navLinkEls => {
    if(navLinkEls.href.includes(currentSection)){
      document.querySelector('.active').classList.remove('active');
      navLinkEls.classList.add('active');
    }
  })
});
  
  















  
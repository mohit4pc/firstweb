const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click" , () =>{
    headerElem.classList.toggle("active");
});









const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btns");
const p_img_elem =  document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e)=>{
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);


    p_btn.forEach((curElem).curElem.classlist.remove("p-btn-active"));

    p_btn_clicked.classlist.add("p-btn-active");


    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem).curElem.classlist.add("p-btn-not-active"));

    img_active.forEach((curElem).curElem.classlist.remove("p-image-not-active")
);
});

// slider in Bottom//
var swiper = new Swiper(".mySwiper", {
    slidesPerView:2,
    spaceBetween: 30,
  autoplay: {
      delay:2500,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // animation number

  const counterNum = document.querySelectorAll(".counter-number");

  const speed = 200;
  counterNum.forEach((curElem)  => {
   const updateNumber = () => {
      const targetnumber = parseInt(curElem.dataset.number);
      // console.log(targetnumber);
      const intialNum = parseInt(curElem.innerText);
      // console.log(intialNum);

      const incrementNumber = Math.trunc(targetnumber/speed);
      console.log(incrementNumber);

      if(intialNum < targetnumber){
        curElem.innerText = `${intialNum + incrementNumber}+`;

        setTimeout(updateNumber, 5);
      }
   };
   
    updateNumber();
  });1
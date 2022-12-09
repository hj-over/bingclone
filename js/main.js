// 헤더

  // 헤더
 
  const menuBt = document.querySelectorAll(".menu-bt");
      const headerBg = document.querySelector(".header-bg");
    //   console.log(menuBt);
      const depth2Active = document.querySelectorAll(".depth2");
      
 
    menuBt.addEventListener("mouseover", function(event){

    
        // a 태그라서 웹브라우저 갱신된다
      event.preventDefault();
      menuBt.classList.add("active")
      headerBg.classList.add("active")
      depth2Active.classList.add("active")
      

   
    
      }
    );

    menuBt.addEventListener("mouseover", function (event) {
      // a 태그라서 웹브라우저 갱신된다
    event.preventDefault();
    menuBt.classList.remove("active")
    headerBg.classList.remove("active")
    depth2Active.classList.remove("active")
   

 
  
    }
  );
   
  
  // 비주얼

// 비주얼

// 슬라이더
const bingreaMat = [
  "아이스크림",
  "우유/치즈",
  "발효유",
  "커피",
  "주스",
  "음료",
  "주스",
  "스낵/디저트",
  "건강지향",
  "수출제품",
];
const viewStart = document.querySelectorAll(".view-start");
const viewMore = document.querySelectorAll(".view");
const slideNextBt = document.querySelector(".slide-inner-nextbtn");
const slidePrevBt = document.querySelector(".slide-inner-prevbtn");
const slide = document.querySelector(".slide-list");
const slideLi = document.querySelectorAll(".slide-list > li ");

//슬라이더 버튼
let slideCount = 0;

slideNextBt.addEventListener("click", () => {
  switch (slideCount) {
    case 0:
      slide.style.transform = "translateX(-270PX)";
      slideCount++;
      console.log(slideCount);
      break;
    case 1:
      slide.style.transform = "translateX(-540PX)";
      slideCount++;
      console.log(slideCount);
      break;
    case 2:
      slide.style.transform = "translateX(-820PX)";
      slideCount++;
      console.log(slideCount);
      break;
  }
});
slidePrevBt.addEventListener("click", () => {
  switch (slideCount) {
    case 3:
      slide.style.transform = "translateX(-540PX)";
      slideCount--;
      console.log(slideCount);
      break;
    case 2:
      slide.style.transform = "translateX(-270PX)";
      slideCount--;
      console.log(slideCount);
      break;
    case 1:
      slide.style.transform = "translateX(0PX)";
      slideCount--;
      console.log(slideCount);
      break;
  }
});

for (let i = 0; i < 9; i++) {
  viewStart[i].addEventListener("mouseover", () => {
    viewMore[i].innerHTML = "VIEW MORE";
  });
}
for (let i = 0; i < 9; i++) {
  viewStart[i].addEventListener("mouseout", () => {
    viewMore[i].innerHTML = bingreaMat[i];
  });
}

// 오른쪽 글로벌 버튼
const globalUpbtn = document.querySelector(".scroll-bt");

window.addEventListener("scroll", () => {
  scrollY > 200
    ? globalUpbtn.classList.add("down")
    : globalUpbtn.classList.remove("down");
});

globalUpbtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

let windowScrolly = () => {
  if (scrollY > 400) {
    slide.style.opacity = 1;
    for (let i = 0; i < 6; i++) {
      slideLi[i].style.transform = "translateY(0px)";
    }
  }
  console.log(1);
};

window.addEventListener("scroll", windowScrolly);

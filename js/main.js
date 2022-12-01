// 슬라이더
const bingreaMat = [
    "아이스크림",
    "우유/치즈",
    "발효유",
    "커피",
    "주스",
    "음료",
];
const viewStart = document.querySelectorAll(".view-start");
const viewMore = document.querySelectorAll(".view");
const slideNextBt = document.querySelector(".slide-inner-nextbtn");
const slidePrevBt = document.querySelector(".slide-inner-prevbtn");
const slide = document.querySelector(".slide-list");
const slideLi = document.querySelectorAll(".slide-list > li ");

//슬라이더 버튼
let count = 0;

slideNextBt.addEventListener("click", () => {
    switch (count) {
        case 0:
            slide.style.transform = "translateX(-270PX)";
            count += 1;
            console.log(count);
            break;
        case 1:
            slide.style.transform = "translateX(-540PX)";
            count++;
            break;
        case 2:
            slide.style.transform = "translateX(-820PX)";
            count++;
            break;
    }
});
slidePrevBt.addEventListener("click", () => {
    switch (count) {
        case 3:
            slide.style.transform = "translateX(-540PX)";
            count += 1;
            console.log(count);
            break;
        case 4:
            slide.style.transform = "translateX(-270PX)";
            count++;
            console.log(count);
            break;
        case 5:
            slide.style.transform = "translateX(0PX)";
            count++;
            console.log(count);
            break;
    }
});

for (let i = 0; i < 6; i++) {
    viewStart[i].addEventListener("mouseover", () => {
        viewMore[i].innerHTML = "VIEW MORE";
    });
}
for (let i = 0; i < 6; i++) {
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

window.addEventListener("scroll", () => {
    if (scrollY > 400) {
        slide.style.opacity = 1;
        for (let i = 0; i < 6; i++) {
            slideLi[i].style.transform = "translateY(0px)";
        }
    }
});

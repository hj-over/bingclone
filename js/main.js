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

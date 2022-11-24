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
        viewMore[i].innerHTML = "view more";
    });
}
for (let i = 0; i < 6; i++) {
    viewStart[i].addEventListener("mouseout", () => {
        viewMore[i].innerHTML = bingreaMat[i];
    });
}

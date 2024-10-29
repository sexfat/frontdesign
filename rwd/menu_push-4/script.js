const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.wrapper');

// 點擊漢堡按鈕開啟或關閉選單
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sideMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  body.classList.toggle('active');
});

// 點擊遮罩層關閉選單
overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('active');
});

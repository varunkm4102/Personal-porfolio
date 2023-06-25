document.addEventListener("DOMContentLoaded", () => {
  let plusIcons = document.querySelectorAll(".plus-element");
  let minusIcons = document.querySelectorAll(".minus-element");
  let hideElements = document.querySelectorAll(".hide-element");
  let changeColor = document.querySelectorAll(".show-element");
  let headerColor = document.querySelectorAll(".header-color");
  let naviCross = document.getElementById("navi-cross");
  let naviMenu = document.getElementById("navi-manu");
  let naviSlide = document.getElementById("slide");
  let naviAppear = document.getElementById("appear");
  let rightContainer = document.getElementById("container-opacity");

  plusIcons.forEach((plusIcon, index) => {
    plusIcon.addEventListener("click", () => {
      hideElements[index].style.display = "flex";
      plusIcon.style.display = "none";
      minusIcons[index].style.display = "block";
      minusIcons[index].style.color = "white";
      changeColor[index].style.backgroundColor = "#2c98f0";
      headerColor[index].style.color = "white";
    });
  });

  minusIcons.forEach((minusIcon, index) => {
    minusIcon.addEventListener("click", () => {
      hideElements[index].style.display = "none";
      minusIcon.style.display = "none";
      changeColor[index].style.backgroundColor = "#f2f3f7";
      plusIcons[index].style.display = "block";
      headerColor[index].style.color = "rgb(68, 58, 58)";
    });
  });

  

  naviMenu.addEventListener("click", () =>{
    naviMenu.style.display = "none";
    naviAppear.style.display = "block";
    naviAppear.style.transition = "display 1s linear";
    rightContainer.style.opacity = ".3";
  });


  naviCross.addEventListener("click", () => {
    naviMenu.style.display = "block";
    naviAppear.style.display = "none"; 
    rightContainer.style.opacity = "1";
  })

  const screenWidth = window.innerWidth;
  const width = 808;
  console.log(screenWidth);
  
  if (screenWidth <= width) {
    naviMenu.style.display = "block";
  } else {
    naviMenu.style.display = "none";
    naviCross.style.display = "none";
  }

  
});


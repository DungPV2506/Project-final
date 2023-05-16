// const selectMenu = document.getElementById('seclect_zero');
// const contentList = document.querySelectorAll('cg');

// function selectChange(){
//     const selectedOption = selectMenu.value;
//     for(let i = 0; i < contentList.length; i++){
//         if(contentList[i].id === selectedOption + "content"){
//             contentList[i].style.display = "block";
//     }
//     else{
//         contentList[i].style.display = "none";
//     }
// }
// }
// selectMenu.addEventListener("change", selectChange);

// const selectMenu = document.getElementById('select_menu');

// selectMenu.onchange = function(){
//     const selectedOption = this.options[this.selectedIndex];
//     const targetMenu = selectedOption.getAttribute("data-target");
//     const targetObj = document.getElementById(targetMenu);
//     const divs = document.querySelectorAll("[id^='c']");
//     for (let i = 0; i < divs.length; i++){
//         divs[i].style.display = "none";
//     }
//     targetObj.style.display = "block";
// }

const selectMenu = document.getElementById('select_menu');
const selectOption = document.querySelectorAll(".section");

selectMenu.addEventListener("change", function(){
    const selectOptionValue = this.value;
    for(let i = 0; i < selectOption; i++){
        if(selectOption[i].id === "div" + selectOptionValue){
            selectOption[i].style.display = "block";
        }
        else{
            selectOption[i].style.display = "none";
        }
    }
});


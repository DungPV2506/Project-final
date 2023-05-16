const addToListByPlus = document.querySelectorAll("#add_circle");
for (let i = 0 ; i < addToListByPlus.length; i++){
    addToListByPlus[i].addEventListener("click", function(){
        alert("Đã thêm vào danh sách xem sau")
    });
}

const addToListByFavorite = document.querySelectorAll("#add_favorite");
for (let i = 0 ; i < addToListByFavorite.length; i++){
    addToListByFavorite[i].addEventListener("click", function(){
        alert("Đã thêm vào mục yêu thích")
    });
}

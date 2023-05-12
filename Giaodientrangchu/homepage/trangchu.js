const filmList = [
    {
        nameFilm: "bóng ma anh quốc",
        cateGory: "bạo lực tình dục khỏa thân",
        imageFilm: "./anh35.jpg",
    },
    {
        nameFilm: "Lệnh truy nã đỏ",
        cateGory:"hài hước phiêu lưu hành động",
        imageFilm: "./anh37.jpg",
        
    },
    {
        nameFilm: "Emily in paris",
        cateGory:"tình yêu hài hước phiêu lưu",
        imageFilm: "./anh38.jpg",
    },
    {
        nameFilm: "Mission impossible 6: Fall out",
        cateGory:"tự sát hành động bom tấn",
        imageFilm: "./anh39.jpg", 
    },
    {
        nameFilm: "Mission impossible 6: Fall out",
        cateGory:"tự sát hành động bom tấn",
        imageFilm: "./anh39.jpg", 
    },
    {
        nameFilm: "Mission impossible 6: Fall out",
        cateGory:"tự sát hành động bom tấn",
        imageFilm: "./anh39.jpg", 
    },
];

const sectionSixth = document.getElementById("section_sixth");

let stringHTML = "";

for(let film of filmList){
    stringHTML += `
            <div class="owl-item" id="owl-item">
                <img src=${film.imageFilm} width="200px" height="100px" id="img" />
                <div class="small-item">
                  <span class="material-symbols-outlined">play_circle</span>
                  <span class="material-symbols-outlined">add_circle</span>
                  <span class="material-symbols-outlined">favorite</span>
                  <p class="movie">${film.nameFilm}</p>
                  <p class="movie description">${film.cateGory}</p>
                </div>
            </div>
    `
}
sectionSixth.innerHTML = stringHTML;
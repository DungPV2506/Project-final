const filmList_first = [
    {
        nameFilm_first: "Bóng ma anh quốc",
        cateGory_first: "Bạo lực - Tình dục - Tự sát",
        imageFilm_first: "./img/anh7.jpg", 
    },
    {
        nameFilm_first: "Mission impossible 6: Fall out",
        cateGory_first:"Hành động - Tự sát - Bom tấn",
        imageFilm_first: "./img/anh27.jpg",
        
    },
    {
        nameFilm_first: "Stranger things",
        cateGory_first:"Giật gân - Kinh dị - Viễn tưởn",
        imageFilm_first: "./img/anh20.jpg",
    },
    {
        nameFilm_first: "Tàn sát",
        cateGory_first:"Tự sát - Kinh dị - Giật gân",
        imageFilm_first: "./img/anh37.jpg", 
    },
    {
        nameFilm_first: "The Innocents",
        cateGory_first:"Tình dục - Giật gân - Tâm lý",
        imageFilm_first: "./img/anh39.jpg", 
    },
    {
        nameFilm_first: "Vinh quang trong thù hận",
        cateGory_first:"tự sát hành động bom tấn",
        imageFilm_first: "./img/anh16.jpg", 
    },
    {
        nameFilm_first: "Phi vụ triệu đô",
        cateGory_first:"Bạo lực - Khỏa thân - Giật gân",
        imageFilm_first: "./img/anh14.jpg", 
    },
    {
        nameFilm_first: "Wednesday",
        cateGory_first:"Giật gân - Kinh dị - Viễn tưởng",
        imageFilm_first: "./img/anh15.jpg", 
    },
    {
        nameFilm_first: "Emily in Paris",
        cateGory_first:"Hài hước - Phiêu lưu - Lãng mạn",
        imageFilm_first: "./img/anh41.jpg", 
    },
    {
        nameFilm_first: "Thư kí Kim sao thế ?",
        cateGory_first:"Tình cảm - Lãng mạn - Hài hước",
        imageFilm_first: "./img/anh17.jpg", 
    },
];

const sectionFirst = document.getElementById("section_first");

let stringHTML = "";

for(let film of filmList_first) {
    stringHTML += `
    <div class="title_first">Danh sách tiếp tục xem của bạn</div>
            <div class="owl-item" id="owl-item">
                <img src=${film.imageFilm_first} width="200px" height="100px" id="img" />
                <div class="small-item">
                  <span class="material-symbols-outlined">play_circle</span>
                  <span class="material-symbols-outlined">add_circle</span>
                  <span class="material-symbols-outlined">favorite</span>
                  <p class="movie">${film.nameFilm_first}</p>
                  <p class="movie description">${film.cateGory_first}</p>
                </div>
            </div>
    `
}
sectionFirst.innerHTML = stringHTML;
const filmList = [
    {
        id:1,
        cateGory:"Danh sách tiếp tục xem của bạn",
        notion:[
            {
                nameFilm: "Bóng ma anh quốc",
                classify: "Bạo lực - Tình dục - Tự sát",
                imageFilm: "./img/anh7.jpg", 
            },
            {
                nameFilm: "Mission impossible 6: Fall out",
                classify:"Hành động - Tự sát - Bom tấn",
                imageFilm: "./img/anh27.jpg",
                
            },
            {
                nameFilm: "Stranger things",
                classify:"Giật gân - Kinh dị - Viễn tưởn",
                imageFilm: "./img/anh20.jpg",
            },
            {
                nameFilm: "Tàn sát",
                classify:"Tự sát - Kinh dị - Giật gân",
                imageFilm: "./img/anh37.jpg", 
            },
            {
                nameFilm: "The Innocents",
                classify:"Tình dục - Giật gân - Tâm lý",
                imageFilm: "./img/anh39.jpg", 
            },
            {
                nameFilm: "Vinh quang trong thù hận",
                classify:"tự sát hành động bom tấn",
                imageFilm: "./img/anh16.jpg", 
            },
            {
                nameFilm: "Phi vụ triệu đô",
                classify:"Bạo lực - Khỏa thân - Giật gân",
                imageFilm: "./img/anh14.jpg", 
            },
            {
                nameFilm: "Wednesday",
                classify:"Giật gân - Kinh dị - Viễn tưởng",
                imageFilm: "./img/anh15.jpg", 
            },
            {
                nameFilm: "Emily in Paris",
                classify:"Hài hước - Phiêu lưu - Lãng mạn",
                imageFilm: "./img/anh41.jpg", 
            },
            {
                nameFilm: "Thư kí Kim sao thế ?",
                classify:"Tình cảm - Lãng mạn - Hài hước",
                imageFilm: "./img/anh17.jpg", 
            },
        ],
    }, 
    {
        id:2,
        cateGory:"Top phim tại Việt Nam hôm nay",
        notion:[
            {
                imageFilm: "./img/anh45.jpg",
                nameFilm: "Những chiến binh bất tử",
                classify:"Bom tấn - Tự sát - Hành động",
            },
            {
                imageFilm: "./img/anh7.jpg",
                nameFilm: "Bóng ma anh quốc",
                classify:"Bạo lực - Tình dục - Tự sát",
            },
            {
                imageFilm: "./img/anh23.jpg",
                nameFilm: "John wick 3: Chuẩn bị chiến tranh",
                classify:"Giật gân - Tự sát - Hành động",
            },
            {
                imageFilm: "./img/anh24.jpg",
                nameFilm: "Mission impossible 3",
                classify:"Hành động - Tự sát - Bom tấn",
            },
            {
                imageFilm: "./img/anh25.jpg",
                nameFilm: "Mission impossible 4: Ghost protocol",
                classify:"Hành động - Tự sát - Bom tấn",
            },
            {
                imageFilm: "./img/anh22.jpg",
                nameFilm: "John wick 2",
                classify:"Giật gân - Tự sát - Hành động",
            },
            {
                imageFilm: "./img/anh26.jpg",
                nameFilm: "Mission impossible 5: Rogue Nation",
                classify:"Hành động - Tự sát - Bom tấn",
            },
            {
                imageFilm: "./img/anh27.jpg",
                nameFilm: "Mission impossible 6: Fall out",
                classify:"Hành động - Tự sát - Bom tấn",
            },
            {
                imageFilm: "./img/anh28.jpg",
                nameFilm: "Twightlight 1",
                classify:"Tình cảm - Lãng mạn - Kinh dị",
            },
            {
                imageFilm: "./img/anh30.jpg",
                nameFilm: "Twightlight 3: Eclipse",
                classify:"Tình cảm - Lãng mạn - Kinh dị",
            }
        ]
    },
    {
        idFilm:3,
        cateGory:"Hiện đang phổ biến",
        notion:[
            {
                nameFilm: "Chuyến tàu băng giá",
                classify: "Phá án - Giật gân - Công lý",
                imageFilm: "./img/anh70.jpg", 
            },
            {
                nameFilm: "Mission impossible 6: Fall out",
                classify:"Hành động - Tự sát - Bom tấn",
                imageFilm: "./img/anh27.jpg",
                
            },
            {
                nameFilm: "John wick 2",
                classify:"Giật gân - Tự sát - Hành động",
                imageFilm: "./img/anh22.jpg",
            },
            {
                nameFilm: "Mission impossible 5: Rogue Nation",
                classify:"Hành động - Tự sát - Bom tấn",
                imageFilm: "./img/anh26.jpg", 
            },
            {
                nameFilm: "Nhà ngoại giao",
                classify:"Hành động - Kịch tính - Trí tuệ",
                imageFilm: "./img/anh49.jpg", 
            },
            {
                nameFilm: "Vinh quang trong thù hận",
                classify:"tự sát hành động bom tấn",
                imageFilm: "./img/anh16.jpg", 
            },
            {
                nameFilm: "VIKINZI VALHALA",
                classify:"Tự sát - Kinh dị - Giật gân",
                imageFilm: "./img/anh51.jpg", 
            },
            {
                nameFilm: "Wednesday",
                classify:"Giật gân - Kinh dị - Viễn tưởng",
                imageFilm: "./img/anh15.jpg", 
            },
            {
                nameFilm: "Emily in Paris",
                classify:"Hài hước - Phiêu lưu - Lãng mạn",
                imageFilm: "./img/anh41.jpg", 
            },
            {
                nameFilm: "Thư kí Kim sao thế ?",
                classify:"Tình cảm - Lãng mạn - Hài hước",
                imageFilm: "./img/anh17.jpg", 
            },
        ],
    },
    {
        idFilm:4,
        cateGory:"Độc quyền của netflix",
        notion:[
            {
                nameFilm: "Chuyến bay mất tích",
                classify: "Xoắn não - Kịch tính - Căng thẳng",
                imageFilm: "./img/anh53.jpg", 
            },
            {
                nameFilm: "Nhà bếp địa ngục",
                classify:"Giải trí - Nấu ăn - Ngôn ngữ",
                imageFilm: "./img/anh54.jpg",
                
            },
            {
                nameFilm: "Đội quân người chết",
                classify:"Giật gân - Kinh dị - Hài hước",
                imageFilm: "./img/anh55.jpg",
            },
            {
                nameFilm: "Đặc vụ vô hình",
                classify:"Giật gân - Hành động - Ngôn ngữ",
                imageFilm: "./img/anh57.jpg", 
            },
            {
                nameFilm: "The Innocents",
                classify:"Tình dục - Giật gân - Tâm lý",
                imageFilm: "./img/anh39.jpg", 
            },
            {
                nameFilm: "Vinh quang trong thù hận",
                classify:"tự sát hành động bom tấn",
                imageFilm: "./img/anh16.jpg", 
            },
            {
                nameFilm: "Phi vụ triệu đô",
                classify:"Bạo lực - Khỏa thân - Giật gân",
                imageFilm: "./img/anh14.jpg", 
            },
            {
                nameFilm: "Wednesday",
                classify:"Giật gân - Kinh dị - Viễn tưởng",
                imageFilm: "./img/anh15.jpg", 
            },
            {
                nameFilm: "Emily in Paris",
                classify:"Hài hước - Phiêu lưu - Lãng mạn",
                imageFilm: "./img/anh41.jpg", 
            },
            {
                nameFilm: "Thư kí Kim sao thế ?",
                classify:"Tình cảm - Lãng mạn - Hài hước",
                imageFilm: "./img/anh17.jpg", 
            },
        ],
    },
    {
        idFilm:5,
        cateGory:"Phim giành giải thưởng",
        notion:[
            {
                nameFilm: "Kim cương thô",
                classify: "Giật gân - Buôn lậu - Tự sát",
                imageFilm: "./img/anh50.jpg", 
            },
            {
                nameFilm: "Cô ấy",
                classify:"Bạo lực - Tâm lý - Giật gân",
                imageFilm: "./img/anh52.jpg",
                
            },
            {
                nameFilm: "Nhà bếp địa ngục",
                classify:"Giải trí - Nấu ăn - Ngôn ngữ",
                imageFilm: "./img/anh54.jpg",
            },
            {
                nameFilm: "Emily in Paris",
                classify:"Hài hước - Phiêu lưu - Lãng mạn",
                imageFilm: "./img/anh41.jpg", 
            },
            {
                nameFilm: "Thư kí Kim sao thế ?",
                classify:"Tình cảm - Lãng mạn - Hài hước",
                imageFilm: "./img/anh17.jpg", 
            },
            
            {
                nameFilm: "Vinh quang trong thù hận",
                classify:"tự sát hành động bom tấn",
                imageFilm: "./img/anh16.jpg", 
            },
            {
                nameFilm: "Phi vụ triệu đô",
                classify:"Bạo lực - Khỏa thân - Giật gân",
                imageFilm: "./img/anh14.jpg", 
            },
            {
                nameFilm: "Wednesday",
                classify:"Giật gân - Kinh dị - Viễn tưởng",
                imageFilm: "./img/anh15.jpg", 
            },
            {
                nameFilm: "Tàn sát",
                classify:"Tự sát - Kinh dị - Giật gân",
                imageFilm: "./img/anh37.jpg", 
            },
            {
                nameFilm: "The Innocents",
                classify:"Tình dục - Giật gân - Tâm lý",
                imageFilm: "./img/anh39.jpg", 
            },  
        ],
    },
    {
        idFilm:6,
        cateGory:"Phim được đánh giá chuyên môn cao",
        notion:[
            {
                nameFilm: "Wednesday",
                classify:"Giật gân - Kinh dị - Viễn tưởng",
                imageFilm: "./img/anh15.jpg", 
            },
            {
                nameFilm: "Vinh quang trong thù hận",
                classify:"tự sát hành động bom tấn",
                imageFilm: "./img/anh16.jpg", 
            },
            {
                nameFilm: "The Innocents",
                classify:"Tình dục - Giật gân - Tâm lý",
                imageFilm: "./img/anh39.jpg", 
            },
            {
                nameFilm: "Stranger things",
                classify:"Giật gân - Kinh dị - Viễn tưởn",
                imageFilm: "./img/anh20.jpg",
            },
            {
                nameFilm: "Tàn sát",
                classify:"Tự sát - Kinh dị - Giật gân",
                imageFilm: "./img/anh37.jpg", 
            },
            
            {
                nameFilm: "Mission impossible 6: Fall out",
                classify:"Hành động - Tự sát - Bom tấn",
                imageFilm: "./img/anh27.jpg",
                
            },
            {
                nameFilm: "Phi vụ triệu đô",
                classify:"Bạo lực - Khỏa thân - Giật gân",
                imageFilm: "./img/anh14.jpg", 
            },
            
            {
                nameFilm: "Emily in Paris",
                classify:"Hài hước - Phiêu lưu - Lãng mạn",
                imageFilm: "./img/anh41.jpg", 
            },
            {
                nameFilm: "Thư kí Kim sao thế ?",
                classify:"Tình cảm - Lãng mạn - Hài hước",
                imageFilm: "./img/anh17.jpg", 
            },
            {
                nameFilm: "Bóng ma anh quốc",
                classify: "Bạo lực - Tình dục - Tự sát",
                imageFilm: "./img/anh7.jpg", 
            },
        ],
    },
    {
        idFilm:7,
        cateGory:"Xem lại",
        notion:[
            {
                nameFilm: "Bóng ma anh quốc",
                classify: "Bạo lực - Tình dục - Tự sát",
                imageFilm: "./img/anh7.jpg", 
            },
            {
                nameFilm: "Mission impossible 6: Fall out",
                classify:"Hành động - Tự sát - Bom tấn",
                imageFilm: "./img/anh27.jpg",
                
            },
            {
                nameFilm: "Stranger things",
                classify:"Giật gân - Kinh dị - Viễn tưởn",
                imageFilm: "./img/anh20.jpg",
            },
            {
                nameFilm: "Tàn sát",
                classify:"Tự sát - Kinh dị - Giật gân",
                imageFilm: "./img/anh37.jpg", 
            },
            {
                nameFilm: "The Innocents",
                classify:"Tình dục - Giật gân - Tâm lý",
                imageFilm: "./img/anh39.jpg", 
            },
            {
                nameFilm: "Vinh quang trong thù hận",
                classify:"tự sát hành động bom tấn",
                imageFilm: "./img/anh16.jpg", 
            },
            {
                nameFilm: "Phi vụ triệu đô",
                classify:"Bạo lực - Khỏa thân - Giật gân",
                imageFilm: "./img/anh14.jpg", 
            },
            {
                nameFilm: "Wednesday",
                classify:"Giật gân - Kinh dị - Viễn tưởng",
                imageFilm: "./img/anh15.jpg", 
            },
            {
                nameFilm: "Emily in Paris",
                classify:"Hài hước - Phiêu lưu - Lãng mạn",
                imageFilm: "./img/anh41.jpg", 
            },
            {
                nameFilm: "Thư kí Kim sao thế ?",
                classify:"Tình cảm - Lãng mạn - Hài hước",
                imageFilm: "./img/anh17.jpg", 
            },
        ],
    },
    {
        idFilm:8,
        cateGory:"Phim giành cho trẻ em",
        notion:[
            {
                nameFilm: "Vệ binh",
                classify: "Bạo lực - Tình dục - Khỏa thân",
                imageFilm: "./img/anh59.jpg", 
            },
            {
                nameFilm: "Ngày thanh trừng: Thường niên",
                classify:"Bạo Lực - Giật gân - Kinh dị",
                imageFilm: "./img/anh60.jpg",
                
            },
            {
                nameFilm: "Ngày thanh trừng: Vô chính phủ",
                classify:"Bạo Lực - Giật gân - Kinh dị",
                imageFilm: "./img/anh61.jpg",
            },
            {
                nameFilm: "Ngày thanh trừng: Lễ bầu cử",
                classify:"Bạo Lực - Giật gân - Kinh dị",
                imageFilm: "./img/anh62.jpg", 
            },
            {
                nameFilm: "The Innocents",
                classify:"Tình dục - Giật gân - Tâm lý",
                imageFilm: "./img/anh39.jpg", 
            },
            {
                nameFilm: "Sát thủ đối đầu",
                classify:"Hành động - Hài hước - Ngôn ngữ",
                imageFilm: "./img/anh64.jpg", 
            },
            {
                nameFilm: "Băng cướp lập dị",
                classify:"Bạo Lực - Giải đố - Xoắn não",
                imageFilm: "./img/anh65.jpg", 
            },
            {
                nameFilm: "Wednesday",
                classify:"Giật gân - Kinh dị - Viễn tưởng",
                imageFilm: "./img/anh15.jpg", 
            },
            {
                nameFilm: "Emily in Paris",
                classify:"Hài hước - Phiêu lưu - Lãng mạn",
                imageFilm: "./img/anh41.jpg", 
            },
            {
                nameFilm: "Đặc vụ đêm",
                classify:"Hành động - Kịch tính - Bom tấn",
                imageFilm: "./img/anh67.jpg", 
            },
        ],
    },
    {
        idFilm:9,
        cateGory:"Lựa chọn hàng đầu cho bạn",
        notion:[
            {
                nameFilm: "Đặc vụ đêm",
                classify:"Hành động - Kịch tính - Bom tấn",
                imageFilm: "./img/anh67.jpg", 
            },
            {
                nameFilm: "Emily in Paris",
                classify:"Hài hước - Phiêu lưu - Lãng mạn",
                imageFilm: "./img/anh41.jpg", 
            },
            {
                nameFilm: "Ngày thanh trừng: Vô chính phủ",
                classify:"Bạo Lực - Giật gân - Kinh dị",
                imageFilm: "./img/anh61.jpg",
            },
            {
                nameFilm: "Băng cướp lập dị",
                classify:"Bạo Lực - Giải đố - Xoắn não",
                imageFilm: "./img/anh65.jpg", 
            },
            {
                nameFilm: "The Innocents",
                classify:"Tình dục - Giật gân - Tâm lý",
                imageFilm: "./img/anh39.jpg", 
            },
            {
                nameFilm: "Sát thủ đối đầu",
                classify:"Hành động - Hài hước - Ngôn ngữ",
                imageFilm: "./img/anh64.jpg", 
            },
            
            {
                nameFilm: "Ngày thanh trừng: Lễ bầu cử",
                classify:"Bạo Lực - Giật gân - Kinh dị",
                imageFilm: "./img/anh62.jpg", 
            },
            {
                nameFilm: "Wednesday",
                classify:"Giật gân - Kinh dị - Viễn tưởng",
                imageFilm: "./img/anh15.jpg", 
            },
            
            {
                nameFilm: "Ngày thanh trừng: Thường niên",
                classify:"Bạo Lực - Giật gân - Kinh dị",
                imageFilm: "./img/anh60.jpg",
                
            },
            {
                nameFilm: "Vệ binh",
                classify: "Bạo lực - Tình dục - Khỏa thân",
                imageFilm: "./img/anh59.jpg", 
            },
        ],
    },
    {
        idFilm:10,
        cateGory:"Mới phát hành",
        notion:[
            {
                nameFilm: "Twightlight 1",
                classify: "Tình cảm - Lãng mạn - Kinh dị",
                imageFilm: "./img/anh28.jpg", 
            },
            {
                nameFilm: "Twightlight 2",
                classify:"Tình cảm - Lãng mạn - Kinh dị",
                imageFilm: "./img/anh29.jpg",
                
            },
            {
                nameFilm: "Twightlight 3",
                classify:"Tình cảm - Lãng mạn - Kinh dị",
                imageFilm: "./img/anh30.jpg",
            },
            {
                nameFilm: "Twightlight 4",
                classify:"Tình cảm - Lãng mạn - Kinh dị",
                imageFilm: "./img/anh31.jpg", 
            },
            {
                nameFilm: "Twightlight 5",
                classify:"Tình cảm - Lãng mạn - Kinh dị",
                imageFilm: "./img/anh32.jpg", 
            },
            {
                nameFilm: "Phi vụ triệu đô",
                classify:"Bạo lực - Khỏa thân - Giật gân",
                imageFilm: "./img/anh14.jpg", 
            },
            {
                nameFilm: "Vinh quang trong thù hận",
                classify:"tự sát hành động bom tấn",
                imageFilm: "./img/anh16.jpg", 
            },
            
            {
                nameFilm: "Wednesday",
                classify:"Giật gân - Kinh dị - Viễn tưởng",
                imageFilm: "./img/anh15.jpg", 
            },
            {
                nameFilm: "Emily in Paris",
                classify:"Hài hước - Phiêu lưu - Lãng mạn",
                imageFilm: "./img/anh41.jpg", 
            },
            {
                nameFilm: "Thư kí Kim sao thế ?",
                classify:"Tình cảm - Lãng mạn - Hài hước",
                imageFilm: "./img/anh17.jpg", 
            },
        ],
    }

];

const renderSection = document.getElementById("section");


const renderList = (filmList) => {

    let stringHTML = "";

    for(let film of filmList) {
        stringHTML += `
        <div class="section" id="section">
        <div class="content">
          <div class="title">${film.cateGory}</div>
          <div class="owl-wrapper">
          `
        for(let obj of film.notion){
            stringHTML += `
            <div class="owl-item" id="owl-item">
            <ul>
                <li>
                    <img src=${obj.imageFilm} width="200px" height="100px" id="img"/>
                </li>
            </ul>
              
              <div class="small-item">
                <span class="material-symbols-outlined">play_circle</span>
               <span class="material-symbols-outlined" id="add_circle">add_circle</span>
                <span class="material-symbols-outlined" id="add_favorite">favorite</span>
                <p class="movie">${obj.nameFilm}</p>
                <p class="movie description">${obj.classify}</p>
              </div>
            </div>
        `
        }
         stringHTML +=`</div>
         </div>
         </div>
         
         ` 
    }
    renderSection.innerHTML = stringHTML;
}
renderList(filmList);

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



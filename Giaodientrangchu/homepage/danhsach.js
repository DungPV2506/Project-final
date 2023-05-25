const arrList = [
  {
    id: 1,
    cateGory: "Danh sách xem sau",
    info:[
      {
        nameList: "Chuyến tàu băng giá",
        classifyList: "Phá án - Giật gân - Công lý",
        imageList: "./img/anh70.jpg",
      },
      {
        nameList: "Nhà ngoại giao",
        classifyList: "Hành động - Kịch tính - Trí tuệ",
        imageList: "./img/anh49.jpg",
      },
      {
        nameList: "Kim cương thô",
        classifyList: "Giật gân - Buôn lậu - Tự sát",
        imageList: "./img/anh50.jpg",
      },
      {
        nameList: "VIKINZI VALHALA",
        classifyList: "Tự sát - Kinh dị - Giật gân",
        imageList: "./img/anh51.jpg",
      },
      {
        nameList: "Cô ấy",
        classifyList: "Bạo lực - Tâm lý - Giật gân",
        imageList: "./img/anh52.jpg",
      },
      {
        nameList: "Chuyến bay mất tích",
        classifyList: "Xoắn não - Kịch tính - Căng thẳng",
        imageList: "./img/anh53.jpg",
      },
      {
        nameList: "Nhà bếp địa ngục",
        classifyList: "Giải trí - Nấu ăn - Ngôn ngữ",
        imageList: "./img/anh54.jpg",
      },
      {
        nameList: "Đội quân người chết",
        classifyList: "Giật gân - Kinh dị - Hài hước",
        imageList: "./img/anh55.jpg",
      },
      {
        nameList: "Đặc vụ vô hình",
        classifyList: "Giật gân - Hành động - Ngôn ngữ",
        imageList: "./img/anh57.jpg",
      },
      {
        nameList: "Sát thủ tái xuất",
        classifyList: "Tự sát - Hành động - Tình dục",
        imageList: "./img/anh56.jpg",
      }
    ]
  },
  {
    id: 2,
    cateGory: "Danh sách yêu thích",
    info: [
      {
        nameList: "Tội phạm Mỹ - Ngày cuối",
        classifyList: "Bạo Lực - Giật gân - Tự sát",
        imageList: "./img/anh58.jpg",
      },
      {
        nameList: "Vệ binh",
        classifyList: "Bạo lực - Tình dục - Khỏa thân",
        imageList: "./img/anh59.jpg",
      },
      {
        nameList: "Ngày thanh trừng: Thường niên",
        classifyList: "Bạo Lực - Giật gân - Kinh dị",
        imageList: "./img/anh60.jpg",
      },
      {
        nameList: "Ngày thanh trừng: Vô chính phủ",
        classifyList: "Bạo Lực - Giật gân - Kinh dị",
        imageList: "./img/anh61.jpg",
      },
      {
        nameList: "Ngày thanh trừng: Lễ bầu cử",
        classifyList: "Bạo Lực - Giật gân - Kinh dị",
        imageList: "./img/anh62.jpg",
      },
      {
        nameList: "Vỏ bọc thợ săn",
        classifyList: "Bạo Lực - Hành động - Tự sát",
        imageList: "./img/anh63.jpg",
      },
      {
        nameList: "Sát thủ đối đầu",
        classifyList: "Hành động - Hài hước - Ngôn ngữ",
        imageList: "./img/anh64.jpg",
      },
      {
        nameList: "Băng cướp lập dị",
        classifyList: "Bạo Lực - Giải đố - Xoắn não",
        imageList: "./img/anh65.jpg",
      },
      {
        nameList: "Đại chiến thế giới ngầm",
        classifyList: "Hành động - Kịch tính - Căng thẳng",
        imageList: "./img/anh66.jpg",
      },
      {
        nameList: "Đặc vụ đêm",
        classifyList: "Hành động - Kịch tính - Bom tấn",
        imageList: "./img/anh67.jpg",
      },
    ]
  }
];

const renderContent = document.getElementById("section");

const renderMyList = (arrList) => {

  let stringHTML = "";
  
  for (let arr of arrList) {
    stringHTML += `
        <div class="section_first section" id="section">
            <div class="content">
                <div class="title_first">${arr.cateGory}</div>
                <div class="owl-wrapper">
        `
    for (let things of arr.info) {
      stringHTML += `
            <div class="owl-item" id="owl-item">
                    <img src=${things.imageList} width="180px" height="100px" id="img" class="anh" />
                    <div class="small-item">
                    <span class="material-symbols-outlined">play_arrow</span>
                    <span class="material-symbols-outlined">add_circle</span>
                    <span class="material-symbols-outlined">favorite</span>
                    <p class="movie">${things.nameList}</p>
                    <p class="movie description">${things.classifyList}</p>
                    </div>
                </div>
            `
    }
    stringHTML += `
                </div>
            </div>
        </div>
        `
  }
  renderContent.innerHTML = stringHTML;
}
renderMyList(arrList);

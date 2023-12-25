let sidebar = document.querySelector(".sidebar");
let openSidebar = document.querySelector(".open");
let closeSidebar = document.querySelector(".close");
let menu = document.querySelector(".menu");
let imageUrl = "https://www.servicedriventransport.com/wp-content/uploads/2023/06/News.jpg";


openSidebar.addEventListener("click", () => {
    openSidebar.style.display = "none";
    closeSidebar.style.display = "block";
    menu.style.left = "0";
    sidebar.style.borderRadius = "0";
});
closeSidebar.addEventListener("click", () => {
    closeSidebar.style.display = "none";
    openSidebar.style.display = "block";
    menu.style.left = "-1000px";
    sidebar.style.borderTopRightRadius = "5px";
    sidebar.style.borderBottomRightRadius = "5px";

});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
});





function maxChar(txt, max) {
    if (txt.length > max) {
        return txt = txt.substring(0, max) + "...";
    }
    return txt;
}


fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=00e30e9d9b4d46be9dfc5b332cc70535")
    .then(res => res.json())
    .then(result => {
        console.log(result);
        let newsImage = document.querySelectorAll(".swiper-slide img");
        newsImage.forEach((images, index) => {
            images.setAttribute("src", result.articles[index].urlToImage)
        })
        let newsTitle = document.querySelectorAll("h3 a");
        newsTitle.forEach((tit, index) => {
            tit.innerText = result.articles[index].title;
            tit.setAttribute("href", result.articles[index].url)
        })
        let slide_content = document.querySelectorAll(".swiper-slide .slide-content");
        slide_content.forEach((cont, index) => {
            cont.innerText = maxChar(result.articles[index].content, 90);


        })
    });

fetch("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=00e30e9d9b4d46be9dfc5b332cc70535")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        let bottom_image = document.querySelectorAll('.bottom-left-content div img');
        bottom_image.forEach((newsImage, index) => {
            if (result.articles[index].urlToImage == null || result.articles[index].urlToImage == " ") {
                newsImage.setAttribute("src", imageUrl)
            } else {
                newsImage.setAttribute("src", result.articles[index].urlToImage)

            }
        });
        let bottom_desc = document.querySelectorAll('.bottom-title a');
        bottom_desc.forEach((desc, index) => {

            desc.innerText = maxChar(result.articles[index].title, 75);
            desc.setAttribute("href", result.articles[index].url)
        });

    })

fetch("https://newsapi.org/v2/everything?q=business&apiKey=00e30e9d9b4d46be9dfc5b332cc70535")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        let brImage = document.querySelectorAll('.bottom-right-content .brImg img');
        brImage.forEach((newsImage, index) => {
            newsImage.setAttribute("src", result.articles[index].urlToImage)

        });


        let brTitle = document.querySelectorAll('.brTitle a');
        brTitle.forEach((desc, index) => {
            desc.innerText = maxChar(result.articles[index].title, 90);
            desc.setAttribute("href", result.articles[index].url)
        });
    })
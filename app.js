let sidebar = document.querySelector(".sidebar");
let openSidebar = document.querySelector(".open");
let closeSidebar = document.querySelector(".close");
let menu = document.querySelector(".menu");
let sections = document.querySelector(".sections");
let section1 = document.querySelectorAll(".section")[0];
let section2 = document.querySelectorAll(".section")[1];
let section3 = document.querySelectorAll(".section")[2];
let accordion1=document.querySelector(".accordion1");
let accordion2=document.querySelector(".accordion2");
let accordion3=document.querySelector(".accordion3");
let box = document.querySelectorAll(".box");


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

section1.addEventListener("click", ()=>{
    section1.style.backgroundColor="#1387fc";
    section2.style.backgroundColor="#fff";
    section3.style.backgroundColor="#fff";
    accordion1.style.display="block"
    accordion2.style.display="none"
    accordion3.style.display="none"
    section1.style.color="#fff";
    section2.style.color="#4b4a4a";
    section3.style.color="#4b4a4a";
});
section2.addEventListener("click", ()=>{
    section2.style.backgroundColor="#1387fc";
    section1.style.backgroundColor="#fff";
    section3.style.backgroundColor="#fff";
    accordion2.style.display="block"
    accordion1.style.display="none"
    accordion3.style.display="none"
    section2.style.color="#fff";
    section1.style.color="#4b4a4a";
    section3.style.color="#4b4a4a";
});
section3.addEventListener("click", ()=>{
    section3.style.backgroundColor="#1387fc";
    section2.style.backgroundColor="#fff";
    section1.style.backgroundColor="#fff";
    accordion3.style.display="block"
    accordion2.style.display="none"
    accordion1.style.display="none"
    section3.style.color="#fff";
    section2.style.color="#4b4a4a";
    section1.style.color="#4b4a4a";
});

box.forEach(boxes => {
    let label = boxes.querySelector(".label");
    let content = boxes.querySelector(".content");

    label.addEventListener("click", () => {
        
        for (var i = 0; i < box.length; i++) {
            if (box[i] != boxes) {
                box[i].classList.remove("active");
            }
            else {
                boxes.classList.toggle('active');       
            }
        }
        
    })
});



const ctx = document.getElementById('firstChart');
const sChart=document.getElementById('secondChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Product 1', 'Product 2'],
    datasets: [{
     backgroundColor:['#165BAA', '#A155B9'],
      data: [55, 45],
      borderWidth: 0,
      rotation:100
    }]
  }

}
);


new Chart(sChart, {
    type: 'bar',
    data:{
        labels: ["Product 1","Product 2"],
        datasets:[
            {
                backgroundColor:['#165BAA', '#A155B9'],
                data: [55,45],
                label: ' Product List'
            }
        ]
    }
})



const listItems = document.querySelectorAll(".sidebar-list li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    let isActive = item.classList.contains("active");

    listItems.forEach((el) => {
      el.classList.remove("active");
    });

    if (isActive) item.classList.remove("active");
    else item.classList.add("active");
  });
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

logo.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
/*  user btn  */
const userBtn= document.getElementById('userBtn');

const userDetails= document.getElementById('userDetails');

userBtn.addEventListener('click',() =>{
  userDetails.style.display=userDetails.style.display==='none'? 'block':'none';
});

const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [9,9,10,9,11,12,12,11,10,9,8];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor:"rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options:{
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }}
});
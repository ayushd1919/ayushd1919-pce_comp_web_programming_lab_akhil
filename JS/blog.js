const postContainer = document.querySelector('.post-container');
let blogData = [
    {
        id: 1,
        post: "gym",
        link: "https://www.keepitsimpelle.com/blog/",
        img : "./image/blog/gymb1.png",
        category: "Gym GUidence",
        title: "Keep It simple",
        desc: "is gorgeously designed blog that celebrates the feats our human bodies can achieve. The blog owner is Elle, a UK-based ..",
        profileimg: "./image/blog/gymb1.png",
   
    },
    {
        id: 2,
        post: "diet",
        link: "https://www.klook.com/en-MY/blog/penang-hill-restaurants/",
        img : "./image/blog/dieta1.jpg",
        category: "Diet and  Fitnees",
        title: "Nutrition Facts",
        desc: "Michael Greger M.D. breaks down the latest in health and nutrition-related research as published in peer-reviewed ...",
        profileimg: "./image/blog/dieta1.jpg",
        author: "Michael Grege",
    },
    {
        id: 3,
        post: "diet",
        link: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=2200905&q=site:http%3A%2F%2Fnutritionstripped.com%2Ffeed%2F",
        img : "./image/blog/dieta5.jpg",
        category: "Diet and  suppliment",
        title: "Best suggestion",
        desc: "Articles on mindset, nourishment, lifestyle and health. McKel Kooienga is the founder of Nutrition Stripped. Her work focuses on empowering others to...",
        profileimg: "./image/blog/dieta2.jpg",
        author: "Kim Tae-Hyung",
    },
    {
        id:4,
        post: "gym",
        link: "https://www.jessikneeland.com/blog",
        img : "./image/blog/gymb2.png",
        category: "work out",
        title: "Body image issues are not just about how you look. ",
        desc: "You struggle with body image issues for a reason. ",
        profileimg: "./image/blog/gymb2.png",
        author: "Jessi kneelland",
    },
    {
        id: 5,
        post: "diet",
        link: "https://www.feedspot.com/reader/fe/449188",
        img : "./image/blog/dieta6.jpg",
        category: "Healthy Diet",
        title: " Kath Eats Blog",
        desc: "A blog about nutrition, food, recipes, lifestyle, parenting, home organizing, healthy mindset and fun! Here you'll find a healthy mix..",
        profileimg: "./image/blog/dieta3.jpg",
        author: "",
    },
   
    
    {
        id: 6,
        post: "gym",
        link: "https://www.garmin.com/en-US/blog/fitness/strength-training-101-a-simple-guide-on-how-to-get-started/",
        img : "./image/blog/gymb3.jpeg",
        category: "work out",
        title: "Strength Training 101: A Simple Guide on How to Get Started",
        desc: "The National Academy of Sports Medicine trusts Garmin smartwatches to track their strength training progress. ",
        profileimg: "./image/blog/gymb3.jpeg",
        author: "Jones & Bartlett",
    },
    {
        id: 7,
        post: "diet",
        link: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=1964741&q=site:https%3A%2F%2Fwww.realmomnutrition.com%2Ffeed%2F",
        img : "./image/blog/dieta4.jpg",
        category: "healthy food",
        title: "Real mom NUtrition",
        desc: "Covers simple, stress-free strategies for feeding your kids that'll make mealtime enjoyable again. Author Sally Kuzemchak",
        profileimg: "./image/blog/dieta4.jpg",
        author: "Sally Kuzemchak",
    },
   
    {
        id: 8,
        post: "gym",
        link: "https://www.klook.com/en-MY/blog/kl-restaurants-special-occasions/",
        img : "./image/blog/gymb4.png",
        category: "Work out",
        title: "Start Sleeping Better Today, Not Tonight",
        desc: " A good night’s sleep makes everything better. Sleep is a vital time of restoration and rejuvenation. It is only when you are asleep that...",
        profileimg: "./image/blog/gymb4.png",
        author: "",
    },
    
]

function displayMenuItems(blogData){
    let displayMenu = blogData.map(function(item){
      return ` <div class="post-box ${item.post}">
            <a href="${item.link}">
                <img src=${item.img} alt="" class="post-img">
            </a>
            <h2 class="post-category">${item.category}</h2>
            <a href="${item.link}" class="post-title">${item.title}</a>
            <p class="post-description">
                ${item.desc}
            </p>
            <div class="post-profile">
                <img src=${item.profileimg} alt="" class="profile-img">
                <span class="profile-name">${item.author}</span>
            </div>
        </div>`;
    });
    displayMenu = displayMenu.join("");
    postContainer.innerHTML = displayMenu;
};
displayMenuItems(blogData);

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'all'){
            $('.post-box').show('1000')
        }
        else{
            $('.post-box').not('.' + value).hide('1000')
            $('.post-box').filter('.' + value).show('1000')
        }
    });

    $('.filter-item').click(function(){
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    })
})
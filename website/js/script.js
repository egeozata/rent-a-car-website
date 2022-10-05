let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");
let navbar = document.querySelector(".navbar")
let menuBtn = document.querySelector("#menu-btn")

searchBtn.addEventListener("click", function() {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if (                                      //includes-- içeriyorsa true içermiyorsa false döndürür
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)
        ) { 
            searchForm.classList.remove("active");
        }
        
    })
});
menuBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if (                                      
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)
        ) { 
            navbar.classList.remove("active");
        }
        
    })
});

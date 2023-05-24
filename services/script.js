// $(document).ready(function() {
//     $('icon').click(function() {
//         $('icon.active').removeClass("active");
//         $(this).addClass("active");
//     });
// });

$(".icon").click(function() {
              
    // Select all list items
    var listItems = $(".icon");
      
    // Remove 'active' tag for all list items
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
      
    // Add 'active' tag for currently selected item
    this.classList.add("active");
});
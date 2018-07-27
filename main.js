// console.log("loading");

// document.addEventListener('touchstart', (event) => {
//     console.log("touchstart");
// });

// document.addEventListener('touchmove', function(e) {
//     e.preventDefault();
// }, { passive: false });

// document .addEventListener('touchend', function(e) {
//     console.log('touchend');
// }, { passive: false });


// document.addEventListener('click', (event) => {
//     console.log("click");
// });


// document.addEventListener('touchmove', (event) => {
//     console.log('touchmove');
// });


monitorEvents(document.body);
monitorEvents(document.getElementById("sub-frame").contentDocument);

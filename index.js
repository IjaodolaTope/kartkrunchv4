const myInterval = setInterval(scrollFunction, 13000);

function scrollFunction(){
    setTimeout(function()
{document.getElementById("scrollCrcl").scroll(300, 0);}, 1000);

setTimeout(function()
{document.getElementById("scrollCrcl").scroll(500, 0);}, 4000);

// const elemnt = document.getElementById("container");
setTimeout(function()
{document.getElementById("scrollCrcl").scroll(700, 0);}, 6000);

setTimeout(function()
{document.getElementById("scrollCrcl").scroll(900, 0);}, 8000);

setTimeout(function()
{document.getElementById("scrollCrcl").scroll(1200, 0);}, 10000);

setTimeout(function()
{document.getElementById("scrollCrcl").scroll(1400, 0);}, 12000);

setTimeout(function()
{document.getElementById("scrollCrcl").scroll(1600, 0);}, 14000);

}

const myOut = setTimeout(visibleCarouIcons);
const myOut2 = setTimeout(invisibleCarouIcons, 3000);
const myInt2 = setInterval(visibleCarouIcons, 20000);
const myInt3 = setInterval(invisibleCarouIcons, 30000)

function visibleCarouIcons(){
    const collection = document.getElementsByClassName("link");

    for(let i = 0; i < collection.length; i++){
    collection[i].style.visibility ="visible";}
}

function invisibleCarouIcons(){
    const collection = document.getElementsByClassName("link");

    for(let i = 0; i < collection.length; i++){
    collection[i].style.visibility ="hidden";} 
}


// const iniInterval = setTimeout(myInterval, 5000)
const myInterval = setInterval(scrollCarouFunction, 20000);
const interCall = setTimeout(scrollCarouFunction, 4000)


function scrollCarouFunction(){
//     setTimeout(function()
// {document.getElementById("container").scroll(300, 0);}, 1000);

setTimeout(function()
{document.getElementById("container").scroll(500, 0);}, 2000);

// const elemnt = document.getElementById("container");
setTimeout(function()
{document.getElementById("container").scroll(700, 0);}, 7000);

setTimeout(function()
{document.getElementById("container").scroll(900, 0);}, 12000);

setTimeout(function()
{document.getElementById("container").scroll(0, 0);}, 17000);

}

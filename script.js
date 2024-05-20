const scroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});
var tl=gsap.timeline()

tl.to("#pages",{
    y:"100vh",
    scale:0.6,
    duration:0,
})
tl.to("#pages",{
    y:"-50vh",
    duration:1,
    // delay:1,
})
tl.to("#pages",{
    y:"0vh",
    scale:1,
    duration:2, 
});
$(document).ready(function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#container'),
        smooth: true
    });
    // var tl = gsap.timeline()

    // tl.to("#pages", {
    //     y: "100vh",
    //     scale: 0.6,
    //     duration: 0,
    // })
    // tl.to("#pages", {
    //     y: "-50vh",
    //     duration: 1,
    //     // delay:1,
    // })
    // tl.to("#pages", {
    //     y: "0vh",
    //     scale: 1,
    //     duration: 2,
    // });

    $.getJSON('./JSON/data.json', function (data) {
        let heroContent = '';
        data.forEach(function (item) {
            heroContent += `
                <div class="box">
                    <div class="box-top">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="box-down">
                        <h1>${item.name}</h1>
                        <a href="${item.codelink}" target="_blank">Check Code <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="${item.webview}" target="_blank">View Web-site <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
        });
        $('#hero').html(heroContent);
        scroll.update();
    });
    document.querySelector('#container').addEventListener('mousemove', eyeball);
    function eyeball() {
        var eye = document.querySelectorAll('.eye');
        eye.forEach(function (eye) {
            let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

            let radian = Math.atan2(event.pageX - x, event.pageY - y);
            let rotation = (radian * (180 / Math.PI) * -1) + 360;
            eye.style.transform = "rotate(" + rotation + "deg)"
        });
    }
});
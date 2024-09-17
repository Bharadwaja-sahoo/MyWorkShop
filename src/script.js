$(document).ready(function () {
    var tl = gsap.timeline()

    tl.to("#pages", {
        y: "100vh",
        scale: 0.6,
        duration: 0,
    })
    tl.to("#pages", {
        y: "-50vh",
        duration: 1,
        // delay:1,
    })
    tl.to("#pages", {
        y: "0vh",
        scale: 1,
        duration: 2,
    });

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
    });
});
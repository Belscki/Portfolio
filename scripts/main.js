//limpa campos
$('.user').val("")
$('.password').val("")
animateLogin()
async function animateLogin() {
    await new Promise(resolve => {
        anime({
            targets: '.user',
            borderWidth: ['2px', '3px'],
            borderColor: ['#111', '#0066FF'],
            delay: 1500,
            duration: 100,
            easing: 'linear',
            complete: resolve
        });
    })
    await new Promise(resolve => {
        const textUser = ["A", "r", "t", "h", "u", "r", "B", "e", "r", "g", "a", "m", "a", "s", "c", "k", "i"];
        (async function () {
            for (let e of textUser) {
                await new Promise((resolveTimeout) => {
                    let crt = $('.user').val();
                    setTimeout(() => {
                        $('.user').val(crt + e);
                        resolveTimeout();
                    }, 200);
                });
            }
            resolve();
        })();
    });
    await new Promise(resolve => {
        anime({
            targets: '.user',
            borderWidth: ['3px', '2px'],
            borderColor: ['#0066FF', '#111'],
            duration: 100,
            delay: 0,
            easing: 'linear',
            complete: resolve
        });
    });
    await new Promise(resolve => {
        anime({
            targets: '.password',
            borderWidth: ['2px', '3px'],
            borderColor: ['#111', '#0066FF'],
            delay: 0,
            duration: 100,
            easing: 'linear',
            complete: resolve
        });
    })
    await new Promise(resolve => {
        const passwordUser = ["*", "*", "*", "*", "*", "*", "*", "*"];
        (async function () {
            for (let e of passwordUser) {
                await new Promise((resolveTimeout) => {
                    var crt = $('.password').val();
                    setTimeout(() => {
                        $('.password').val(crt + e);
                        resolveTimeout();
                    }, 200);
                });
            }
            resolve();
        })();
    });
    await new Promise(resolve => {
        anime({
            targets: '.password',
            borderWidth: ['3px', '2px'],
            borderColor: ['#0066FF', '#111'],
            duration: 100,
            delay: 0,
            easing: 'linear',
            complete: resolve
        });
    });
    await new Promise(resolve => {
        anime({
            targets: '.btnLogin',
            borderWidth: ['2px', '3px'],
            borderColor: ['#111', '#0066FF'],
            delay: 0,
            duration: 100,
            easing: 'linear',
            complete: resolve
        });
    })
    await new Promise(resolve => {
        anime({
            targets: '.btnLogin',
            background: "#2f2f2f",
            delay: 0,
            duration: 100,
            easing: 'linear',
            complete: resolve
        });
    })
    await new Promise(resolve => {
        anime({
            targets: '.btnLogin',
            background: "#fff",
            borderWidth: ['3px', '2px'],
            borderColor: ['#0066FF', '#111'],
            duration: 100,
            delay: 0,
            easing: 'linear',
            complete: resolve
        });
    });
    openMainPage()
}

async function openMainPage() {
    await new Promise(resolve =>{
        anime({
            targets:'#login input, label, h1',
            opacity: 0,
            duration: 1500,
            complete: () =>{
                $(".user").toggle()
                $(".password").toggle()
                $(".btnLogin").toggle()
            }
        })
        anime({
            targets: '#login',
            padding: "100%",
            duration: 2000,
            easing:"linear",
            complete: resolve
        })
    })
    await new Promise(resolve =>{
        console.log("Caiu")
    })
}
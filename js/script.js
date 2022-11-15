

let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');

menu.onclick = () => {
    nav.classList.toggle('active');
}

window.addEventListener('scroll', function () {
    nav.classList.remove('active');
})


function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let comment = "name : " + name + "<br> email : " + email + "<br> comment : " + message;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "htetwaiyanaung56@gmail.com",
        Password: "E3C0C2861EF985F05A97C229836C05546F5E",
        To: 'htetwaiyanaung.sgg@gmail.com',
        From: email,
        Subject: "From my portfolio",
        Body: comment
    }).then(
        message => location.reload()
    );
}

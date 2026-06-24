
    const loginbtn = document.getElementById("logn-btn");
    const loginmodal = document.getElementById("lgn-modal");
    const close = document.getElementById("close-lgn");
    const close1 = document.getElementById("close-sinup");
    const signup1 = document.getElementById("signupModal");

         loginbtn.addEventListener("click", () => {
        loginmodal.style.display = "block";
        });

        close.addEventListener("click", () => {
        loginmodal.style.display = "none";
        });

        close1.addEventListener("click", () => {
        signup1.style.display = "none";
        });


    // Signup Modal
    const signupModal = document.getElementById("signupModal");
    const signupClose = document.getElementById("signupClose");

    // Forms
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("login-form");

    // Links
    const openSignup = document.getElementById("openSignup");
    const openLogin = document.getElementById("openLogin");


        // Login -> Signup

        openSignup.addEventListener("click", (e) => {

        e.preventDefault();

    loginmodal.style.display = "none";

    signupModal.style.display = "block";

        });


        // Signup -> Login

        openLogin.addEventListener("click", (e) => {

        e.preventDefault();

    signupModal.style.display = "none";

    loginmodal.style.display = "block";

        });


        // Signup Logic

        signupForm.addEventListener("submit", (e) => {

        e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    let users =
    JSON.parse(localStorage.getItem("users"))
    || [];

    const alreadyExists =
                users.some(user => user.email === email);

    if (alreadyExists) {

        alert("User already exists!");

    return;
            }

    users.push({
        name,
        email,
        password
    });

    localStorage.setItem(
    "users",
    JSON.stringify(users)
    );

    alert("Signup Successful");
    localStorage.setItem("isLoggedIn", "true");

    localStorage.setItem("currentUser", name);

    window.location.href = "././pages/dashboard.html";

        });



        // Login Logic

        loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

    const email =
    document.getElementById("login-email").value;

    const password =
    document.getElementById("lgn-pswrd").value;

    let users =
    JSON.parse(localStorage.getItem("users"))
    || [];

    const user =
                users.find(user =>

    user.email === email &&
    user.password === password

    );

    if (user) {

        alert("Login Successful");

    localStorage.setItem("isLoggedIn", "true");

    localStorage.setItem("currentUser", user.name);

    window.location.href = "././pages/dashboard.html";

            }
    else {

        alert("Invalid Email or Password");


            }

        });

    const dashboardLink =
    document.getElementById("dashboard-link");

    const categoriesLink =
    document.getElementById("Categories-link");

    const leaderboardLink =
    document.getElementById("leaderboard-link");


    function checkLogin(event) {

            const isLoggedIn =
    localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        event.preventDefault();

    loginmodal.style.display = "block";

            }

        }


    dashboardLink.addEventListener(
    "click",
    checkLogin
    );

    categoriesLink.addEventListener(
    "click",
    checkLogin
    );

    leaderboardLink.addEventListener(
    "click",
    checkLogin
    );


    //startquizz pop up logic

    const startQuizBtn =
    document.getElementById("start-quizz");

    startQuizBtn.addEventListener("click", function (e) {

            const isLoggedIn =
    localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        e.preventDefault();

    alert("Please Login or Sign Up first to start the quiz!");

            }
    else {

        window.location.href =
        "././pages/categories.html";

            }

        });

    //logic for quick links of navbar pop up

    const quicklinks = document.querySelectorAll(".quick-link");

        quicklinks.forEach(link => {
        link.addEventListener('click', (e) => {

            if (!localStorage.getItem("isLoggedIn")) {
                e.preventDefault();
                alert("oops please login or signup first!!")
            }


        });
        });

       
        const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("lgn-pswrd");

togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Show password
        togglePassword.src = "./images/view-img.png";
       
    }
    else{
         passwordInput.type = "password"; // Hide password
        togglePassword.src = "./images/hide-img.png"; // Change icon
    }
});

const themeIcon = document.getElementById("themeIcon");

themeIcon.addEventListener("click", () => {

    document.querySelector(".modal-ctn")
        .classList.toggle("dark-theme");

});
       
const icons =
document.querySelectorAll(".theme-icon");

icons.forEach(icon => {

    icon.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        icons.forEach(i => {

            if(document.body.classList.contains("dark-mode")){
                i.src = "./images/sun.png";
            }
            else{
                i.src = "./images/moon.png";
            }

        });

    });

});
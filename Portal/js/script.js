let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        if (inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxlength);
    };
});

// const url = 'https://fresh-linkedin-profile-data.p.rapidapi.com/get-linkedin-profile?linkedin_url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fwilliamhgates%2F&include_skills=false';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c31b66cb24msh921b63745dc8d9ap12706bjsn679b45f1c1e3',
// 		'X-RapidAPI-Host': 'fresh-linkedin-profile-data.p.rapidapi.com'
// 	}
// };

// try {
// 	const response =  fetch(url, options); 
// 	const result = response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// Assuming this script is in your login.html or register.html

// let signup = document.querySelector(".signup");
// let login = document.querySelector(".login");
// let slider = document.querySelector(".slider");
// let formSection = document.querySelector(".form-section");

// signup.addEventListener("click", () => {
// 	slider.classList.add("moveslider");
// 	formSection.classList.add("form-section-move");
// });

// login.addEventListener("click", () => {
// 	slider.classList.remove("moveslider");
// 	formSection.classList.remove("form-section-move");
// });

  







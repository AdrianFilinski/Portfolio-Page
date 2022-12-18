const tmobileExperience = document.querySelector('.experience-company__tmobile');
const empikExperience = document.querySelector('.experience-company__empik');
const description = document.querySelector('.description');
const empikDescription = document.querySelector('#empik_decription');
const date = document.querySelector('.date');

const header = document.querySelector('#header');

const themeSwitcher = document.querySelector('.theme-switcher');


const setEmpikExperience = () => {
    date.textContent = "2021.07 - 2022.02";
    description.textContent = "ipsum dolor sit amet consectetur adipisicing elitTenetur odio praesentium libero voluptate voluptatibus fugiat nisi accusantium, repellat ducimus nobis nemocorrupti molestiae quasi nesciunt, et voluptatem labore provident maxime.";
    empikExperience.classList.add('active');
    tmobileExperience.classList.remove('active');
};

const setTmobileExperience = () => {
    date.textContent = "2022.02 - Present";
    description.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati laudantium aspernatur facere tempora praesentium tenetur nam, quos nihil voluptas molestiae voluptatem eum ex repellat, esse corporis soluta rem modi ut."
    empikExperience.classList.remove('active');
    tmobileExperience.classList.add('active');
}

tmobileExperience.addEventListener('click', setTmobileExperience)
empikExperience.addEventListener('click', setEmpikExperience);

let i = 0;
const text = "Adrian Filiński";
let speed = 150;

const typeWriter = () => {
    if (i < text.length) {
        document.getElementById("typing").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


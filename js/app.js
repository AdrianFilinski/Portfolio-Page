const tmobileExperience = document.querySelector('.experience__company--tmobile');
const empikExperience = document.querySelector('.experience__company--empik');
const description = document.querySelector('.description');
const empikDescription = document.querySelector('#empik_decription');
const date = document.querySelector('.date');

const header = document.querySelector('#header');
const descriptionTools = document.querySelector('.description--tools');




const setEmpikExperience = () => {
    date.textContent = "2021.07 - 2022.02";
    description.textContent = "ipsum dolor sit amet consectetur adipisicing elitTenetur odio praesentium libero voluptate voluptatibus fugiat nisi accusantium, repellat ducimus nobis nemocorrupti molestiae quasi nesciunt, et voluptatem labore provident maxime.";
    descriptionTools.textContent = 'JavaScirpt, HTML, CSS, Synerise, Splio, SMSApi, Firebase, Selligent, SQL, Power BI.'
    empikExperience.classList.add('select');
    tmobileExperience.classList.remove('select');
};

const setTmobileExperience = () => {
    date.textContent = "2022.02 - Present";
    description.textContent = "Highly skilled in marketing automation, I have a holistic approach to build performant and great frontend campaigns user experiences and business values using"
    descriptionTools.textContent = 'JavaScirpt, HTML, CSS, Synerise, Exponea, Google Analytics.'
    empikExperience.classList.remove('select');
    tmobileExperience.classList.add('select');
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


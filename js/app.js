const tmobileExperience = document.querySelector('.experience__company--tmobile');
const empikExperience = document.querySelector('.experience__company--empik');
const description = document.querySelector('.description');
const empikDescription = document.querySelector('#empik_decription');
const date = document.querySelector('.date');
const header = document.querySelector('#header');
const descriptionTools = document.querySelector('.description--tools');


let i = 0;
const text = "Jestem Developerem Marketing Automation.";
let speed = 150;

const typeWriter = () => {
    if (i < text.length) {
        document.getElementById("typing").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


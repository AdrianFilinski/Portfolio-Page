const tmobileExperience = document.querySelector('.experience-company__tmobile');
const empikExperience = document.querySelector('.experience-company__empik');
const description = document.querySelector('.description');
const empikDescription = document.querySelector('#empik_decription');
const date = document.querySelector('.date');

// funckja, która dodaje klasę do experience i usuwa klasę active z drugiego
// zmienia content w date i description.

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


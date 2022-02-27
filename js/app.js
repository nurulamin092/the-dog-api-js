const loadTheDog = async () => {
    const url = `https://api.thedogapi.com/v1/breeds`;
    const res = await fetch(url);
    const data = await res.json();
    displayTheDog(data);
}
const displayTheDog = dogList => {
    const dogsInput = document.getElementById('dogs');
    const dogs = dogList.slice(0, 18);
    dogs.forEach(dog => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${dog.image.url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${dog.name}</h5>
            <p class="card-text">${dog.temperament}</p>
        </div>
        `;
        dogsInput.appendChild(div);
        console.log(dog);
    });
}
//loadTheDog()
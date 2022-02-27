const loadTheDog = () => {
    const url = `https://api.thedogapi.com/v1/breeds`;
    /*   const res = await fetch(url);
      const data = res.json();
      displayTheDog(data.dogs) */
    fetch(url)
        .then(res => res.json())
        .then(data => displayTheDog(data));
}
const displayTheDog = dogs => {
    const dogsInput = document.getElementById('dogs');
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
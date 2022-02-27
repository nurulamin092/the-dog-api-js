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
    dogs.forEach(dog => {
        console.log(dog);
    });
}
loadTheDog()
const form = document.querySelector('#inputForm');
const input = document.querySelector('input');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searcTitle = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searcTitle}`);
    let img = document.querySelectorAll('img');
    for (let i = 0; i !== img.length; i++) {
        img[i].remove();
    }
    addNewImages(res.data);
})

const addNewImages = (shows) => {
    for (result of shows) {
        if (result.show.image) {
            const newImg = document.createElement('IMG');
            newImg.src = result.show.image.medium;
            document.body.append(newImg);
        }
    }
}

// form.addEventListener('submit', function () {

// })





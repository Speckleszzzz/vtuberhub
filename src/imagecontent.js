const images = require.context('./images/postpics', true);
const imageList = images.keys().map(image => images(image));

var data = [];

const nameList = ["Ranjani", "Sara", "Shivani", "Sherwin","Jobi", "jawan", "shrii", "carzzz", "archana","RajuBai"];
const genreList = ["Anime","Anime","Anime","Anime","Fantasy","Fantasy","Fantasy","Cartoon","Realistic","3D"]
const Category = ["Female","Female","Female","Male","Kids","Kids","Female","Others","Female","Male"]

imageList.map((currImg, key) => {
    data.push({
        id: key,
        img: currImg,
        name: nameList[key], 
        genre : genreList[key],
        Category : Category[key]
    })
})

export default data;
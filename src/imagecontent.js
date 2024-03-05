const images = require.context('./images/postpics', true);
const imageList = images.keys().map(image => images(image));

var data = [];

const nameList = ["Akash", "Sherwin", "Akash", "Sherwin"];
const descList = ["A3d piece of art inspired by no one other than me hahahahahaah", "Sherwin composer", "Akash scammer", "Sherwin composer"];
const genreList = ["Cartoon","3D","Cartoon","Cartoon"]

imageList.map((currImg, key) => {
    data.push({
        id: key,
        img: currImg,
        name: nameList[key], 
        description : descList[key],
        genre : genreList[key]
    })
})

export default data;
import OilImage from './oil-image.png'


const home = (main) => {
    //image handling
    const image = new Image()
    image.src = OilImage

    //headline handling
    const headline = document.createElement('h2')
    const headlineText = 'Spoons\'s Oils';
    headline.innerText = headlineText;

    //description handling
    const description = document.createElement('p')
    const descriptionText = 'Welcome to the premier restaurant for high quality, freshly pressed oils. Whether you want to try something infused and adventurous, or just the high quality basics, we have something for you.'
    description.innerText = descriptionText
    main.appendChild(headline)
    main.appendChild(image)
    main.appendChild(description)
}



export default home
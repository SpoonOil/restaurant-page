const renderOrder = (main) => {
    const infoBlurb = document.createElement('p');
    infoBlurb.innerText = 'We accept orders internationally with 2 day shipping. An extra fee of 5$ for S&H is added to every order';

    const phoneHeader = document.createElement('h3');
    phoneHeader.innerText = 'Phone #'

    const phoneNum = document.createElement('p');
    phoneNum.innerText = '973-379-937'

    const contactHeader = document.createElement('h3');
    contactHeader.innerText = 'Contact Us With an Email!'

    const contactBody = document.createElement('p');
    contactBody.innerText = 'spoonsgoons@oil.com'

    main.appendChild(infoBlurb)
    main.appendChild(phoneHeader)
    main.appendChild(phoneNum)
    main.appendChild(contactHeader)
    main.appendChild(contactBody)
}

export default renderOrder
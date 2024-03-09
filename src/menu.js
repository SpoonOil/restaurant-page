const renderMenu = (main) => {
    const menuItems = [['spicy oil', 14], ['grassy oil', 16], ['rich oil', 13],['garlic infused oil', 20], ['lemon infused oil', 17]]
    const menu = document.createElement('table')
    for (let item of menuItems) {
        const row = document.createElement('tr');
        for (let data of item) {
            const td = document.createElement('td');
            td.innerText = data;
            row.appendChild(td);
        }
        menu.appendChild(row)
    }
    main.appendChild(menu)
}

export default renderMenu
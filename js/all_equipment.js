for(i = 0; i < localStorage.length; i++){
    const equipment = JSON.parse(localStorage.getItem(localStorage.key(i)))
    
    let card_element = document.createElement("div")
    let left_column_div = document.createElement("div")
    let image = document.createElement("img")

    card_element.setAttribute("class", "card")
    left_column_div.setAttribute("class", "left-column")
    image.src = "data:image/png;base64," + equipment.image

    for(const attribute in equipment){
        if(attribute == "image")continue;

        let spec_div = document.createElement("div")
        let attribute_span = document.createElement("span")
        let value_span = document.createElement("span")
        
        spec_div.setAttribute("class", "spec")
        attribute_span.setAttribute("class", "E-attribute")
        value_span.setAttribute("class", "E-value")
        
        attribute_span.textContent = attribute + ": "
        value_span.textContent = equipment[attribute]

        spec_div.appendChild(attribute_span)
        spec_div.appendChild(value_span)

        left_column_div.appendChild(spec_div)
    }
    card_element.appendChild(left_column_div)
    card_element.appendChild(image)

    document.getElementById("cards-wrapper").appendChild(card_element)

}


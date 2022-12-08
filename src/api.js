import { render } from "@testing-library/react";
import { cloneElement, createElement } from "react";


function fetchApiData () {
    let link = document.querySelector(".input--link").value;
    let shortenLink;
    fetch('https://api.shrtco.de/v2/shorten?url=' + link).then((response) => {

            response.json().then((data) => {
                console.log(data)
                shortenLink = data.result.short_link;
                console.log(shortenLink);

                let newElement = document.createElement("div");
                newElement.className = "inner--shorten"
                let childDiv = document.createElement("div");
                childDiv.className = "shorten--link--and--copy"
                let linkInputed = document.createElement("a");
                linkInputed.href = link;
                linkInputed.innerHTML = link;
                let linkShortned = document.createElement("a");
                linkShortned.href = shortenLink;
                linkShortned.innerHTML = shortenLink;
                let button = document.createElement("button");
                button.innerHTML = "Copy";
                button.className = "copy--button";
                button.addEventListener('click', copyLink);
                newElement.appendChild(linkInputed);
                newElement.appendChild(childDiv);
                childDiv.appendChild(linkShortned);
                childDiv.appendChild(button);
            
            
                console.log (newElement);
                   
                let local = document.querySelector(".shorten--box");
                local.after(newElement)

            })
    })

    
}

 function copyLink(event) {
    const e = event;
    console.log(e);
    const linkCopy = e.path[1].childNodes[0].innerText
    console.log(linkCopy);
    navigator.clipboard.writeText(linkCopy);

    const buttonCopy = e.path[0];
    if (buttonCopy.innerHTML == "Copy") { 
    
        const textButton = document.querySelectorAll('.copy--button');
        for (let i = 0; i < textButton.length; i++) {
            textButton[i].innerHTML = "Copy"
        }

        buttonCopy.innerHTML = "Copied!";

    }   else {
            buttonCopy.innerHTML = "Copy";
        }

 };




export default fetchApiData;
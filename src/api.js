
function fetchApiData () {
    let link = document.querySelector(".input--link").value;
    fetch('https://api.shrtco.de/v2/shorten?url=' + link).then((response) => {

            response.json().then((data) => {
                console.log(data)
                console.log(data.result.short_link);
            })
    })
  
}


export default fetchApiData;
var url = "https://pokeapi.co/api/v2/pokemon"

var pokemonList;

if (localStorage.getItem("pokemonName") === null || undefined) {

    async function getData() {
        try {
            pokemonList = [];
            let res = await fetch(url);
            let data = await res.json();

            console.log(data);
            pokemonList.push(data);
            localStorage.setItem("pokemonName", JSON.stringify(pokemonList))

        } catch (err) {
            console.log(err)
        }
    }
    getData();
} else {
    pokemonList = JSON.parse(localStorage.getItem("pokemonName"))
    displayNames();
}

function displayNames() {

    pokemonList[0].results.forEach(function(ele) {

        let container = document.createElement("tr");
        container.setAttribute("class", "rows");
        container.innerText = ele.name;

        document.querySelector("#table").append(container)

        console.log(ele.name)

    });

}
function Results() {


}
const API = "https://rickandmortyapi.com/api/character/?page=1";
const content = null || document.getElementById("content");
const options = {
    // The path to the file to be translated.
    method: 'GET',
    Headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const data = await fetchData(API);
        
        let view = `
        ${data.results.map(character => `
            <div class="group relative">
                    <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${character.image}" alt="${character.name}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${character.name}
                        <p class="card-text">Especie : ${character.species}</p>
                    </h3>
                    </div>
                </div>
        `).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})()

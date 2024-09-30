const UNSPLASH_API_KEY = 'MAgBnqhbYt-c48MtyllnFeFZzLUxBw2RVkDz1LHadMk';
const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&count=3`;

// Función para cargar fotos desde la API de Unsplash en la página de versiones
async function loadVersions() {
    try {
        const response = await fetch(UNSPLASH_URL);
        const data = await response.json();
        const gallery = document.getElementById('gallery');

        // Iterar sobre las fotos devueltas por la API y añadirlas a la galería
        data.forEach((photo) => {
            const repo = document.createElement('div');
            repo.classList.add('col-lg-4', 'col-md-6', 'mb-4');

            repo.innerHTML = `
                <div class="gallery-item">
                    <img src="${photo.urls.small}" alt="${photo.alt_description}" class="img-fluid">
                    <div class="file-info">
                        <p>${photo.alt_description || "Imagen sin descripción"}</p>
                        <span>JPG</span>
                    </div>
                </div>
            `;
            gallery.appendChild(repo);
        });
    } catch (error) {
        console.error('Error al cargar las imágenes desde Unsplash', error);
    }
}

// Llamar a la función para cargar las imágenes cuando la página se cargue
document.addEventListener('DOMContentLoaded', loadVersions);

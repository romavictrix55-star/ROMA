
const quotes = [
    { text: "Veni, vidi, vici.", author: "Julio César" },
    { text: "Alea iacta est.", author: "Julio César" },
    { text: "Et tu, Brute?", author: "Julio César (según la tradición)" },
    { text: "Prefiero ser el primero en una aldea que el segundo en Roma.", author: "Julio César" }
];

const curiosities = [
    "César fue secuestrado por piratas en su juventud. Durante su cautiverio, bromeó con ellos diciendo que los crucificaría, y cumplió su promesa tras ser liberado.",
    "Fue un escritor talentoso. Sus obras más conocidas son <i>Commentarii de Bello Gallico</i> (Comentarios sobre la Guerra de las Galias) y <i>Commentarii de Bello Civili</i> (Comentarios sobre la Guerra Civil).",
    "El mes de julio (July) lleva su nombre en su honor, ya que nació en ese mes.",
    "Se le atribuye la reforma del calendario romano, creando el calendario juliano, que fue utilizado hasta la introducción del calendario gregoriano en 1582."
];

const inscriptions = [
    {
        title: "Inscripción de Myra (Asia Menor)",
        text: `Θεὸν Σεβαστὸν θεοῦ υἱο[ν]
Καίσαρα αὐτοκράτορα γῆς
καὶ θαλάσης, τὸν εὐεργέτη[ν]
καὶ σωτῆρα τοῦ σύνπαντο[ς]
κόσμου Μυρέων ὁ δῆμος.`,
        translation: `Al dios Augusto, hijo del dios
César, imperator de la tierra
y del mar, benefactor
y salvador de absolutamente todo
el mundo, el pueblo de Myra.`
    }
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('random-content-sidebar');
    if (sidebar) {
        // Display a random quote
        const randomQuote = getRandomItem(quotes);
        sidebar.innerHTML += `
            <div class="sidebar-card">
                <h3>Cita del Día</h3>
                <p>"${randomQuote.text}"</p>
                <p class="author">- ${randomQuote.author}</p>
            </div>
        `;

        // Display a random curiosity
        const randomCuriosity = getRandomItem(curiosities);
        sidebar.innerHTML += `
            <div class="sidebar-card">
                <h3>Curiosidad</h3>
                <p>${randomCuriosity}</p>
            </div>
        `;

        // Display a random inscription
        const randomInscription = getRandomItem(inscriptions);
        sidebar.innerHTML += `
            <div class="sidebar-card">
                <h3>Inscripción</h3>
                <h4>${randomInscription.title}</h4>
                <p><b>Texto Griego:</b></p>
                <pre><code>${randomInscription.text}</code></pre>
                <p><b>Traducción:</b></p>
                <p>${randomInscription.translation}</p>
            </div>
        `;
    }
});

const quotes = [
    { text: "Veni, vidi, vici.", author: "Julio César" },
    { text: "Alea iacta est.", author: "Julio César" },
    { text: "Et tu, Brute?", author: "Julio César (según la tradición)" },
    { text: "Prefiero ser el primero en una aldea que el segundo en Roma.", author: "Julio César" },
    { text: "¡Varo, devuélveme mis legiones!", author: "Julio César" },
    { text: "Divide y obtén el poder.", author: "Julio César" },
    { text: "Amo el nombre del honor, más de lo que temo a la muerte.", author: "Julio César" },
    { text: "Lo que deseamos, lo creemos fácilmente, y lo que pensamos, imaginamos que otros piensan.", author: "Julio César" },
    { text: "No son estos hombres bien alimentados y con pelo largo los que temo, sino el pálido y el hambriento.", author: "Julio César" },
    { text: "He vivido suficiente, tanto en años como en logros.", author: "Julio César" },
    { text: "En la guerra, los eventos de importancia son el resultado de causas triviales.", author: "Julio César" },
    { text: "¿Qué muerte es la preferible por todos? La inesperada.", author: "Julio César" },
    { text: "He vivido lo suficiente para satisfacer a ambos, naturaleza y gloria.", author: "Julio César" },
    { text: "Los hombres en algún punto son maestros de su destino.", author: "Julio César" },
    { text: "La muerte, un final necesario, vendrá cuando venga.", author: "Julio César" },
    { text: "Soy constante, como la estrella en el norte.", author: "Julio César" },
    { text: "Es mejor morir que vivir esperando la muerte.", author: "Julio César" },
    { text: "No ha aprendido la lección de la vida, aquél que cada día no supera un miedo.", author: "Julio César" },
    { text: "Toda Galia está dividida en tres partes.", author: "Julio César" },
    { text: "Es excelente tener la fuerza de un gigante, pero es tiránico usarla como un gigante.", author: "Julio César" },
    { text: "Todos los malos precedentes comienzan como medidas justificadas.", author: "Julio César" },
    { text: "La causa es: mi voluntad. No iré. Eso es suficiente para satisfacer al senado.", author: "Julio César" },
    { text: "Los dioses hacen esto en la vergüenza de la cobardía.", author: "Julio César" },
    { text: "El César debe ser una bestia sin corazón.", author: "Julio César" },
    { text: "Oigo un cántico, más agudo que toda la música, grita ¡César!", author: "Julio César" },
    { text: "Muchos de ustedes hoy aquí lucharon contra mí, muchos de ustedes desearon mi muerte, muchos de ustedes tal vez aun la desean.", author: "Julio César" },
    { text: "Opónganse a mí y Roma no los perdonará una segunda vez.", author: "Julio César" },
    { text: "Esta disputa entre ustedes debe terminar, Roma quiere que ambos estén en paz.", author: "Julio César" },
    { text: "Mientras sea capaz de subirse a un caballo, ¡Es peligroso!", author: "Julio César" },
    { text: "¿Pueden imaginar un sacrilegio más terrible, que el que nuestra amada república esté en las manos de unos dementes?", author: "Julio César" },
    { text: "Estoy dispuesto a recurrir a lo que sea, a someterme a cualquier cosa, por el bien de todo el pueblo.", author: "Julio César" },
    { text: "De todas las maravillas que aún he oído, me parece extraño que los hombres tengan miedo.", author: "Julio César" },
    { text: "Siempre he considerado la dignidad de la República de mayor importancia que la vida.", author: "Julio César" },
    { text: "Sin entrenamiento, no existe el conocimiento. Sin conocimiento, no existe la confianza. Sin confianza, la victoria no existe.", author: "Julio César" },
    { text: "Cuando los tambores de guerra hayan alcanzado su punto más crítico, la sangre hierva con odio y la mente esté totalmente cerrada, el líder no tendrá la necesidad de apoderarse de los derechos de los ciudadanos.", author: "Julio César" },
    { text: "El enemigo más grande siempre se esconderá en el último lugar en el que buscarías.", author: "Julio César" },
    { text: "Es mejor sufrir una vez que estar en un sufrimiento perpetuo.", author: "Julio César" },
    { text: "El que conquista dos veces es quien muestra misericordia a los conquistadores.", author: "Julio César" },
    { text: "En extremo peligro, el miedo no se compadece.", author: "Julio César" },
    { text: "Existe una marea en los asuntos de los hombres, que tomada en el diluvio conduce a la fortuna.", author: "Julio César" },
    { text: "Déjame correr y lucharé con cosas que todos piensan que son imposibles.", author: "Julio César" },
    { text: "Es un derecho de guerra para los conquistadores tratar como les plazca a aquellos a los que han conquistado.", author: "Julio César" },
    { text: "Galia es sometida.", author: "Julio César" },
    { text: "También existen animales que se llaman alces… tienen piernas sin articulaciones ni ligaduras, no se acuestan con el propósito de descansar… los árboles le sirven de cama… recostados solo un poco descansan.", author: "Julio César" },
    { text: "De todos estos, los Belgas son los más fuertes.", author: "Julio César" },
    { text: "Creer es la esencia de la vida.", author: "Julio César" },
    { text: "Vamos al sitio donde los dioses nos han mostrado el camino y la injusticia de nuestros enemigos nos llama.", author: "Julio César" },
    { text: "En un mar tan lleno, ahora estamos a flote, y debemos seguir la corriente.", author: "Julio César" },
    { text: "La diferencia entre una República y un Imperio es la lealtad del ejército.", author: "Julio César" },
    { text: "No existen trucos en la fe simple.", author: "Julio César" },
    { text: "Si fallo, es simplemente porque tengo demasiado orgullo y ambición.", author: "Julio César" },
    { text: "Como regla general, lo que está lejos de la vista perturba las mentes de los hombres, mucho más que aquello que pueden ver.", author: "Julio César" },
    { text: "El mal que hacen los hombres, vive después de ellos; el bien a menudo es enterrado con sus huesos.", author: "Julio César" },
    { text: "No guardo rencor y no busco venganza. Simplemente tengo esta demanda… que se unan conmigo en la construcción de una nueva Roma, una Roma que ofrezca justicia, paz, y la tierra a todos sus ciudadanos, no solo de unos pocos privilegiados.", author: "Julio César" },
    { text: "Era costumbre de los dioses de vez en cuando brindar prosperidad y una larga impunidad a los hombres a quienes tenían la intención de castigar por sus crímenes, para que en una vuelta de la suerte los hiciera sufrir más.", author: "Julio César" },
    { text: "Llora por la destrucción y deja caer a los perros de guerra.", author: "Julio César" },
    { text: "Quienes están alrededor de las figuras públicas ni siquiera deberían estar bajo sospecha.", author: "Julio César" },
    { text: "La suerte, que tiene un gran poder en varios asuntos, especialmente en la guerra, puede provocar grandes cambios en una situación donde existan muy pocas fuerzas.", author: "Julio César" },
    { text: "En el futuro recordarán que solo yo y nadie más les ofreció misericordia.", author: "Julio César" },
    { text: "Debemos ganar o morir.", author: "Julio César" },
    { text: "¡Senadores! La guerra ha terminado.", author: "Julio César" },
    { text: "Es más fácil encontrar hombres voluntarios para morir, que encontrar aquellos que están dispuestos a soportar el dolor con paciencia.", author: "Julio César" },
    { text: "Ven, mi mano derecha, que este oído es sordo y dime lo que verdaderamente piensas de él.", author: "Julio César" },
    { text: "El César no hace mal, no sin causa.", author: "Julio César" },
    { text: "Somos dos leones hechos camada en un día, y yo, el más antiguo y terrible.", author: "Julio César" },
    { text: "El César saldrá adelante. Las cosas que me amenazan nunca han visto más que mi espalda, cuando ellas ven la cara del César, desaparecen.", author: "Julio César" },
    { text: "El peligro sabe bien que el César es más peligroso que él.", author: "Julio César" },
    { text: "Sólo es arrogancia si fallo.", author: "Julio César" },
    { text: "No me importa si me respetan, mientras me teman.", author: "Julio César" },
    { text: "Todos los hombres que reflexionan sobre los asuntos controversiales deberían ser libres de odio, amistad, ira y pena.", author: "Julio César" },
    { text: "Encontré Roma, una ciudad de ladrillos y la dejé echa una ciudad de mármol.", author: "Julio César" },
    { text: "Las grandes cosas deben realizarse sin dudar, así las posibles dificultades no serán capaces de detenerte.", author: "Julio César" },
    { text: "Incluso ahora podemos dar marcha atrás. Pero una vez que hayamos cruzado ese puente, todo deberá ser decidido por las armas.", author: "Julio César" },
    { text: "Cassius tiene una mirada amarga y hambrienta; piensa demasiado: los hombres así son peligrosos.", author: "Julio César" },
    { text: "El valiente nunca saborea la muerte salvo una vez.", author: "Julio César" },
    { text: "Los hombres de buena gana creen en lo que desean.", author: "Julio César" },
    { text: "La mujer del César debe estar por encima de toda sospecha.", author: "Julio César" },
    { text: "La suerte está echada.", author: "Julio César" },
    { text: "Preferiría estar el primero en una aldea que el segundo en Roma.", author: "Julio César" },
    { text: "Nada es más fácil que censurar a los muertos.", author: "Julio César" },
    { text: "Nadie es tan valiente que no se ve perturbado por algo inesperado.", author: "Julio César" },
    { text: "¿Tú también, Bruto, hijo mío?", author: "Julio César" },
    { text: "Nada es tan difícil que no se pueda conseguir con fortaleza.", author: "Julio César" },
    { text: "Vine, vi, conquisté.", author: "Julio César" }
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

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Show button after scrolling down 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
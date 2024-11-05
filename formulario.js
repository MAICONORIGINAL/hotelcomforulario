// formulario.js

// Função para redirecionar ao formulário de reserva
function reservarQuarto() {
    alert('Você será redirecionado para a página de reservas!');
    window.location.href = 'https://www.exemplo.com/reserva';
}

// Função para chamada
function ligarAgora() {
    alert('Ligando para (31) 000000...');
    window.location.href = 'tel:+*******';
}

// Carregar mapa (pode ser substituído por um Google Maps embed)
function carregarMapa() {
    document.getElementById('map').innerHTML = '<iframe src="https://www.google.com/maps/embed/v1/place?q=Hotel+MAICON+Belo+Horizonte&key=YOUR_GOOGLE_MAPS_API_KEY" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
}

// Calcula o total estimado de uma reserva
function calcularTotalEstimado() {
    const numNoitesInput = document.getElementById('num_noites');
    const numHospedesInput = document.getElementById('num_hospedes');
    const tipoQuartoSelect = document.getElementById('tipo_quarto');
    const totalEstimadoInput = document.getElementById('total_estimado');

    const numNoites = parseInt(numNoitesInput.value);
    const numHospedes = parseInt(numHospedesInput.value);
    const tipoQuarto = tipoQuartoSelect.value;

    // Preços fictícios para demonstração - substitua por seus preços reais
    let precoPorNoite = 0;
    if (tipoQuarto === 'simples') {
        precoPorNoite = 100;
    } else if (tipoQuarto === 'duplo') {
        precoPorNoite = 150;
    } else if (tipoQuarto === 'triplo') {
        precoPorNoite = 200;
    } else if (tipoQuarto === 'suite') {
        precoPorNoite = 300;
    }

    const totalEstimado = numNoites * precoPorNoite * numHospedes;
    totalEstimadoInput.value = 'R$ ' + totalEstimado.toFixed(2);
}

// Chama a função para carregar o mapa quando a página carrega
window.onload = function() {
    carregarMapa();
    const numNoitesInput = document.getElementById('num_noites');
    const numHospedesInput = document.getElementById('num_hospedes');
    const tipoQuartoSelect = document.getElementById('tipo_quarto');
    numNoitesInput.addEventListener('input', calcularTotalEstimado);
    numHospedesInput.addEventListener('input', calcularTotalEstimado);
    tipoQuartoSelect.addEventListener('change', calcularTotalEstimado);

    // Calcula o total estimado inicial
    calcularTotalEstimado();
}

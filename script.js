// ========== CÓDIGO DO MENU ==========
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    // Abrir/Fechar menu
    menuIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Fechar menu ao clicar fora
    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    // Animar itens do menu
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-3px)";
        });

        item.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
        });
    });

    // ========== ANIMAIS DE PODER ==========
    const powerAnimals = [
        { emoji: '🐺', name: 'Lobo', meaning: 'Guia espiritual, inteligência social, conexão com a intuição, independência e comunicação com a matilha.' },
        { emoji: '🦅', name: 'Águia', meaning: 'Visão ampla, coragem, clareza de pensamento, conexão com o divino e liberdade espiritual.' },
        { emoji: '🐻', name: 'Urso', meaning: 'Força interior, introspecção, cura profunda, conexão com a Terra e ciclos naturais da vida.' },
        { emoji: '🦉', name: 'Coruja', meaning: 'Sabedoria ancestral, visão além do véu, mistério, intuição profunda e percepção noturna.' },
        { emoji: '🐬', name: 'Golfinho', meaning: 'Alegria, comunicação clara, harmonia emocional, inteligência e conexão com o inconsciente.' },
        { emoji: '🦌', name: 'Cervo', meaning: 'Sensibilidade, gentileza, renovação, graça, conexão com a pureza e novos começos.' },
        { emoji: '🐆', name: 'Pantera', meaning: 'Poder pessoal, mistério, confiança, proteção e capacidade de caminhar entre os mundos espirituais.' },
        { emoji: '🦊', name: 'Raposa', meaning: 'Astúcia, estratégia, adaptação a mudanças, inteligência rápida e soluções criativas.' },
        { emoji: '🐘', name: 'Elefante', meaning: 'Memória ancestral, sabedoria, resistência, proteção e força emocional.' },
        { emoji: '🐍', name: 'Serpente', meaning: 'Transformação, renovação, cura, energia kundalini e renascimento espiritual.' },
        { emoji: '🦁', name: 'Leão', meaning: 'Coragem, liderança, autoconfiança, poder pessoal e nobreza de espírito.' },
        { emoji: '🦅', name: 'Falcão', meaning: 'Visão clara, foco, determinação, velocidade e habilidade para enxergar além do óbvio.' },
        { emoji: '🐸', name: 'Sapo', meaning: 'Purificação, mudanças emocionais, adaptação, sorte e conexão com a água.' },
        { emoji: '🐢', name: 'Tartaruga', meaning: 'Paciência, estabilidade, longevidade, sabedoria terrena e proteção.' },
        { emoji: '🦋', name: 'Borboleta', meaning: 'Transformação, renascimento, leveza, beleza e evolução espiritual.' },
        { emoji: '🦂', name: 'Escorpião', meaning: 'Proteção, regeneração, mistério, poder oculto e intensidade emocional.' },
        { emoji: '🦜', name: 'Papagaio', meaning: 'Comunicação clara, sociabilidade, alegria, cores vibrantes e conexão com a verdade.' },
        { emoji: '🐿️', name: 'Esquilo', meaning: 'Planejamento, trabalho árduo, alegria, preparação e energia vital.' },
        { emoji: '🦏', name: 'Rinoceronte', meaning: 'Força bruta, resistência, estabilidade e conexão com instintos primitivos.' },
        { emoji: '🦡', name: 'Texugo', meaning: 'Determinação, resiliência, ferocidade, coragem e habilidade para enfrentar desafios.' },
        { emoji: '🐎', name: 'Cavalo', meaning: 'Liberdade, energia vital, resistência, poder espiritual e nobreza.' },
        { emoji: '🦩', name: 'Flamingo', meaning: 'Equilíbrio emocional, beleza, elegância, expressão pessoal e sociabilidade.' },
        { emoji: '🦍', name: 'Gorila', meaning: 'Liderança sábia, conexão com a família, força e respeito pela natureza.' },
        { emoji: '🦀', name: 'Caranguejo', meaning: 'Proteção, sensibilidade, intuição, ciclos emocionais e renascimento.' },
        { emoji: '🦚', name: 'Pavão', meaning: 'Beleza, autoexpressão, confiança, renascimento e espiritualidade elevada.' },
        { emoji: '🦘', name: 'Canguru', meaning: 'Progresso, energia, equilíbrio, maternidade e resiliência.' },
        { emoji: '🦔', name: 'Ouriço', meaning: 'Proteção, sensibilidade, intuição apurada e defesa contra energias negativas.' },
        { emoji: '🐦', name: 'Andorinha', meaning: 'Mudança, esperança, liberdade e renovação constante.' },
        { emoji: '🐪', name: 'Camelo', meaning: 'Resistência, sobrevivência, adaptação a condições extremas e perseverança.' },
        { emoji: '🐜', name: 'Formiga', meaning: 'Trabalho em equipe, paciência, organização, disciplina e persistência.' },
        { emoji: '🦨', name: 'Gambá', meaning: 'Autoconfiança, defesa estratégica, autenticidade e presença marcante.' },
        { emoji: '🐊', name: 'Jacaré', meaning: 'Paciência, força primitiva, estratégia e conexão com águas antigas.' },
        { emoji: '🐧', name: 'Pinguim', meaning: 'Adaptação ao ambiente, resiliência, comunidade e equilíbrio emocional.' },
        { emoji: '🐏', name: 'Carneiro', meaning: 'Coragem, determinação, impulso para a ação e renovação.' },
        { emoji: '🦦', name: 'Lontra', meaning: 'Brincadeira, leveza, criatividade, alegria e liberdade emocional.' },
        { emoji: '🦢', name: 'Cisne', meaning: 'Beleza, transformação espiritual, amor e conexão com a alma gêmea.' },
        { emoji: '🦅', name: 'Condor', meaning: 'Sabedoria ancestral, visão ampla, renovação e conexão espiritual.' },
        { emoji: '🐉', name: 'Dragão', meaning: 'Força cósmica, poder ancestral, proteção, sabedoria mística e transformação intensa.' },
        { emoji: '🐂', name: 'Touro', meaning: 'Determinação, estabilidade, força bruta, paciência e conexão com a terra.' },
        { emoji: '🦌', name: 'Alce', meaning: 'Confiança, liderança, resistência e conexão com os ciclos da natureza.' },
        { emoji: '🦭', name: 'Foca', meaning: 'Intuição aguçada, conexão com os sentimentos, alegria e ligação com o mundo dos sonhos.' },
        { emoji: '🦈', name: 'Tubarão', meaning: 'Sobrevivência, instinto, movimento constante e poder inabalável.' },
        { emoji: '🦇', name: 'Morcego', meaning: 'Renascimento, transmutação, percepção espiritual aguçada e adaptação.' },
        { emoji: '🦙', name: 'Lhama', meaning: 'Força silenciosa, resistência emocional, independência e proteção contra energias negativas.' },
        { emoji: '🦢', name: 'Ganso', meaning: 'Determinação, trabalho em equipe, proteção familiar e viagens espirituais.' }
    ];

    const drum = document.getElementById('drum');
    const resultContainer = document.getElementById('resultContainer');
    const animalEmoji = document.getElementById('animalEmoji');
    const animalName = document.getElementById('animalName');
    const animalMeaning = document.getElementById('animalMeaning');

    if (drum) {
        drum.addEventListener('click', revealAnimal);
    }

    function revealAnimal() {
        // Reset animation
        resultContainer.style.display = 'none';

        // Random selection
        const animal = powerAnimals[Math.floor(Math.random() * powerAnimals.length)];

        // Update elements
        animalEmoji.textContent = animal.emoji;
        animalName.textContent = animal.name;
        animalMeaning.textContent = animal.meaning;

        // Show result with animation
        setTimeout(() => {
            resultContainer.style.display = 'block';
        }, 500);

        // Drum animation
        drum.style.animation = 'drumBeat 0.5s';
        setTimeout(() => {
            drum.style.animation = '';
        }, 500);
    }
});

// Animação adicional para o tambor
const style = document.createElement('style');
style.textContent = `
@keyframes drumBeat {
    0% { transform: scale(1); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
}`;
document.head.appendChild(style);

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
        { emoji: '🐺', name: 'Lobo', meaning: 'Intuição, Liberdade, Trabalho em Equipe' },
        { emoji: '🦅', name: 'Águia', meaning: 'Visão Ampliada, Coragem, Perspectiva Superior' },
        { emoji: '🐻', name: 'Urso', meaning: 'Cura, Força Interior, Introspecção' },
        { emoji: '🦉', name: 'Coruja', meaning: 'Sabedoria, Mistério, Visão Noturna' },
        { emoji: '🐬', name: 'Golfinho', meaning: 'Harmonia, Brincadeira, Comunicação' },
        { emoji: '🦌', name: 'Cervo', meaning: 'Gentileza, Sensibilidade, Renovação' },
        { emoji: '🐆', name: 'Pantera', meaning: 'Poder Pessoal, Mistério, Agilidade' },
        { emoji: '🦄', name: 'Unicórnio', meaning: 'Magia, Pureza, Possibilidades Infinitas' }
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

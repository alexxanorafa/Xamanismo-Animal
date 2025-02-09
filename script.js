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
    { 
        emoji: '🐺', 
        name: 'Lobo', 
        meaning: 'Mestre da comunicação com o espírito de grupo. Ensina o equilíbrio entre independência e comunidade, a confiar na intuição primal e a navegar pelos ciclos lunares. Guardião dos segredos ancestrais e da lealdade familiar.'
    },
    {
        emoji: '🦅',
        name: 'Águia Dourada',
        meaning: 'Mensageira dos deuses, conecta o mundo terreno ao divino. Oferece visão panorâmica da vida, coragem para voar alto e clareza para enxergar oportunidades invisíveis. Simboliza a renovação através da muda de penas.'
    },
    {
        emoji: '🐻',
        name: 'Urso Pardo',
        meaning: 'Xamã primordial, guardião dos ciclos de hibernação e renascimento. Ensina a arte da introspecção profunda, a medicina das plantas e a força tranquila. Conecta com os ritmos circadianos e a memória celular.'
    },
    {
        emoji: '🦉',
        name: 'Coruja das Neves',
        meaning: 'Vigia noturno que revela verdades ocultas. Desperta a visão de raios-X para enxergar através de ilusões, a sabedoria silenciosa e a conexão com os registros akáshicos. Guia nas jornadas entre mundos.'
    },
    {
        emoji: '🐬',
        name: 'Golfinho Rotador',
        meaning: 'Mestre da respiração consciente e da comunicação sonora. Ativa a inteligência emocional, a cura através do som primordial e a arte da brincadeira sagrada. Conecta com as memórias oceânicas da criação.'
    },
    {
        emoji: '🦌',
        name: 'Cervo-Vermelho',
        meaning: 'Embassador da graça sob pressão. Ensina a movimentar-se com elegância entre desafios, a sensibilidade aos ciclos naturais e o poder da gentileza como força. Simboliza a renovação através da queda e crescimento de novas hastes.'
    },
    {
        emoji: '🐆',
        name: 'Pantera Negra',
        meaning: 'Guardiã dos mistérios lunares. Oferece invisibilidade psíquica, força silenciosa e a coragem para enfrentar sombras internas. Mestra em camuflagem espiritual e movimentos precisos.'
    },
    {
        emoji: '🦊',
        name: 'Raposa do Ártico',
        meaning: 'Estrategista da sobrevivência em condições extremas. Ensina adaptabilidade, uso inteligente de recursos e percepção aguçada de oportunidades. Conecta com a sabedoria do frio e a arte da paciência.'
    },
    {
        emoji: '🐘',
        name: 'Elefante Asiático',
        meaning: 'Biblioteca viva da memória ancestral. Oferece força comunitária, inteligência emocional profunda e conexão com os ritmos telúricos. Guardião dos segredos das matriarcas e da comunicação infra-sônica.'
    },
    {
        emoji: '🐍',
        name: 'Serpente Cascavel',
        meaning: 'Alquimista da transformação radical. Ensina a arte da muda de pele emocional, o despertar da kundalini e o uso sagrado do veneno como antídoto. Simboliza ciclos infinitos de morte e renascimento.'
    },
    {
        emoji: '🦁',
        name: 'Leão da Montanha',
        meaning: 'Rei solitário dos cumes. Oferece liderança silenciosa, coragem para comandar seu território existencial e precisão absoluta nas ações. Conecta com a energia solar e a força magnética.'
    },
    {
        emoji: '🦅',
        name: 'Falcão Peregrino',
        meaning: 'Mestre da velocidade e foco implacável. Ensina a mergulhar em direção aos objetivos com precisão cirúrgica, visão telescópica para detalhes cruciais e estratégias aéreas de caça às oportunidades.'
    },
    {
        emoji: '🐸',
        name: 'Sapo Dourado',
        meaning: 'Alquimista das transformações líquidas. Guia através de estágios metamórficos, cura através das águas emocionais e conexão com mundos paralelos. Guardião dos segredos da floresta nebulosa.'
    },
    {
        emoji: '🐢',
        name: 'Tartaruga-Gigante',
        meaning: 'Biblioteca viva dos segredos tectônicos. Ensina paciência geológica, proteção através da estabilidade e sabedoria milenar. Carrega o conhecimento dos continentes perdidos em seu casco.'
    },
    {
        emoji: '🦋',
        name: 'Borboleta-Monarca',
        meaning: 'Mestra das metamorfoses cósmicas. Guia em migrações espirituais, transformação através do caos e navegação por correntes energéticas. Simboliza a ressurreição diária através do despertar consciente.'
    },
    {
        emoji: '🦂',
        name: 'Escorpião-Imperador',
        meaning: 'Guardião dos limites sagrados. Ensina autodefesa psíquica, uso estratégico da força e alquimia emocional através do veneno transformador. Conecta com energias desérticas primordiais.'
    },
    {
        emoji: '🦜',
        name: 'Arara-Azul',
        meaning: 'Xamã das cores vibrantes. Ativa a expressão autêntica, comunicação criativa e percepção amplificada de cores energéticas. Guardiã dos segredos da floresta tropical e da linguagem da luz.'
    },
    {
        emoji: '🐿️',
        name: 'Esquilo-Voador',
        meaning: 'Mestre da preparação lúdica. Ensina a armazenar recursos com alegria, saltar entre oportunidades e manter leveza nas responsabilidades. Conecta com a sabedoria das sementes e a energia arbórea.'
    },
    {
        emoji: '🐋',
        name: 'Baleia Jubarte',
        meaning: 'Grande mãe dos oceanos cósmicos. Guardiã das memórias ancestrais e da comunicação através dos cânticos sagrados. Ensina a navegar pelas profundezas emocionais e a ressonância universal.'
    },
    {
        emoji: '🦎',
        name: 'Camaleão',
        meaning: 'Mestre da adaptação consciente. Ensina a arte da transformação externa mantendo a essência interior, percepção de 360 graus e sincronização com ambientes energéticos.'
    },
    {
        emoji: '🦤',
        name: 'Dodô',
        meaning: 'Mensageiro da extinção e renascimento. Ensina sobre resiliência diante da obsolescência, valorização do momento presente e sabedoria na simplicidade aparente.'
    },
    {
        emoji: '🦫',
        name: 'Castor',
        meaning: 'Engenheiro de realidades. Oferece habilidades de construção sustentável, trabalho comunitário estratégico e modificação consciente de ecossistemas pessoais.'
    },
    {
        emoji: '🦥',
        name: 'Preguiça',
        meaning: 'Mestra do ritmo zen. Ensina a arte da conservação energética, movimento consciente e percepção acelerada em estado de quietude aparente.'
    },
    {
        emoji: '🐃',
        name: 'Búfalo',
        meaning: 'Fornecedor de abundância. Conecta com a gratidão como força criativa, sacrifício sagrado e prosperidade comunitária. Guardião das danças solares.'
    },
    {
        emoji: '🦒',
        name: 'Girafa',
        meaning: 'Ponte entre céu e terra. Oferece perspectiva elevada, comunicação através da frequência silenciosa e graça nas diferenças. Simboliza a conexão entre mundos.'
    },
    {
        emoji: '🐦',
        name: 'Colibri',
        meaning: 'Alquimista do néctar vital. Ensina a extrair essência da vida, voo estacionário como meditação ativa e a dança cósmica em micro movimentos. Guardião dos portais dimensionais.'
    },
    {
        emoji: '🦝',
        name: 'Lêmure',
        meaning: 'Navegador dos mundos ancestrais. Conecta com memórias pré-humanas, ritmos circadianos primordiais e a sabedoria dos ciclos lunares. Mestre da comunicação não-verbal.'
    },
    {
        emoji: '🦡',
        name: 'Tatu',
        meaning: 'Arquiteto da proteção multidimensional. Ensina a criar escudos energéticos personalizados, escavação de verdades ocultas e resistência às pressões externas.'
    },
    {
        emoji: '🐦⬛',
        name: 'Corvo',
        meaning: 'Xamã da transformação alquímica. Guia entre mundos, guardião dos mistérios da morte e renascimento. Ensina a linguagem das sincronicidades e magia prática.'
    },
    {
        emoji: '🐙',
        name: 'Polvo',
        meaning: 'Mestre da inteligência descentralizada. Oferece habilidades de resolução criativa de problemas, camuflagem energética e manipulação fluida de realidades.'
    },
    {
        emoji: '🦨',
        name: 'Suricato',
        meaning: 'Guardião comunitário. Ensina vigilância estratégica, trabalho em equipe eficiente e sistemas de alerta precoce contra perigos existenciais.'
    },
    {
        emoji: '🦧',
        name: 'Orangotango',
        meaning: 'Filósofo da floresta. Transmite sabedoria anciã sobre conexão arbórea, paciência contemplativa e inteligência emocional profunda.'
    },
    {
        emoji: '🐋🦈',
        name: 'Tubarão-Baleia',
        meaning: 'Filtrador cósmico. Ensina a arte de reter nutrientes essenciais e liberar impurezas, navegação por correntes energéticas massivas e presença majestosa pacífica.'
    },
    {
        emoji: '🦩',
        name: 'Flamingo',
        meaning: 'Equilibrista cósmico. Oferece lições sobre estabilidade em ambientes instáveis, beleza funcional e transformação de elementos tóxicos em arte vital.'
    },
    {
        emoji: '🦏',
        name: 'Rinoceronte',
        meaning: 'Fortaleza animada. Ensina carga focada contra obstáculos, blindagem energética e conexão com forças telúricas primordiais.'
    },
    {
        emoji: '🐪',
        name: 'Camelo',
        meaning: 'Navegador do deserto existencial. Oferece resistência às secas emocionais, armazenamento estratégico de recursos e orientação por estrelas internas.'
    },
    {
        emoji: '🦇',
        name: 'Morcego',
        meaning: 'Mestre da ecolocalização espiritual. Desenvolve navegação por sonar intuitivo, percepção além da visão física e ritmos circadianos invertidos para acesso a realidades alternativas.'
    },
    {
        emoji: '🦄',
        name: 'Unicórnio',
        meaning: 'Purificador de águas emocionais. Ativa a conexão com arquétipos divinos, cura através da vibração córnea e proteção contra energias dissonantes.'
    },
    {
        emoji: '🦙',
        name: 'Lhama',
        meaning: 'Portadora de cargas sagradas. Ensina distribuição equilibrada de responsabilidades, adaptação a altas altitudes energéticas e uso ritualístico de fibras espirituais.'
    },
    {
        emoji: '🦆',
        name: 'Cisne',
        meaning: 'Alquimista da transformação estética. Guia através de metamorfoses existenciais, equilíbrio na superfície de emoções profundas e conexão com a música das esferas.'
    },
    {
        emoji: '🦢',
        name: 'Ganso',
        meaning: 'Navegador de rotas migratórias. Ensina formação comunitária eficiente, voo em V energético e comunicação através de chamados universais.'
    },
    {
        emoji: '🦦',
        name: 'Lontra',
        meaning: 'Mestra da brincadeira terapêutica. Ativa a cura através da alegria espontânea, manipulação criativa de ferramentas emocionais e flutuação consciente nas correntes da vida.'
    },
    {
        emoji: '🦍',
        name: 'Gorila',
        meaning: 'Guardião da integridade familiar. Ensina liderança pacífica, comunicação através da presença silenciosa e força contida como filosofia de vida.'
    },
    {
        emoji: '🦓',
        name: 'Zebra',
        meaning: 'Criptógrafo cósmico. Oferece lições sobre padrões energéticos únicos, camuflagem em meio ao caos e equilíbrio yin-yang em movimento constante.'
    },
    {
        emoji: '🐊',
        name: 'Jacaré',
        meaning: 'Guardião dos pântanos emocionais. Ensina imobilidade estratégica, ataques precisos a oportunidades e digestão lenta de experiências intensas.'
    },
    {
        emoji: '🦃',
        name: 'Peru',
        meaning: 'Xamã da gratidão. Conecta com ciclos de colheita espiritual, exibição ritualística de dádivas internas e comunicação através de coreografias sagradas.'
    },
    {
        emoji: '🦚',
        name: 'Pavão',
        meaning: 'Mestre da exibição divina. Ensina a arte de revelar potencial oculto, transformar "olhos que tudo veem" em proteção e conexão com a beleza como força espiritual.'
    },
    {
        emoji: '🦥',
        name: 'Bicho-Preguiça',
        meaning: 'Guru da lentidão sagrada. Oferece lições sobre metabolismo energético sustentável, observação contemplativa e movimentos precisos no momento exato.'
    },
    {
        emoji: '🦜',
        name: 'Papagaio',
        meaning: 'Linguista cósmico. Desenvolve habilidades de comunicação multidimensional, memorização de saberes ancestrais e repetição ritualística de mantras poderosos.'
    },
    {
        emoji: '🦩',
        name: 'Flamingo',
        meaning: 'Equilibrista cósmico. Oferece lições sobre estabilidade em ambientes instáveis, beleza funcional e transformação de elementos tóxicos em arte vital.'
    },
    {
        emoji: '🐉',
        name: 'Dragão',
        meaning: 'Guardião dos portais dimensionais. Conecta com forças elementais primordiais, tesouros ocultos do inconsciente coletivo e voo através de realidades paralelas.'
    },
    {
        emoji: '🦘',
        name: 'Canguru',
        meaning: 'Mestre da propulsão quântica. Ensina saltos precisos entre oportunidades, equilíbrio dinâmico em movimento e cuidado comunitário através do marsúpio espiritual.'
    },
    {
        emoji: '🦔',
        name: 'Ouriço',
        meaning: 'Guardião dos limites pessoais. Oferece proteção através da consciência espinhosa, introspecção defensiva e acesso a sabedorias ocultas sob aparência rústica.'
    },
    {
        emoji: '🦥',
        name: 'Tatu-Bola',
        meaning: 'Mestre da contração protetora. Ensina defesa através da forma perfeita, conservação de energia vital e desenrolar estratégico em momentos oportunos.'
    }
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

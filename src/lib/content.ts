// Textos editáveis das páginas "Serviços", "Sobre" e "Contato".
// Para trocar qualquer texto dessas páginas, edite só este arquivo.

export const pageContent = {
  home: {
    heroImages: [
      { src: "/images/homepage1.jpeg", alt: "AeroField em operação — foto 1" },
      { src: "/images/homepage2.jpeg", alt: "AeroField em operação — foto 2" },
    ],
  },
  servicos: {
    metaTitle: "Serviços",
    metaDescription:
      "Aplicação defensiva, liberação de Cotesia, mapeamento e manutenção com drones agrícolas — produtividade e sustentabilidade no campo.",
    heroTitle: "Serviços aeroagrícolas",
    heroSubtitle:
      "Aplicação defensiva, liberação de Cotesia, mapeamento e manutenção com drones — precisão operacional para produtividade e sustentabilidade.",
    heroButtonLabel: "Solicitar orçamento",
    serviceButtonLabel: "Solicitar orçamento",
    items: [
      {
        slug: "aplicacao",
        title: "Aplicação com Drone",
        image: "/images/service-aplicacao.jpg",
        summary:
          "Pulverização aérea com área total ou localizada, com precisão operacional, segurança e eficiência com uso de insumos.",
        benefits: [
          "Aplicação uniforme de químicos e biológicos",
          "Menor uso de água e insumos",
          "Operação possível após chuvas, sem pisoteio na cultura",
          "Cobertura eficiente em áreas de difícil acesso",
        ],
      },
      {
        slug: "cotesia",
        title: "Liberação de Biológicos",
        image: "/images/cotesia.png",
        summary:
          "Distribuição aérea de agentes de controle biológicos com precisão, agilidade e uniformidade em grandes áreas.",
        benefits: [
          "Liberação de Cotesia e Trichogramma",
          "Distribuição uniforme e georeferenciada",
          "Alta capacidade operacional em grandes áreas",
          "Registro e rastreabilidade das operações",
        ],
      },
      {
        slug: "mapeamento",
        title: "Mapeamento e Análise",
        image: "/images/mapeamento.png",
        summary:
          "Levantamento aéreo de alta resolução com processamento e análise de imagens para identificar, quantificar e apoiar as decisões no campo.",
        benefits: [
          "Identificação de plantas daninhas e detecção de falhas na lavoura",
          "Geração de ortomosaicos e mapas georreferenciados",
          "Informações para aplicações localizadas e tomadas de decisão",
        ],
      },
      {
        slug: "manutencao",
        title: "Manutenção de Drones",
        image: "/images/service-manutencao.jpg",
        summary:
          "Serviços de manutenção preventiva e corretiva para garantir segurança, confiabilidade e disponibilidade dos equipamentos.",
        benefits: [
          "Diagnóstico e manutenção preventiva e corretiva",
          "Manutenção corretiva e substituição de componentes",
          "Inspeção, calibração e testes operacionais",
          "Suporte técnico para maior disponibilidade do equipamento",
          "Manutenção especializada em drones agrícolas (DJI)",
        ],
      },
    ],
  },
  sobre: {
    metaTitle: "Sobre",
    metaDescription:
      "Conheça a AeroField Solutions — drones agrícolas para aplicação, mapeamento e manutenção.",
    heroTitle: "Quem somos",
    heroSubtitle:
      "A AeroField une tecnologia aérea e presença no campo para elevar produtividade com responsabilidade.",
    introEyebrow: "AeroField Solutions",
    introHeading: "Tecnologia de drones a serviço da lavoura.",
    introParagraph1:
      "A AeroField nasceu para oferecer serviços especializados com drones para o setor agrícola, unindo aplicação, controle biológico, mapeamento com análise de imagens e manutenção técnica.",
    introParagraph2Prefix: "Nosso trabalho é orientado por ",
    introParagraph2Highlight: "precisão, segurança e eficiência operacional",
    introParagraph2Suffix:
      ". Atuamos com planejamento, acompanhamento técnico e execução responsável para entregar qualidade e confiabilidade em cada operação.",
    pillarsHeading: "Nossos pilares",
    ctaHeading: "Quer conhecer a operação de perto?",
    ctaButtonLabel: "Falar com a AeroField",
  },
  contato: {
    metaTitle: "Contato",
    metaDescription:
      "Solicite um orçamento da AeroField — drones agrícolas para aplicação, mapeamento e manutenção.",
    heroTitle: "Vamos conversar",
    heroSubtitle:
      "Conte sobre sua área e necessidade. Retornamos com uma proposta alinhada à sua operação.",
    channelsHeading: "Canais diretos",
    emailLabel: "E-mail",
    whatsappLabel: "WhatsApp",
    regionLabel: "Região",
    formHeading: "Envie sua mensagem",
    formIntro: "O formulário abre o WhatsApp com os dados preenchidos.",
    formLoadingLabel: "Carregando formulário…",
    form: {
      nomeLabel: "Nome",
      nomePlaceholder: "Seu nome",
      telefoneLabel: "Telefone",
      telefonePlaceholder: "(00) 00000-0000",
      servicoLabel: "Serviço de interesse",
      servicoDefaultOptionLabel: "Selecione um serviço",
      servicoAcademiaOptionLabel: "Academia / lista de espera",
      servicoOutroOptionLabel: "Outro assunto",
      mensagemLabel: "Mensagem",
      submitLabel: "Enviar pelo WhatsApp",
      sentMessage:
        "Abrimos o WhatsApp com sua mensagem. Se nada abriu, verifique o bloqueio de pop-ups.",
      servicoNaoInformado: "Não informado",
    },
    whatsappTemplate: {
      academiaMessage: "Olá! Quero ser avisado quando a Academia AeroField abrir.",
      servicePrefix: "Olá! Gostaria de um orçamento de ",
      intro: "Olá! Contato via site AeroField.",
      nomeLine: "Nome",
      telefoneLine: "Telefone",
      interesseLine: "Interesse",
      mensagemLine: "Mensagem",
    },
  },
} as const;

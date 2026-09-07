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
          "Operação possível após chuvas, sem pisoteio",
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
          "Controle biológico de pragas sem agroquímicos",
          "Distribuição uniforme em toda a área",
          "Redução da pressão de pragas com menos impacto ambiental",
          "Aplicação rápida mesmo em áreas extensas ou de difícil acesso",
        ],
      },
      {
        slug: "mapeamento",
        title: "Mapeamento e Análise",
        image: "/images/mapeamento.png",
        summary:
          "Levantamento aéreo de alta resolução com processamento e análise de imagens para identificar, quantificar e apoiar as decisões no campo.",
        benefits: [
          "Identificação de falhas e plantas daninhas",
          "Apoio à tomada de decisão por talhão",
          "Imagens de alta resolução para diagnóstico",
          "Base para agricultura de precisão",
        ],
      },
      {
        slug: "manutencao",
        title: "Manutenção de Drones",
        image: "/images/service-manutencao.jpg",
        summary:
          "Serviços de manutenção preventiva e corretiva para garantir segurança, confiabilidade e disponibilidade dos equipamentos.",
        benefits: [
          "Manutenção preventiva e corretiva",
          "Calibração e preparação operacional",
          "Mais segurança e continuidade de voo",
          "Suporte para máxima produtividade da frota",
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
      "Nascemos para aproximar o produtor de soluções aeroagrícolas práticas: aplicação precisa, mapeamento que gera decisão e manutenção que sustenta a operação no dia a dia.",
    introParagraph2Prefix: "Nosso posicionamento é claro — ",
    introParagraph2Highlight: "produtividade e sustentabilidade",
    introParagraph2Suffix:
      ". Menos desperdício, menos compactação do solo e mais eficiência por hectare, com acompanhamento próximo em cada etapa do serviço.",
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

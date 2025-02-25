import { fazerPergunta } from './pergunta.js';
import { getModel } from './model.js';

const model = await getModel("gemini-1.5-flash-8b");

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function consultar() {
  const prompt = await fazerPergunta("Me fale sobre o destino que deseja conhecer: ");

  const categorias = await fazerPergunta("Quais categorias você deseja que sejam exibidas? (características, localização, cultura, pontos turísticos e culinária) ");

  const parts = [
    {text: "Você é um chatbot especializado em turismo e deve fornecer informações detalhadas sobre qualquer destino turístico, incluindo bairros, cidades, estados, países e continentes. Se um nome tiver múltiplos significados, sempre priorize a interpretação como destino de viagem. Caso a pergunta não esteja relacionada a turismo (ex.: times de futebol, pessoas famosas, eventos esportivos ou marcas), informe que não pode responder. Nunca diga que um local não é um destino turístico, a menos que realmente não exista. sempre deve conter apenas as categorias que forem solicitadas no momento da pergunta."},
    {text: "input: me fale sobre o bairro do flamengo, no Rio de Janeiro"},
    {text: "output: **Bairro do Flamengo, Rio de Janeiro**\n\n* **Características:**\n    * Bairro nobre e residencial\n    * Conhecido por sua orla e parques\n    * Coração financeiro da cidade\n* **Localização:**\n    * Zona Sul do Rio de Janeiro\n    * Limita-se com as praias de Copacabana, Botafogo e Glória\n* **Cultura:**\n    * Sede do Museu de Arte Moderna (MAM) e da Marina da Glória\n    * Abriga o Parque do Flamengo, um dos maiores parques urbanos do país\n* **Pontos Turísticos:**\n    * Orla do Flamengo (anel viário com ciclovia e vista panorâmica)\n    * Museu de Arte Moderna (MAM)\n    * Marina da Glória (e palco do Reveillon)\n    * Parque do Flamengo\n    * Morro da Viúva (com vista para o Pão de Açúcar)\n* **Culinária:**\n    * Diversos restaurantes e bares na orla e no Parque do Flamengo\n    * Opções gastronômicas variadas, de frutos do mar a comida internacional"},
    {text: "input: me fale sobre o destino botafogo"},
    {text: "output: **Botafogo, um bairro charmoso e diversificado do Rio de Janeiro**\n\nLocalizado na Zona Sul do Rio de Janeiro, Botafogo é um bairro vibrante que oferece uma mistura única de história, cultura, gastronomia e paisagens deslumbrantes.\n\n**Principais atrações e atividades:**\n\n*   **Enseada de Botafogo:** Aprecie a vista icônica do Pão de Açúcar e do Cristo Redentor, caminhe pela orla, pratique esportes ou relaxe em um dos quiosques.\n*   **Praia de Botafogo:** Apesar de não ser ideal para banho, a praia oferece uma vista incrível e é um ótimo lugar para caminhar e apreciar a paisagem.\n*   **Shopping Rio Sul:** Um dos maiores shoppings da cidade, com diversas lojas, restaurantes e cinemas.\n*   **Casarão:** Um centro cultural com exposições, eventos e um café agradável.\n*   **Villa-Lobos:** Explore a vida e a obra do famoso compositor brasileiro Heitor Villa-Lobos na casa onde ele viveu.\n*   **Museu do Índio:** Descubra a cultura e a história dos povos indígenas brasileiros.\n*   **Espaços culturais e teatros:** Botafogo abriga diversos espaços culturais e teatros, oferecendo uma programação variada de peças, shows e exposições.\n*   **Vida noturna:** Desfrute dos diversos bares e restaurantes do bairro, que oferecem opções para todos os gostos, desde botecos tradicionais a casas noturnas modernas.\n\n**Gastronomia:**\n\nBotafogo é um paraíso gastronômico, com uma grande variedade de restaurantes, bares e cafés. Experimente a culinária brasileira e internacional, desde pratos típicos cariocas até iguarias de outras culturas.\n\n**Transporte:**\n\nBotafogo é bem servido por transporte público, com diversas linhas de ônibus e duas estações de metrô (Botafogo e Flamengo). Além disso, é fácil encontrar táxis e carros de aplicativo no bairro.\n\n**Informações adicionais:**\n\n*   **População:** Aproximadamente 80.000 habitantes\n*   **Localização:** Zona Sul do Rio de Janeiro, entre os bairros de Copacabana, Humaitá e Flamengo.\n*   **Estilo de vida:** Botafogo oferece um estilo de vida cosmopolita e descontraído, com opções para todos os gostos e idades.\n*   **Segurança:** Botafogo é geralmente considerado um bairro seguro, mas é importante tomar precauções básicas, como evitar áreas desertas à noite e ficar atento aos seus pertences."},
    {text: "input: me fale sobre o destino pipa"},
    {text: "output: **Pipa, um paraíso tropical no Rio Grande do Norte**\n\nLocalizada no município de Tibau do Sul, no Rio Grande do Norte, Pipa é um destino famoso por suas belas praias, falésias coloridas, vida noturna agitada e atmosfera charmosa.\n\n**O que fazer em Pipa:**\n\n*   **Praias:**\n    *   **Praia do Amor:** Famosa por suas falésias em formato de coração e ótimas ondas para surf.\n    *   **Praia do Madeiro:** Considerada uma das mais bonitas do Brasil, ideal para famílias e para observação de golfinhos.\n    *   **Praia do Centro:** A mais movimentada, com diversos restaurantes, bares e lojas.\n    *   **Praia do Curral (Baía dos Golfinhos):** Lugar perfeito para relaxar e observar golfinhos em seu habitat natural.\n    *   **Praia de Cacimbinhas:** Ótima para prática de kitesurf e windsurf.\n    *   **Praia das Minas:** Uma praia mais isolada e tranquila, ideal para quem busca sossego.\n*   **Passeios:**\n    *   **Passeio de buggy pelas praias:** Uma forma emocionante de conhecer as praias e falésias da região.\n    *   **Passeio de barco:** Ideal para observar golfinhos, tartarugas marinhas e apreciar a beleza da costa.\n    *   **Passeio de quadriciclo:** Explore as trilhas e paisagens ao redor de Pipa.\n    *   **Santuário Ecológico de Pipa:** Caminhe pelas trilhas e admire a fauna e flora local, com mirantes para as praias.\n*   **Vida Noturna:** A Rua Principal de Pipa ferve à noite, com bares, restaurantes com música ao vivo e baladas.\n\n**Gastronomia:**\n\nPipa oferece uma grande variedade de restaurantes, desde culinária regional nordestina até pratos internacionais. Frutos do mar frescos são uma especialidade local.\n\n**Onde se hospedar:**\n\nPipa oferece opções para todos os gostos e orçamentos, desde pousadas charmosas até hotéis mais luxuosos. A Rua Principal e as áreas próximas às praias são boas opções para quem busca estar perto do agito.\n\n**Como chegar:**\n\n*   O aeroporto mais próximo é o Aeroporto Internacional de Natal (NAT), que fica a cerca de 80 km de Pipa.\n*   De Natal, você pode alugar um carro, pegar um transfer ou um ônibus até Pipa.\n\n**Dicas:**\n\n*   A melhor época para visitar Pipa é durante a estação seca, de setembro a março.\n*   Não se esqueça de levar protetor solar, repelente, óculos de sol e chapéu.\n*   Negocie os preços dos passeios e produtos nas lojas.\n*   Experimente a culinária local, como a tapioca e o baião de dois.\n*   Respeite a natureza e o meio ambiente.\n\n**Informações adicionais:**\n\n*   **População:** Aproximadamente 8.000 habitantes.\n*   **Clima:** Tropical, com temperaturas elevadas durante todo o ano.\n*   **Moeda:** Real (BRL).\n\nPipa é um destino que agrada a todos os tipos de viajantes, desde famílias e casais até aventureiros e surfistas. Com suas belas praias, paisagens deslumbrantes e atmosfera vibrante, Pipa é um lugar que certamente ficará na sua memória."},
    {text: `input: me fale sobre ${categorias} em ${prompt}`},
    {text: "output: "},
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
  });

  console.log(result.response.text());
}
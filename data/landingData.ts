import gluteoAntes1 from '@/assets/ante-x-depois-img/gluteo-1.1.png'
import gluteoDepois1 from '@/assets/ante-x-depois-img/gluteo-1.2.png'
import gluteoAntes2 from '@/assets/ante-x-depois-img/gluteo-2.1.png'
import gluteoDepois2 from '@/assets/ante-x-depois-img/gluteo-2.2.png'

import depoimento1 from '@/assets/ante-x-depois-img/depoimento-1'
import depoimento2 from '@/assets/ante-x-depois-img/depoimento-2'

// Dados para o carrossel (antes x depois)
export const carrosselData = [
  {
    id: 1,
    imagem_antes_url: gluteoAntes1.src,
    imagem_depois_url: gluteoDepois1.src,
    legenda: "Transformação suave e natural"
  },
  {
    id: 2,
    imagem_antes_url: gluteoAntes2.src,
    imagem_depois_url: gluteoDepois2.src,
    legenda: "Harmonização completa realçando a beleza natural"
  }
];
// dados para os depoimentos 
export const depoimentosData = [
  {
    id: 1,
    nome_paciente: 'Isabela R.',
    foto_paciente_url: depoimento1.src,
    depoimento: "Eu tinha flacidez nos glúteos e não me sentia confortável com isso. Após a harmonização de glúteos na DamaFace, notei mais sustentação, firmeza e um contorno incrível."
  },
  {
    id: 2,
    nome_paciente: "Larissa M.",
    foto_paciente_url: depoimento2.src,
    depoimento: "A harmonização de glúteos na DamaFace superou minhas expectativas. O volume ficou proporcional ao meu corpo e o resultado foi natural, sem perder a minha essência."
  }
];



// Dados para a seção "Por que escolher a DamaFace?"
export const diferenciaisData = [
  {
    id: 1,
    titulo: "Naturalidade e Exclusividade",
    descricao: "Cada procedimento é personalizado para valorizar seus traços únicos — sem exageros, apenas realçando o que há de melhor em você."
  },
  {
    id: 2,
    titulo: "Segurança e Qualidade",
    descricao: "Utilizamos produtos certificados pela ANVISA e aplicamos técnicas avançadas para garantir sua segurança em todas as etapas."
  },
  {
    id: 3,
    titulo: "Experiência Comprovada",
    descricao: "Mais de 8 anos de experiência e 2.500 pacientes satisfeitos atestam nossa credibilidade."
  },
  {
    id: 4,
    titulo: "Acompanhamento Personalizado",
    descricao: "Cuidamos de você antes, durante e depois do procedimento para garantir sua total satisfação."
  }
];

export const faqData = [
  {
    id: 1,
    pergunta: "A harmonização de glúteos na DamaFace dói?",
    resposta: "A harmonização de glúteos na DamaFace é feita com agulhas ou cânulas finas, causando apenas um leve desconforto. Utilizamos anestesia local para garantir conforto e segurança durante todo o procedimento estético."
  },
  {
    id: 2,
    pergunta: "Quanto tempo dura o resultado da harmonização de glúteos?",
    resposta: "Os resultados da harmonização de glúteos podem durar de 12 a 18 meses, dependendo do produto utilizado, metabolismo individual e dos cuidados pós-procedimento indicados pela DamaFace, garantindo glúteos firmes e naturais."
  },
  {
    id: 3,
    pergunta: "Quando verei o resultado da harmonização de glúteos?",
    resposta: "O resultado da harmonização de glúteos é progressivo. A melhora começa a aparecer nas semanas seguintes, com resultados visíveis a partir de 30 dias e efeito máximo em até 90 dias, promovendo contorno e volume naturais."
  },
  {
    id: 4,
    pergunta: "Qual é o tempo de recuperação após a harmonização de glúteos?",
    resposta: "A recuperação da harmonização de glúteos é rápida. Pode haver leve inchaço ou pequenos hematomas nos primeiros dias, mas é possível retomar atividades leves imediatamente. Exercícios intensos e exposição solar devem ser evitados por 24 a 48 horas para melhores resultados."
  },
  {
    id: 5,
    pergunta: "A harmonização de glúteos é segura?",
    resposta: "Sim, a harmonização de glúteos na DamaFace é segura quando realizada por profissionais especializados e com produtos aprovados pela Anvisa. Seguimos protocolos rigorosos para garantir resultados naturais, harmonia estética e segurança total."
  },
  {
    id: 6,
    pergunta: "Preciso fazer exames antes da harmonização de glúteos?",
    resposta: "Na maioria dos casos, não é necessário. Antes do procedimento, a DamaFace realiza uma avaliação personalizada para definir o melhor protocolo, garantindo resultados estéticos seguros e adequados ao seu corpo."
  }
];



export const unidadesData = [
  { value: "vinhedo", label: "Unidade 1 - Vinhedo" },
  { value: "jaguariuna", label: "Unidade 2 - Jaguariúna" },
  { value: "cerquilho", label: "Unidade 3 - Cerquilho" }
];

const usuarios = [
    { idusuario: 1, username: 'Juan', email: 'juan@ufrpe.br', birthDate: '1970-01-01', uf: 'PE', cep: '50670406', localidade: 'Recife', logradouro: 'Rua Paulista, Varzea' },
    { idusuario: 2, username: 'Victor', email: 'victor@ufrpe.br', birthDate: '1970-01-01', uf: 'PE', cep: '54270406', localidade: 'Recife', logradouro: 'Rua Agosto, Casa Forte' },
];
const missoes = [
    { idmissoes: 1, emProgresso: 'Em andamento', titulo: 'Coleta Seletiva', horario: '21:00', tipo: 'Reciclagem' }
];

const ponto_coleta = [
    { idponto_coleta: 1, localizacao: 'Recife Guabiraba EcoPonto', endereco: 'Rua 23 de março, 230', estacionamento: 1, coletaemcasa: 0, contato: '81 3249-4959', website: 'www.ecoponto.gov.br/recife' }
]

const quiz = [
    { idquiz: 1, quizType: 'ODS-reduzir-residuos', question_main: 'Sobre os desafios enfrentados pela implementação da ODS 12.3 é correto afirmar que:', question1: 'O principal desafio é o de desenvolver politicas publicas suficientes', question2: 'O cumprimento dos marcos internacionais acordados', question3: 'Conscientizacao da populacao acerca do tema', answer: 'question2', weight: 5, pointsGained: 10 }
]

const cupom = [
    {idcupom: 1, isPercentage: 1, discount: 13.50, availableAt: '2023-05-01', amountLeft: 50.5, price: 100.50, companies: ['Empresa 1','Empresa 2'], observations: 'Apenas cupom de teste', isUsed:1}
]

module.exports = {
    usuarios: usuarios,
    missoes: missoes,
    ponto_coleta: ponto_coleta,
    quiz: quiz,
    cupom: cupom
};
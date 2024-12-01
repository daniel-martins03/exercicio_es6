export const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 6 },
    { nome: "Carlos", nota: 7 },
    { nome: "Fernanda", nota: 4 },
];
  // Função para filtrar alunos com nota maior ou igual a 6
export const filtrarAprovados = (alunos) => {
    return alunos.filter((aluno) => aluno.nota >= 6);
};

const database = "bd3_atv2";

const collection = "bd3_atv2_produtos";

use(database);

db[collection].insertMany([
  {
    _id: 42,
    nome: "Power Bank",
    valor: 79.9,
    quantidadeEmEstoque: 60,
    fabricante: "PowerUp",
    categoria: "Eletrônicos",
    descricao: "Power bank com capacidade de 20.000mAh.",
  },
  {
    _id: 43,
    nome: "Carregador Portátil",
    valor: 49.9,
    quantidadeEmEstoque: 75,
    fabricante: "TechCharge",
    categoria: "Eletrônicos",
    descricao: "Carregador portátil compacto e leve.",
  },
  {
    _id: 44,
    nome: "Capa para Notebook",
    valor: 59.9,
    quantidadeEmEstoque: 50,
    fabricante: "SafeCover",
    categoria: "Acessórios",
    descricao: "Capa protetora para notebook em neoprene.",
  },
  {
    _id: 45,
    nome: "Fone de Ouvido com Fio",
    valor: 39.9,
    quantidadeEmEstoque: 100,
    fabricante: "AudioBasic",
    categoria: "Eletrônicos",
    descricao: "Fone de ouvido com fio, ideal para uso diário.",
  },
  {
    _id: 46,
    nome: "Caminha para Cão",
    valor: 129.9,
    quantidadeEmEstoque: 20,
    fabricante: "PetComfort",
    categoria: "Pet",
    descricao: "Caminha para cão, confortável e fácil de lavar.",
  },
  {
    _id: 47,
    nome: "Brinquedo Interativo para Gato",
    valor: 59.9,
    quantidadeEmEstoque: 30,
    fabricante: "GatoFeliz",
    categoria: "Pet",
    descricao: "Brinquedo interativo que estimula a atividade física.",
  },
  {
    _id: 48,
    nome: "Ração Premium para Cães",
    valor: 199.9,
    quantidadeEmEstoque: 40,
    fabricante: "PetNutri",
    categoria: "Pet",
    descricao: "Ração premium para cães, rica em nutrientes.",
  },
  {
    _id: 49,
    nome: "Cama Pet em Tecido",
    valor: 99.9,
    quantidadeEmEstoque: 25,
    fabricante: "PetDesign",
    categoria: "Pet",
    descricao: "Cama para pets em tecido suave e acolhedor.",
  },
  {
    _id: 50,
    nome: "Coleira Ajustável",
    valor: 29.9,
    quantidadeEmEstoque: 80,
    fabricante: "PetStyle",
    categoria: "Pet",
    descricao: "Coleira ajustável em nylon, resistente e confortável.",
  },
]);

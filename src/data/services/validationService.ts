export const ValidationService = {
  cep(cep = ""): boolean {
    return cep.replace(/\D/g, "").length === 8; //pega o CEP e remove tudo que não for número
  },
};

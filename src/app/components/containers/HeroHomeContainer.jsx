import HeroHome from "../presentation/HeroHome";

const HeroHomeContainer = () => {
  const features = [
    {
      title: "Entrada de ingredientes e preferências alimentares",
      description: "Insira seus ingredientes por texto/tags, imagem (OCR), ou comando de voz.",
    },
    {
      title: "Receitas Personalizadas",
      description:
        "Receba sugestões de receitas baseadas nos seus ingredientes e preferências alimentares.",
    },
    {
      title: "Modo de Preparo Detalhado",
      description: "Instruções passo a passo com timers integrados e sugestões de substituição.",
    },
  ];
  return <HeroHome features={features} />;
};

export default HeroHomeContainer;

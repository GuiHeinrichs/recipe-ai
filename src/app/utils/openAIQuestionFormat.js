export default function openAIQuestionFormat(recipeData) {
    const defaultQuestionBody = "Quero que você me ajude a criar uma receita com os ingredientes disponíveis e as preferências alimentares e restrições, conforme as seguintes informações:";
    const ingredients = recipeData.ingredients.join(", ");
    const preferences = Object.entries(recipeData.preferences).filter(entry => entry[1]).map(entry => entry[0]).join(", ");
    const restrictions = Object.entries(recipeData.restrictions).filter(entry => entry[1]).map(entry => entry[0]).join(", ");
    const questionBody = `${defaultQuestionBody}
    - Ingredientes disponíveis: ${ingredients}
    - Preferências alimentares: ${preferences}
    - Restrições: ${restrictions}`;
    console.log(questionBody);
    return questionBody;
}
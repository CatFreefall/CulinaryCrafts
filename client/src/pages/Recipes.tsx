import RecipeComponent from "../components/Recipes/RecipeComponent";
import SideBarContainer from "../components/Recipes/sidebar/SideBarContainer";

const Recipes = () => {
  return (
    <div className="flex">
      <SideBarContainer />
      {/* <h1 className="font-header font-medium text-4xl h-min">Recipes</h1> */}
      <section className="flex flex-wrap w-[95%] h-min">
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
        <RecipeComponent />
      </section>
    </div>
  );
};

export default Recipes;

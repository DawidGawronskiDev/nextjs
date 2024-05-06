const MealPage = ({ params }) => {
  return (
    <main>
      <h1>Meal</h1>
      <p>{params.meal}</p>
    </main>
  );
};

export default MealPage;

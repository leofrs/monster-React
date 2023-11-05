import searchMonster from "./feature/searchMonster";
import { image } from "./data/data";
const App = () => {
  const { filteredData, pesquisa, handleChange } = searchMonster();
  return (
    <main className="container">
      <h1>The Monster</h1>
      <input
        type="search"
        placeholder="Insira um nome"
        onChange={handleChange}
        value={pesquisa}
        className="search-box "
      />
      <div className="card-list ">
        {filteredData.map((monster) => {
          return (
            <div key={monster.id} className="card-container">
              <img src={image} alt={monster.name} className="image" />
              <h2>{monster.name}</h2>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default App;

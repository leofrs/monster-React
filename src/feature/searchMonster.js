import { useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import { url } from "../data/data";

const SearchMonster = () => {
  const urlMonster = url;
  const { data } = useFetchData(urlMonster);
  const [pesquisa, setPesquisa] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = data.filter((monster) =>
      monster.name.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, pesquisa]);

  const handleChange = (event) => {
    setPesquisa(event.target.value);
  };
  return { setPesquisa, filteredData, pesquisa, handleChange };
};
export default SearchMonster;

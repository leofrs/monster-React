import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const urlUniversal = url;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlUniversal);
        const d = await response.json();
        setData(d);
      } catch (error) {
        alert(
          "Erro inesperado. Por favor, precione F5 para recarregar a página" +
            error
        );
      }
    };
    fetchData();
  }, [urlUniversal]);
  return { data };
};
export default useFetchData;

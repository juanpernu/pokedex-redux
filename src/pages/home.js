import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { getPokemonList, getPokemon } from "../actions";
import { Item, Loading, Pagination } from "../components";

function Home({ dispatch }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    pokemons: { list, count },
    loading: { isLoading },
  } = useSelector((state) => state);

  useEffect(() => {
    function fetchData() {
      getPokemonList()(dispatch);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPageChange = (page) => {
    const params = `?offset=${20 * (page - 1)}`;
    setCurrentPage(page);
    getPokemonList(params)(dispatch);
  };

  const itemOnClick = (id) => {
    getPokemon(id)(dispatch);
    navigate("/details");
  };

  return (
    <section>
      {isLoading && <Loading />}
      <div className="flex flex-col bg-slate-100">
        {list &&
          list.map((p, i) => <Item key={i} data={p} onClick={itemOnClick} />)}
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        limit={20}
        totalCount={count}
      />
    </section>
  );
}

export default connect()(Home);

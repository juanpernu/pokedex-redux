import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/solid";
import { getPokemonList, getPokemon, createPokemon } from "../actions";
import {
  Item,
  Loading,
  Pagination,
  Cta,
  Tooltip,
  Modal,
  Form,
} from "../components";

function Home({ dispatch }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
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

  console.log("LISTA", list);

  const onPageChange = (page) => {
    const params = `?offset=${20 * (page - 1)}`;
    setCurrentPage(page);
    getPokemonList(params)(dispatch);
  };

  const itemOnClick = (id) => {
    getPokemon(id)(dispatch);
    navigate("/details");
  };

  const addPokemon = (specs) => {
    dispatch(createPokemon(list, specs));
    setOpenModal(false);
  };

  return (
    <section className="w-1/2 m-auto">
      {isLoading && <Loading />}
      <img src="static/logo.png" width={300} alt="Logo" className="m-auto" />
      <div className="flex rounded-md border border-lime-500 flex-col bg-lime-100 h-[73vh] overflow-hidden overflow-y-scroll">
        {list &&
          list.map((p, i) => <Item key={i} data={p} onClick={itemOnClick} />)}
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        limit={20}
        totalCount={count}
      />
      <Modal
        isOpenModal={openModal}
        closeModal={() => setOpenModal(false)}
        title="Add new pokemon"
      >
        <Form onSubmit={addPokemon} onCancel={() => setOpenModal(false)} />
      </Modal>
      <Cta
        onClick={() => setOpenModal(true)}
        className="group hover:bg-blue-800"
      >
        <>
          <PlusIcon className="flex h-7 w-7 self-center" />
          <Tooltip text="Add pokemon" className="bottom-2.5 right-16" />
        </>
      </Cta>
    </section>
  );
}

export default connect()(Home);

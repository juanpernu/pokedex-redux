import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/solid";
import {
  getPokemonList,
  getPokemon,
  createPokemon,
  resetSnackbar,
} from "../actions";
import {
  Item,
  Loading,
  Pagination,
  Cta,
  Tooltip,
  Modal,
  Form,
  Snackbar,
} from "../components";
import { formatNewPokemon } from "../utils";

function Home({ dispatch }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const {
    pokemons: { list, count },
    loading: {
      isLoading,
      snackbarHandler: { showSnackbar, snackbarMessage, snackbarType },
    },
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

  const itemOnClick = async (id) => {
    const data = await getPokemon(id)(dispatch);
    if (data) navigate("/details");
  };

  const addPokemon = (specs) => {
    createPokemon(list, formatNewPokemon(specs))(dispatch);
    setOpenModal(false);
  };

  const onChangeHandler = () => dispatch(resetSnackbar());

  return (
    <section className="md:w-1/2 md:px-0 px-2 w-full m-auto">
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
        className="group hover:bg-blue-800 sm:bottom-8"
      >
        <>
          <PlusIcon className="flex h-7 w-7 self-center" />
          <Tooltip text="Add pokemon" className="bottom-2.5 right-16" />
        </>
      </Cta>
      {showSnackbar && (
        <Snackbar
          message={snackbarMessage}
          type={snackbarType}
          onChange={onChangeHandler}
        />
      )}
    </section>
  );
}

export default connect()(Home);

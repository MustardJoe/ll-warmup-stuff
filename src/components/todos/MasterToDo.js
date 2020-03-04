import React from 'react';
import AddToDo from '../../containers/AddToDo';
import VisibleToDoList from '../../containers/VisibleToDoList';
import Footer from './Footer';

const MasterToDo = () => {
  return (
    <>
      <AddToDo />
      <VisibleToDoList />
      <Footer />
    </>
  );
}

export default MasterToDo;


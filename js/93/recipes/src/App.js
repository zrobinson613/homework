import './App.css';
import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import ListComponent from './ListComponent';
import ClickCounter from './ClickCounter';
import RecipeList from './RecipeList';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './Header';
import { useState, useEffect } from 'react';

export default function App() {
  const [recipes, setState] = useState();

  useEffect(() => {
    (
      async () => {
        let response = await fetch("recipes.json");
        let recipes = response.json();
        console.log(recipes);
        setState(recipes);
      }
    )();

  });

  if (!recipes) {
    return (<div>Loading.....</div>);
  }
  return (
    <div className='container-fluid'>
      <div className='text-center'>
        <Header />
        <Routes>
          <Route index element={<RecipeList recipes={recipes} />} />

          <Route path='/recipe/:id' element={<RecipeDetails recipes={recipes} />} />

          {/*<Route path='*' element={<h5 style={{ color: 'red' }}>This is not the page you are looking for - 404</h5>} />*/}

          <Route path='*' element={<Navigate to='/' replace="true" />} />
        </Routes>
        <Outlet />
        <hr />
        <ClickCounter />
      </div>
    </div>
  );

}


/* state = {
    recipes: [
      {
        id: 1,
        name: 'Pizza',
        ingredients: ['dough', 'tomato', 'cheese'],
        directions: ['mix', 'bake', 'eat'],
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvN1PSDxd-BLz0GkvhLbrehSXm7b7AMQsJOw&usqp=CAU'
      },
      {
        id: 2,
        name: 'Burger',
        ingredients: ['buns', 'meat', 'tomato'],
        directions: ['slice', 'grill', 'eat'],
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKKB9oMfqOovzgqR0B7ws7aOiJtvhpHOqDw&usqp=CAU'
      }
    ]
  }*/

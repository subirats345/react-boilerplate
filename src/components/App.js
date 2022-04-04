import React from 'react'
import './App.css'

const initialRecipes = [
  {
    title: 'Somen',
    img: 'https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80',
    tags: ['cold', 'noodle', 'sesame'],
    ingredients: [
      'soy sauce',
      'miso',
      'sesame oil',
      'sugar',
      'tahini',
      'soy milk',
    ],
  },
  {
    title: 'Quinoa Hamburger',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
    tags: ['burger', 'quinoa'],
    ingredients: [
      'quinoa',
      'lentils',
      'leek',
      'salt',
      'sesame oil',
      'potato starch',
    ],
  },
  {
    title: 'Udon',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
    tags: ['burger', 'quinoa'],
    ingredients: [
      'quinoa',
      'lentils',
      'leek',
      'salt',
      'sesame oil',
      'potato starch',
    ],
  },
  {
    title: 'Karaage',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
    tags: ['burger', 'quinoa'],
    ingredients: [
      'quinoa',
      'lentils',
      'leek',
      'salt',
      'sesame oil',
      'potato starch',
    ],
  },
  {
    title: 'Edamame',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80',
    tags: ['burger', 'quinoa'],
    ingredients: [
      'quinoa',
      'lentils',
      'leek',
      'salt',
      'sesame oil',
      'potato starch',
    ],
  },
];

const title = 'Recipe Calculator';

export const App = () => {
  // State for the search function
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'Somen'
  );

  // State for the recipes list
  const [recipes, setRecipes] = React.useState(initialRecipes);

  // When seatchTerm is updated, set the local storage
  React.useEffect(
    () => localStorage.setItem('search', searchTerm),
    [searchTerm]
  );

  const asyncRecipes = () => {
    Promise.resolve({ data: { recipes: initialRecipes } });
  };

  // On search, update the searchTerm
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRemoveItem = (item) => {
    console.log(item);
    const newRecipes = recipes.filter((recipe) => item !== recipe.title);
    setRecipes(newRecipes);
  };

  return (
    <div>
      <h1>{title}</h1>
      <InputWithLabel
        id="search"
        title="Search"
        onInputChange={searchHandler}
        value={searchTerm}
      >
        Search
      </InputWithLabel>
      <h1>{searchTerm}</h1>
      <List
        list={recipes}
        filteredWord={searchTerm}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

const List = ({ list, filteredWord, onRemoveItem }) => {
  return list.map((recipe) =>
    recipe.title.toLowerCase().includes(filteredWord.toLowerCase()) ? (
      <ListItem key={recipe.title} {...recipe} remove={onRemoveItem} />
    ) : null
  );
};

const ListItem = ({ title, img, ingredients, tags, remove }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-card-header">
        <img height="100" src={img} />
        <h2>{title}</h2>
        <button onClick={() => remove(title)}>x</button>
      </div>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

const InputWithLabel = ({
  id,
  children,
  value,
  onInputChange,
  type = 'text',
}) => {
  return (
    <>
      <label for={id}>{children}</label>
      <br />
      <input id={id} type={type} value={value} onChange={onInputChange} />
    </>
  );
};

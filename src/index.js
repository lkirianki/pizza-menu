import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>

  );
}

function Header() {
  // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' }

  return (
    <header className='header'>
      <h1 style={{}} >Fast React pizza co.</h1>
    </header>

  )


}

function Menu() {
  const pizzas = pizzaData;
  const pizzasLength = pizzas.length;

  return (
    <main className='menu'>
      <h2>our Menu</h2>

      {pizzasLength > 0 ? (
        <>
          <p>authentic pizza from italy 6 flavours to choose from</p>

          <ul className='pizzas'>
            {pizzas.map(
              p => <Pizza pizzaobj={p} key={p.name} />
            )}
          </ul>
        </>
      ) : null}

      {/* <p>
        <ul>
          {pizzaData.map(p => <li>{p.name}</li>)}
        </ul>
      </p> */}
      {/* <Pizza name='Pizza Spinaci' ingridients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg' price={10} />

      <Pizza name='Pizza Funghi' ingridients='Tomato, mozarella, mushrooms, and onion'
        photoName='pizzas/funghi.jpg' price={12} /> */}

    </main>
  )
}

function Pizza({ pizzaobj }) {
  // if (pizzaobj.soldOut) return null;
  return (

    <li className={`pizza ${pizzaobj.soldOut ? 'sold-out' : ""}`} >
      <img src={pizzaobj.photoName} alt='' />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
      </div>
    </li >
  )
}


function Footer() {
  const Hour = new Date().getHours();
  const open = 12;
  const closedHour = 22;
  const isOpen = Hour >= open && Hour <= closedHour;
  console.log(isOpen)


  // if (Hour >= open) {
  //   alert("we're currently open")
  // }
  // else { alert("sorry we are closed") }

  return (
    <div className='order'>
      <footer className='footer'>
        <p> {isOpen ? "we're currently open" : "sorry we are closed"}</p>
      </footer>
      <button className='btn'>order</button>
    </div>
    // return React.createElement('footer', null, 'we are currently open')


  )

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);


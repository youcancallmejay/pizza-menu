import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'



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
  


function App(){
    return <div className = 'container'>
        <Header/>
        <Menu/>
        <Footer/>
        </div>
}

function Header(){
  //  const style = {color: 'red', fontSize: '48px'}
    return <header  className='header'>
                <h1>Fast React Pizza Co</h1>
            </header>
}

function Menu(){
    const pizzas = pizzaData;  
    const numPizzas = pizzas.length;

    return (
    <main className='menu'>
        <h2>Our Menu</h2>

       {/* {pizzaData.map((pizza) => 
       <Pizza name={pizza.name} />)} */}


       {numPizzas > 0 ? (
        <>
       <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
       <ul className='pizzas'>
          {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name}/> ))}
        </ul>
        </> 
        ) : (
          <p>We are sold out of pizzas</p> 
        )}
        
        {/* <Pizza 
            name="Pizza Prosciutto"
            ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
            photoName="pizzas/prosciutto.jpg"
            price={10}
        />

        <Pizza 
            name="Pizza Salamino"
            ingredients="Tomato, mozarella, and pepperoni"
            photoName="pizzas/salamino.jpg"
            price={12}
        /> */}

       
    </main>
)}

function Footer(){
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour <= closeHour
    console.log(isOpen)

    // if(hour >= openHour && hour <= closeHour) alert("We're currently open!");
    // else alert("We are closed")

    return (
        <footer className='footer'>
            {isOpen ? ( 
            <Order closeHour = {closeHour} openHour = {openHour}/>
              
            ) : (<p>Currently closed. Our hours are {openHour} until {closeHour}</p>)}
        </footer>
    )
};

function Order ({closeHour, openHour}){
    return(

      <div className='order'>
        <p>We're open from {openHour} until {closeHour}. Come visit us or order online. </p>
      <button className='btn'>Order now. </button>
</div>
        )
}

function Pizza({pizzaObj}){
   // console.log(props)

   // if(pizzaObj.soldOut) return null;

    return <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
        <li className='pizza'>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 2}</span>
        </li>
    </div> 
    
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App></App></React.StrictMode>)
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Home = () => {
const url = "https://api.chucknorris.io/jokes/random";
const [randomJoke, setRandomJoke] = useState([]);

const fetchRandomNorris = async (url) => {
    try {
    const response = await fetch(url);
    const data = await response.json();
    setRandomJoke(data);
    } catch (error) {}
};

useEffect(() => {
    fetchRandomNorris(url)
}, [])

const { categories, value } = randomJoke;

return (
    <div>
    <header>
      <ul>
        <li><a href="">FUNCTIONALITIES</a></li>
        <li><a href="">SPECIAL OFFERS</a></li>
        <li>MY SPACE</li>
      </ul>
    </header>
    <div className="hero">
        <h1 className="title"> Chuck Norris Jokes</h1>
        <h4>He knows what you did last winter</h4>
        <form>
          <input name="search" type="search" placeholder="Search your type of joke"></input>
        </form>
    </div>
    <div className="content">
        
        <div className="card">
          <span id="call">Random Joke</span><br/><br/><br/><br/>
          <h2 id="cat">Category:{categories}</h2><br/><br/>
          <h2>{value}</h2>

          <span className="next">
            <button className="btn-next" onClick={() => fetchRandomNorris(url)}>
              Next &gt;
            </button>
          </span>

        </div>
        
        <div id="slect-cat">
        <h3>Not done yet. Here catch these:</h3>
        <Link to="/categories" className="btn2" id="select">
          Joke Categories
        </Link>
        </div>
        </div>
        <div className="footer">
          <h1 className="titlef">WANT TO GET PAID?</h1>
          <br/><br/><br/>
          <Link to = "" className="btn2" id="joke-submit">
            <h3>Submit your funny joke &gt; &gt;</h3></Link>
        </div>
      </div>
  );
};

export default Home;
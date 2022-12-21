import { useGlobalContext } from "./context";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
const url = "https://api.chucknorris.io/jokes/random?category=";
const { category } = useGlobalContext();
//   const [categorize, setCategorize] = useState("animal");

const [joke, setJoke] = useState([]);

const fetchCategory = async (url) => {
    try {
    const response = await axios(url);
    const data = response.data;
    setJoke(data);
    } catch (error) {}
};

//   useEffect(() => {
//     fetchCategory(`${url}${categorize}`);
//   }, [categorize]);

  const {categories, value} = joke;

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
      <span id="call">Categorized Jokes</span><br/><br/><br/><br/>
          <h2 id="cat">Category: {categories}</h2><br/><br/>
          <h2>{value}</h2>
      </div>

      <div id="slect-cat2">
      <h4>To preview next, press the same category</h4>
      {category.map((item, index) => {
        return (
          <button className="btn" onClick={() => fetchCategory(`${url}${item}`)} key={index}>
            {item}
          </button>
        );
      })}
        <Link to="/" className="btn2">
          back home
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

export default Categories;
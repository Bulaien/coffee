import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card.jsx";
import Background from "./bg-cafe.jpg";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const data = await res.json();

      setData(data);
      console.log(data);
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center h-4/5">
        <header className="w-4/5 flex  justify-center">
          <img src={Background} alt="" />
        </header>

        <main className="w-4/5 h-[800px] bg-black">d</main>
      </div>
      <div className="absolute bg-[#1c1d1f]  top-44 left-96 right-96 rounded-xl pb-5 ">
        <div className="flex flex-col items-center mt-16 mb-6">
          <h1 className="text-[32px] text-white text-center mb-3">
            Our Collection
          </h1>
          <p className="text-[#6F757C]  w-[450px] text-center text-[16px]">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-[#6F757C] py-2 px-3 rounded-xl">
            All Products
          </button>
          <button className="text-white p-3">Available Now</button>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-10">
          {data.map((date) => (
            <Card
              name={date.name}
              price={date.price}
              image={date.image}
              id={date.id}
              popular={date.popular}
              votes={date.votes}
              rating={date.rating}
              available={date.available}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

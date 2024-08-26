import "./App.css";

import { NavBar, Footer } from "./ui-components";
// import { PetProfile } from "./ui-components";
import { Pets } from "./ui-components";

function App() {
  // const petProfileOverride = {
  //   Breed: {
  //     color: "blue",
  //   },
  // };

  const navbarOverrides = {
    image: {
      src: "https://img.icons8.com/color/50/000000/cat",
    },
    "Add Pet": {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        alert("Hello");
      },
    },
  };

  return (
    <div className="App">
      <NavBar 
        width={"100%"} 
        overrides={navbarOverrides}
        />
      <header className="App-header">
        {/* <Pets itemsPerPage={1} currentPage={2} /> */}
        <Pets
          overrideItems={({ item, index }) => ({
            overrides: {
              Breed: { color: "blue" },
              Button29766907: { onClick: () => alert(`${item.name}`) },
            },
          })}
          />
        {/* <PetProfile overrides={petProfileOverride} /> */}
      </header>
      <Footer width={"100%"} />
    </div>
  );
}

export default App;

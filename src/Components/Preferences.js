import React from 'react';
import { useState } from 'react';
import { useID } from 'react';
import Header from './Header';
import a4gJuice from "./Images/a4gJuice.png";
import a4gMilk from "./Images/a4gMilk.png";
import a4gPastaSauce from "./Images/a4gPastaSauce.png";
import a4gTomatoSoup from "./Images/a4gTomatoSoup.png";
import a4gChickenSoup from "./Images/a4gChickenSoup.png";
import a4gMushroomSoup from "./Images/a4gMushroomSoup.png";
import a4gGreenBeans from "./Images/a4gGreenBeans.png";
import a4gCorn from "./Images/a4gCorn.png";
import a4gCanCarrots from "./Images/a4gCanCarrots.png";
import a4gPineapple from "./Images/a4gPineapple.png";
import a4gPear from "./Images/a4gPear.png";
import a4gPeach from "./Images/a4gPeach.png";
import a4gKidney from "./Images/a4gKidney.png";
import a4gGarbanzo from "./Images/a4gGorbanzo.png";
import a4gBlack from "./Images/a4GBlackBeans.png";
import a4gPeanutButter from "./Images/a4gPeanutButter.png";
import a4gCheerios from "./Images/a4gCheerios.png";
import a4gRiceKrispies from "./Images/a4gRiceKrispies.png";
import a4gApple from "./Images/a4gApple.png";
import a4gPotato from "./Images/a4gPotato.png";
import a4gOnions from "./Images/a4gOnion.png";
import a4gSweetPotato from "./Images/a4gSweetPotatos.png";
import a4gYams from "./Images/a4gYam.png";
import a4gLettuce from "./Images/a4gLettuce.png";
import a4gSquash from "./Images/a4gSquash.png";
import a4gCarrots from "./Images/a4gCarrots.png";
import a4gChicken from "./Images/a4gChicken.png";
import a4gTurkey from "./Images/a4gTurkey.png";
import a4gHamburger from "./Images/a4gHamburger.png";
import a4gWhiteFish from "./Images/a4gWhiteFish.png";
import a4gRedFish from "./Images/a4gRedFish.png";
import a4gCheese from "./Images/a4gCheese.png";
import a4gBread from "./Images/a4gBread.png";
import a4gEggs from "./Images/a4gEggs.png";

function Preferences() {
    return (
        <>
        <Header />
            <h1>
              Please tell us about you and the food you want. We will use this to fill a bag for you, but can't guarantee that 
              you'll get everything that you want and nothing that you do not want.
            </h1>
            <h2>Household</h2>
                <h3>Please tell us about you and the people in your house.</h3>
                <AddMember title="AddMember"></AddMember>
            <Panel title="Preferences" isActive={true}>
                Please select the foods that you do not want.
                <FoodSelect />
            </Panel>
            </>
    );
};

  function Panel({ title, children }) {
    const [isActive, setIsActive] = useState(false);
    return (
      <section className="panel">
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button class={"normButton"} onClick={() => setIsActive(true)}>
            {title}
          </button>
        )}
      </section>
    );
  }

  function AddMember({ title }) {
    const [isActive, setIsActive] = useState(false);
    return (
      <section>
        {isActive ? (
          <>
          <p>Please note any allergies below.</p>
          <FoodSelect />
          </>
        ) : (
          <button class={"normButton"} onClick={() => setIsActive(true)}>
            {title}
          </button>
        )}
      </section>
    );
  }

  function FoodSelect() {
    return (
      <>
    <Panel title="Beverages" isActive={true}>
                  <Button buttonName="juice"><img src={a4gJuice} alt="juice"></img></Button>
                  <Button buttonName="milk"><img src={a4gMilk} alt="milk"></img></Button>
                </Panel>
                <Panel title="Soup/Sauce" isActive={true}>
                  <Button buttonName="PastaSauce"><img src={a4gPastaSauce} alt="sauce"></img></Button>
                  <Button buttonName="TomSoup"><img src={a4gTomatoSoup} alt="tomato soup"></img></Button>
                  <Button buttonName="ChickSoup"><img src={a4gChickenSoup} alt="chicken soup"></img></Button>
                  <Button buttonName="MushSoup"><img src={a4gMushroomSoup} alt="mushroom soup"></img></Button>
                </Panel>
                <Panel title="Canned Vegetables" isActive={true}>
                  <Button buttonName="GreenBeans"><img src={a4gGreenBeans} alt="green beans"></img></Button>
                  <Button buttonName="Corn"><img src={a4gCorn} alt="corn"></img></Button>
                  <Button buttonName="CanCarrot"><img src={a4gCanCarrots} alt="carrots"></img></Button>
                </Panel>
                <Panel title="Canned Fruit" isActive={true}>
                  <Button buttonName="Pineapple"><img src={a4gPineapple} alt="pineapple"></img></Button>
                  <Button buttonName="Pear"><img src={a4gPear} alt="pear"></img></Button>
                  <Button buttonName="Peach"><img src={a4gPeach} alt="peach"></img></Button>
                </Panel>
                <Panel title="Beans" isActive={true}>
                  <Button buttonName="Kidney"><img src={a4gKidney} alt="kidney beans"></img></Button>
                  <Button buttonName="Chickpea"><img src={a4gGarbanzo} alt="garbanzo beans/chickpeas"></img></Button>
                  <Button buttonName="Black"><img src={a4gBlack} alt="black beans"></img></Button>
                </Panel>  
                <Panel title="Assorted" isActive={true}>
                  <Button buttonName="PeanutButter"><img src={a4gPeanutButter} alt="peanut butter"></img></Button>
                </Panel>
                <Panel title="Cereal" isActive={true}>
                  <Button title="Cheerios"><img src={a4gCheerios} alt="cheerios"></img></Button>
                  <Button title="RiceKrispies"><img src={a4gRiceKrispies} alt="rice krispies"></img></Button>
                </Panel>
                <Panel title="Produce" isActive={true}>
                  <Button title="Apple"><img src={a4gApple} alt="apple"></img></Button>
                  <Button title="Potato"><img src={a4gPotato} alt="potato"></img></Button>
                  <Button title="Onions"><img src={a4gOnions} alt="onion"></img></Button>
                  <Button title="SweetPotato"><img src={a4gSweetPotato} alt="sweet potato"></img></Button>
                  <Button title="Yam"><img src={a4gYams} alt="yams"></img></Button>
                  <Button title="Lettuce"><img src={a4gLettuce} alt="lettuce"></img></Button>
                  <Button title="Squash"><img src={a4gSquash} alt="squash"></img></Button>
                  <Button title="Carrots"><img src={a4gCarrots} alt="carrots"></img></Button>
                </Panel>
                <Panel title="Meat" isActive={true}>
                  <Panel title="Poultry" isActive={true}>
                    <Button title="Chicken"><img src={a4gChicken} alt="chicken"></img></Button>
                    <Button title="Turkey"><img src={a4gTurkey} alt="turkey"></img></Button>
                  </Panel>
                  <Panel title="Beef" isActive={true}>
                    <Button title="Hamburger"><img src={a4gHamburger} alt="hamburger"></img></Button>
                  </Panel>
                  <Panel title="Fish" isActive={true}>
                    <Button title="WhiteFish"><img src={a4gWhiteFish} alt="white fish"></img></Button>
                    <Button title="RedFish"><img src={a4gRedFish} alt="red fish"></img></Button>
                  </Panel>
                </Panel>
                <Panel title="Other Noncanned" isActive={true}>
                  <Button title="Cheese"><img src={a4gCheese} alt="cheese"></img></Button>
                  <Button title="Bread"><img src={a4gBread} alt="bread"></img></Button>
                  <Button title="Eggs"><img src={a4gEggs} alt="eggs"></img></Button>
                </Panel>
                </>
    )
  }

  function Button({buttonName, children}) {
    const [isActive, setIsActive] = useState(false);
    return (
      <>
        {isActive ? (
          <button class={"activeBev"}>
            {children}
          </button>
        ) : (
          <button class={"inactiveButton"} onClick={() => setIsActive(true)}>
            {children}
          </button>
        )}
      </>
    );
  }

export default Preferences;
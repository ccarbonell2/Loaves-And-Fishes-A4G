import React from 'react';
import { useState } from 'react';
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
import a4gPear from "./Images/a4gPineapple.png";
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
            <h1>Please tell us about you and the food you want. We will use this to fill a bag for you, but can't guarantee that 
                you'll get everything that you want and nothing that you do not want.
            </h1>
            <Panel title="Household" isActive={true}>
                <p>How many people are in your house?</p>
                <p>How many people are in your house?</p>
            </Panel>
            <Panel title="Allergies" isActive={true}>
                Add Allergy
            </Panel>
            <Panel title="Preferences" isActive={true}>
                Please select the foods that you do not want.
                <Panel title="Beverages" isActive={true}>
                  <button><img src={a4gJuice}></img></button>
                  <button><img src={a4gMilk}></img></button>
                </Panel>
                <Panel title="Soup/Sauce" isActive={true}>
                  <button><img src={a4gPastaSauce}></img></button>
                  <button><img src={a4gTomatoSoup}></img></button>
                  <button><img src={a4gChickenSoup}></img></button>
                  <button><img src={a4gMushroomSoup}></img></button>
                </Panel>
                <Panel title="Canned Vegetables" isActive={true}>
                  <button><img src={a4gGreenBeans}></img></button>
                  <button><img src={a4gCorn}></img></button>
                  <button><img src={a4gCanCarrots}></img></button>
                </Panel>
                <Panel title="Canned Fruit" isActive={true}>
                  <button><img src={a4gPineapple}></img></button>
                  <button><img src={a4gPear}></img></button>
                  <button><img src={a4gPeach}></img></button>
                </Panel>
                <Panel title="Beans" isActive={true}>
                  <button><img src={a4gKidney}></img></button>
                  <button><img src={a4gGarbanzo}></img></button>
                  <button><img src={a4gBlack}></img></button>
                </Panel>
                <Panel title="Assorted" isActive={true}>
                  <button><img src={a4gPeanutButter}></img></button>
                </Panel>
                <Panel title="Cereal" isActive={true}>
                  <button><img src={a4gCheerios}></img></button>
                  <button><img src={a4gRiceKrispies}></img></button>
                </Panel>
                <Panel title="Produce" isActive={true}>
                  <button><img src={a4gApple}></img></button>
                  <button><img src={a4gPotato}></img></button>
                  <button><img src={a4gOnions}></img></button>
                  <button><img src={a4gSweetPotato}></img></button>
                  <button><img src={a4gYams}></img></button>
                  <button><img src={a4gLettuce}></img></button>
                  <button><img src={a4gSquash}></img></button>
                  <button><img src={a4gCarrots}></img></button>
                </Panel>
                <Panel title="Meat" isActive={true}>
                  <Panel title="Poultry" isActive={true}>
                    <button><img src={a4gChicken}></img></button>
                    <button><img src={a4gTurkey}></img></button>
                  </Panel>
                  <Panel title="Beef" isActive={true}>
                    <button><img src={a4gHamburger}></img></button>
                  </Panel>
                  <Panel title="Fish" isActive={true}>
                    <button><img src={a4gWhiteFish}></img></button>
                    <button><img src={a4gRedFish}></img></button>
                  </Panel>
                </Panel>
                <Panel title="Other Noncanned" isActive={true}>
                  <button><img src={a4gCheese}></img></button>
                  <button><img src={a4gBread}></img></button>
                  <button><img src={a4gEggs}></img></button>
                </Panel>
            </Panel>
            </>
    );
};
  
  function Panel({ title, children }) {
    const [isActive, setIsActive] = useState(false);
    return (
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={() => setIsActive(true)}>
            Show
          </button>
        )}
      </section>
    );
  }

export default Preferences;
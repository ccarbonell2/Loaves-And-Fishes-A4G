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

/*import pool from './db';

const connection = pool.connect();*/

function Preferences() {
    /*variables*/
    const [name, setName] = useState('First Last');
    const [family, setFamily] = useState('1');

    return (
        <>
        <Header />
            {/*General information*/}
            <h1>
              Please tell us about you and the food you want. We will use this to fill a bag for you, but can't guarantee that you'll get everything that you want and nothing that you do not want.
            </h1>
        
            <form>
                <label>
                Username:{' '}
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                />
                </label>
                <br />

                <label>
                Number of people in the household:{' '}
                <input
                    value={family}
                    onChange={(e) => setFamily(e.target.value)}
                    type="number"
                    name="family"
                />
                </label>
                <br />

                <label>
                Please list any allergies or dietary restrictions:{' '}
                <input type="text" name="restrictions" />
                </label>
            </form>

                <AddMember title="AddMember"></AddMember>
            <Panel title="Preferences" isActive={true}>
                Please select the foods that you do not want.
                <FoodSelect />
            </Panel>

            {/*repeating information*/}

        {name !== 'First Last' && name !== '' && <p>Your name is {name}.</p>}
        {(name == '' || name == 'First Last') && (
          <p>
            Please enter your username so we can give you the right food.
          </p>
        )}


        {family > 1 && <p>You have {family} people in your household.</p>}
        {family == 1 && <p>You have {family} person in your household.</p>}
        {family <= 0 && (
          <p>
            {family} is not a possible number of people in your household.
          </p>
        )}
        {family%1 !== 0 && <p> We unfortunatly cannot serve part of a person. Please correct the number.</p>}

        {/*button*/}
        {family >= 1 && family%1 == 0 && name !== 'First Last' && name !== '' && (
            <Button      
              onPress={() => {
                alert('Submit');
              }}>
              <p>Submit</p>
            </Button>
        )}
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
            <form >
                <Panel title="Beverages" isActive={true}>
                    <label >
                      <img src={a4gJuice} alt="juice"></img>
                      Juice: <input type="checkbox" name="juice" />
                      
                  </label>
                  <label >
                    <Button buttonName="milk"><img src={a4gMilk} alt="milk"></img></Button>
                      Milk: <input type="checkbox" name="milk" />
                  </label>
                </Panel>

                <Panel title="Soup/Sauce" isActive={true}>
                  <label >
                    <Button buttonName="PastaSauce"><img src={a4gPastaSauce} alt="sauce"></img></Button>
                      Pasta Sauce: <input type="checkbox" name="sauce" />
                  </label>
                  <label >
                    <Button buttonName="TomSoup"><img src={a4gTomatoSoup} alt="tomato soup"></img></Button>
                      Tomato Soup: <input type="checkbox" name="tomatoSoup" />
                  </label>
                  <label >
                    <Button buttonName="ChickSoup"><img src={a4gChickenSoup} alt="chicken soup"></img></Button>
                      Chicken Soup: <input type="checkbox" name="chickenSoup" />
                  </label>
                  <label >
                    <Button buttonName="MushSoup"><img src={a4gMushroomSoup} alt="mushroom soup"></img></Button>
                      Mushroom Soup: <input type="checkbox" name="mushroomSoup" />
                  </label>
                </Panel>

                <Panel title="Canned Vegetables" isActive={true}>
                  <label >
                    <Button buttonName="GreenBeans"><img src={a4gGreenBeans} alt="green beans"></img></Button>
                    Green Beans: <input type="checkbox" name="greenBean" />
                    </label>
                    <label >
                    <Button buttonName="Corn"><img src={a4gCorn} alt="corn"></img></Button>
                    Corn: <input type="checkbox" name="corn" />
                  </label>
                  <label >
                    <Button buttonName="CanCarrot"><img src={a4gCanCarrots} alt="carrots"></img></Button>
                    Carrots: <input type="checkbox" name="carrot" />
                  </label>
                </Panel>

                <Panel title="Canned Fruit" isActive={true}>
                <label >
                    <Button buttonName="Pineapple"><img src={a4gPineapple} alt="pineapple"></img></Button>
                      Pineapple: <input type="checkbox" name="pineapple" />
                  </label>
                  <label >
                    <Button buttonName="Pear"><img src={a4gPear} alt="pear"></img></Button>
                      Pear: <input type="checkbox" name="pear" />
                  </label>
                  <label >
                    <Button buttonName="Peach"><img src={a4gPeach} alt="peach"></img></Button>
                      Peach: <input type="checkbox" name="peach" />
                  </label>
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
            </form>
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
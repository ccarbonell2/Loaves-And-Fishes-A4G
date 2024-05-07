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

const foods = [];
const foodList = [
  "Juice", 
  "Milk", 
  "Pasta Sauce",
  "Tomato Soup",
  "Chicken Soup",
  "Mushroom Soup",
  "Green Beans", 
  "Corn",
  "Carrots",
  "Pineapple",
  "Pear",
  "Peach",
  "Kidney Beans",
  "Chickpeas/garbanzo beans",
  "Black beans",
  "Peanut Butter",
  "Cheerios",
  "Rice Krispies",
  "Apple",
  "Potato",
  "Onion",
  "Sweet potato",
  "Yams",
  "Lettuce",
  "Squash",
  "Carrots",
  "Chicken",
  "Turkey",
  "Hamburger",
  "White fish",
  "Red fish",
  "Cheese",
  "Bread",
  "Eggs"
];
const data = {};

/*import pool from './db';

const connection = pool.connect();*/

function Preferences() {
    /*variables*/
    const [name, setName] = useState('');
    const [family, setFamily] = useState(1);
    const [allergies, setAllergies] = useState('');

    for (let i = 0; i < foodList.length; i++) {
      foods[i] = 0;
    }

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
                </label><br />
                <br />

                <label>
                Enter any allergies and dietary restrictions:{' '}
                <input
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                    type="text"
                    name="allergies"
                />
                </label><br />
            </form>

            Please select the foods that you do not want.
                <FoodSelect />

            {/*repeating information*/}

        {name !== 'default' && name !== '' && <p>Your name is {name}.</p>}
        {(name == '' || name == 'default') && (
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
        {family >= 1 && family%1 == 0 && name !== 'default' && name !== '' && (
            <button type="submit" onClick={() => Submit(name, family, allergies)}>Submit</button>
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
          <button className={"normButton"} onClick={() => setIsActive(true)}>
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
          <button className={"normButton"} onClick={() => setIsActive(true)}>
            {title}
          </button>
        )}
      </section>
    );
  }

  function setFood(foodIndex) {
    foods[foodIndex] += 1;
  }

  function FoodSelect() {
    return (
        <>
            <form >
                <Panel title="Beverages" isActive={true}>
                  <label >
                    <img src={a4gJuice} alt="juice"></img>
                    Juice: <input type="checkbox" name="juice" onChange={() => setFood(0)} />
                  </label><br />
                  <label >
                    <img src={a4gMilk} alt="milk"></img>
                    Milk: <input type="checkbox" name="milk" onChange={() => setFood(1)} />
                  </label><br />
                </Panel>

                <Panel title="Soup/Sauce" isActive={true}>
                  <label >
                    <img src={a4gPastaSauce} alt="sauce"></img>
                    Pasta Sauce: <input type="checkbox" name="sauce" onChange={() => setFood(2)} />
                  </label><br />
                  <label >
                    <img src={a4gTomatoSoup} alt="tomato soup"></img>
                    Tomato Soup: <input type="checkbox" name="tomatoSoup" onChange={() => setFood(3)} />
                  </label><br />
                  <label >
                    <img src={a4gChickenSoup} alt="chicken soup"></img>
                    Chicken Soup: <input type="checkbox" name="chickenSoup" onChange={() => setFood(4)} />
                  </label><br />
                  <label >
                    <img src={a4gMushroomSoup} alt="mushroom soup"></img>
                    Mushroom Soup: <input type="checkbox" name="mushroomSoup" onChange={() => setFood(5)} />
                  </label><br />
                </Panel>

                <Panel title="Canned Vegetables" isActive={true}>
                  <label >
                    <img src={a4gGreenBeans} alt="green beans"></img>
                    Green Beans: <input type="checkbox" name="greenBean" onChange={() => setFood(6)} />
                  </label><br />
                  <label >
                    <img src={a4gCorn} alt="corn"></img>
                    Corn: <input type="checkbox" name="corn" onChange={() => setFood(7)} />
                  </label><br />
                  <label >
                    <img src={a4gCanCarrots} alt="carrots"></img>
                    Carrots: <input type="checkbox" name="carrot" onChange={() => setFood(8)} />
                  </label><br />
                </Panel>

                <Panel title="Canned Fruit" isActive={true}>
                <label >
                    <img src={a4gPineapple} alt="pineapple"></img>
                    Pineapple: <input type="checkbox" name="pineapple" onChange={() => setFood(9)} />
                  </label><br />
                  <label >
                    <img src={a4gPear} alt="pear"></img>
                    Pear: <input type="checkbox" name="pear" onChange={() => setFood(10)} />
                  </label><br />
                  <label >
                    <img src={a4gPeach} alt="peach"></img>
                    Peach: <input type="checkbox" name="peach" onChange={() => setFood(11)} />
                  </label><br />
                </Panel>

                <Panel title="Beans" isActive={true}>
                  <label >
                    <img src={a4gKidney} alt="kidney beans"></img>
                    Kidney Beans: <input type="checkbox" name="kidneyBean" onChange={() => setFood(12)} />
                  </label><br />
                  <label >
                    <img src={a4gGarbanzo} alt="garbanzo beans/chickpeas"></img>
                    Chickpeas and garbanzo beans: <input type="checkbox" name="chickpeas" onChange={() => setFood(13)} />
                  </label><br />
                  <label >
                    <img src={a4gBlack} alt="black beans"></img>
                    Black Beans: <input type="checkbox" name="blackBeans" onChange={() => setFood(14)} />
                  </label><br />
                </Panel>  

                <Panel title="Assorted" isActive={true}>
                  <label >
                    <img src={a4gPeanutButter} alt="peanut butter"></img>
                    Peanut Butter: <input type="checkbox" name="peanutButter" onChange={() => setFood(15)} />
                  </label><br />
                </Panel>

                <Panel title="Cereal" isActive={true}>
                  <label >
                    <img src={a4gCheerios} alt="cheerios"></img>
                    Cheerios: <input type="checkbox" name="cheerios" onChange={() => setFood(16)} />
                  </label><br />
                  <label >
                  <img src={a4gRiceKrispies} alt="rice krispies"></img>
                    Rice Krispies: <input type="checkbox" name="riceKrispies" onChange={() => setFood(17)} />
                  </label><br />
                </Panel>

                <Panel title="Produce" isActive={true}>
                  <label >
                    <img src={a4gApple} alt="apple"></img>
                    Apple: <input type="checkbox" name="apple" onChange={() => setFood(18)} />
                  </label><br />
                  <label >
                    <img src={a4gPotato} alt="potato"></img>
                    Potato: <input type="checkbox" name="potato" onChange={() => setFood(19)} />
                  </label><br />
                  <label >
                    <img src={a4gOnions} alt="onion"></img>
                    Onion: <input type="checkbox" name="onion" onChange={() => setFood(20)} />
                  </label><br />
                  <label >
                    <img src={a4gSweetPotato} alt="sweet potato"></img>
                    Sweet Potato: <input type="checkbox" name="sweetPotato" onChange={() => setFood(21)} />
                  </label><br />
                  <label >
                    <img src={a4gYams} alt="yams"></img>
                    Yams: <input type="checkbox" name="yams" onChange={() => setFood(22)} />
                  </label><br />
                  <label >
                    <img src={a4gLettuce} alt="lettuce"></img>
                    Lettuce: <input type="checkbox" name="lettuce" onChange={() => setFood(23)} />
                  </label><br />
                  <label >
                    <img src={a4gSquash} alt="squash"></img>
                    Squash: <input type="checkbox" name="squash" onChange={() => setFood(24)} />
                  </label><br />
                  <label >
                    <img src={a4gCarrots} alt="carrots"></img>
                    Carrots: <input type="checkbox" name="carrots" onChange={() => setFood(25)} />
                  </label><br />
                </Panel>

                <Panel title="Meat" isActive={true}>
                  <Panel title="Poultry" isActive={true}>
                    <label >
                      <img src={a4gChicken} alt="chicken"></img>
                      Chicken: <input type="checkbox" name="chicken" onChange={() => setFood(26)} />
                    </label><br />
                    <label >
                      <img src={a4gTurkey} alt="turkey"></img>
                      Turkey: <input type="checkbox" name="turkey" onChange={() => setFood(27)} />
                    </label><br />
                  </Panel>

                  <Panel title="Beef" isActive={true}>
                    <label >
                      <img src={a4gHamburger} alt="hamburger"></img>
                      Hamburger: <input type="checkbox" name="hamburger" onChange={() => setFood(28)} />
                    </label><br />
                  </Panel>

                  <Panel title="Fish" isActive={true}>
                    <label >
                      <img src={a4gWhiteFish} alt="white fish"></img>
                      White fish: <input type="checkbox" name="whiteFish" onChange={() => setFood(29)} />
                    </label><br />
                    <label >
                      <img src={a4gRedFish} alt="red fish"></img>
                      Red Fish: <input type="checkbox" name="redFish" onChange={() => setFood(30)} />
                    </label><br />
                  </Panel>

                </Panel>
                <Panel title="Other Noncanned" isActive={true}>
                  <label >
                  <img src={a4gCheese} alt="cheese"></img>
                    Cheese: <input type="checkbox" name="cheese" onChange={() => setFood(31)} />
                  </label><br />
                  <label >
                    <img src={a4gBread} alt="bread"></img>
                    Bread: <input type="checkbox" name="bread" onChange={() => setFood(32)} />
                  </label><br />
                  <label >
                    <img src={a4gEggs} alt="eggs"></img>
                    Eggs: <input type="checkbox" name="eggs" onChange={() => setFood(33)} />
                  </label><br />
                </Panel>
            </form>
        </>
    )
  }

  function Submit(name, family, allergies) {
    data.name = name;
    data.family = family;
    data.allergies = allergies;
    let dataString = '';
    for (let i = 0; i < foodList.length; i++) {
      if (foods[i] % 2 === 0)
        data[foodList[i]] = false;
      else
        data[foodList[i]] = true;
    }
    for (var property in data)
      dataString += property + " = " + data[property] + "\n";
    alert(dataString);
  }

  function Button({buttonName, children}) {
    const [isActive, setIsActive] = useState(false);
    return (
      <>
        {isActive ? (
          <button className={"activeBev"}>
            {children}
          </button>
        ) : (
          <button className={"inactiveButton"} onClick={() => setIsActive(true)}>
            {children}
          </button>
        )}
      </>
    );
  }


export default Preferences;
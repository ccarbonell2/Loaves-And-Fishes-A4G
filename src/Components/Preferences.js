import React from 'react';
import { useState } from 'react';

function Preferences() {
    return (
        <>
            <h1>Please tell us about you and the food you want. We will use this to fill a bag for you, but can't guarantee that 
                you'll get everything that you want and nothing that you do not want.
            </h1>
            <Panel title="Household" isActive={true}>
                How many people are in your house?
                How many babies live in your house?
                How many children and teens live in your house?
                How many adults live in your house?
            </Panel>
            <Panel title="Allergies" isActive={true}>
                Add Allergy
            </Panel>
            <Panel title="Preferences" isActive={true}>
                Please select the foods that you do not want.
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
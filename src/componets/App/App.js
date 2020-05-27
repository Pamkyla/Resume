import React from 'react';

import SwapiService from '../../services/SwapiService'

const App = () => {

    const swapi = new SwapiService();
  
    swapi.getPerson(5)
      .then((body) => {
          console.log(body);
      })

    console.log('app');
    return(
        <div>
            Header
        </div>
    )
}

export default App;
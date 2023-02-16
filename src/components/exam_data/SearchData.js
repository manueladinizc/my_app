import React, { useState, useEffect } from 'react';

import FullData from './FullData'
import './SearchData.css' 

const SearchData = (props) => {
  const URL = 'https://mocki.io/v1/796b3b31-b4ef-4235-8f6d-34d9182632df'
	const [data, setData] = useState(null);
	
	useEffect(() => {
		const fetchExamData = () => {
			fetch(URL)
				.then(response => {
					if (response.status === 404) {
						setData('Token não encontrado.');
					} else {
						return response.json();
					}
				})
				.then(data => {
					setData(data);
				});
		};
		fetchExamData();
	}, []);

	if (!data) return <div>Loading...</div>;
  return (
		<div>
      <h4>Buscar pelo Token:</h4>
        <div class="wrap">
          <div class="search">
            <input type="text" id="site-search" class="searchTerm"  placeholder="Ex: ABC123"/>
            <button id="search-button" type="submit" class="searchButton"> Buscar</button>
          </div>
        </div>
		</div>
	);
}

export default SearchData;


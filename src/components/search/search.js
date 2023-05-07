import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_DB_URL, geoAPIOptions } from "../../API";
import { useContext } from "react";
import { AppContext } from "../../App";

const Search = () => {
    const [search, setSearch] = useState(null);

    const {onSearchChange} = useContext(AppContext);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_DB_URL}?minPopulation=1000000&namePrefix=${inputValue}`, geoAPIOptions)
        .then((response) => response.json())
        .then((response) => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`
                    }
                })
            }
        });
    }

    const handleChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate 
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;

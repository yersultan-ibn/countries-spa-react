import axios from "axios";
import { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../config";
import { Card } from "../components/Card";
import { List } from "../components/List";
import { Controls } from "../components/Controls";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const HomePage = ({countries, setCountries}) => {
    // const [countries, setCountries] = useState([]);

   const {push} = useHistory();

    useEffect(() => {
    if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));

    
    }, []);
    return(
      <>
      <Controls/>
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population?.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region
              },
              {
                title: "Capital",
                description: c.capital
              },
            ],
          };
          return (
            <Card key={c.name} {...countryInfo} onClick={() => push(`/country${c.name}`)}/>
          )
        })}
      </List>
      </>
    )
};
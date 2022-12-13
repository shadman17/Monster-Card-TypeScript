import "./App.css";
import { useState, useEffect, ChangeEvent } from "react";
import SearchBox from "./components/search-box/search-box";
import { getData } from "./utils/data.utils";
import CardList from "./components/card-list/card-list";

export type Monster = {
    id: string;
    name: string;
    email: string;
};

const App = () => {
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [searchField, setSearchField] = useState("");
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    console.log("rendered");

    useEffect(() => {
        const fetchMonsters = async () => {
            const monsters = await getData<Monster[]>(
                "https://jsonplaceholder.typicode.com/users"
            );

            setMonsters(monsters);
        };
        fetchMonsters();
    }, []);

    useEffect(() => {
        const newfilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        setFilteredMonsters(newfilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = e.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="App">
            <h1 className="app-title"> Monsters Rolodex </h1>

            <SearchBox
                className="monster-search-box"
                onChangeHandler={onSearchChange}
                placeholder="Search Monsters"
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;

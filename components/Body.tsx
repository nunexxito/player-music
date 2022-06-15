import { useState } from "react";
import Search from "./Search";

export default function Body() {
    const [search, setSearch] = useState("");

    return(
        <section className="bg-black py-4 ml-24 space-y-8 md:max-1-6x1 flex-grow md:mr-2.5">
            <Search search={search} setSearch={setSearch}/>
        </section>
    );
};
import React from "react";
import Block1 from "../component/Home/Block1";
import Block2 from "../component/Home/Block2";
import Block3 from "../component/Home/Block3";
import Block4 from "../component/Home/Block4";
import Block5 from "../component/Home/Block5";
import CategCard from "../component/CategCard/CategCard";

const Home = () => {
    return (
        <div>
            <Block1 />
            <CategCard />
            <Block3 />
            <Block4 />
            <Block2 />
            <Block5 />
        </div>
    );
};

export default Home;

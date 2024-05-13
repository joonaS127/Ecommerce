import React from "react";

const NavbarLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop",
    },
    {
        id: 3,
        name: "About",
        link: "/#about",
    }, 
    {
        id: 4,
        name: "Contact",
        link: "/#contact",
    },   
]

const Navbar = () => {
    return (
        <div>
            <div className="py-4">
                <div className="container">
                    <div>
                        <a
                        href="#"
                        className="text-red font-semibold tracking-widest text-2xl uppercase
                        sm:text-3xl"
                        > Jojo's </a>
                        <div>
                            <ul>
                                {NavbarLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link}> {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;

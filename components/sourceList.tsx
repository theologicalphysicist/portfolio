import React, {useState, useEffect} from "react";
import Image from "next/image";

import { Avatar, List, ListItem, ListItemAvatar, ListItemIcon } from "@mui/material";

//_ TYPES
import { TTools } from "../utils/types";


const TECHNOLOGIES: TTools[] = [
    {
        name: "Next.js",
        logo: "/next.png",
        url: "https://nextjs.org/"
    },
    {
        name: "Material UI",
        logo: "/material_ui.png",
        url: "https://mui.com/"
    },
    {
        name: "Sass",
        logo: "/sass.png",
        url: "https://sass-lang.com/"
    },
    {
        name: "Vercel",
        logo: "/vercel.png",
        url: "https://vercel.com/"
    },
    {
        name: "TypeScript",
        logo: "/typescript.png",
        url: "https://www.typescriptlang.org/"
    },
];


const SourceList = ():JSX.Element => {

    return (
        <List>
            {TECHNOLOGIES.map((tool: TTools) => {
                return (
                    <>
                        <a href={tool.url} target="_blank">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt={`${tool.name} logo`} src={tool.logo} />
                                </ListItemAvatar>
                                {tool.name}
                            </ListItem>
                        </a>
                    </> 
                );
            })}
        </List>
    );
};


export default SourceList;
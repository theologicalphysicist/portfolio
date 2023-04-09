import React, {useState, useEffect} from "react";
import Image from "next/image";

import { Card, Paper, CardContent, CardHeader, CardActionArea, CardActions } from "@mui/material";
import { Octokit } from "octokit";
import type { OctokitResponse } from "@octokit/types";

//_ TYPES
import { TProject } from "../utils/types";

const Project = ({project_name, project_links}: TProject):JSX.Element => {

    const [REPO_DESC, setRepoDesc] = useState<string | null>("");
    const GITHUB_CLIENT: Octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });

    useEffect(() => {
        GITHUB_CLIENT.request("GET /repos/{owner}/{repo}", {
            owner: process.env.GITHUB_USER || "theologicalphysicist",
            repo: project_name
        })
        .then((res: OctokitResponse<any, number>) => res.data)
        .then((data: any) => {
            setRepoDesc(data.description);
        });
    }, []);

    return (
        <Card raised={true}>
            <Paper variant="elevation" component="div" elevation={4}>
                <CardHeader component="h2" title={project_name} />
                <CardContent component="p">
                    {REPO_DESC}
                </CardContent>
                <CardActionArea>
                    <CardActions>
                        <a href={project_links.github} target="_blank">
                            <Image width={32} height={32} src="/github.png" alt="GitHub Logo" />
                        </a>
                        {project_links.site && <a href={project_links.site} target="_blank">
                                <Image width={32} height={32} src="/web.png" alt="World Wide Web Logo" />
                            </a>
                        }
                    </CardActions>
                </CardActionArea>
            </Paper>
        </Card>
    );
};


export default Project;
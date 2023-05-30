interface tag {
    name:string,
    color:string,
}
interface img {
    src:string,
    title:string,
}

interface ProjectI {
    title:string,
    desc: string,
    imgs: img[];
    tags: tag[],
    hasDomain: boolean;
    demo?: string,
    github?: string,
}
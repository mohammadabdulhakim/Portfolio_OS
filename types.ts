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
    hasDomain?: boolean;
    demo?: string,
    github?: string,
}

interface Article {
    tag_list:string[],
    cover_image: string,
    url: string,
    title: string,
    description: string,
}
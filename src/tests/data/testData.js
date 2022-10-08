import English from "../../lang/en-US.json";

export const type = "theaters";

export const movies = [
    {
        fullTitle: "The Avengers (2012)",
        title: "The Avengers",
        imDbRating: "8",
        releaseDate: "2012-05-04",
        runtimeStr: "2h 23min",
        plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        directorList: [
            {id: "nm0923736", name: "Joss Whedon"},
            {id: "nm0923736", name: "Joss Whedon"},
        ],
        genres: "Action, Adventure, Sci-Fi",
        writerList: [
            {id: "nm0923736", name: "Joss Whedon"},
            {id: "nm0672015", name: "Zak Penn"},
        ],
        awards: "Nominated for 1 Oscar, 38 wins & 80 nominations total",
        image: "https://m.media-amazon.com/images/M/MV5BMTA0NjY0Nz…eQWpwZ15BbWU3MDczODg2Nzc@._V1_Ratio1.7800_AL_.jpg",
        images: {
            items: [
                {
                    title: "Scarlett Johansson and Chris Hemsworth in The Avengers (2012)",
                    image: "https://m.media-amazon.com/images/M/MV5BMTA0NjY0Nz…eQWpwZ15BbWU3MDczODg2Nzc@._V1_Ratio1.7800_AL_.jpg",
                },
                {
                    title: "Scarlett Johansson in The Avengers (2012)",
                    image: "https://m.media-amazon.com/images/M/MV5BOTkxOTIwMz…BanBnXkFtZTcwMDM4ODY3Nw@@._V1_Ratio1.7800_AL_.jpg",
                },
                {
                    title: "The Avengers (2012)",
                    image: "https://m.media-amazon.com/images/M/MV5BMTY0MDc4OD…BanBnXkFtZTcwMjM4ODY3Nw@@._V1_Ratio1.7800_AL_.jpg",
                },
            ],
        },
        wikipedia: {plotShort: {plainText: ""}},
    },
    {
        fullTitle: "Thor (2022)",
        title: "Thor",
        imDbRating: "8",
        releaseDate: "2012-05-04",
        runtimeStr: "2h 23min",
        plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        directorList: [{id: "nm0923736", name: "Joss Whedon"}],
        genres: "Action, Adventure, Sci-Fi",
        writerList: [
            {id: "nm0923736", name: "Joss Whedon"},
            {id: "nm0672015", name: "Zak Penn"},
        ],
        awards: "Nominated for 1 Oscar, 38 wins & 80 nominations total",
        image: "https://m.media-amazon.com/images/M/MV5BMTA0NjY0Nz…eQWpwZ15BbWU3MDczODg2Nzc@._V1_Ratio1.7800_AL_.jpg",
        images: {
            items: [
                {
                    title: "Scarlett Johansson and Chris Hemsworth in The Avengers (2012)",
                    image: "https://m.media-amazon.com/images/M/MV5BMTA0NjY0Nz…eQWpwZ15BbWU3MDczODg2Nzc@._V1_Ratio1.7800_AL_.jpg",
                },
                {
                    title: "Scarlett Johansson in The Avengers (2012)",
                    image: "https://m.media-amazon.com/images/M/MV5BOTkxOTIwMz…BanBnXkFtZTcwMDM4ODY3Nw@@._V1_Ratio1.7800_AL_.jpg",
                },
                {
                    title: "The Avengers (2012)",
                    image: "https://m.media-amazon.com/images/M/MV5BMTY0MDc4OD…BanBnXkFtZTcwMjM4ODY3Nw@@._V1_Ratio1.7800_AL_.jpg",
                },
            ],
        },
        wikipedia: {plotShort: {plainText: ""}},
    },
];

export const movie = {
    fullTitle: "The Avengers (2012)",
    imDbRating: "6.5",
    rank: "1",
    rankUpDown: "+1",
    id: "tt10648342",
    image: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6762_AL_.jpg",
    title: "The Avengers",
    year: "2022",
};

export const movieNoRankUpDown = {
    fullTitle: "The Avengers (2012)",
    imDbRating: "6.5",
    rank: "1",
    id: "tt10648342",
    image: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6762_AL_.jpg",
    title: "Thor: Love and Thunder",
    year: "2022",
};

export const actor = {
    awards: "14 wins & 45 nominations.",
    birthDate: "1983-08-11",
    deathDate: "",
    errorMessage: "",
    height: "6' 3\" (1.91 m)",
    id: "nm1165110",
    image: "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_Ratio0.6751_AL_.jpg",
    knownFor: [
        {id: "tt0848228", title: "The Avengers"},
        {id: "tt3501632", title: "Thor: Ragnarok"},
        {id: "tt1735898", title: "Snow White and the Huntsman"},
        {id: "tt0796366", title: "Star Trek"},
    ],
    name: "Chris Hemsworth",
    role: "Actor, Producer, Soundtrack",
    summary:
        "Christopher Hemsworth was born on August 11, 1983 in Melbourne, Victoria, Australia to Leonie Hemsworth (née van Os), an English teacher & Craig Hemsworth",
};

export const deadActor = {
    awards: "Won 1 Oscar. Another 38 wins & 30 nominations.",
    birthDate: "1930-08-25",
    deathDate: "2020-10-31",
    errorMessage: "",
    height: "6' 2¾\" (1.9 m)",
    id: "nm0000125",
    image: "https://m.media-amazon.com/images/M/MV5BMzcwNTM4MzctYjQzMi00NTA2LTljYWItNTYzNmE1MTYxN2RlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_Ratio0.7760_AL_.jpg",
    knownFor: [
        {
            id: "tt0055928",
            title: "Dr. No",
            fullTitle: "Dr. No (1962)",
            year: "1962",
            role: "James Bond",
        },

        {
            id: "tt0117500",
            title: "The Rock",
            fullTitle: "The Rock (1996)",
            year: "1996",
            role: "John Patrick Mason",
        },

        {
            id: "tt0059800",
            title: "Thunderball",
            fullTitle: "Thunderball (1965)",
            year: "1965",
            role: "James Bond",
        },
    ],
    name: "Sean Connery",
    role: "Actor, Producer, Soundtrack",
    summary:
        "The tall, handsome and muscular Scottish actor Sean is best known as the original actor to portray James Bond in the hugely successful movie franchise",
};

export const actors = [
    {
        id: "nm0000375",
        image: "https://m.media-amazon.com/images/M/MV5BNzg1MTUyND…BanBnXkFtZTgwNTQ4MTE2MjE@._V1_Ratio1.0000_AL_.jpg",
        name: "Robert Downey Jr.",
        asCharacter: "Tony Stark",
    },

    {
        id: "nm0262635",
        image: "https://m.media-amazon.com/images/M/MV5BMTU2NTg1OT…BanBnXkFtZTcwNjIyMjkyMg@@._V1_Ratio1.0000_AL_.jpg",
        name: "Chris Evans",
        asCharacter: "Steve Rogers",
    },

    {
        id: "nm0424060",
        image: "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMD…BanBnXkFtZTcwNTUyNzc3Nw@@._V1_Ratio1.0000_AL_.jpg",
        name: "Scarlett Johansson",
        asCharacter: "Natasha Romanoff",
    },

    {
        id: "nm0719637",
        image: "https://m.media-amazon.com/images/M/MV5BOTk2NDc2OD…BanBnXkFtZTcwMTMzOTQ4Nw@@._V1_Ratio1.0000_AL_.jpg",
        name: "Jeremy Renner",
        asCharacter: "Clint Barton",
    },
];

export const searchActorSet = [
    {
        description: "(Actress, Suicide Squad (2016))",
        id: "nm5353321",
        image: "https://m.media-amazon.com/images/M/MV5BM2U4NmUwODQtN2IwNC00MzE0LThmYmQtNTFlYTg0OTdjYzcxXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_Ratio0.7727_AL_.jpg",
        resultType: "Name",
        title: "Cara Delevingne",
    },
    {
        description: "(Actor, The Empty Man (2020))",
        id: "nm7075019",
        image: "https://m.media-amazon.com/images/M/MV5BNzgyNmQ4ZDctMWQ3Mi00ZWE3LWExNWItNWFkNWRkNmJjOGZkXkEyXkFqcGdeQXVyMTI2Nzk2ODk3._V1_Ratio0.8636_AL_.jpg",
        resultType: "Name",
        title: "Robert Aramayo",
    },
];

export const searchMovieSet = [
    {
        description: "(1973) (TV Series)",
        id: "tt0165058",
        image: "https://m.media-amazon.com/images/M/MV5BMjExNWU1NjMtYWE4Yy00OTkwLWIzOWUtN2M3NDA0ZDkyMmE4XkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_Ratio2.0909_AL_.jpg",
        resultType: "Title",
        title: "Ryan",
    },
    {
        description: "(1998)",
        id: "tt0120815",
        image: "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_Ratio0.7273_AL_.jpg",
        resultType: "Title",
        title: "Saving Private Ryan",
    },
];

export const slideshowImages = {
    items: [
        {
            title: "Scarlett Johansson and Chris Hemsworth in The Avengers (2012)",
            image: "https://m.media-amazon.com/images/M/MV5BMTA0NjY0Nz…eQWpwZ15BbWU3MDczODg2Nzc@._V1_Ratio1.7800_AL_.jpg",
        },
        {
            title: "Scarlett Johansson in The Avengers (2012)",
            image: "https://m.media-amazon.com/images/M/MV5BOTkxOTIwMz…BanBnXkFtZTcwMDM4ODY3Nw@@._V1_Ratio1.7800_AL_.jpg",
        },
        {
            title: "The Avengers (2012)",
            image: "https://m.media-amazon.com/images/M/MV5BMTY0MDc4OD…BanBnXkFtZTcwMjM4ODY3Nw@@._V1_Ratio1.7800_AL_.jpg",
        },
    ],
};

export const initialState = {
    movies: {ids: [], entities: {}, loading: false, type: "theaters"},
    actors: {ids: [], entities: {}, loading: false},
    actor: {actor: {}, loading: false},
    language: {
        locale: "en-US",
        messages: {English},
    },
};

export const filledState = {
    movies: {
        ids: ["tt0800369", "tt0800370"],
        entities: {
            tt0800369: {
                id: "tt0800369",
                fullTitle: "Thor (2022)",
                title: "Thor",
                imDbRating: "8",
                releaseDate: "2012-05-04",
                runtimeStr: "2h 23min",
                plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                directorList: [{id: "nm0923736", name: "Joss Whedon"}],
                genres: "Action, Adventure, Sci-Fi",
                writerList: [
                    {id: "nm0923736", name: "Joss Whedon"},
                    {id: "nm0672015", name: "Zak Penn"},
                ],
                awards: "Nominated for 1 Oscar, 38 wins & 80 nominations total",
                image: "https://m.media-amazon.com/images/M/MV5BMTA0NjY0Nz…eQWpwZ15BbWU3MDczODg2Nzc@._V1_Ratio1.7800_AL_.jpg",
                images: {
                    items: [
                        {
                            title: "Scarlett Johansson and Chris Hemsworth in The Avengers (2012)",
                            image: "https://m.media-amazon.com/images/M/MV5BMTA0NjY0Nz…eQWpwZ15BbWU3MDczODg2Nzc@._V1_Ratio1.7800_AL_.jpg",
                        },
                        {
                            title: "Scarlett Johansson in The Avengers (2012)",
                            image: "https://m.media-amazon.com/images/M/MV5BOTkxOTIwMz…BanBnXkFtZTcwMDM4ODY3Nw@@._V1_Ratio1.7800_AL_.jpg",
                        },
                        {
                            title: "The Avengers (2012)",
                            image: "https://m.media-amazon.com/images/M/MV5BMTY0MDc4OD…BanBnXkFtZTcwMjM4ODY3Nw@@._V1_Ratio1.7800_AL_.jpg",
                        },
                    ],
                },
                actorList: [
                    {
                        id: "nm1165110",
                        image: "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_Ratio1.0000_AL_.jpg",
                        name: "Chris Hemsworth",
                    },
                    {
                        id: "nm0000164",
                        image: "https://m.media-amazon.com/images/M/MV5BMTg5ODk1NTc5Ml5BMl5BanBnXkFtZTYwMjAwOTI4._V1_Ratio1.0000_AL_.jpg",
                        name: "Anthony Hopkins",
                    },
                    {
                        id: "nm0000204",
                        image: "https://m.media-amazon.com/images/M/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.0000_AL_.jpg",
                        name: "Natalie Portman",
                    },
                    {
                        id: "nm1089991",
                        image: "https://m.media-amazon.com/images/M/MV5BNWYwODAyZjAtOTQ1My00MDY2LTg0NDQtZGFiMDRiYzY4ZmM2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_Ratio1.0000_AL_.jpg",
                        name: "Tom Hiddleston",
                    },
                    {
                        id: "nm0001745",
                        image: "https://m.media-amazon.com/images/M/MV5BMzljNGIzYjgtMTQ0MS00OWU1LTk1NWEtOWQ3ZDhmNzQ2ZDAxXkEyXkFqcGdeQXVyMDAzMDk4OQ@@._V1_Ratio1.2286_AL_.jpg",
                        name: "Stellan Skarsgård",
                    },
                ],
                wikipedia: {plotShort: {plainText: ""}},
                errorMessage: null,
                loading: false,
            },
            tt0800370: {
                id: "tt00800370",
                fullTitle: "The Avengers (2012)",
                title: "The Avengers",
                imDbRating: "8",
                releaseDate: "2012-05-04",
                runtimeStr: "2h 23min",
                plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                directorList: [
                    {id: "nm0923736", name: "Joss Whedon"},
                    {id: "nm0923736", name: "Joss Whedon"},
                ],
                genres: "Action, Adventure, Sci-Fi",
                writerList: [
                    {id: "nm0923736", name: "Joss Whedon"},
                    {id: "nm0672015", name: "Zak Penn"},
                ],
                awards: "Nominated for 1 Oscar, 38 wins & 80 nominations total",
                image: "https://m.media-amazon.com/images/M/MV5BMTA0NjY0Nz…eQWpwZ15BbWU3MDczODg2Nzc@._V1_Ratio1.7800_AL_.jpg",
                images: {
                    items: [
                        {
                            title: "Scarlett Johansson and Chris Hemsworth in The Avengers (2012)",
                            image: "https://m.media-amazon.com/images/M/MV5BMTA0NjY0Nz…eQWpwZ15BbWU3MDczODg2Nzc@._V1_Ratio1.7800_AL_.jpg",
                        },
                        {
                            title: "Scarlett Johansson in The Avengers (2012)",
                            image: "https://m.media-amazon.com/images/M/MV5BOTkxOTIwMz…BanBnXkFtZTcwMDM4ODY3Nw@@._V1_Ratio1.7800_AL_.jpg",
                        },
                        {
                            title: "The Avengers (2012)",
                            image: "https://m.media-amazon.com/images/M/MV5BMTY0MDc4OD…BanBnXkFtZTcwMjM4ODY3Nw@@._V1_Ratio1.7800_AL_.jpg",
                        },
                    ],
                },
                actorList: [
                    {
                        id: "nm1165110",
                        image: "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_Ratio1.0000_AL_.jpg",
                        name: "Chris Hemsworth",
                    },
                    {
                        id: "nm0000164",
                        image: "https://m.media-amazon.com/images/M/MV5BMTg5ODk1NTc5Ml5BMl5BanBnXkFtZTYwMjAwOTI4._V1_Ratio1.0000_AL_.jpg",
                        name: "Anthony Hopkins",
                    },
                    {
                        id: "nm0000204",
                        image: "https://m.media-amazon.com/images/M/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.0000_AL_.jpg",
                        name: "Natalie Portman",
                    },
                    {
                        id: "nm1089991",
                        image: "https://m.media-amazon.com/images/M/MV5BNWYwODAyZjAtOTQ1My00MDY2LTg0NDQtZGFiMDRiYzY4ZmM2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_Ratio1.0000_AL_.jpg",
                        name: "Tom Hiddleston",
                    },
                    {
                        id: "nm0001745",
                        image: "https://m.media-amazon.com/images/M/MV5BMzljNGIzYjgtMTQ0MS00OWU1LTk1NWEtOWQ3ZDhmNzQ2ZDAxXkEyXkFqcGdeQXVyMDAzMDk4OQ@@._V1_Ratio1.2286_AL_.jpg",
                        name: "Stellan Skarsgård",
                    },
                ],
                wikipedia: {plotShort: {plainText: ""}},
                errorMessage: null,
                loading: false,
            },
        },
        loading: false,
        type: "popular",
    },
    actor: {actor: actor, loading: false},
    actors: {
        ids: ["nm0655585", "nm0010075", "nm0172557"],
        entities: {
            nm0655585: {
                id: "nm0655585",
                resultType: "Name",
                image: "https://m.media-amazon.com/images/M/MV5BMjA2ODMyMDgxMl5BMl5BanBnXkFtZTcwNjAwMjA3NA@@._V1_Ratio0.7273_AL_.jpg",
                title: "Jared Padalecki",
                description: "(Actor, Supernatural (2005))",
            },
            nm0010075: {
                id: "nm0010075",
                resultType: "Name",
                image: "https://m.media-amazon.com/images/M/MV5BMTcxMDk3NTgzNl5BMl5BanBnXkFtZTcwMTUzNzY3OQ@@._V1_Ratio0.7273_AL_.jpg",
                title: "Jensen Ackles",
                description: "(Actor, Supernatural (2005))",
            },
            nm0172557: {
                id: "nm0172557",
                resultType: "Name",
                image: "https://m.media-amazon.com/images/M/MV5BYTNhNjQ4MGEtMWYzMi00ZTRiLWJhMTYtZTFiN2ExNmEyMTQ0XkEyXkFqcGdeQXVyNjI5MTQxNzQ@._V1_Ratio0.7273_AL_.jpg",
                title: "Misha Collins",
                description: "(Actor, Supernatural (2005))",
            },
        },
        loading: false,
    },
    language: {
        locale: "en-US",
        messages: {English},
    },
};

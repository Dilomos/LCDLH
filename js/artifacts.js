var eldritch = eldritch || {};
eldritch.decks = eldritch.decks || [];

var artefacts = new Deck("Artifacts", "Artefacts", "3.0", [], [], [], [
    {
        "name": "Set de Base",
        "image": "eldritchhorror.png",
        "cards": [
            {
                id: 1,
                name: "Boule de Cristal de Mortlan",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 2,
                name: "Statue Grotesque",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 3,
                name: "De Vermis Mysteriis",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 4,
                name: "La Clé d'Argent",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 5,
                name: "Boîte à Portails",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 6,
                name: "Flûte des Dieux Extérieurs",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 7,
                name: "Cuve pour Cervelle de Migo",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "EQUIPE"
                ]
            },
            {
                id: 8,
                name: "Necronomicon",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 9,
                name: "Fusil Lumineux",
                traits: [
                    "OBJET",
                    "ARME",
                    "MAGIQUE"
                ]
            },
            {
                id: 10,
                name: "Epée de Saint Jérome",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "ARME"
                ]
            },
            {
                id: 11,
                name: "T'tka Halot",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 12,
                name: "Rubis de R'lyeh",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 13,
                name: "Cultes des Goules",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 14,
                name: "Masque Blème",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
        ]
    },
    {
        "name": "Légendes Oubliées",
        "image": "forsakenlore.png",
        "cards": [
            {
                id: 15,
                name: "Sphère Maudite",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 16,
                name: "Massa di Requiem per Shuggay",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 17,
                name: "Lait de Shub-Niggurath",
                traits: [
                    "OBJET",
                    "ELIXIR"
                ]
            },
            {
                id: 18,
                name: "Epée d'Yha Talla",
                traits: [
                    "OBJET",
                    "ARME",
                    "MAGIQUE"
                ]
            },
            {
                id: 19,
                name: "Sacoche du Néant",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 20,
                name: "Elixir de Vie",
                traits: [
                    "OBJET",
                    "ELIXIR"
                ]
            },
            {
                id: 21,
                name: "Couronne Serpentine",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 22,
                name: "Tablettes de Zanthu",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },

        ]
    },
    {
        "name": "Les Montagnes Hallucinées",
        "image": "mountainsofmadness.png",
        "cards": [
            {
                id: 23,
                name: "Manuscrits Pnakotiques",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 24,
                name: "Appareil Extraterrestre",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 25,
                name: "Coeur de l'Hiver",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 26,
                name: "Livre d'Ivon",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 27,
                name: "Cristal des Choses Très Anciennes",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 28,
                name: "Tessons d'Eltdown",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 29,
                name: "Cristal Hyperboréen",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 30,
                name: "Chants de Dhol",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
        ]
    },
    {
        "name": "Vestiges Occultes",
        "image": "strangeremnants.png",
        "cards": [
            {
                id: 31,
                name: "Idole Draconique",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIQUE"
                ]
            },
            {
                id: 32,
                name: "Masque du Veilleur",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 33,
                name: "Flûte d'Os",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 34,
                name: "Khépesh des Abysses",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIQUE",
                    "ARME"
                ]
            },
        ]
    },
    {
        "name": "Les Secrets des Pyramides",
        "image": "underthepyramids.png",
        "cards": [
            {
                id: 35,
                name: "Livre des Morts",
                traits: [
                    "OBJET",
                    "RELIQUE",
                    "LIVRE"
                ]
            },
            {
                id: 36,
                name: "Balance de Thot",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIQUE"
                ]
            },
            {
                id: 37,
                name: "Trapézoèdre Lumineux",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 38,
                name: "Les Deux Sceptres",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIQUE"
                ]
            },
        ]
    },
    {
        "name": "Signes de Carcosa",
        "image": "signsofcarcossa.png",
        "cards": [
            {
                id: 39,
                name: "Clé de Carcosa",
                traits: [
                    "BABIOLE",
                    "MAGIQUE"
                ]
            },
            {
                id: 40,
                name: "Cape en Lambeaux",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 42,
                name: "Le Roi en Jaune",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 43,
                name: "Masque de Sthénélus",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIQUE"
                ]
            },
        ]
    },
    {
        "name": "Les Contrées du Rêve",
        "image": "dreamlands.png",
        "cards": [
            {
                id: 44,
                name: "Cristalliseur de Rêves",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "EQUIPE"
                ]
            },
            {
                id: 45,
                name: "Croix de Cykranosh",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 46,
                name: "Clé des Anciens",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 47,
                name: "Pentacle Interplanaire",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
        ]
    },
    {
        "name": "Cités en Ruine",
        "image": "citiesInRuins.png",
        "cards": [
            {
                id: 48,
                name: "Bâton de Rhabdomancien",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "ARME"
                ]
            },
            {
                id: 49,
                name: "Fragments de G'harne",
                traits: [
                    "OBJET",
                    "RELIQUE",
                    "LIVRE"
                ]
            },
            {
                id: 50,
                name: "Elixir de Tikkoum",
                traits: [
                    "OBJET",
                    "ELIXIR"
                ]
            },
            {
                id: 51,
                name: "Chant de Vach-Viraj",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "LIVRE"
                ]
            }
        ]
    },
    {
        "name": "Les Masques de Nyarlathotep",
        "image": "mon.png",
        "cards": [
            {
                id: 52,
                name: "Livre Noir",
                traits: [
                    "OBJET",
                    "LIVRE",
                ]
            },
            {
                id: 53,
                name: "Eventail Noir",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 54,
                name: "Carte Hémisphérique",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 55,
                name: "True Magick",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            }
        ]
    }
]);
eldritch.decks.push(artefacts);


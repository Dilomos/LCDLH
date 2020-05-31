var eldritch = eldritch || {};
eldritch.decks = eldritch.decks || [];

var investigateurs = new Deck("Investigateurs", "Investigateurs", "3.0", [], [], [], [
    {
        "name": "Set de Base",
        "image": "eldritchhorror.png",
        "cards": [
            {
                id: 1,
                name: "Charlie Kane",
                traits: [
                    "SUPPORT"
                ]
            },
            {
                id: 2,
                name: "Mark Harrigan",
                traits: [
                    "COMBAT"
                ]
            },
            {
                id: 3,
                name: "Silas Marsh",
                traits: [
                    "EQUILIBRE"
                ]
            },
            {
                id: 4,
                name: "Jim Culver",
                traits: [
                    "MAGIE",
                    "SUPPORT"
                ]
            },
            {
                id: 5,
                name: "Jacqueline Fine",
                traits: [
                    "MAGIE",
                    "SUPPORT"
                ]
            },
            {
                id: 6,
                name: "Diana Stanley",
                traits: [
                    "MAGIE"
                ]
            },
            {
                id: 7,
                name: "Leo Anderson",
                traits: [
                    "EXPEDITION",
                    "EQUILIBRE"
                ]
            },
            {
                id: 8,
                name: "Trish Scarborough",
                traits: [
                    "RECHERCHE"
                ]
            },
            {
                id: 9,
                name: "Lily Chen",
                traits: [
                    "COMBAT",
                    "EQUILIBRE"
                ]
            },
            {
                id: 10,
                name: "Norman Withers",
                traits: [
                    "MAGIE",
                    "PORTAIL"
                ]
            },
            {
                id: 11,
                name: "Lola Hayes",
                traits: [
                    "EQUILIBRE",
                    "SUPPORT"
                ]
            },
            {
                id: 12,
                name: "Akachi Onyele",
                traits: [
                    "PORTAIL"
                ]
            },
        ]
    },
    {
        "name": "Légendes Oubliées",
        "image": "forsakenlore.png",
        "cards": [ ]
    },
    {
        "name": "Les Montagnes Hallucinées",
        "image": "mountainsofmadness.png",
        "cards": [
            {
                id: 23,
                name: "Finn Edwards",
                traits: [
                    "SUPPORT",
                    "EQUILIBRE"
                ]
            },
            {
                id: 24,
                name: "Agnes Baker",
                traits: [
                    "MAGIE",
					"SUPPORT"
                ]
            },
            {
                id: 25,
                name: "Ursula Downs",
                traits: [
                    "EXPEDITION"
                ]
            },
            {
                id: 26,
                name: "Wilson Richards",
                traits: [
                    "COMBAT"
                ]
            },
            {
                id: 27,
                name: "Tommy Muldoon",
                traits: [
                    "COMBAT"
                ]
            },
            {
                id: 28,
                name: "George Barnaby",
                traits: [
                    "SUPPORT"
                ]
            },
            {
                id: 29,
                name: "Patrice Hathaway",
                traits: [
                    "PORTAIL"
                ]
            },
            {
                id: 30,
                name: "Daisy Walker",
                traits: [
                    "MAGIE",
                    "RECHERCHE"
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
                name: "\"Skids\" O'Toole",
                traits: [
                    "COMBAT"
                ]
            },
            {
                id: 32,
                name: "Marie Lambeau",
                traits: [
                    "MAGIE",
                    "SUPPORT"
                ]
            },
            {
                id: 33,
                name: "Zoey Samaras",
                traits: [
                    "COMBAT"
                ]
            },
            {
                id: 34,
                name: "Tony Morgan",
                traits: [
                    "RECHERCHE"
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
                name: "Mandy Thompson",
                traits: [
                    "RECHERCHE"
                ]
            },
            {
                id: 36,
                name: "Joe Diamond",
                traits: [
                    "RECHERCHE"
                ]
            },
            {
                id: 37,
                name: "Rex Murphy",
                traits: [
                    "EQUILIBRE"
                ]
            },
            {
                id: 38,
                name: "Soeur Marie",
                traits: [
                    "SUPPORT"
                ]
            },
            {
                id: 13,
                name: "Hank Samson",
                traits: [
                    "COMBAT",
                    "EXPEDITION"
                ]
            },
            {
                id: 14,
                name: "Harvey Walters",
                traits: [
                    "SUPPORT"
                ]
            },
            {
                id: 15,
                name: "Minh Thi Phan",
                traits: [
                    "SUPPORT"
                ]
            },
            {
                id: 16,
                name: "Monterey Jack",
                traits: [
                    "EXPEDITION"
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
                name: "Dexter Drake",
                traits: [
                    "MAGIE",
                    "PORTAIL"
                ]
            },
            {
                id: 40,
                name: "Jenny Barnes",
                traits: [
                    "SUPPORT"
                ]
            },
            {
                id: 42,
                name: "Michael McGlen",
                traits: [
                    "COMBAT"
                ]
            },
            {
                id: 43,
                name: "Wendy Adams",
                traits: [
                    "RECHERCHE"
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
                name: "Carolyn Fern",
                traits: [
                    "SUPPORT"
                ]
            },
            {
                id: 45,
                name: "Gloria Goldberg",
                traits: [
                    "SUPPORT",
                    "RECHERCHE"
                ]
            },
            {
                id: 46,
                name: "Kate Winthrop",
                traits: [
                    "RECHERCHE",
                    "PORTAIL"
                ]
            },
            {
                id: 47,
                name: "Darrell Simmons",
                traits: [
                    "RECHERCHE"
                ]
            },
			
            {
                id: 17,
                name: "Amanda Sharpe",
                traits: [
                    "RECHERCHE"
                ]
            },
            {
                id: 18,
                name: "William Yorick",
                traits: [
                    "COMBAT"
                ]
            },
            {
                id: 19,
                name: "Luke Robinson",
                traits: [
                    "PORTAIL"
                ]
            },
            {
                id: 20,
                name: "Vincent Lee",
                traits: [
                    "SUPPORT"
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
                name: "Rita Young",
                traits: [
                    "COMBAT"
                ]
            },
            {
                id: 49,
                name: "Bob Jenkins",
                traits: [
                    "SUPPORT",
                    "EQUILIBRE"
                ]
            },
            {
                id: 50,
                name: "\"Aschan\" Pete",
                traits: [
                    "EQUILIBRE",
                    "PORTAIL"
                ]
            },
            {
                id: 51,
                name: "Roland Banks",
                traits: [
                    "RECHERCHE",
                    "SUPPORT"
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
                name: "Agatha Crane",
                traits: [
                    "MAGIE",
                    "RECHERCHE",
                ]
            },
            {
                id: 53,
                name: "Sefina Rousseau",
                traits: [
                    "RECHERCHE"
                ]
            },
            {
                id: 54,
                name: "Carson Sinclair",
                traits: [
                    "SUPPORT",
					"EQUILIBRE"
                ]
            },
            {
                id: 55,
                name: "Preston Fermont",
                traits: [
                    "SUPPORT"
                ]
            },
            {
                id: 21,
                name: "Daniela Reyes",
                traits: [
                    "COMBAT",
					"EQUILIBRE"
                ]
            },
            {
                id: 22,
                name: "Père Mateo",
                traits: [
                    "PORTAIL"
                ]
            },
            {
                id: 56,
                name: "Calvin Wright",
                traits: [
                    "EQUILIBRE",
                    "SUPPORT"
                ]
            },
        ]
    }
]);
eldritch.decks.push(investigateurs);


var eldritch = eldritch || {};
eldritch.decks = eldritch.decks || [];

var asset = new Deck("Assets", "Ressources", "3.0", [], [], [], [
    {
        "name": "Set de Base",
        "image": "eldritchhorror.png",
        "cards": [
            {
                id: 1,
                name: "Fouet",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 2,
                name: "Cambrioleuse",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 3,
                name: "Vol Charter",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 4,
                name: "Revolver.38",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 5,
                name: "Grimoire",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 6,
                name: "Rapport Radiophonique",
                traits: [
                    "SERVICE",
                    "EQUIPE"
                ]
            },
            {
                id: 7,
                name: "Occultiste",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 8,
                name: "Dague Spirituelle",
                traits: [
                    "OBJET",
                    "ARME",
                    "MAGIQUE"
                ]
            },
            {
                id: 9,
                name: "Bandages",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 10,
                name: "Gros Bras",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 11,
                name: "Sanctuaire",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 12,
                name: "Carbine",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 13,
                name: "Amulette Protectrice",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 14,
                name: "Assistante Personnelle",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 15,
                name: "Bible du Roi Jacques",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 16,
                name: "Rituel du Crépuscule d'Argent",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 17,
                name: "Kérosène",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 18,
                name: "Détective Privé",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 19,
                name: "Sainte Croix",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 20,
                name: "Fusil à Double Canon",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 21,
                name: "Filet de Pêche",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 22,
                name: "Boîte à Puzzle",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 23,
                name: "Guérisseur",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 24,
                name: "Whisky",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 25,
                name: "Etui à Cigarettes Porte Bonheur",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 26,
                name: ".45 Automatique",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 27,
                name: "Eau Bénite",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 28,
                name: "Guide Urbain",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 29,
                name: "Montre à Gousset",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 30,
                name: "Assurance Personnelle",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 31,
                name: "Chercheur de la Loge",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 32,
                name: "Vêtements Elégants",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 33,
                name: "Quarantaine de l'Agence",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 34,
                name: "Derringer.18",
                traits: [
                    "BABIOLE",
                    "ARME"
                ]
            },
            {
                id: 35,
                name: "Manuscrit Esotérique",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 36,
                name: "Service de Livraison",
                traits: [
                    "SERVICE",
                    "EQUIPE"
                ]
            },
            {
                id: 37,
                name: "Patte de Lapin",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 38,
                name: "Hache",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 39,
                name: "Missionnaire du Vatican",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 40,
                name: "Dynamite",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            }
        ]
    },
    {
        "name": "Légendes Oubliées",
        "image": "forsakenlore.png",
        "cards": [
            {
                id: 41,
                name: "Garde du Corps",
                traits: [
                    "ALLIE"
                ]
            },
            {
                dd: 42,
                name: "Anneau Porte Bonheur",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 43,
                name: "Gaz Lacrymogène",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 44,
                name: "Fruis Frais",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 45,
                name: "Appel au Conseil",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 46,
                name: "Chasseuse de Primes Mystique",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 47,
                name: "Lanterne",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 48,
                name: "Etudiant Chercheur",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 49,
                name: "Aide de la Police",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 50,
                name: "Rapport d'Espionnage",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 51,
                name: "Conspirationniste",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 52,
                name: "Revolver Colt.45",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 53,
                name: "Agente du Syndicat",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 54,
                name: "Signe des Anciens",
                traits: [
                    "BABIOLE",
                    "MAGIQUE"
                ]
            },
            {
                id: 55,
                name: "Registre de Police",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 167,
                name: "Lame Enchantée",
                traits: [
                    "OBJET",
                    "ARME",
                    "MAGIQUE"
                ]
            }
        ]
    },
    {
        "name": "Les Montagnes Hallucinées",
        "image": "mountainsofmadness.png",
        "cards": [
            {
                id: 56,
                name: "Recherche Minéralogique",
                traits: [
                    "TASK"
                ]
            },
            {
                id: 57,
                name: "Manuel d'Astronomie",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 58,
                name: "Dés du Parieur",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 59,
                name: "Livre Profane",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 60,
                name: "Coursier Recherché!",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 61,
                name: "Page Secrète",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 62,
                name: "Recherche Généalogique",
                traits: [
                    "TASK"
                ]
            },
            {
                id: 63,
                name: "Journal de Cultiste",
                traits: [
                    "OBJET",
                    "LIVRE",
                    "MAGIQUE"
                ]
            },
            {
                id: 64,
                name: "Article de Journal",
                traits: [
                    "TASK"
                ]
            },
            {
                id: 65,
                name: "Recherche aux Archives",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 66,
                name: "Tromblon",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 67,
                name: "Chasseur de Monstres",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 68,
                name: "Livre des Horreurs",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 69,
                name: "Investissement",
                traits: [
                    "TASK"
                ]
            },
            {
                id: 70,
                name: "Carte des Lignes de Forces",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 71,
                name: "Patrouille Urbaine",
                traits: [
                    "TASK"
                ]
            }
        ]
    },
    {
        "name": "Vestiges Occultes",
        "image": "strangeremnants.png",
        "cards": [
            {
                id: 72,
                name: "Journal Médical",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 73,
                name: "Lame Esotérique",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "ARME"
                ]
            },
            {
                id: 74,
                name: "Livre des Secrets",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 75,
                name: "Menottes",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 76,
                name: "Livre Mystérieux",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 77,
                name: "Opus Arcana",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 78,
                name: "Somptueux Festin",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 79,
                name: "Entraînement Personnalisé",
                traits: [
                    "TASK"
                ]
            },
            {
                id: 80,
                name: "Sainte Lance",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIC",
                    "ARME"
                ]
            },
            {
                id: 81,
                name: "Effroyable Talisman",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 82,
                name: "Dague Rituelle ",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "ARME"
                ]
            },
            {
                id: 83,
                name: "Guide d'Expédition",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 84,
                name: "Conservateur de Musée",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 85,
                name: "Dépositaire des Secrets",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 86,
                name: "Carte d'Expédition",
                traits: [
                    "BABIOLE",
                    "LIVRE"
                ]
            },
            {
                id: 87,
                name: "Consecration",
                traits: [
                    "SERVICE"
                ]
            }
        ]
    },
    {
        "name": "Les Secrets des Pyramides",
        "image": "underthepyramids.png",
        "cards": [
            {
                id: 88,
                name: "Colt de Poche.32",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 89,
                name: "Dague Enchantée",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "ARME"
                ]
            },
            {
                id: 90,
                name: "Echoppe de magie",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 91,
                name: "Livre de Sorts",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 92,
                name: "Rempart Contre le Mal",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 93,
                name: "Echoppe d'Antiquités",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 94,
                name: "Talisman Porte Bonheur",
                traits: [
                    "BABIOLE",
                    "RELIC"
                ]
            },
            {
                id: 95,
                name: "Psychothérapeute",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 96,
                name: "Chasseuse de Trésors",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 97,
                name: "Loupe",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 98,
                name: "Ankh",
                traits: [
                    "OBJET",
                    "RELIC"
                ]
            },
            {
                id: 99,
                name: "Parchemin Esotérique",
                traits: [
                    "BABIOLE",
                    "LIVRE"
                ]
            },
            {
                id: 100,
                name: "Journal de scribe",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 101,
                name: "Livre Ancien",
                traits: [
                    "OBJET",
                    "RELIC",
                    "LIVRE"
                ]
            },
            {
                id: 102,
                name: "Bougies Rituelles",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 103,
                name: "Masse",
                traits: [
                    "OBJET"
                ]
            }

        ]
    },
    {
        "name": "Signes de Carcosa",
        "image": "signsofcarcossa.png",
        "cards": [
            {
                id: 104,
                name: "Canne Enchantée",
                traits: [
                    "OBJET",
                    "ARME",
                    "MAGIQUE"
                ]
            },
            {
                id: 105,
                name: "Disciple de la Loge",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 106,
                name: ".25 Automatique",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 107,
                name: "Assassinat",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 108,
                name: "Auteur Estimé",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 109,
                name: "Bijou Elégant",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 110,
                name: "Physicienne de la Loge",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 111,
                name: "Commérage",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 112,
                name: "Brigade de Sécurité",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 113,
                name: "Mitraillette Thompson",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 114,
                name: "Assistante en Esotérisme",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 115,
                name: "Lance Flammes",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 116,
                name: "Poker à Trois Cartes",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 117,
                name: "Inspecteur en Chef",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 118,
                name: "Texte Occulte",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 168,
                name: "Spécialiste",
                traits: [
                    "ALLIE"
                ]
            }
        ]
    },
    {
        "name": "Les Contrées du Rêve",
        "image": "dreamlands.png",
        "cards": [
            {
                id: 119,
                name: "Boîte à Rêves",
                traits: [
                    "BABIOLE",
                    "MAGIQUE"
                ]
            },
            {
                id: 120,
                name: "Texte Interdit",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                d: 121,
                name: "Cours du Soir",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 122,
                name: "Descente de Police",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 123,
                name: "Codex d'un Autre Monde",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 124,
                name: "Arcaniste",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 125,
                name: "Aristocrate Opiniâtre",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 126,
                name: "Arc Enchanté",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "ARME"
                ]
            },
            {
                id: 127,
                name: "Tueur à Gages",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 128,
                name: "Grimoire Occulte",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 129,
                name: "Décoction Alchimique",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 130,
                name: "Journal des Rêves",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 131,
                name: "En Quête de Vérité",
                traits: [
                    "TASK"
                ]
            },
            {
                id: 132,
                name: "Passe-Partout",
                traits: [
                    "BABIOLE"
                ]
            },

            {
                id: 133,
                name: "Appareil Photo",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 134,
                name: "Divination",
                traits: [
                    "SERVICE"
                ]
            }
        ]
    },
    {
        "name": "Cités en Ruine",
        "image": "citiesInRuins.png",
        "cards": [
            {
                id: 135,
                name: "Surveillance de l'Agence",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 136,
                name: "Sutra Esothérique",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 137,
                name: "Secrets Interdits",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 138,
                name: "Mitrailleuse Gatling",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 139,
                name: "Sinistre Totem",
                traits: [
                    "BABIOLE",
                    "MAGIQUE"
                ]
            },
            {
                id: 140,
                name: "Chasseur de la Loge",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 141,
                name: "Mauser C96",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 142,
                name: "Instructions de Mission",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 143,
                name: "Parchemin Mystique",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 144,
                name: "Bulletin d'Actualité",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 145,
                name: "Ecritures Occultes",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 146,
                name: "Analgésiques",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 147,
                name: "Vol Privé",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 148,
                name: "Réception du Crépuscule d'Argent",
                traits: [
                    "SERVICE"
                ]
            },
            {
                id: 149,
                name: "Carabine Winchester",
                traits: [
                    "OBJET",
                    "ARME"
                ]
            },
            {
                id: 150,
                name: "Programme d'Entrainement",
                traits: [
                    "SERVICE"
                ]
            }
        ]
    },
    {
        "name": "Les Masques de Nyarlathotep",
        "image": "mon.png",
        "cards": [
            {
                id: 151,
                name: "Manuscrit Ancien",
                traits: [
                    "BABIOLE",
                    "RELIC",
                    "LIVRE"
                ]
            },
            {
                id: 152,
                name: "Chercheur Ingénieux",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 153,
                name: "Lame Bénie",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIC",
                    "ARME"
                ]
            },
            {
                id: 154,
                name: "Tronçonneuse",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 155,
                name: "Bijou Enchanté",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIC"
                ]
            },
            {
                id: 156,
                name: "Lame de Maître",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIC",
                    "ARME"
                ]
            },
            {
                id: 157,
                name: "Lexique Macabre",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 158,
                name: "Compendium Grotesque",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 159,
                name: "Directeur de Musée",
                traits: [
                    "ALLIE"
                ]
            },
            {
                id: 160,
                name: "Livre Mystique",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 161,
                name: "Tablette Occulte",
                traits: [
                    "OBJET",
                    "RELIC",
                    "LIVRE"
                ]
            },
            {
                id: 162,
                name: "Totem Protecteur",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIC"
                ]
            },
            {
                id: 163,
                name: "Parchemin des Secrets",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 164,
                name: "Fendoir Vétuste",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIC",
                    "ARME"
                ]
            },
            {
                id: 165,
                name: "Souvenir Précieux",
                traits: [
                    "BABIOLE"
                ]
            },
            {
                id: 166,
                name: "Talisman Vampirique",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIC"
                ]
            }
        ]
    }
]);
eldritch.decks.push(asset);


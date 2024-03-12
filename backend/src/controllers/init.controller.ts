import type { Request, Response } from "express";
import prisma from "../config/prisma";
import { Product } from "@prisma/client";
import cleanErrorMessage from "../utils/clean-error-message";

const productList: Product[] = [
  {
    id: "sw-jedi-fallen-order",
    title: "Star Wars Jedi: Fallen Order",
    discount: 15,
    price: 59.99,
    genre: ["action", "adventure"],
    description:
      "Star Wars Jedi: Fallen Order is a narrative-driven, single-player game puts you in the role of a Jedi Padawan who narrowly escaped the purge of Order 66 following the events of Episode III: Revenge of the Sith. On a quest to rebuild the Jedi Order, you must pick up the pieces of your shattered past to complete your training, develop new powerful Force abilities and master the art of the iconic lightsaber - all while staying one step ahead of the Empire and its deadly Inquisitors.",
    ratings: [92, 88, 90],
    releaseDate: "2019-11-15",
    platform: "PC (Windows)",
    developer: "Respawn Entertainment",
    publisher: "Electronic Arts",
    poster: "",
    screenshots: []
  },
  {
    id: "marvels-gotg",
    title: "Marvel's Guardians of the Galaxy",
    discount: 10,
    price: 59.99,
    genre: ["adventure", "rpg", "shooter"],
    description:
      "Fire up a wild ride across the cosmos with a fresh take on Marvel's Guardians of the Galaxy. In this action-adventure game, you are Star-Lord leading the unpredictable Guardians from one explosion of chaos to the next. You got this. Probably.",
    ratings: [92, 88, 90],
    releaseDate: "2021-10-26",
    platform: "PC (Windows)",
    developer: "Eidos Montréal",
    publisher: "Square Enix",
    poster: "",
    screenshots: []
  },
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    discount: 0,
    price: 59.99,
    genre: ["adventure", "rpg", "shooter"],
    description:
      "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character's cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
    ratings: [92, 88, 90],
    releaseDate: "2020-12-10",
    platform: "PC (Windows)",
    developer: "CD Projekt RED",
    publisher: "CD Projekt",
    poster: "",
    screenshots: []
  },
  {
    id: "a-plague-tale-innocence",
    title: "A Plague Tale: Innocence",
    discount: 50,
    price: 59.99,
    genre: ["adventure", "rpg"],
    description:
      "A Plague Tale: Innocence, on PlayStation 4, Xbox One and PC, tells the grim story of two siblings fighting together for survival in the darkest hours of History. This new video game from Asobo Studio sends you on an emotional journey through the 14th century France, with gameplay combining adventure, action and stealth, supported by a compelling story. Follow the young Amicia and her little brother Hugo, who face the brutality of a ravaged world as they discover their purpose to expose a dark secret. On the run from the Inquisition's soldiers, surrounded by unstoppable swarms of rats incarnating the Black Death, Amicia and Hugo will learn to know and trust each other as they struggle for their lives against all odds.",
    ratings: [92, 88, 90],
    releaseDate: "2019-5-14",
    platform: "PC (Windows)",
    developer: "Asobo Studio",
    publisher: "Focus Entertainment",
    poster: "",
    screenshots: []
  },
  {
    id: "a-plague-tale-requiem",
    title: "A Plague Tale: Requiem",
    discount: 15,
    price: 59.99,
    genre: ["adventure", "rpg"],
    description:
      "A Plague Tale: Requiem is an action-adventure game similar to its predecessor. The player assumes control of Amicia and must face against both soldiers from the French Inquisition and hordes of rats that are spreading the black plague. Gameplay is largely similar to the first game, though the combat system is significantly expanded. The game features a progression system in which the player will be awarded additional skills and abilities. Stealth players will unlock skills that allow them to sneak around more efficiently, while those who prefer a more lethal approach will unlock additional combat skills. Locations are also larger, giving players additional options to progress.",
    ratings: [92, 88, 90],
    releaseDate: "2022-10-18",
    platform: "PC (Windows)",
    developer: "Asobo Studio",
    publisher: "Focus Entertainment",
    poster: "",
    screenshots: []
  },
  {
    id: "shadow-of-the-tomb-raider",
    title: "Shadow of the Tomb Raider",
    discount: 25,
    price: 59.99,
    genre: ["adventure", "puzzle", "shooter"],
    description:
      "Experience Lara Croft's defining moment as she becomes the Tomb Raider. In Shadow of the Tomb Raider, Lara must master a deadly jungle, overcome terrifying tombs, and persevere through her darkest hour. As she races to save the world from a Maya apocalypse, Lara will ultimately be forged into the Tomb Raider she is destined to be.",
    ratings: [92, 88, 90],
    releaseDate: "2018-9-14",
    platform: "PC (Windows)",
    developer: "Eidos Montréal",
    publisher: "Square Enix",
    poster: "",
    screenshots: []
  },
  {
    id: "sw-jedi-survivor",
    title: "Star Wars Jedi: Survivor",
    discount: 0,
    price: 59.99,
    genre: ["action", "adventure"],
    description:
      "The story of Cal Kestis continues in Star Wars Jedi: Survivor, a third-person, galaxy-spanning, action-adventure game from Respawn Entertainment, developed in collaboration with Lucasfilm Games. This narratively driven, single-player title picks up five years after the events of Star Wars Jedi: Fallen Order and follows Cal's increasingly desperate fight as the galaxy descends further into darkness. Pushed to the edges of the galaxy by the Empire, Cal will find himself surrounded by threats new and familiar. As one of the last surviving Jedi Knights, Cal is driven to make a stand during the galaxy's darkest times — but how far is he willing to go to protect himself, his crew, and the legacy of the Jedi Order?",
    ratings: [92, 88, 90],
    releaseDate: "2023-4-28",
    platform: "PC (Windows)",
    developer: "Respawn Entertainment",
    publisher: "Electronic Arts",
    poster: "",
    screenshots: []
  },
  {
    id: "sw-outlaws",
    title: "Star Wars Outlaws",
    discount: 0,
    price: 69.99,
    genre: ["action", "adventure"],
    description:
      "Experience the first-ever open world Star Wars game, set between the events of The Empire Strikes Back and Return of the Jedi. Explore distinct planets across the galaxy, both iconic and new. Risk it all as Kay Vess, an emerging scoundrel seeking freedom and the means to start a new life, along with her companion Nix. Fight, steal, and outwit your way through the galaxy's crime syndicates as you join the galaxy's most wanted.",
    ratings: [92, 88, 90],
    releaseDate: "2025",
    platform: "PC (Windows)",
    developer: "Massive Entertainment",
    publisher: "Ubisoft",
    poster: "",
    screenshots: []
  },
  {
    id: "the-witcher-3-wild-hunt",
    title: "The Witcher 3: Wild Hunt",
    discount: 10,
    price: 59.99,
    genre: ["adventure", "rpg"],
    description:
      "The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.",
    ratings: [92, 88, 90],
    releaseDate: "2015-5-19",
    platform: "PC (Windows)",
    developer: "CD Projekt RED",
    publisher: "Bandai Namco Entertainment",
    poster: "",
    screenshots: []
  },
  {
    id: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    discount: 5,
    price: 59.99,
    genre: ["adventure", "rpg"],
    description:
      "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Now you can take control of the action and be at the center of your own adventure in the wizarding world. Embark on a journey through familiar and new locations as you explore and discover fantastic beasts, customize your character and craft potions, master spell casting, upgrade talents, and become the wizard you want to be. Discover the feeling of living at Hogwarts as you make allies, battle Dark wizards, and ultimately decide the fate of the wizarding world. Your legacy is what you make of it.",
    ratings: [92, 88, 90],
    releaseDate: "2023-2-10",
    platform: "PC (Windows)",
    developer: "Avalanche Software",
    publisher: "Portkey Games",
    poster: "",
    screenshots: []
  },
  {
    id: "god-of-war",
    title: "God of War",
    discount: 10,
    price: 59.99,
    genre: ["action", "adventure", "rpg"],
    description:
      "God of War is the sequel to God of War III as well as a continuation of the canon God of War chronology. Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his son Atreus in the years since the third game. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
    ratings: [92, 88, 90],
    releaseDate: "2022-1-14",
    platform: "PC (Windows)",
    developer: "SIE Santa Monica Studio",
    publisher: "Sony Interactive",
    poster: "",
    screenshots: []
  },
  {
    id: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    discount: 10,
    price: 59.99,
    genre: ["action", "adventure", "rpg"],
    description:
      "God of War: Ragnarök is the ninth installment in the God of War series and the sequel to 2018's God of War. Continuing with the Norse mythology theme, the game is set in ancient Norway and features series protagonists Kratos, the former Greek God of War, and his young son Atreus. The game kicked off the events of Ragnarök, where Kratos and Atreus must journey to each of the Nine Realms in search of answers as they prepare for the prophesied battle that will end the world.",
    ratings: [92, 88, 90],
    releaseDate: "2022-11-9",
    platform: "PlayStation 5",
    developer: "SIE Santa Monica Studio",
    publisher: "Sony Interactive",
    poster: "",
    screenshots: []
  },
  {
    id: "cyberpunk-2077-phantom-liberty",
    title: "Cyberpunk 2077: Phantom Liberty",
    discount: 15,
    price: 69.99,
    genre: ["adventure", "rpg", "shooter"],
    description:
      "Phantom Liberty is a spy-thriller expansion for the open-world action-adventure RPG Cyberpunk 2077. When the orbital shuttle of the President of the New United States of America is shot down over the deadliest district of Night City, there's only one person who can save her — you. Become V, a cyberpunk for hire, and dive deep into a tangled web of espionage and political intrigue, unraveling a story that connects the highest echelons of power with the brutal world of black-market mercenaries.",
    ratings: [92, 88, 90],
    releaseDate: "2023-9-26",
    platform: "PC (Windows)",
    developer: "CD Projekt RED",
    publisher: "CD Projekt",
    poster: "",
    screenshots: []
  },
  {
    id: "last-of-us-i",
    title: "The Last of Us Part I",
    discount: 20,
    price: 59.99,
    genre: ["adventure", "shooter"],
    description:
      "Experience the emotional storytelling and unforgettable characters of Joel and Ellie in The Last of Us. Enjoy a total overhaul of the original experience, faithfully reproduced but incorporating modernized gameplay, improved controls and expanded accessibility options. Plus, feel immersed with improved effects and enhanced exploration and combat.",
    ratings: [92, 88, 90],
    releaseDate: "2023-3-28",
    platform: "PC (Windows)",
    developer: "Naughty Dog",
    publisher: "Sony Interactive",
    poster: "",
    screenshots: []
  },
  {
    id: "last-of-us-ii",
    title: "The Last of Us Part II",
    discount: 20,
    price: 59.99,
    genre: ["adventure", "shooter"],
    description:
      "The Last of Us Part II is an action-adventure game set five years after the events of The Last of Us. The player traverses post-apocalyptic environments such as buildings and forests to advance the story. They can use firearms, improvised weapons, and stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus. The game intermittently switches control between Ellie and Abby, and also briefly Joel in the opening sequence. The nimble nature of the player character introduces platforming elements, allowing the player to jump and climb to traverse environments and gain advantages during combat.",
    ratings: [92, 88, 90],
    releaseDate: "2020-6-19",
    platform: "PlayStation 4",
    developer: "Naughty Dog",
    publisher: "Sony Interactive",
    poster: "",
    screenshots: []
  },
  {
    id: "metal-gear-solid-v-phantom-pain",
    title: "Metal Gear Solid V: The Phantom Pain",
    discount: 15,
    price: 59.99,
    genre: ["adventure", "shooter"],
    description:
      "Metal Gear Solid V: The Phantom Pain is the final game in the Metal Gear series. It is the sequel to Metal Gear Solid V: Ground Zeroes released the year before and a prequel to the original Metal Gear. The game has a complex story with long cut-scene sequences, but there are fewer and they are shorter compared to earlier Metal Gear Solid titles. Most of the gameplay mechanics introduced in Ground Zeroes are carried over: it is still an action game and stealth oriented but replaces the linear corridor design from most earlier titles with large open world environments that offer the player unrestricted freedom for the approach. The world has now a real-time day and night cycle and various weather effects that influence enemy behaviour, visibility and sound. Sabotaging or destroying certain structures can also influence other parts of the map.",
    ratings: [92, 88, 90],
    releaseDate: "2015-9-1",
    platform: "PC (Windows)",
    developer: "Kojima Productions",
    publisher: "Konami",
    poster: "",
    screenshots: []
  },
  {
    id: "death-stranding",
    title: "Death Stranding",
    discount: 5,
    price: 59.99,
    genre: ["adventure", "rpg", "shooter"],
    description:
      "From legendary game creator Hideo Kojima comes an all-new, genre-defying open world action adventure, starring Norman Reedus, Mads Mikkelsen, Léa Seydoux and Lindsay Wagner. In the near future, mysterious explosions have rocked the globe, setting off a series of supernatural events known as the Death Stranding. With otherworldly creatures plaguing the landscape, and mass extinction imminent, it's up to Sam Porter Bridges to travel across the ravaged wasteland and save humanity from impending annihilation.",
    ratings: [92, 88, 90],
    releaseDate: "2020-7-14",
    platform: "PC (Windows)",
    developer: "Kojima Productions",
    publisher: "Sony Interactive",
    poster: "",
    screenshots: []
  },
  {
    id: "tomb-raider",
    title: "Tomb Raider",
    discount: 35,
    price: 59.99,
    genre: ["adventure", "puzzle", "shooter"],
    description:
      "Tomb Raider explores the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor. Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold.",
    ratings: [92, 88, 90],
    releaseDate: "2013-3-4",
    platform: "PC (Windows)",
    developer: "Crystal Dynamics",
    publisher: "Square Enix",
    poster: "",
    screenshots: []
  },
  {
    id: "rise-of-the-tomb-raider",
    title: "Rise of the Tomb Raider",
    discount: 25,
    price: 59.99,
    genre: ["adventure", "shooter"],
    description:
      "Join Lara Croft on her first great tomb raiding expedition as she seeks to discover the secret of immortality. Featuring high-octane action set in the most beautiful and hostile environments on earth, Rise of the Tomb Raider delivers cinematic survival action-adventure.",
    ratings: [92, 88, 90],
    releaseDate: "2016-1-28",
    platform: "PC (Windows)",
    developer: "Crystal Dynamics",
    publisher: "Microsoft Studios",
    poster: "",
    screenshots: []
  },
  {
    id: "metro-exodus",
    title: "Metro Exodus",
    discount: 10,
    price: 59.99,
    genre: ["adventure", "shooter"],
    description:
      "Metro Exodus is an epic, story-driven first person shooter from 4A Games that blends deadly combat and stealth with exploration and survival horror in one of the most immersive game worlds ever created. Explore the Russian wilderness across vast, non-linear levels and follow a thrilling story-line that spans an entire year through spring, summer and autumn to the depths of nuclear winter. Inspired by the novels of Dmitry Glukhovsky, Metro Exodus continues Artyom's story in the greatest Metro adventure yet.",
    ratings: [92, 88, 90],
    releaseDate: "2019-2-15",
    platform: "PC (Windows)",
    developer: "4A Games",
    publisher: "Deep Silver",
    poster: "",
    screenshots: []
  },
  {
    id: "uncharted-4-a-thiefs-end",
    title: "Uncharted 4: A Thief's End",
    discount: 0,
    price: 59.99,
    genre: ["adventure", "shooter"],
    description:
      "Several years after his last adventure, retired fortune hunter, Nathan Drake, is forced back into the world of thieves. With the stakes much more personal, Drake embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. His greatest adventure will test his physical limits, his resolve, and ultimately what he's willing to sacrifice to save the ones he loves.",
    ratings: [92, 88, 90],
    releaseDate: "2016-5-10",
    platform: "PlayStation 4",
    developer: "Naughty Dog",
    publisher: "Sony Interactive",
    poster: "",
    screenshots: []
  },
  {
    id: "horizon-zero-dawn",
    title: "Horizon Zero Dawn",
    discount: 15,
    price: 59.99,
    genre: ["adventure", "rpg", "shooter"],
    description:
      "Welcome to a vibrant world rich with the beauty of nature – but inhabited by awe-inspiring, highly advanced machines. As a young machine hunter named Aloy, you must unravel the mysteries of this world and find your own destiny.",
    ratings: [92, 88, 90],
    releaseDate: "2020-8-7",
    platform: "PC (Windows)",
    developer: "Guerrilla Games",
    publisher: "Sony Interactive",
    poster: "",
    screenshots: []
  },
  {
    id: "horizon-forbidden-west",
    title: "Horizon Forbidden West",
    discount: 5,
    price: 59.99,
    genre: ["adventure", "rpg"],
    description:
      "Horizon Forbidden West continues Aloy's story as she moves west to a far-future America to brave a majestic, but dangerous frontier where she'll face awe-inspiring machines and mysterious new threats.",
    ratings: [92, 88, 90],
    releaseDate: "2024-3-21",
    platform: "PC (Windows)",
    developer: "Guerrilla Games",
    publisher: "Sony Interactive",
    poster: "",
    screenshots: []
  },
  {
    id: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    discount: 0,
    price: 59.99,
    genre: ["action", "adventure", "rpg", "shooter"],
    description:
      "Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.",
    ratings: [92, 88, 90],
    releaseDate: "2019-11-5",
    platform: "PC (Windows)",
    developer: "Rockstar Games",
    publisher: "Take-Two Interactive",
    poster: "",
    screenshots: []
  },
  {
    id: "marvels-spider-man-miles-morales",
    title: "Marvel's Spider-Man: Miles Morales",
    discount: 5,
    price: 59.99,
    genre: ["action", "adventure"],
    description:
      "The latest adventure in the Spider-Man universe will build on and expand 'Marvel's Spider-Man' through an all-new story. Players will experience the rise of Miles Morales as he masters new powers to become his own Spider-Man.",
    ratings: [92, 88, 90],
    releaseDate: "2022-11-18",
    platform: "PC (Windows)",
    developer: "Insomniac Games",
    publisher: "Sony Interactive",
    poster: "",
    screenshots: []
  }
];

const generateInitialData = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.createMany({
      data: productList
    });
    // const products = await prisma.product.findMany();

    res.status(200).send({ products });
  } catch (err) {
    res.status(500).send({ message: cleanErrorMessage(err) });
  }
};

export { generateInitialData };

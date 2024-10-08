let words = [
    { word: "abacus", hint: "Ancient tool for arithmetic calculations" },
    { word: "banjo", hint: "A stringed musical instrument with a circular body" },
    { word: "calendar", hint: "System for organizing days and months" },
    { word: "dinosaur", hint: "Extinct prehistoric reptiles" },
    { word: "ecosystem", hint: "A biological community of interacting organisms" },
    { word: "florist", hint: "Person who sells and arranges flowers" },
    { word: "geography", hint: "Study of Earth's physical features" },
    { word: "hologram", hint: "Three-dimensional image created by light" },
    { word: "iceberg", hint: "Large floating mass of ice" },
    { word: "jazz", hint: "Music genre characterized by improvisation" },
    { word: "kaleidoscope", hint: "Tube with colored glass pieces that create changing patterns" },
    { word: "lighthouse", hint: "Structure guiding ships with light signals" },
    { word: "monsoon", hint: "Seasonal heavy rains in South Asia" },
    { word: "neutron", hint: "Subatomic particle with no electric charge" },
    { word: "octopus", hint: "Sea creature with eight arms" },
    { word: "pyramid", hint: "Ancient Egyptian tomb structure" },
    { word: "quasar", hint: "Extremely luminous and distant celestial object" },
    { word: "recycle", hint: "Process of converting waste into reusable material" },
    { word: "symphony", hint: "Large musical composition for orchestra" },
    { word: "thermometer", hint: "Instrument measuring temperature" },
    { word: "universe", hint: "All existing matter and space considered as a whole" },
    { word: "vaccine", hint: "Substance used to provide immunity against diseases" },
    { word: "whirlpool", hint: "Rapid, circular movement of water" },
    { word: "xylophone", hint: "Musical instrument with wooden bars struck by mallets" },
    { word: "yacht", hint: "Luxury boat or ship used for recreation" },
    { word: "zebra", hint: "Animal known for its black-and-white stripes" },
    { word: "acupuncture", hint: "Traditional Chinese medicine technique involving needles" },
    { word: "balloon", hint: "Flexible bag filled with air or gas" },
    { word: "carousel", hint: "Merry-go-round ride in amusement parks" },
    { word: "dolphin", hint: "Intelligent marine mammal known for its agility" },
    { word: "eclipse", hint: "Occurrence when one celestial body obscures another" },
    { word: "fossil", hint: "Remains of ancient organisms preserved in rock" },
    { word: "giraffe", hint: "Tall African animal with a long neck" },
    { word: "holograph", hint: "Document written entirely in the writer's handwriting" },
    { word: "inkling", hint: "Slight or vague idea" },
    { word: "jigsaw", hint: "Puzzle consisting of irregularly shaped pieces" },
    { word: "keystone", hint: "Central stone at the top of an arch" },
    { word: "lemonade", hint: "Drink made from lemons, water, and sugar" },
    { word: "mosaic", hint: "Art created by assembling small pieces of colored glass or stone" },
    { word: "nucleus", hint: "Central part of an atom or cell" },
    { word: "obstacle", hint: "Thing that blocks one's way or hinders progress" },
    { word: "penguin", hint: "Flightless bird living in the Southern Hemisphere" },
    { word: "quilt", hint: "Warm bed covering made of stitched fabric layers" },
    { word: "robot", hint: "Machine capable of performing tasks automatically" },
    { word: "sculpture", hint: "Three-dimensional art created by shaping materials" },
    { word: "telescope", hint: "Instrument for observing distant objects" },
    { word: "utopia", hint: "Imaginary perfect society" },
    { word: "vortex", hint: "Fluid flow with a whirling motion" },
    { word: "wavelength", hint: "Distance between successive peaks of a wave" },
    { word: "xenon", hint: "Noble gas used in lighting" },
    { word: "yoga", hint: "Practice of physical and mental exercises for health" },
    { word: "zodiac", hint: "Band of constellations along the ecliptic" },
    { word: "archipelago", hint: "Group of islands" },
    { word: "beetle", hint: "Insect with a hard shell" },
    { word: "chemistry", hint: "Science of substances and their reactions" },
    { word: "drum", hint: "Percussion instrument with a membrane stretched over a frame" },
    { word: "elevator", hint: "Lift used for moving people between floors" },
    { word: "flute", hint: "Woodwind instrument played by blowing air across an opening" },
    { word: "glacier", hint: "Large, slow-moving mass of ice" },
    { word: "horizon", hint: "The line where the earth meets the sky" },
    { word: "irrigation", hint: "Artificial application of water to soil" },
    { word: "jujube", hint: "Edible fruit from the jujube tree" },
    { word: "kayak", hint: "Small, narrow watercraft propelled by a double-bladed paddle" },
    { word: "lava", hint: "Melted rock expelled by a volcano" },
    { word: "mushroom", hint: "Fungi with a cap and stalk" },
    { word: "narrative", hint: "Story or account of events" },
    { word: "ostrich", hint: "Large flightless bird native to Africa" },
    { word: "puzzle", hint: "Game or problem requiring thought to solve" },
    { word: "quasar", hint: "Extremely luminous and distant celestial object" },
    { word: "raccoon", hint: "Nocturnal mammal with a distinctive mask-like face" },
    { word: "satellite", hint: "Object that orbits a planet" },
    { word: "tornado", hint: "Violently rotating column of air extending to the ground" },
    { word: "unicorn", hint: "Mythical horse-like creature with a single horn" },
    { word: "vegetable", hint: "Edible plant or part of a plant" },
    { word: "waterfall", hint: "Flow of water over a cliff or steep place" },
    { word: "xylophone", hint: "Musical instrument with wooden bars struck by mallets" },
    { word: "yarn", hint: "Thread used for knitting or weaving" },
    { word: "zeppelin", hint: "Large airship with a rigid frame" },
    { word: "alchemy", hint: "Medieval practice of transforming base metals into gold" },
    { word: "butterfly", hint: "Insect with colorful wings" },
    { word: "cactus", hint: "Plant adapted to arid conditions with spines instead of leaves" },
    { word: "diamond", hint: "Precious gem known for its hardness and brilliance" },
    { word: "eagle", hint: "Large bird of prey known for its keen vision" },
    { word: "fountain", hint: "Ornamental feature with flowing water" },
    { word: "globe", hint: "Spherical model of Earth" },
    { word: "hammock", hint: "Suspended bed made of canvas or netting" },
    { word: "icecream", hint: "Frozen dessert made from dairy products" },
    { word: "jacket", hint: "Outer garment with sleeves" },
    { word: "koala", hint: "Australian marsupial that lives in eucalyptus trees" },
    { word: "laptop", hint: "Portable computer" },
    { word: "magnet", hint: "Object that attracts iron and certain other materials" },
    { word: "noodle", hint: "Long, thin strip of dough often used in Asian cuisine" },
    { word: "octagon", hint: "Eight-sided polygon" },
    { word: "pyramid", hint: "Ancient Egyptian structure with triangular faces" },
    { word: "quilt", hint: "Bed covering made by stitching together layers of fabric" },
    { word: "robotics", hint: "Technology involving robots" },
    { word: "skyscraper", hint: "Tall building with many floors" },
    { word: "telescope", hint: "Optical instrument used for viewing distant objects" },
    { word: "umbrella", hint: "Device used for protection from rain" },
]

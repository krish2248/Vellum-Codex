const books = [
  {
    title: "Animal Farm",
    author: "George Orwell",
    description: "*Animal Farm* by George Orwell is a powerful allegorical novella where farm animals overthrow their human owner, seeking equality. However, their utopia collapses under a corrupt leadership, mirroring the rise of totalitarianism and the betrayal of revolutionary ideals.",
    read: true,
    image: "animal farm.jpg",
  },
  {
    title: "The God of the Woods",
    author: "Liz Moore",
    description: "In Liz Moore's *The God of the Woods*, set in 1975, 13-year-old Barbara Van Laar disappears from her family's Adirondack summer camp, echoing her brother's unsolved vanishing years earlier. The novel intricately explores family secrets, privilege, and community tensions.",
    read: false,
    image: "god of the woods.jpg",
  },
  {
    title: "Stranger",
    author: "Albert Camus",
    description: "*The Stranger* by Albert Camus follows Meursault, a detached French Algerian who commits a senseless murder. Exploring themes of absurdism, alienation, and existentialism, the novel challenges societal norms and questions the meaning of life, emotion, and morality in a chaotic world.",
    read: false,
    image: "stranger.jpg",
  },
  {
    title: "We Solve Murders",
    author: "Richard Osman",
    description: "A retired investigator Steve Wheeler cherishes his peaceful routines. However, when his daughter-in-law Amy, a private security officer, becomes entangled in a perilous situation involving a dead body and a bag of cash, she turns to Steve for help. Together, they embark on a global quest to unravel the mystery, blending humor, suspense, and family dynamics.",
    read: false,
    image: "we solve murders.jpg",
  },
  {
    title: "Robinson Crusoe",
    author: "Daniel Defoe",
    description: "*Robinson Crusoe* by Daniel Defoe tells the tale of a castaway who survives alone on a deserted island for 28 years. Through resilience, ingenuity, and faith, Crusoe endures hardship, reflecting themes of isolation, self-reliance, and the human spirit’s endurance.",
    read: true,
    image: "robinson crusoe.jpg",
  },
  {
    title: "Count of Monte Cristo",
    author: "Dumas",
    description: "*The Count of Monte Cristo* by Alexandre Dumas is a gripping tale of betrayal, revenge, and redemption. Wrongfully imprisoned, Edmond Dantès escapes, finds treasure, and transforms into the mysterious Count, orchestrating justice against those who wronged him in a richly woven saga.",
    read: false,
    image: "count of monte cristo.jpg",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor",
    description: "*Crime and Punishment* by Fyodor Dostoevsky follows Raskolnikov, a tormented ex-student who murders a pawnbroker. As guilt consumes him, he grapples with morality, justice, and redemption in a psychological exploration of conscience, suffering, and the complexities of the human mind.",
    read: true,
    image: "crime and punishment.jpg",
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    description: "*Norwegian Wood* by Haruki Murakami is a nostalgic, melancholic tale of love and loss. Set in 1960s Tokyo, it follows Toru Watanabe as he navigates youth, grief, and emotional complexity through relationships that reveal the fragility and beauty of human connection.",
    read: false,
    image: "norwegian wood.jpg",
  },
  {
    title: "To Kill a Mocking Bird",
    author: "Harper Lee",
    description: "*To Kill a Mockingbird* by Harper Lee explores racial injustice and moral growth in the American South. Through the eyes of young Scout Finch, it tells a powerful story of empathy, courage, and integrity as her father defends a wrongly accused Black man.",
    read: false,
    image: "to kill a mocking bird.jpg",
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    description: "*Anna Karenina* by Leo Tolstoy is a sweeping tale of love, betrayal, and societal pressure. It follows the tragic affair between Anna and Vronsky, set against the backdrop of 19th-century Russian aristocracy, exploring themes of passion, family, and the search for meaning.",
    read: false,
    image: "anna karenina.jpg",
  },
  {
    title: "Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "*The Great Gatsby* by F. Scott Fitzgerald captures the glamour and disillusionment of the Jazz Age. Through the mysterious Jay Gatsby’s obsession with the past and unrequited love, it explores themes of wealth, identity, and the elusive nature of the American Dream.",
    read: true,
    image: "great gatsby.jpg",
  },
  {
    title: "Tress of the Emerald Sea",
    author: "Brandon Sanderson",
    description: "*Tress of the Emerald Sea* by Brandon Sanderson is a whimsical adventure about a brave girl named Tress who sets sail across deadly, magical seas to rescue her friend. With courage and cleverness, she faces pirates, curses, and wonders beyond imagination.",
    read: false,
    image: "tress of emerald sea.jpg",
  },
  {
    title: "A Month in the Country",
    author: "J. L. Carr",
    description: "*A Month in the Country* by J.L. Carr follows a shell-shocked World War I veteran who restores a medieval mural in a quiet Yorkshire village. Amid peaceful countryside and simple living, he finds healing, beauty, and fleeting happiness in a summer that gently transforms his life.",
    read: true,
    image: "a month in the country.jpg",
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    description: "*A Tale of Two Cities* by Charles Dickens is a dramatic story set during the French Revolution. It explores themes of sacrifice, resurrection, and justice through the intertwined lives of characters in London and Paris, capturing the turmoil and triumph of a turbulent era.",
    read: false,
    image: "tale of two cities.jpg",
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    description: "*Don Quixote* by Miguel de Cervantes follows an aging man who, obsessed with chivalric tales, sets out as a knight with his squire Sancho Panza. Blending comedy and tragedy, the novel explores illusion, identity, and the clash between dreams and reality.",
    read: false,
    image: "don quixote.jpg",
  },
  {
    title: "And Then There Were None",
    author: "Agatha Christie",
    description: "*And Then There Were None* by Agatha Christie is a chilling mystery where ten strangers are invited to a remote island and start dying one by one. As paranoia grows, they realize the killer is among them in this masterful tale of suspense and justice.",
    read: false,
    image: "and then there were none.jpg",
  },
  {
    title: "Kite Runner",
    author: "Khaled Hosseini",
    description: "*The Kite Runner* by Khaled Hosseini is a poignant tale of friendship, guilt, and redemption. Set in Afghanistan and later the U.S., it follows Amir as he confronts a haunting past and seeks to make amends for a childhood betrayal that changed everything.",
    read: false,
    image: "kite runner.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "*1984* by George Orwell is a dystopian novel set in a totalitarian regime where the government watches every move. Through Winston Smith’s quiet rebellion, it explores themes of surveillance, truth, freedom, and the crushing power of oppressive ideology in a bleak, controlled society.",
    read: true,
    image: "1984.jpg",
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    description: "*War and Peace* by Leo Tolstoy is an epic novel set during the Napoleonic Wars, intertwining the lives of aristocratic families. It explores love, fate, history, and personal transformation against a vast backdrop of war, philosophy, and the search for meaning in life.",
    read: false,
    image: "war and peace.jpg",
  },
  {
    title: "Night",
    author: "Elie Wiesel",
    description: "*Night* by Elie Wiesel is a haunting memoir of his experiences as a teenager during the Holocaust. Detailing his time in Auschwitz and Buchenwald, it explores the horrors of genocide, the loss of faith, and the enduring struggle to survive and remember.",
    read: false,
    image: "night.jpg",
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    description: "*Dracula* by Bram Stoker is a gothic horror classic that follows Count Dracula’s attempt to spread his undead curse to England. Through diaries and letters, it unfolds a chilling battle between good and evil, exploring fear, superstition, and the seductive power of darkness.",
    read: false,
    image: "dracula final.jpg",
  },
  {
    title: "Small Things Like These",
    author: "Claire Keegan",
    description: "*Small Things Like These* by Claire Keegan is a quiet, powerful novella set in 1980s Ireland. It follows coal merchant Bill Furlong as he uncovers a dark secret at a local convent, confronting moral courage, silence, and the weight of everyday choices.",
    read: false,
    image: "small things like these.jpg",
  },
  {
    title: "Rise and Fall of the Third Reich",
    author: "William Shirer",
    description: "*The Rise and Fall of the Third Reich* by William L. Shirer is a comprehensive historical account of Nazi Germany. Drawing on firsthand experience and official records, it chronicles Hitler’s ascent to power, the regime’s atrocities, and its ultimate catastrophic downfall in World War II.",
    read: false,
    image: "rise and fall.jpg",
  },
  {
    title: "The Leopard",
    author: "Tomasi di Lampedusa",
    description: "*The Leopard* by Giuseppe Tomasi di Lampedusa is a richly layered historical novel set in 19th-century Sicily. It follows Prince Fabrizio as he witnesses the decline of the aristocracy during Italy’s unification, exploring themes of change, decay, and the passing of old social orders.",
    read: false,
    image: "leopard.jpg",
  },
  {
    title: "Captain Blood",
    author: "Rafael Sabatini",
    description: "*Captain Blood* by Rafael Sabatini is a swashbuckling adventure about Dr. Peter Blood, wrongly convicted of treason and sold into slavery. Escaping to become a pirate, he sails the Caribbean with daring and honor, battling injustice and winning freedom in a tale of romance and revenge.",
    read: false,
    image: "captain blood.jpg",
  },
  {
    title: "Metamorphosis",
    author: "Franz Kafka",
    description: "*The Metamorphosis* by Franz Kafka tells the surreal story of Gregor Samsa, who wakes up one morning transformed into a giant insect. As he becomes isolated from his family and society, the novella explores themes of alienation, identity, and the absurdity of human existence.",
    read: true,
    image: "metamorphosis.jpg",
  },
  {
    title: "White Nights",
    author: "Fyodor Dostoevsky",
    description: "*White Nights* by Fyodor Dostoevsky is a poignant tale of loneliness and fleeting love. Set during four magical summer nights in St. Petersburg, it follows a dreamer who forms a deep connection with a young woman, only to face inevitable heartbreak and solitude.",
    read: true,
    image: "white nights.jpg",
  },
  {
    title: "Hard Times",
    author: "Charles Dickens",
    description: "*Hard Times* by Charles Dickens is a critique of industrial society and utilitarianism in Victorian England. Set in the fictional Coketown, it follows characters trapped by rigid systems and explores the consequences of suppressing imagination, emotion, and compassion in pursuit of productivity and control.",
    read: true,
    image: "hard times.jpg",
  },
  {
    title: "The Ice Dragon",
    author: "George R. R. Martin",
    description: "*The Ice Dragon* by George R.R. Martin is a fantasy tale about Adara, a winter-born girl who bonds with a legendary ice dragon. Set in a war-torn world, it’s a story of bravery, loss, and transformation, told with haunting beauty and emotional depth.",
    read: true,
    image: "ice dragon.jpg",
  },
  {
    title: "Flow",
    author: "Mihaly Csikszentmihalyi",
    description: "*Flow* by Mihaly Csikszentmihalyi explores the psychology of optimal experience, where people feel fully immersed and energized in activities. It explains how achieving “flow” leads to greater happiness, creativity, and fulfillment by aligning challenge with skill in deeply engaging moments of focus.",
    read: false,
    image: "flow.jpg",
  },
  {
    title: "The Second World War",
    author: "Antony Beevor",
    description: "*The Second World War* by Antony Beevor is a sweeping, detailed account of World War II. Covering global battles, politics, and human experiences, it blends military strategy with personal stories, offering a comprehensive and compelling narrative of the conflict that reshaped the modern world.",
    read: true,
    image: "2nd ww.jpg",
  },
  {
    title: "A World Undone",
    author: "G. J. Meyer",
    description: "*A World Undone* by G.J. Meyer is a gripping, accessible history of World War I. Blending political, military, and personal perspectives, it explains how the war began, unfolded, and changed the world, capturing the complexity and tragedy of a global conflict in vivid detail.",
    read: true,
    image: "world undone.jpg",
  },
  {
    title: "My Journey",
    author: "A. P. J. Abdul Kalam",
    description: "*My Journey* by A.P.J. Abdul Kalam is a heartfelt collection of anecdotes and reflections from India’s former President. It offers insights into his early life, struggles, values, and inspirations, showcasing his humility, resilience, and deep commitment to learning, innovation, and serving the nation.",
    read: true,
    image: "my journey.jpg",
  },
  {
    title: "The Rage of Dragons",
    author: "Evan Winter",
    description: "*The Rage of Dragons* by Evan Winter is an epic fantasy set in a brutal, war-torn world inspired by African culture. It follows Tau, a young warrior driven by vengeance, who defies fate and tradition to master combat and challenge a society ruled by power.",
    read: false,
    image: "rage of dragons.jpg",
  },
  {
    title: "Crimsom Moth",
    author: "Kristen Ciccarelli",
    description: "*The Crimson Moth* by Kristen Ciccarelli is a romantic fantasy about Rune, a secret witch vigilante, and Gideon, a witch hunter. As they fake a courtship to deceive each other, real feelings emerge, blurring the lines between love, lies, and loyalty.",
    read: false,
    image: "crimson moth.jpg",
  },
  {
    title: "Mistborn",
    author: "Brandon Sanderson",
    description: "*Mistborn* by Brandon Sanderson is a thrilling fantasy where a mist-covered world is ruled by a dark empire. Vin, a street thief with powerful abilities, joins a rebellion to overthrow the Lord Ruler. It blends heists, magic, and revolution in an epic tale.",
    read: false,
    image: "mistborn.jpg",
  },
  {
    title: "If We Were Villains",
    author: "M. L. Rio",
    description: "*If We Were Villains* by M.L. Rio is a dark academia mystery set in an elite Shakespearean conservatory. When a classmate dies under suspicious circumstances, friendships unravel and secrets surface, blending drama, obsession, and tragedy in a haunting tale of art and guilt.",
    read: false,
    image: "if we were villains.jpg",
  },
  {
    title: "Tales of a Monstrous Heart",
    author: "Jennifer Giesbrecht",
    description: "*Tales of a Monstrous Heart* by Jennifer Delaney is a gothic fantasy about Kat, a fey student forced into a magical partnership with the brooding Emrys Blackthorn. Together, they uncover dark secrets, murders, and forbidden magic in a world of prejudice, mystery, and dangerous attraction.",
    read: false,
    image: "tale of two cities.jpg",
  },
  {
    title: "The Tainted Cup",
    author: "Robert Jackson Bennett",
    description: "*The Tainted Cup* by Robert Jackson Bennett is a fantasy mystery where investigator Ana Dolabra and her assistant Dinios Kol unravel a bizarre murder—an officer found with a tree growing from him—leading to dark conspiracies and danger as monstrous leviathans threaten the empire.",
    read: false,
    image: "tainted cup.jpg",
  },
  {
    title: "The Sword of Kaigen",
    author: "M. L. Wang",
    description: "*The Sword of Kaigen* by M.L. Wang is a powerful fantasy about a mother and son uncovering hidden truths in a war-torn empire. With elemental magic, family loyalty, and inner strength, they fight to protect their home and reclaim their identities.",
    read: false,
    image: "sword of kaigen.jpg",
  },
  {
    title: "Blood Over Bright Haven",
    author: "M. L. Wang",
    description: "*Blood Over Bright Haven* by M.L. Wang is a standalone dark academia fantasy. It follows Sciona, the first woman admitted to the High Magistry, who, alongside her assistant Thomil, uncovers a conspiracy that could revolutionize magic. The novel delves into themes of power, privilege, and oppression.",
    read: false,
    image: "blood over bright haven.jpg",
  },
  {
    title: "Candide",
    author: "Voltaire",
    description: "*Candide* by Voltaire is a satirical novella following a naïve young man’s journey through a world of suffering and absurdity. As Candide faces war, disaster, and betrayal, Voltaire critiques blind optimism, organized religion, and philosophical dogma with sharp wit and dark humor.",
    read: false,
    image: "candide.jpg",
  },
  {
    title: "Forest of the Hanged",
    author: "Liviu Rebreanu",
    description: "Forest of the Hanged by Liviu Rebreanu is a powerful wartime novel about Apostol Bologa, a Romanian officer torn between duty and conscience. Set in World War I, it explores nationalism, identity, and the tragic cost of moral awakening under imperial rule.",
    read: false,
    image: "forest of the hanged.jpg",
  },
  {
    title: "The Master and Margarita",
    author: "Mikhail Bulgakov",
    description: "*The Master and Margarita* by Mikhail Bulgakov is a surreal, satirical novel blending fantasy and political commentary. When the Devil visits Soviet Moscow, chaos erupts. Parallelly, a love story unfolds amid censorship and madness, challenging tyranny, faith, and the power of art and imagination.",
    read: false,
    image: "master and margarita.jpg",
  },
  {
    title: "The Trial",
    author: "Franz Kafka",
    description: "*The Trial* by Franz Kafka is a haunting novel about Josef K., a man arrested and prosecuted by an invisible authority for an unnamed crime. As he navigates a surreal, oppressive bureaucracy, the story explores guilt, powerlessness, and the absurdity of modern existence.",
    read: false,
    image: "trial.jpg",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    description: "*The Brothers Karamazov* by Fyodor Dostoevsky is a profound philosophical novel exploring faith, free will, and morality. Centered on the turbulent lives of the Karamazov brothers, it weaves a complex tale of patricide, spiritual struggle, and the eternal conflict between reason and belief.",
    read: false,
    image: "brothers.jpg",
  },
  {
    title: "Journey by moonlight",
    author: "Antal Szerb",
    description: "*Journey by Moonlight* by Antal Szerb is a haunting, witty novel about Mihály, a Hungarian man on his honeymoon in Italy, who becomes consumed by memories of his bohemian youth. It explores identity, existential longing, and the tension between duty and desire.",
    read: false,
    image: "journey by moonlight.jpg",
  },
  {
    title: "Dubliners",
    author: "James Joyce",
    description: "*Dubliners* by James Joyce is a collection of short stories portraying everyday life in early 20th-century Dublin. With subtle realism and emotional depth, it explores themes of paralysis, identity, and longing through characters trapped by routine, revealing the quiet struggles beneath ordinary existence.",
    read: true,
    image: "dubliners.jpg",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description: "*The Picture of Dorian Gray* by Oscar Wilde is a gothic tale of vanity, corruption, and moral decay. When Dorian’s portrait ages instead of him, he pursues a life of indulgence and vice, exploring the dark consequences of eternal youth and unchecked desire.",
    read: false,
    image: "picture of dorian gray.jpg",
  },
  {
    title: "Mud, Sweat, and Tears",
    author: "Bear Grylls",
    description: "*Mud, Sweat, and Tears* by Bear Grylls is an action-packed memoir detailing his journey from childhood to becoming a survival expert and TV adventurer. With honesty and grit, he shares challenges, failures, and triumphs, revealing the mindset and resilience behind his remarkable life.",
    read: true,
    image: "mud sweat tears bear grylls.jpg",
  },
  {
    title: "Valhalla Rising",
    author: "Clive Cussler",
    description: "*Valhalla Rising* by Clive Cussler is a high-octane adventure featuring Dirk Pitt as he uncovers a deadly conspiracy involving a powerful energy corporation. Blending ancient legends, advanced technology, and nonstop action, the novel races through mysteries that could change the future of humanity.",
    read: true,
    image: "valhalla rising.jpg",
  },
  {
    title: "Poseidon's Arrow",
    author: "Clive Cussler",
    description: "*Poseidon’s Arrow* by Clive Cussler is a fast-paced thriller starring Dirk Pitt as he investigates the mysterious disappearance of a top-secret submarine. With global stakes, military secrets, and deadly enemies, Pitt races to stop a conspiracy that could alter the balance of power at sea.",
    read: true,
    image: "Poseidons arrow.jpg",
  },
  {
    title: "The Balkans",
    author: "Mark Mazower",
    description: "The Balkans by Mark Mazower is a concise, insightful history of a complex region often marked by conflict. Covering centuries of cultural, political, and religious change, Mazower challenges Western stereotypes, revealing the Balkans' rich, diverse heritage and the roots of its modern struggles.",
    read: true,
    image: "balkans.jpg",
  },
  {
    title: "Richard II",
    author: "William Shakespeare",
    description: "*Richard II* by William Shakespeare is a historical tragedy exploring the fall of a vain, divine-right king. As Richard loses his crown to the pragmatic Bolingbroke, the play examines power, identity, and the fragile nature of kingship with poetic grandeur and emotional depth.",
    read: true,
    image: "richard 2.jpg",
  },
  {
    title: "The Diary of a Nobody",
    author: "George and Weedon Grossmith",
    description: "*The Diary of a Nobody* by George and Weedon Grossmith is a hilarious satire of middle-class life in Victorian England. Through the absurd, self-important diary entries of Charles Pooter, it gently mocks social pretensions, everyday mishaps, and the desire to be respected.",
    read: true,
    image: "diary of nobody.jpg",
  },
  {
    title: "Trojan Odyssey",
    author: "Clive Cussler",
    description: "*Trojan Odyssey* by Clive Cussler is a thrilling Dirk Pitt adventure that blends ancient legend with modern danger. When a mysterious storm and strange clues link to Homer’s *Odyssey*, Pitt uncovers a deadly conspiracy threatening the world, racing against time to stop a global catastrophe.",
    read: true,
    image: "trojan odyssey.jpg",
  },
  {
    title: "Barbarossa",
    author: "Alan Clark",
    description: "Barbarossa offers a gripping, detailed account of Hitler’s 1941 invasion of the Soviet Union. Alan Clark blends military analysis with vivid storytelling, exposing the strategic miscalculations and brutal realities of one of history’s most catastrophic military campaigns.",
    read: true,
    image: "barbarrosa.jpg",
  },
  {
    title: "Deceits of Time",
    author: "Isabel Allende",
    description: "Deceits of Time unravels a web of secrets and lies buried in the past. Isabel crafts a suspenseful narrative filled with betrayal, mystery, and emotional depth, as hidden truths resurface and challenge everything the characters thought they knew about their lives.",
    read: true,
    image: "deceits of time.jpg",
  },
  {
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    description: "To the Lighthouse is a lyrical exploration of memory, time, and human consciousness. Virginia Woolf’s modernist masterpiece captures the inner lives of its characters with poetic nuance, set against the backdrop of a family's visits to their summer home in Scotland.",
    read: true,
    image: "to the lighthouse.jpg",
  },
  {
    title: "Letters to a Young Poet",
    author: "Rainer Maria Rilke",
    description: "Letters to a Young Poet is a timeless collection of Rilke’s heartfelt advice to an aspiring writer. Blending wisdom, introspection, and poetic beauty, these letters offer profound reflections on creativity, solitude, love, and the artistic journey of self-discovery.",
    read: false,
    image: "letters to a young poet.jpg",
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    description: "Great Expectations follows orphan Pip’s journey from humble beginnings to gentlemanly aspirations. Through vivid characters and moral trials, Dickens weaves a powerful tale of ambition, love, and redemption, exploring the true nature of wealth, identity, and personal growth in Victorian England.",
    read: false,
    image: "great expectations.webp",
  },
  {
    title: "The Iliad",
    author: "Homer",
    description: "The Iliad is Homer’s epic tale of heroism, wrath, and fate during the Trojan War. Centered on Achilles, it blends divine intervention and human conflict, capturing the glory and tragedy of war in one of the oldest and greatest works of literature.",
    read: true,
    image: "iliad homer.jpeg",
  },
  {
    title: "The Odyssey",
    author: "Homer",
    description: "The Odyssey chronicles Odysseus’s perilous journey home after the Trojan War. Battling mythical creatures, vengeful gods, and his own doubts, he strives to return to Ithaca. Homer’s timeless epic explores endurance, loyalty, and the enduring power of wit and perseverance.",
    read: true,
    image: "odyssey homer.avif",
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    description: "Les Misérables is a sweeping tale of justice, redemption, and love set in 19th-century France. Through unforgettable characters like Jean Valjean and Inspector Javert, Hugo explores poverty, morality, and revolution in a powerful critique of society and the human condition.",
    read: false,
    image: "les miserables.jpg",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    description: "Frankenstein is a haunting tale of ambition, creation, and consequence. Victor Frankenstein’s quest to conquer death gives rise to a tragic creature, sparking questions about humanity, isolation, and responsibility in one of literature’s earliest and most enduring works of science fiction.",
    read: false,
    image: "frankenstein.jpg",
  },
  {
    title: "Tess of the d'Urbervilles",
    author: "Thomas Hardy",
    description: "Tess of the d’Urbervilles tells the tragic story of Tess, a young woman caught in the harsh grip of fate, society, and injustice. Hardy’s poignant novel explores purity, suffering, and resilience in a world shaped by rigid class and moral codes.",
    read: false,
    image: "tess of urbervilles.jpg",
  },
  {
    title: "The Time Machine",
    author: "H. G. Wells",
    description: "The Time Machine follows a scientist’s journey far into Earth’s future, where he encounters the eerie Eloi and Morlocks. H.G. Wells’ groundbreaking novella explores time travel, class division, and the fate of humanity in a visionary blend of science and social commentary.",
    read: false,
    image: "time machine.jpg",
  },
  {
    title: "The Communist Manifesto",
    author: "Karl Marx",
    description: "The Communist Manifesto is a revolutionary political text calling for the overthrow of capitalist societies. Marx and Engels outline the class struggle, critique capitalism’s exploitation, and envision a classless, egalitarian future in one of history’s most influential socio-economic documents.",
    read: false,
    image: "communist manifesto.jpg",
  },
];

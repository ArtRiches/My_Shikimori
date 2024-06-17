CREATE TABLE animes (
	ID INT primary key auto_increment,
    FRANCHISE_ID INT,
    NAME_ENG VARCHAR(200),
    TYPE VARCHAR(50),
    EPISODES_RELEASED INT,
    EPISODES_COMING_OUT INT,
    STAR_RATING INT,
    DESCRIPTION VARCHAR(1200),
    YEAR INT,
    AGE_RATING VARCHAR(10),
    RECOMMENDED INT
);

INSERT INTO animes(FRANCHISE_ID,NAME_ENG,TYPE,EPISODES_RELEASED,EPISODES_COMING_OUT,STAR_RATING,DESCRIPTION,YEAR,AGE_RATING,RECOMMENDED)
VALUES (1, "One Piece", "TV Series", 1092, null, 5, "Gol D. Roger was known as the 'Pirate King', the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.

Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy’s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.", 1999, "PG-13", 1),
(1, "One Piece: Taose! Kaizoku Ganzack", "OVA", 1, 1, 4, "While Luffy and his crew of Zoro and Nami are starving on their small boat, they are attacked by a large monster. Nami is taken away, while Luffy and Zoro wash up on shore. There they meet a young girl, Medaka, and learn of the sad history of the island. The evil Pirate Ganzack has taken away all the men in the village and enslaved them, including Medaka's father. Now Luffy, Zoro, and Medaka must infiltrate Ganzack's base in order to rescue the villagers and Nami.", 1998, "PG-13", 0),
(1, "One Piece: Kinkyuu Kikaku One Piece Kanzen Kouryakuhou", "TV Special", 1, 1, 4, "This is the first recapitulation episode, covering the first five episodes with only the difference being that the episode follows the manga storyline and begins with Luffy and Shanks at the bar. Also, in the ending, the current Straw Hats have a small conversation about their goals.", 1999, "PG-13", 0),
(1, "One Piece Movie 01", "Movie", 1, 1, 4, "Many years ago, Woonan, a legendary pirate, plundered one-third of the world's gold and stashed it away on his secret island shrouded in mystery.

In the present, Luffy and the rest of the Straw Hats continue on their journey to the Grand Line. They are robbed by a group of bandits. Led by their captain, El Drago, these same bandits are headed towards Woonan's famed island. Even though the Straw Hat Pirates must now recover their stolen treasure, they have gained another objective: to discover the lost island, its treasures, and learn about the legend of Woonan.", 2000, "PG-13", 0),
(1, "One Piece: Umi no Heso no Daibouken-hen", "TV Special", 1, 1, 4, "The Straw Hats encounter a city in the middle of a whirlpool, called the Ocean's Navel, that is being destroyed by giant monsters. These monsters supposedly protect a treasure capable of granting wishes, but in the process of defeating these guardians, the crew ends up releasing another evil. (aired after Episode 53)", 2000, "PG-13", 0),
(1, "One Piece Movie 02: Nejimaki-jima no Daibouken", "Movie", 1, 1, 4, "Informed by the Thief Brothers his ship has been stolen by the Trump Kyoudai (Trump Siblings) who have set up base on Clockwork Island. Monkey D. Luffy, Captain of the Going Merry and aspiring Pirate King works with his crew - Usopp, Zoro, Sanji and Nami to battle their way up Clockwork Island to reclaim their ship.", 2001, "PG-13", 0),
(1, "One Piece: Jango no Dance Carnival", "TV Special", 1, 1, 4, "Mirror Ball Island is throwing the largest dance festival in the East Blue. While outlaw hypnotist Jango is enjoying the festivities, he is found and cornered by a Marine captain. He narrowly escapes by hypnotizing the entire island to “dance until they drop.” Unfortunately, pirate Monkey D. Luffy and his Straw Hat Crew get caught in the commotion and are also forced to dance the night away.", 2001, "PG-13", 0),



(2,"Your Name","Movie",1,1,5,"Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.

One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.

Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.",2016,"PG-13",1),



(3,"A Silent Voice","Movie",1,1,5,"As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye.

Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends.

Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.",2016,"PG-13",0),



(4,"Bleach","TV Series",366,366,4,null,2004,"PG-13",1),



(5,"Pokemon","TV Series",276,276,5,"Pokémon are peculiar creatures with a vast array of different abilities and appearances; many people, known as Pokémon trainers, capture and train them, often with the intent of battling others. Young Satoshi has not only dreamed of becoming a Pokémon trainer but also a ""Pokémon Master,"" and on the arrival of his 10th birthday, he finally has a chance to make that dream a reality. Unfortunately for him, all three Pokémon available to beginning trainers have already been claimed and only Pikachu, a rebellious Electric-type Pokémon, remains. However, this chance encounter would mark the start of a lifelong friendship and an epic adventure!

Setting off on a journey to become the very best, Satoshi and Pikachu travel across beautiful, sprawling regions with their friends Kasumi, a Water-type trainer, and Takeshi, a Rock-type trainer. But danger lurks around every corner. The infamous Team Rocket is always nearby, seeking to steal powerful Pokémon through nefarious schemes. It'll be up to Satoshi and his friends to thwart their efforts as he also strives to earn the eight Pokémon Gym Badges he'll need to challenge the Pokémon League, and eventually claim the title of Pokémon Master.",1997,"PG-13",0),



(6,"Oshi no Ko","TV Series",11,11,5,"In the entertainment world, celebrities often show exaggerated versions of themselves to the public, concealing their true thoughts and struggles beneath elaborate lies. Fans buy into these fabrications, showering their idols with undying love and support, until something breaks the illusion. Sixteen-year-old rising star Ai Hoshino of pop idol group B Komachi has the world captivated; however, when she announces a hiatus due to health concerns, the news causes many to become worried.

As a huge fan of Ai, gynecologist Gorou Amemiya cheers her on from his countryside medical practice, wishing he could meet her in person one day. His wish comes true when Ai shows up at his hospital—not sick, but pregnant with twins! While the doctor promises Ai to safely deliver her children, he wonders if this encounter with the idol will forever change the nature of his relationship with her.",2023,"PG-13",1),
(6,"Oshi no Ko Season 2","TV Series",null,null,null,null,null,"PG-13",null);

CREATE TABLE genres (
	ID INT primary key auto_increment,
    ANIME_ID INT,
	GENRE VARCHAR(100)
);

INSERT INTO genres(ANIME_ID,GENRE)
VALUES (1, "Action"),
(1, "Adventure"),
(1, "Fantasy"),	
(1, "Shounen"),

(2, "Action"),
(2, "Adventure"),
(2, "Fantasy"),	
(2, "Shounen"),

(3, "Action"),
(3, "Adventure"),
(3, "Fantasy"),	
(3, "Shounen"),

(4, "Action"),
(4, "Adventure"),
(4, "Fantasy"),	
(4, "Shounen"),

(5, "Action"),
(5, "Adventure"),
(5, "Fantasy"),	
(5, "Shounen"),

(6, "Action"),
(6, "Adventure"),
(6, "Fantasy"),	
(6, "Shounen"),

(7, "Comedy"),
(7, "Fantasy"),	
(7, "Shounen"),

(8, "Drama"),
(8, "Supernatural"),

(9, "Drama"),
(9, "Shounen"),

(10, "Action"),
(10, "Adventure"),
(10, "Fantasy"),	
(10, "Shounen"),

(11, "Kids"),
(11, "Action"),
(11, "Adventure"),
(11, "Comedy"),
(11, "Fantasy"),

(12, "Seinen"),
(12, "Supernatural"),
(12, "Drama"),

(13, "Seinen"),
(13, "Supernatural"),
(13, "Drama");

CREATE TABLE main_heroes (
	ID INT primary key auto_increment,
    ANIME_ID INT,
	NAME VARCHAR(100)
);

INSERT INTO main_heroes(ANIME_ID,NAME)
VALUES (1, "Monkey D., Luffy"),
(1, "Roronoa, Zoro"),
(1, "Usopp"),
(1, "Sanji"),
(1, "Nami"),
(1, "Tony Tony, Chopper"),
(1, "Nico, Robin"),
(1, "Franky"),
(1, "Brook"),
(1, "Jimbe"),

(2, "Monkey D., Luffy"),
(2, "Roronoa, Zoro"),
(2, "Nami"),
(2, "Ganzack"),

(3, "Monkey D., Luffy"),
(3, "Roronoa, Zoro"),
(3, "Sanji"),
(3, "Nami"),

(4, "Monkey D., Luffy"),
(4, "Roronoa, Zoro"),
(4, "Usopp"),
(4, "Nami"),
(4, "El Drago"),
(4, "Ganzo"),
(4, "Tobio"),

(5, "Monkey D., Luffy"),
(5, "Roronoa, Zoro"),
(5, "Usopp"),
(5, "Sanji"),
(5, "Nami"),

(6, "Monkey D., Luffy"),
(6, "Roronoa, Zoro"),
(6, "Usopp"),
(6, "Sanji"),
(6, "Nami"),
(6, "Akisu"),
(6, "Bear King"),
(6, "Borodo"),

(7, "Monkey D., Luffy"),
(7, "Roronoa, Zoro"),
(7, "Usopp"),
(7, "Sanji"),
(7, "Nami"),
(7, "Jango"),

(8, "Miyamizu, Mitsuha"),
(8, "Tachibana, Taki"),

(9, "Shouya Ishida"),
(9, "Shouko Nishimiya"),

(10, "Kurosaki, Ichigo"),
(10, "Kuchiki, Rukia"),
(10, "Inoue, Orihime"),
(10, "Sado, Yasutora"),
(10, "Ishida, Uryuu"),

(12, "Hoshino, Ai"),
(12, "Hoshino, Aquamarine"),
(12, "Hoshino, Ruby"),

(13, "Hoshino, Aquamarine"),
(13, "Hoshino, Ruby");
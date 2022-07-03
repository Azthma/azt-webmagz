<template>
    <v-main>
        <v-row class="d-flex justify-center py-16">
            <v-col cols="11" lg="5">
                <v-row class="mb-5">
                    <v-col>
                        <div class="text-h4 mb-3">{{title}}</div>
                        <div class="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <v-divider class="mt-8"></v-divider>
                    </v-col>
                </v-row>
                <v-row v-for="(item, index) in items" :key="index">
                    <v-col>
                        <v-card flat>
                            <v-row>
                                <v-col cols="8" lg="4">
                                    <div class="text-h6">{{index + 1}}. {{item.title}}</div>
                                    <div class="text-body-1 font-weight-light ml-5"><strong>Year:</strong> {{item.year}}</div>
                                    <div class="text-body-1 font-weight-light ml-5"><strong>Status:</strong> {{item.status}}</div>
                                    <v-img class="ma-5" :src="item.image"></v-img>
                                </v-col>
                                <v-col cols="11" lg="7">
                                    <div class="summary mb-5">{{item.summary_1}}</div>
                                    <div class="summary">{{item.summary_2}}</div>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-divider class="mt-8"></v-divider>
                        <v-card v-if="(index + 1) == 3 || (index + 1) == 6">
                            <template>
                                <div class="ad-container">
                                    <Adsense
                                        data-ad-client="ca-pub-4949249535095614"
                                        data-ad-slot="8863986558"
                                        data-ad-format="auto"
                                        data-full-width-responsive="true"
                                    >
                                    </Adsense>
                                </div>
                            </template>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="11" lg="3">
                <v-card class="ml-lg-10 pa-5">
                    <v-card class="mb-5">
                        <template>
                            <div class="ad-container">
                                <Adsense
                                    data-ad-client="ca-pub-4949249535095614"
                                    data-ad-slot="8863986558"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"
                                >
                                </Adsense>
                            </div>
                        </template>
                    </v-card>
                    <div class="text-h6">Suggestions</div>
                    <v-divider class="mb-5 mt-2"></v-divider>
                    <v-row v-for="item in suggestions" :key="item.title">
                        <v-col>
                            <div class="text-h6"><a @click="goto(item.title)">{{item.title}}</a></div>
                            <v-img :src="item.image"></v-img>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
    export default {
        data() {
            return {
                title: "",
                items: [],
                suggestions: [
                    {
                        title: 'Top 10 Action Anime',
                        image: require('../assets/demon-slayer.jpg'),
                    },
                    {
                        title: 'Top 5 Game Anime',
                        image: require('../assets/sword-art-online.jpg'),
                    },
                ]
            }
        },
        mounted() {
            this.title = this.$route.params.title;
            if (this.title == 'Top 10 Action Anime') {
                this.action();
            }
            if (this.title == 'Top 5 Game Anime') {
                this.game();
            }
        },
        methods: {
            goto(title) {
                this.$router.push(`/azt-webmagz/anime/${title}`);
                this.title = this.$route.params.title;
                if (this.title == 'Top 10 Action Anime') {
                    this.action();
                } else if (this.title == 'Top 5 Game Anime') {
                    this.game();
                } else {
                    this.items = [];
                }
            },
            action() {
                this.items = [
                    {
                        title: 'Demon Slayer',
                        year: '',
                        status: 'Completed',
                        image: require('../assets/anime/demon-slayer.jpg'),
                        summary_1: `Tanjirou Kamado lives with his impoverished family on a remote mountain. As the oldest sibling, he took upon the responsibility of ensuring his family's livelihood after the death of his father. On a cold winter day, he goes down to the local village in order to sell some charcoal. As dusk falls, he is forced to spend the night in the house of a curious man who cautions him of strange creatures that roam the night: malevolent demons who crave human flesh.`,
                        summary_2: ``
                    },
                    {
                        title: 'Jujutsu Kaisen',
                        year: '',
                        status: 'Completed',
                        image: require('../assets/anime/jujutsu-kaisen.jpg'),
                        summary_1: `Yuuji is a genius at track and field. But he has zero interest running around in circles, he’s happy as a clam in the Occult Research Club. Although he’s only in the club for kicks, things get serious when a real spirit shows up at school! Life’s about to get really strange in Sugisawa Town #3 High School!`,
                        summary_2: ``
                    },
                    {
                        title: 'Attack On Titan',
                        year: '(2009)',
                        status: 'Completed',
                        image: require('../assets/anime/attack-on-titan.jpg'),
                        summary_1: `Eren Yeager is a boy who lives in the town of Shiganshina, located on the outermost of three circular walls protecting its inhabitants from Titans. In the year 845, the first wall is breached by two new types of Titans, the Colossal Titan and the Armored Titan. During the incident, Eren's mother is eaten by a Titan while Eren escapes. He swears revenge on all Titans and enlists in the military along with his childhood friends, Mikasa Ackerman and Armin Arlert. Five years after Shiganshina's fall, the Colossal Titan attacks the city of Trost, near the second wall. Eren helps to successfully defend the city after he discovers a mysterious ability to turn himself into a sentient Attack Titan. This draws the attention of the Survey Corps and their commander, Erwin Smith, who intend to use his power to reclaim Wall Maria. The three are transferred to the Special Operations Squad, under the care of Captain Levi and Hange Zoe.`,
                        summary_2: ``
                    },
                    {
                        title: 'One Punch Man',
                        year: '(2004)',
                        status: 'Completed',
                        image: require('../assets/anime/one-punch-man.jpg'),
                        summary_1: `After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to good use by becoming a hero. However, he quickly becomes bored with easily defeating monsters, and wants someone to give him a challenge to bring back the spark of being a hero.`,
                        summary_2: `Upon bearing witness to Saitama's amazing power, Genos, a cyborg, is determined to become Saitama's apprentice. During this time, Saitama realizes he is neither getting the recognition that he deserves nor known by the people due to him not being a part of the Hero Association. Wanting to boost his reputation, Saitama decides to have Genos register with him, in exchange for taking him in as a pupil. Together, the two begin working their way up toward becoming true heroes, hoping to find strong enemies and earn respect in the process.`
                    },
                    {
                        title: 'Berserk',
                        year: '(1990)',
                        status: 'Completed',
                        image: require('../assets/anime/berserk.jpg'),
                        summary_1: `Guts, a former mercenary now known as the "Black Swordsman," is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings.`,
                        summary_2: `Setting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his loved one—of their humanity.`
                    },
                    {
                        title: 'Hunter X Hunter',
                        year: '(1998)',
                        status: 'Ongoing',
                        image: require('../assets/anime/hunterxhunter.jpg'),
                        summary_1: `"Secret treasure hoards, undiscovered wealth... mystical places, unexplored frontiers... 'The mysterious unknown.' There's magic in such words for those captivated by its spell. They are called 'Hunters'!"`,
                        summary_2: `Gon Freecss wants to become a Hunter so he can find his father, a man who abandoned him to pursue a life of adventure. But it's not that simple: only one in one hundred thousand can pass the Hunter Exam, and that is just the first obstacle on his journey. During the Hunter Exam, Gon befriends many other potential Hunters, such as the mysterious Killua; the revenge-driven Kurapika; and Leorio, who aims to become a doctor. There's a world of adventure and peril awaiting, and those who embrace it with open arms can become the greatest Hunters of them all!`
                    },
                    {
                        title: 'Black Clover',
                        year: '(1994)',
                        status: 'Ongoing',
                        image: require('../assets/anime/black-clover.jpg'),
                        summary_1: `Aster and Yuno were abandoned together at the same church, and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next sorcerous emperor. However, as they grew up, some differences between them became plain. Yuno was a genius with magic, with amazing power and control, while Aster could not use magic at all, and tried to make up for his lack by training physically. When they received their grimoires at age 15, Yuno got a spectacular book with a four-leaf-clover (most people receive a three-leaf-clover), while Aster received nothing at all. However, when Yuno was threatened, the truth about Aster’s power was revealed– he received a five-leaf-clover grimoire, a ‘black clover’ book of anti-magic. Now the two friends are heading out in the world, both seeking the same goal!`,
                        summary_2: ``
                    },
                    {
                        title: 'My Hero Academia',
                        year: '(2004)',
                        status: 'Completed',
                        image: require('../assets/anime/hero-academia.jpg'),
                        summary_1: `One day, a four-year-old boy came to a sudden realization: the world is not fair. Eighty percent of the world's population wield special abilities, known as "quirks," which have given many the power to make their childhood dreams of becoming a superhero a reality. Unfortunately, Izuku Midoriya was one of the few born without a quirk, suffering from discrimination because of it. Yet, he refuses to give up on his dream of becoming a hero; determined to do the impossible, Izuku sets his sights on the elite hero training academy, UA High.`,
                        summary_2: `However, everything changes after a chance meeting with the number one hero and Izuku's idol, All Might. Discovering that his dream is not a dead end, the powerless boy undergoes special training, working harder than ever before. Eventually, this leads to him inheriting All Might's power, and with his newfound abilities, gets into his school of choice, beginning his grueling journey to become the successor of the best hero on the planet.`
                    },
                    {
                        title: 'Tokyo Ghoul',
                        year: '(2011)',
                        status: 'Completed',
                        image: require('../assets/anime/tokyo-ghoul.jpg'),
                        summary_1: `Lurking within the shadows of Tokyo are frightening beings known as "ghouls," who satisfy their hunger by feeding on humans once night falls. An organization known as the Commission of Counter Ghoul (CCG) has been established in response to the constant attacks on citizens and as a means of purging these creatures. However, the problem lies in identifying ghouls as they disguise themselves as humans, living amongst the masses so that hunting prey will be easier. Ken Kaneki, an unsuspecting university freshman, finds himself caught in a world between humans and ghouls when his date turns out to be a ghoul after his flesh.`,
                        summary_2: `Barely surviving this encounter after being taken to a hospital, he discovers that he has turned into a half-ghoul as a result of the surgery he received. Unable to satisfy his intense craving for human meat through conventional means, Kaneki is taken in by friendly ghouls who run a coffee shop in order to help him with his transition. As he begins what he thinks will be a peaceful new life, little does he know that he is about to find himself at the center of a war between his new comrades and the forces of the CCG, and that his new existence has caught the attention of ghouls all over Tokyo.`
                    },
                    {
                        title: 'The Seven Deadly Sins',
                        year: '(2006)',
                        status: 'Completed',
                        image: require('../assets/anime/seven-deadly-sins.jpg'),
                        summary_1: `In a world where injustice prevails, the Holy Knights of Britannia protect their homeland with their unparalleled magic and strength. Their most sought-after targets are "The Seven Deadly Sins": a group of criminals once regarded as the strongest of Britannia's Holy Knights. Their supposed conspiracy to overthrow the Kingdom of Liones led to their defeat at the hands of the Holy Knights, but rumors persist that the seven infamous knights still live.`,
                        summary_2: `Ten years later, the Holy Knights ironically stage a coup d'état themselves and capture the King of Liones, installing themselves as the new rulers of the kingdom. Elizabeth Liones, the third princess of the kingdom, sets out on a journey to find the Seven Deadly Sins and request their aid when she stumbles upon a bar owned by Meliodas, the Dragon's Sin of Wrath and the former leader of the disgraced knights. The pair sets out to find Meliodas' old comrades, but will it be hope or despair that awaits them in their travels?`
                    },
                ]
            },
            game() {
                this.items = [
                    {
                        title: 'Sword Art Online',
                        year: '',
                        status: 'Completed',
                        image: require('../assets/anime/sao.jpg'),
                        summary_1: `In 2022, a virtual reality massively multiplayer online role-playing game (VRMMORPG) called Sword Art Online (SAO) will be released. With the NerveGear, a helmet that stimulates the user's five senses via their brain, players can experience and control their in-game characters with their minds. Both the game and the NerveGear were created by Akihiko Kayaba. On November 6, 10,000 players log into SAO's mainframe cyberspace for the first time, only to discover that they are unable to log out. Kayaba appears and tells the players that they must beat all 100 floors of Aincrad, a steel castle which is the setting of SAO if they wish to be free. He also states that those who suffer in-game deaths or forcibly remove the NerveGear out-of-game will suffer real-life deaths.`,
                        summary_2: ``
                    },
                    {
                        title: 'Log Horizon',
                        year: '',
                        status: 'Completed',
                        image: require('../assets/anime/log-horizon.jpg'),
                        summary_1: `By its eleventh expansion pack, the massively multiplayer online role-playing game (MMORPG) Elder Tale (エルダー・テイル, Erudā Teiru) has become a global success, with a user base of millions of players. However, during the release of its twelfth expansion pack: Homesteading the Noosphere (ノウアスフィアの開墾, Nōasufia no Kaikon, sometimes translated as Novasphere Pioneers),[2][3] thirty thousand Japanese gamers who are logged on at the time of the update suddenly find themselves transported into the virtual game world and donning their in-game avatars. In the midst of the event, a socially awkward gamer named Shiroe, along with his friends, Naotsugu and Akatsuki, decide to team up so that they may face this world, which unfortunately has now become their reality, along with the challenges and obstacles ahead of them.`,
                        summary_2: ``
                    },
                    {
                        title: 'Overlord',
                        year: '(2009)',
                        status: 'Completed',
                        image: require('../assets/anime/overlord.jpg'),
                        summary_1: `In the year 2126, a Full-Dive Massively Multiplayer Online Role Playing Game or DMMORPG called YGGDRASIL was released, standing out among all other DMMORPGs due to its unusually high ability for the player to interact with the game. After an intense twelve-year run, the game servers are about to be shut down. Within the game exists a guild, Ainz Ooal Gown, once consisting of 41 members and credited as one of the strongest guilds in the game. Now only four of the members remain, the other 37 having quit the game, and only one, a skeletal "Overlord" character named Momonga, continues to play as the guild leader, maintaining their headquarters in The Great Tomb of Nazarick. In the minutes before the shutdown he invites the remaining guild members, but of those only one appears and only for a short while before leaving. While saddened by this, he accepts the reality that his friends have their other lives to take care of and decides to stay logged in until the servers shut down.`,
                        summary_2: `When the shut-down time arrives, Momonga finds that the game hasn't vanished; instead, it appears as if Nazarick has been transported to another reality altogether along with its various NPCs gaining sentience. Momonga has been trapped in the form of his game avatar, leaving him unable to use the normal player functions such as General Message, or even to log out. With no other option, Momonga sets out to learn if anyone from the real world is also in this new world with him. Taking on the name of the guild, Ainz Ooal Gown, as a message to any other remaining players, Momonga begins exploring the world in an attempt to figure out what has happened while searching for anyone or anything that could help him solve this mystery, while ensuring the safety of Nazarick. Ainz Ooal Gown seems to have modifications made to his behavior by in-game mechanics, because he demonstrates no moral qualms with killing and other actions that are taboo in the real world. This is a story about the psychology of a creature beyond ethical concerns with near-limitless power.`
                    },
                    {
                        title: 'No Game No Life',
                        year: '(2004)',
                        status: 'Completed',
                        image: require('../assets/anime/no-game-no-life.jpg'),
                        summary_1: `Sora and Shiro are two hikikomori step-siblings who are known in the online gaming world as Blank, an undefeated group of gamers. One day, they are challenged to a game of chess by Tet, a god from another reality. The two are victorious and are offered to live in a world that centers around games. They accept, believing it to be a joke, and are summoned to a reality known as Disboard.[Jp. 1] There, a spell known as the Ten Pledges prevents the citizens of Disboard from inflicting harm on one another, forcing them to resolve their differences by gambling with games whose rules and rewards are magically enforced. In-game, rule enforcement only occurs when the method of cheating is acknowledged and outed by the opponent, allowing players to cheat through discreet methods. Sora and Shiro traverse to Elkia,[Jp. 2] the nation inhabited by humans, and befriend the duchess Stephanie Dola. Learning about Elkia's decline, the two participate in a tournament to determine the next ruler; after winning the crown, they earn the right to challenge the Disboard's other species as humanity's representative.LN 1.4 Their next goal is to conquer all sixteen species in order to challenge Tet to a game; as of the sixth volume, five of the sixteen are under their control.`,
                        summary_2: ``
                    },
                    {
                        title: 'The King’s Avatar',
                        year: '(1990)',
                        status: 'Completed',
                        image: require('../assets/anime/kings-avatar.jpg'),
                        summary_1: `The King's Avatar follows the story of Ye Xiu, a professional esports player living in Hangzhou, China. Widely considered the best player of the video game Glory, Ye Xiu was captain of the esports team, "Excellent Era", holding the account of the 'Battle God', 'One Autumn Leaf' before being forced to resign from the team, giving up one of the strongest accounts in the game and leave the competitive scene due to his unwillingness to take part in any marketing to profit the team. Ye Xiu ends up finding work as a night-shift manager at Happy Internet Cafe, where he meets Chen Guo, the owner of the cafe whom happens to be a huge fan of his alias 'Ye Qiu', his former team and character 'One Autumn Leaf'. While awaiting his return to the competitive scene, Ye Xiu continues playing the game, building a character from scratch and pursuing the championship and glory.`,
                        summary_2: ``
                    },
                ]
            }
        }
    }
</script>

<style>
.summary {
    font-family: "Times New Roman", Times, serif;
    font-size: 20px
}
</style>
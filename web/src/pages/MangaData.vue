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
                                <v-col cols="4">
                                    <div class="text-h6">{{index + 1}}. {{item.title}}</div>
                                    <div class="text-body-1 font-weight-light ml-5"><strong>Year:</strong> {{item.year}}</div>
                                    <div class="text-body-1 font-weight-light ml-5"><strong>Status:</strong> {{item.status}}</div>
                                    <v-img class="ma-5" :src="item.image"></v-img>
                                </v-col>
                                <v-col cols="7">
                                    <div class="summary mb-5">{{item.summary_1}}</div>
                                    <div class="summary">{{item.summary_2}}</div>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-divider class="mt-8"></v-divider>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="11" lg="3">
                <v-card class="ml-lg-10 pa-5">
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
                        title: 'Top 10 Classic Manga',
                        image: require('../assets/japanese-manga.jpg'),
                    },
                    {
                        title: 'Top 10 Manga Similar To Solo Leveling',
                        image: require('../assets/solo-leveling.jpg'),
                    },
                    {
                        title: 'Top 10 Isekai Manga',
                        image: require('../assets/japanese-manga.jpg'),
                    },
                ]
            }
        },
        mounted() {
            this.title = this.$route.params.title;
            if (this.title == 'Top 10 Classic Manga') {
                this.classics();
            }
            if (this.title == 'Top 10 Manga Similar To Solo Leveling') {
                this.similarToSoloLeveling();
            }
        },
        methods: {
            goto(title) {
                this.$router.push(`/azt-webmagz/manga/${title}`);
                this.title = this.$route.params.title;
                if (this.title == 'Top 10 Classic Manga') {
                    this.classics();
                } else if (this.title == 'Top 10 Manga Similar To Solo Leveling') {
                    this.similarToSoloLeveling();
                } else {
                    this.items = [];
                }
            },
            classics() {
                this.items = [
                    {
                        title: 'One Piece',
                        year: '(1997)',
                        status: 'Ongoing',
                        image: require('../assets/manga/one-piece.jpg'),
                        summary_1: `Gol D. Roger, a man referred to as the "Pirate King," is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the Pirate King is executed and the Great Age of Pirates begins.`,
                        summary_2: `Twenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new Pirate King. Armed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas.`
                    },
                    {
                        title: 'Naruto',
                        year: '(1999)',
                        status: 'Completed',
                        image: require('../assets/manga/naruto.jpg'),
                        summary_1: `Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no one takes him seriously. Since birth, Naruto has been shunned and ridiculed by his fellow villagers. But their contempt isn't because Naruto is loud-mouthed, mischievous, or because of his ineptitude in the ninja arts, but because there is a demon inside him. Prior to Naruto's birth, the powerful and deadly Nine-Tailed Fox attacked the village. In order to stop the rampage, the Fourth Hokage sacrificed his life to seal the demon inside the body of the newborn Naruto.`,
                        summary_2: `And so when he is assigned to Team 7—along with his new teammates Sasuke Uchiha and Sakura Haruno, under the mentorship of veteran ninja Kakashi Hatake—Naruto is forced to work together with other people for the first time in his life. Through undergoing vigorous training and taking on challenging missions, Naruto must learn what it means to work in a team and carve his own route toward becoming a full-fledged ninja recognized by his village.`
                    },
                    {
                        title: 'Fairy Tail',
                        year: '(2009)',
                        status: 'Completed',
                        image: require('../assets/manga/fairy-tail.jpg'),
                        summary_1: `In the mystical realm of Earth Land, magic exists at the core of everyday life for its inhabitants, from transportation to utilities and everything in between. However, even with all its benefits, magic can also be used for great evil; therefore, to prevent dark forces from upsetting the natural order of things, there exists a system of magical guilds in the Kingdom of Fiore. Under the command of their respective guild masters, these guilds are made up of witches and wizards who take on various job requests to earn fame and fortune. One particular guild stands high above the rest in both strength and spirit, and its name is Fairy Tail.`,
                        summary_2: `In his quest to find his dragon foster father—Igneel—Natsu Dragneel, a fiery and reckless mage, and his partner Happy run into a young celestial mage by the name of Lucy Heartfilia, who reveals that it's her dream to become a full-fledged wizard and join the Fairy Tail guild. After rescuing her from an abduction attempt, Natsu offers her a home in Fairy Tail. Now a member of the guild, Lucy teams up with Natsu and befriends fellow wizards Gray Fullbuster and Erza "Titania" Scarlet. Together, this motley crew set out on their many adventures, gaining many faithful allies and deadly foes along the way.`
                    },
                    {
                        title: 'Bleach',
                        year: '(2004)',
                        status: 'Completed',
                        image: require('../assets/manga/bleach.jpg'),
                        summary_1: `For as long as he can remember, high school student Ichigo Kurosaki has been able to see the spirits of the dead, but that has not stopped him from leading an ordinary life. One day, Ichigo returns home to find an intruder in his room who introduces herself as Rukia Kuchiki, a Soul Reaper tasked with helping souls pass over. Suddenly, the two are jolted from their conversation when a Hollow—an evil spirit known for consuming souls—attacks. As Ichigo makes a brash attempt to stop the Hollow, Rukia steps in and shields him from a counterattack. Injured and unable to keep fighting, Rukia suggests a risky plan—transfer half of her Soul Reaper powers to Ichigo. He accepts and, to Rukia's surprise, ends up absorbing her powers entirely, allowing him to easily dispatch the Hollow.`,
                        summary_2: `Now a Soul Reaper himself, Ichigo must take up Rukia's duties of exterminating Hollows and protecting spirits, both living and dead. Along with his friends Orihime Inoue and Yasutora Sado—who later discover spiritual abilities of their own—Ichigo soon learns that the consequences of becoming a Soul Reaper and dealing with the world of spirits are far greater than he ever imagined.`
                    },
                    {
                        title: 'Slam Dunk',
                        year: '(1990)',
                        status: 'Completed',
                        image: require('../assets/manga/slam-dunk.jpg'),
                        summary_1: `Hanamichi Sakuragi, a tall, boisterous teenager with flame-red hair and physical strength beyond his years, is eager to put an end to his rejection streak of 50 and finally score a girlfriend as he begins his first year of Shohoku High. However, his reputation for delinquency and destructiveness precedes him, and most of his fellow students subsequently avoid him like the plague. As his first day of school ends, he is left with two strong thoughts: "I hate basketball" and "I need a girlfriend."`,
                        summary_2: `Haruko Akagi, ignorant of Hanamichi's history of misbehavior, notices his immense height and unwittingly approaches him, asking whether or not he likes basketball. Overcome by the fact that a girl is speaking to him, the red-haired giant blurts out a yes despite his true feelings. At the gym, Haruko asks if he can do a slam dunk. Though a complete novice, Hanamachi palms the ball and makes the leap...but overshoots, slamming his head into the backboard. Amazed by his near-inhuman physical abilities, Haruko quickly notifies the school's basketball captain of his feat. With this, Hanamichi is unexpectedly thrust into a world of competition for a girl he barely knows, but he soon discovers that there is perhaps more to basketball than he once thought.`
                    },
                    {
                        title: 'Hunter X Hunter',
                        year: '(1998)',
                        status: 'Ongoing',
                        image: require('../assets/manga/hunterxhunter.jpg'),
                        summary_1: `"Secret treasure hoards, undiscovered wealth... mystical places, unexplored frontiers... 'The mysterious unknown.' There's magic in such words for those captivated by its spell. They are called 'Hunters'!"`,
                        summary_2: `Gon Freecss wants to become a Hunter so he can find his father, a man who abandoned him to pursue a life of adventure. But it's not that simple: only one in one hundred thousand can pass the Hunter Exam, and that is just the first obstacle on his journey. During the Hunter Exam, Gon befriends many other potential Hunters, such as the mysterious Killua; the revenge-driven Kurapika; and Leorio, who aims to become a doctor. There's a world of adventure and peril awaiting, and those who embrace it with open arms can become the greatest Hunters of them all!`
                    },
                    {
                        title: 'Detective Conan',
                        year: '(1994)',
                        status: 'Ongoing',
                        image: require('../assets/manga/conan.jpg'),
                        summary_1: `Hailed as the savior of the Japanese Police Department, high school detective Shinichi Kudou uses a combination of observational skills, critical thinking, and all-around knowledge to solve cases that leave the police stumped.`,
                        summary_2: `One day, while at an outing with childhood friend Ran Mouri, Shinichi bears witness to a suspicious transaction between two men and is caught. As a result, he is forced to ingest a poison that is supposed to kill him, but unexpectedly shrinks his body to the size of a grade-schooler instead. Now believed to be dead, Shinichi takes up the alias of Conan Edogawa (a compound of the names of the famous mystery authors Arthur Conan Doyle and Ranpo Edogawa) in order to hide his identity and begins his new life as a seven-year-old living with Ran and her private detective father.`
                    },
                    {
                        title: 'Katekyo Hitman Reborn!',
                        year: '(2004)',
                        status: 'Completed',
                        image: require('../assets/manga/reborn.jpg'),
                        summary_1: `The life of Tsunayoshi "No-Good Tsuna" Sawada is a complete wreck. Terrible grades, horrible fitness, and a non-existent social life means he has no reason to attend school, especially after discovering that his crush, Kyouko Sasagawa, is already seeing someone. Unbeknownst to him however, the blood of Giotto, the great Vongola the First, runs through his veins.`,
                        summary_2: `Enter home tutor Reborn, an infant who claims to be the world's greatest hitman. Under orders from Vongola the Ninth, Reborn has come to train Tsuna to become a worthy successor to the famous Vongola Famiglia name. Tsuna, however, refuses, and claims that he will never become a mafia boss. How will the world's greatest hitman react to such opposition? Will he force Tsuna to adhere? Or will he use this unwillingness to his advantage? This is a story of a reluctant successor as he takes on the responsibilities of becoming the underworld's next ruling mafia leader, with the help of his friends and a one-of-a-kind home tutor.`
                    },
                    {
                        title: 'Tokyo Ghoul',
                        year: '(2011)',
                        status: 'Completed',
                        image: require('../assets/manga/tokyo-ghoul.jpg'),
                        summary_1: `Lurking within the shadows of Tokyo are frightening beings known as "ghouls," who satisfy their hunger by feeding on humans once night falls. An organization known as the Commission of Counter Ghoul (CCG) has been established in response to the constant attacks on citizens and as a means of purging these creatures. However, the problem lies in identifying ghouls as they disguise themselves as humans, living amongst the masses so that hunting prey will be easier. Ken Kaneki, an unsuspecting university freshman, finds himself caught in a world between humans and ghouls when his date turns out to be a ghoul after his flesh.`,
                        summary_2: `Barely surviving this encounter after being taken to a hospital, he discovers that he has turned into a half-ghoul as a result of the surgery he received. Unable to satisfy his intense craving for human meat through conventional means, Kaneki is taken in by friendly ghouls who run a coffee shop in order to help him with his transition. As he begins what he thinks will be a peaceful new life, little does he know that he is about to find himself at the center of a war between his new comrades and the forces of the CCG, and that his new existence has caught the attention of ghouls all over Tokyo.`
                    },
                    {
                        title: 'Air Gear',
                        year: '(2006)',
                        status: 'Completed',
                        image: require('../assets/manga/air-gear.jpg'),
                        summary_1: `Itsuki Minami needs no introduction—everybody's heard of the "Babyface" of the Eastside. He's the toughest kid at Higashi Junior High School, easy on the eyes but dangerously tough when he needs to be. Plus, Itsuki lives with the mysterious and sexy Noyamano sisters. Life is never dull, but it becomes dangerous when Itsuki leads his school to victory over some vindictive Westside punks with gangster connections. Now he stands to lose his school, his friends, and everything he cares about. But in his darkest hour, the Noyamano girls come to Itsuki's aid. They can teach him a powerful skill that will save their school from the gangsters' siege–and introduce Itsuki to a thrilling and terrifying new world.`,
                        summary_2: ``
                    },
                ]
            },
            similarToSoloLeveling() {
                this.items = [
                    {
                        title: 'Mercenary Enrollment',
                        year: '',
                        status: 'Ongoing',
                        image: require('../assets/manga/mercenary-enrollment.jpg'),
                        summary_1: `At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land, forced to become a child mercenary in order to stay alive. He returns home ten years later to be reunited with his family in Korea, where food and shelter are plenty and everything seems peaceful. But Ijin will soon learn that life as a teenager is a whole other feat of survival. With only one year of high school left, Ijin must master new tactics to maneuver his way around the schoolhouse battleground. Can he survive a year of high school? Or rather, will the school be able to survive him?`,
                        summary_2: ``
                    },
                    {
                        title: 'Demonic Emperor',
                        year: '',
                        status: 'Ongoing',
                        image: require('../assets/manga/demonic-emperor.jpg'),
                        summary_1: `Because he had the heritage of the ancient Demonic Emperor, Demonic King Zhuo Yifan met the misfortune of being betrayed and killed by his trusted disciple. After being reborn, his cultivation went back to zero and he was trapped by a demon in his heart, and has no choice but to become the steward of the Luo Family's lone eldest miss. From being a Demonic King to being an insignificant steward of a broken household, how would he get along with his "heart demon eldest miss" and what power would he gain in order to lead himself and the declining family to rise back to the peak of the continent!`,
                        summary_2: ``,
                    },
                    {
                        title: `Omniscient Reader's Point of View`,
                       year: '',
                        status: 'Ongoing',
                        image: require('../assets/manga/omniscient.jpg'),
                        summary_1: `A novel called Three Ways to Survive in a Ruined World (written by the anonymous author tls123) has been written and published over the course of a decade, and Kim Dokja is the sole reader who has followed it to its ending. When the real world is plunged into the premise of Ways of Survival, Kim Dokja's unique knowledge of the novel becomes vital to his survival. Kim Dokja allies with Yoo Joonghyuk, the protagonist of Ways of Survival, in order to change the novel's original plot and more quickly approach the end of the story. As Kim Dokja and his party members progress through the scenarios, they face increasingly difficult threats and life-or-death challenges, struggling to stay alive and work together as they aim to destroy the <Star Stream> that demands their suffering.`,
                        summary_2: ``,
                    },
                    {
                        title: `The Second Coming Of Gluttony`,
                        year: '',
                        status: 'Ongoing',
                        image: require('../assets/manga/second-coming-of-gluttony.jpg'),
                        summary_1: `He was an addict, a loser, a despicable human being. But, one fleeting dream that may not have been a dream at all reawakens his once-lost senses. Possessing a unique ability, he would use that, and the dream, to forge his path in the world now known as the Lost Paradise.`,
                        summary_2: ``,
                    },
                    {
                        title: `The Live`,
                        year: '',
                        status: 'Ongoing',
                        image: require('../assets/manga/the-live.jpg'),
                        summary_1: `After losing his wife and daughter in a horrific accident, Yun-Jae finds himself stuck in his routine until he receives a diary from his future self. “I can see… my wife and daughter again?” Through winning the “games” in the “parallel world,” one will receive a “prize,” and using this, he could revive his dead family… but out of all the survivors of this cruel world, Yun-Jae is the only one with the knowledge of the future. Will he be able to turn his greatest wish into reality?`,
                        summary_2: ``,
                    },
                    {
                        title: 'Second Life Ranker',
                        year: '',
                        status: 'Ongoing',
                        image: require('../assets/manga/second-life-ranker.jpg'),
                        summary_1: `Yeon-woo had a twin brother who disappeared five years ago. One day, a pocket watch left by his brother returned to his possession. Inside, he found a hidden diary in which was recorded “By the time you hear this, I guess I will be already dead….”`,
                        summary_2: `Obelisk, the Tower of the Sun God, a world where several universes and dimensions intersect. In this world, his brother had fallen victim to betrayal while climbing up the tower. After learning the truth, Yeon-woo decided to climb the tower along with his brother’s diary. Yeon-woo then proceeds to go through the same trials and fights as his younger brother did as an anonymous player. His goal? Defeating the Obelisk Tower and get revenge for his brother.`,
                    },
                    {
                        title: 'Berserk Of Gluttony',
                        year: '',
                        status: 'Ongoing',
                        image: require('../assets/manga/berserk-of-gluttony.jpg'),
                        summary_1: `In this world, there are two types of people. Those Who have powerful "skills", and those who don’t. People born with powerful skills, exterminate monsters to level up and become successful, while people without them, become failures,who are treated harshly by society. Follow the story of Fate, a guy who works as a gatekeeper, and whose only skill is gluttony, a skill that only makes him hungry. (Whimsubs)`,
                        summary_2: ``,
                    },
                    {
                        title: 'Max Level Returner',
                        year: '',
                        status: 'Ongoing',
                        image: require('../assets/manga/fairy-tail.jpg'),
                        summary_1: `A total of 120 million people disappeared from all over the world. [You have successfully completed the final quest, and have been given the reward: ‘Return’.] In 22 years, Yoon Sang-Hyuk, was finally able to beat the most atrocious survival game. The man who became the ‘One Man Army’, and the strongest out of all of the other players, he had finally returned back to reality. And not just that, he came back with a reward that nobody had ever received before.`,
                        summary_2: ``,
                    },
                    {
                        title: 'The Max Level Hero Has Returned',
                        year: '',
                        status: 'Ongoing',
                        image: require('../assets/manga/max-level-hero-has-returned.jpg'),
                        summary_1: `The weak prince of an insignificant country, Davey. After becoming comatose, his soul escaped to a temple where the souls of heroes gathered. He trained for a thousand years and has now returned as a max level hero!`,
                        summary_2: ``,
                    },
                    {
                        title: 'Winner Takes All',
                        year: '',
                        status: 'Ongoing',
                        image: require('../assets/manga/winner-takes-all.jpg'),
                        summary_1: `A young wealthy businessman was suddenly kidnapped by a dark organization that he refused to work with. He was used as an experimental subject of developing new chip-based technology that gives the subject extraordinary abilities. Would he be able to escape and take revenge?`,
                        summary_2: ``,
                    }
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
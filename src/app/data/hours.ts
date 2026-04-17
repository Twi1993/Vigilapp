export interface HourConfig {
  name: string;
  timeRange: string;
  startHour: number;
  endHour: number;
  greeting: string;
  contentType: string;
  purpose: string;
  colors: {
    background: string;
    accent: string;
    cross: string;
    text: string;
  };
  content: string[];
}
 
export const HOURS: HourConfig[] = [
  {
    name: "PRIME",
    timeRange: "5:00 AM - 9:00 AM",
    startHour: 5,
    endHour: 9,
    greeting: "Begin with intention.",
    contentType: "Quote / Psalm / Scripture",
    purpose: "Ignition. A reason to rise and be someone today.",
    colors: {
      background: "#F5F0E0",
      accent: "#D4580A",
      cross: "#C8991A",
      text: "#1A1005",
    },
    content: [
      // Day 1 — Strong opener, Stoic
      "Waste no more time arguing what a good man should be. Be one.\n— Marcus Aurelius",
      // Day 2 — Scripture
      "The Lord is my light and my salvation — whom shall I fear?\n— Psalm 27:1",
      // Day 3 — Saint
      "A man who governs his passions is master of the world.\n— St. Dominic",
      // Day 4 — Celebrity
      "I don't do things half-heartedly. Because I know if I do, I can expect half-hearted results.\n— Mark Wahlberg",
      // Day 5 — Stoic
      "No man is free who is not master of himself.\n— Epictetus",
      // Day 6 — Scripture
      "Be strong and courageous. Do not be frightened. Do not be dismayed.\n— Joshua 1:9",
      // Day 7 — Saint
      "Pray as though everything depends on God. Work as though everything depends on you.\n— St. Augustine",
      // Day 8 — Strong opener, Film
      "The world ain't all sunshine and rainbows. It's a very mean and nasty place. But it ain't about how hard you hit — it's about how hard you can get hit and keep moving forward.\n— Rocky Balboa",
      // Day 9 — Scripture
      "Whatever you do, work at it with all your heart, as working for the Lord.\n— Colossians 3:23",
      // Day 10 — Stoic
      "You have power over your mind, not outside events. Realize this and you will find strength.\n— Marcus Aurelius",
      // Day 11 — Saint
      "What we are is God's gift to us. What we become is our gift to God.\n— St. Thomas Aquinas",
      // Day 12 — Scripture
      "Rise up, take courage, and act.\n— Ezra 10:4",
      // Day 13 — Stoic
      "He suffers more than necessary who suffers before it is necessary.\n— Seneca",
      // Day 14 — Saint
      "You have made us for yourself, O Lord, and our heart is restless until it rests in you.\n— St. Augustine",
      // Day 15 — Strong opener, Scripture
      "A thousand may fall at your side, ten thousand at your right hand, but it will not come near you.\n— Psalm 91:7",
      // Day 16 — Celebrity
      "A man who stands for nothing will fall for anything.\n— Malcolm X",
      // Day 17 — Stoic
      "First say to yourself what you would be, then do what you have to do.\n— Epictetus",
      // Day 18 — Scripture
      "The plans of the diligent lead surely to abundance.\n— Proverbs 21:5",
      // Day 19 — Saint
      "Do not be afraid of greatness. It was made for you.\n— St. John Paul II",
      // Day 20 — Stoic
      "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.\n— Seneca",
      // Day 21 — Scripture
      "Commit your work to the Lord and your plans will be established.\n— Proverbs 16:3",
      // Day 22 — Strong opener, Saint
      "Battles are won first in the soul.\n— G.K. Chesterton",
      // Day 23 — Stoic
      "Make the best use of what is in your power and take the rest as it happens.\n— Epictetus",
      // Day 24 — Scripture
      "He who rises early seeking good finds favor.\n— Proverbs 11:27",
      // Day 25 — Saint
      "The greatest honor we can give Almighty God is to live gladly because of the knowledge of His love.\n— Julian of Norwich",
      // Day 26 — Film
      "Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.\n— Rocky Balboa",
      // Day 27 — Scripture
      "The soul of the sluggard craves and gets nothing, while the soul of the diligent is richly supplied.\n— Proverbs 13:4",
      // Day 28 — Saint
      "The secret of happiness is to live moment by moment and to thank God for what He is sending us every day.\n— St. Gianna Molla",
      // Day 29 — Scripture
      "I can do all things through Him who strengthens me.\n— Philippians 4:13",
      // Day 30 — Unexpected closer
      "The morning is when I am awake and there is a dawn in me.\n— Henry David Thoreau",
    ],
  },
  {
    name: "TERCE",
    timeRange: "9:00 AM - 12:00 PM",
    startHour: 9,
    endHour: 12,
    greeting: "Get moving.",
    contentType: "Physical Activator",
    purpose: "Blood pumping. Calibrate your state before the day hits you.",
    colors: {
      background: "#1C1208",
      accent: "#E8650A",
      cross: "#E8650A",
      text: "#F0E8D8",
    },
    content: [
      "ACTIVATION CHALLENGE\n\n20 pushups. Every rep is a choice.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n30 jumping jacks. Wake the body up.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\nHow many burpees can you do in 60 seconds? Stop thinking. Start moving.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n15 squats. Your legs carry you through the day. Train them.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n25 sit-ups. A strong core holds everything together.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n10 slow, controlled pushups. Slow is smooth. Smooth is strong.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\nWall sit for 60 seconds. Comfort is the enemy.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n20 lunges. Left. Right. Forward.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n30 seconds of high knees. Full speed. No half measures.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n15 diamond pushups. Build what others won't.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n40 calf raises. The small disciplines build the big ones.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n20 mountain climbers. Keep moving when it gets hard.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n5 slow pushups, 5 fast pushups, repeat 3 times. Control then power.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n25 jumping jacks then drop and give 10. No rest between.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n60 second plank. Hold the line before the day even starts.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n20 squats as fast as you can. Explosive. Awake.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n15 burpees. Nobody wants to. Everyone who does is ahead of the ones who didn't.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n30 sit-ups. Your ancestors didn't sit at a desk all day. Neither will you.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n10 pushups every minute for 5 minutes. Discipline is a practice not a feeling.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n20 glute bridges. Build the foundation.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n45 second wall sit. Your mind will quit before your legs do. Don't let it.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n25 mountain climbers. Keep your head down and grind.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n30 jumping jacks, 20 squats, 10 pushups. One round. Full effort.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n15 tricep dips on a chair. Build strength wherever you are.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n20 slow squats. Own every inch of the movement.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n60 seconds of shadow boxing. Hands up. Eyes forward.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n30 second sprint in place. All out. Everything you have.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n10 pushups, 10 sit-ups, 10 squats. The holy trinity.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n20 reverse lunges. Balance is built, not given.\n\nThe forge is hot.",
      "ACTIVATION CHALLENGE\n\n20 pushups, 30 second plank, 20 squats. End the month strong. Begin the next one stronger.\n\nThe forge is hot.",
    ],
  },
  {
    name: "SEXT",
    timeRange: "12:00 PM - 3:00 PM",
    startHour: 12,
    endHour: 15,
    greeting: "Reset.",
    contentType: "Breathwork",
    purpose: "Midday recalibration. The day has happened to you. Center yourself.",
    colors: {
      background: "#2A2A2A",
      accent: "#FFFFFF",
      cross: "#FFFFFF",
      text: "#E8E8E8",
    },
    content: [
      "COMBAT BREATHING\n\nInhale 4 counts. Hold 4 counts. Exhale 4 counts. Hold 4 counts.\n\nThis is what operators use under fire. You're using it at your desk. Same tool, different battlefield.",
      "PHYSIOLOGICAL SIGH\n\nDouble inhale through nose (short + long). Long exhale through mouth.\n\nRepeat 3 times. Fastest way to calm your nervous system.",
      "4-7-8 PROTOCOL\n\nInhale 4 counts. Hold 7 counts. Exhale 8 counts.\n\nUsed by special forces for pre-mission calm. Your afternoon just became a mission.",
      "RESONANCE BREATH\n\nInhale 5 counts. Exhale 5 counts. Repeat 5 times.\n\nTrains your heart rate variability. The most disciplined men regulate from the inside out.",
      "EXTENDED EXHALE\n\nInhale for 4 counts. Exhale for 8 counts. Repeat 4 times.\n\nThe exhale activates your brake system. Use it before your stress uses you.",
      "TACTICAL BREATH\n\nInhale 4 counts through nose. Hold 2 counts. Exhale 4 counts through mouth. Repeat.\n\nDerived from law enforcement stress training. Composure is a skill not a trait.",
      "JAW RELEASE\n\nUnclench your jaw. Drop your shoulders. Breathe in slowly through your nose, out through your mouth. Repeat 4 times.\n\nYou've been carrying tension you didn't know about. Put it down.",
      "COMBAT BREATHING (Extended)\n\nInhale 4 counts. Hold 4 counts. Exhale 6 counts. Hold 2 counts.\n\nLonger exhale shifts the balance. Control the breath, control the moment.",
      "COLD RESET\n\nSplash cold water on your face three times. Then breathe slowly — inhale 4, exhale 6.\n\nTriggers the dive reflex. Instant nervous system reset. Simple. Ancient. It works.",
      "GROUNDING BREATH\n\nFeet flat on the floor. Sit up straight. Inhale slowly and imagine breathing into the ground beneath you. Exhale completely. Repeat 5 times.\n\nYou are anchored. Nothing moves you that you don't allow.",
      "PHYSIOLOGICAL SIGH (Double)\n\nTwo sharp inhales through the nose. One long slow exhale through the mouth. Repeat 5 times.\n\nYour lungs have deflated air sacs by midday. This reopens them. You'll feel it immediately.",
      "HUMMING EXHALE\n\nInhale slowly through your nose. Exhale through your nose with a low hum. Repeat 6 times.\n\nActivates the vagus nerve. Used by monks for centuries. Now used by you.",
      "ALTERNATE NOSTRIL\n\nClose right nostril, inhale left. Close left nostril, exhale right. Inhale right. Exhale left. That is one cycle. Do 5 cycles.\n\nBalance the two hemispheres. Ancient technique. Modern application.",
      "PURSED LIP BREATHING\n\nInhale slowly through your nose for 2 counts. Exhale slowly through pursed lips for 4 counts. Repeat 6 times.\n\nRegulates CO2. Slows everything down when the day is moving too fast.",
      "COMBAT BREATHING (Slow)\n\nInhale 6 counts. Hold 2 counts. Exhale 6 counts. Hold 2 counts. Repeat 4 times.\n\nSlower is harder. Slower is better. Slow down on purpose.",
      "RESONANCE BREATH (Extended)\n\nInhale 6 counts. Exhale 6 counts. Repeat 6 times.\n\nSix seconds each direction. The rhythm your heart was designed for.",
      "SHOULDER STACK\n\nRoll shoulders back, stack them over your hips. Chin level. Then breathe — inhale 4, hold 2, exhale 6. Repeat 4 times.\n\nPosture changes your chemistry. Stand like someone who has his life together.",
      "4-7-8 (Double Round)\n\nInhale 4 counts. Hold 7 counts. Exhale 8 counts. Two full rounds without rushing.\n\nThe hold is where the work happens. Don't skip it.",
      "EXTENDED EXHALE (Long)\n\nInhale 3 counts. Exhale 9 counts. Completely empty the lungs. Repeat 4 times.\n\nParasympathetic activation. Your body has a built-in off switch. Use it.",
      "COLD RESET (Full)\n\nCold water on your face and the back of your neck. Then sit still. Inhale 4, exhale 8. Repeat 3 times.\n\nThe dive reflex drops your heart rate in seconds. Warriors have used cold as a tool since before recorded history.",
      "TACTICAL BREATH (Rapid)\n\nInhale sharp through nose 2 counts. Hold 1 count. Exhale through mouth 2 counts. Repeat 8 times.\n\nFor when the day has been moving fast and you need to match it then slow it down.",
      "HUMMING EXHALE (Extended)\n\nInhale deeply. Exhale through your nose with the longest hum you can sustain. Repeat 5 times.\n\nThe longer the hum the more vagus nerve activation. This is your reset button.",
      "GROUNDING BREATH (Eyes Closed)\n\nClose your eyes. Feet flat. Inhale slowly counting to 5. Hold for 2. Exhale counting to 7. Repeat 4 times.\n\nRemove the visual input. Just breathe. Just be here.",
      "BOX BREATHING (Double)\n\nTwo full rounds of box breathing back to back without breaking. 4-4-4-4 each round.\n\nDouble the work. Double the reset. You have 3 minutes. Use them.",
      "PURSED LIP (Slow)\n\nInhale through nose 3 counts. Exhale through pursed lips counting to 6. Repeat 8 times.\n\nSlows breathing rate below stress threshold. The afternoon doesn't own you.",
      "JAW, NECK, SHOULDERS\n\nUnclench jaw. Roll neck slowly left and right. Drop shoulders. Then breathe — inhale 5, exhale 7. Repeat 3 times.\n\nYou carry the day in your body before you carry it in your mind. Release it.",
      "RESONANCE BREATH (Deep)\n\nInhale deeply for 5 counts expanding your belly first then your chest. Exhale 5 counts chest first then belly. Repeat 6 times.\n\nFull lung engagement. Most people breathe at 30% capacity all day. Not you. Not now.",
      "4-7-8 (Pre-Push)\n\nOne round of 4-7-8. Then stand up, shake your hands out, and get back to work.\n\nOne round is enough. You're not meditating. You're reloading.",
      "ALTERNATE NOSTRIL (Full)\n\n8 full cycles of alternate nostril breathing. No rushing. Count every breath.\n\nAncient yogis and modern neuroscientists agree on this one. That doesn't happen often.",
      "COMBAT BREATHING (Month Close)\n\n4-4-4-4. Four full rounds. Every count deliberate.\n\nYou've reset every day this month. That's not a habit anymore. That's who you are.",
    ],
  },
  {
    name: "NONE",
    timeRange: "3:00 PM - 6:00 PM",
    startHour: 15,
    endHour: 18,
    greeting: "Hold the line.",
    contentType: "Mind Challenge",
    purpose: "Final stretch. Stop watching the clock. Use the time instead.",
    colors: {
      background: "#1A0505",
      accent: "#CC2200",
      cross: "#CC2200",
      text: "#E8D8D8",
    },
    content: [
      "MIND CHALLENGE — RIDDLE\n\nI have cities but no houses. I have mountains but no trees. I have water but no fish. What am I?\n\nAnswer: A map.\n\nYour mind sees patterns others miss. Train it.",
      "MIND CHALLENGE — PATTERN\n\nWhat comes next: 2, 4, 8, 16, 32, ___?\n\nAnswer: 64. Each number doubles.\n\nSimple patterns hide in complex days. Look for them.",
      "MIND CHALLENGE — LATERAL THINKING\n\nA woman shoots her husband, then holds him underwater for five minutes. Twenty years later they go out to dinner. How?\n\nAnswer: She's a photographer. She shot his photo and developed it in a darkroom.\n\nAssumptions are the enemy of clear thinking.",
      "MIND CHALLENGE — MEMORY\n\nRead this once: Tiger. Lantern. Bridge. Coin. Sword. Close your eyes and recall all five in order.\n\nAnswer: Tiger. Lantern. Bridge. Coin. Sword.\n\nMemory is a muscle. You just used it.",
      "MIND CHALLENGE — RIDDLE\n\nThe more you take the more you leave behind. What am I?\n\nAnswer: Footsteps.\n\nEvery step forward leaves proof you moved.",
      "MIND CHALLENGE — QUICK MATH\n\nIf you have 17 apples and give away a third, then eat 2, how many remain?\n\nAnswer: 17 ÷ 3 ≈ 5. 17 - 5 = 12. 12 - 2 = 10.\n\nMental math keeps the mind from going soft.",
      "MIND CHALLENGE — LATERAL THINKING\n\nA man walks into a restaurant and orders albatross soup. He takes one sip, goes home, and kills himself. Why?\n\nAnswer: He was shipwrecked. A survivor fed him soup claiming it was albatross — it wasn't. He just realized what he had eaten.\n\nNot everything is what it appears. Stay sharp.",
      "MIND CHALLENGE — PATTERN\n\nWhat comes next: 1, 1, 2, 3, 5, 8, ___?\n\nAnswer: 13. Fibonacci — each number is the sum of the two before it.\n\nNature runs on this pattern. So does discipline. Small things compound.",
      "MIND CHALLENGE — RIDDLE\n\nI speak without a mouth and hear without ears. I have no body but come alive with wind. What am I?\n\nAnswer: An echo.\n\nWhat you put out comes back to you.",
      "MIND CHALLENGE — WORD CHALLENGE\n\nHow many words of 3 letters or more can you make from the word STRENGTH in 60 seconds?\n\nAnswer: Tern, rent, stern, sent, tens, nest, nets, rest, ten, net, set, get.\n\nYour vocabulary is your weapon. Sharpen it.",
      "MIND CHALLENGE — RIDDLE\n\nThe person who makes it sells it. The person who buys it never uses it. The person who uses it doesn't know they're using it. What is it?\n\nAnswer: A coffin.\n\nMemento mori. You are alive right now. Use the time.",
      "MIND CHALLENGE — QUICK MATH\n\nA knight travels 60 miles in 3 hours on horseback. How long to travel 90 miles at the same pace?\n\nAnswer: 4.5 hours.\n\nSteady pace. Steady progress. That's the whole formula.",
      "MIND CHALLENGE — LATERAL THINKING\n\nA man is found dead in a locked room. There is a puddle of water and a piece of rope on the floor. How did he die?\n\nAnswer: He stood on a block of ice with a noose around his neck. The ice melted.\n\nThe evidence is always there. You just have to look past the obvious.",
      "MIND CHALLENGE — MEMORY\n\nRead once: Oak. River. Flame. Stone. Wolf. Crown. Close your eyes. Recall all six in order.\n\nAnswer: Oak. River. Flame. Stone. Wolf. Crown.\n\nSix things held in mind. A knight carries more than a sword.",
      "MIND CHALLENGE — PATTERN\n\nWhat letter comes next: A, C, E, G, ___?\n\nAnswer: I. Every other letter of the alphabet.\n\nSkip the noise. Follow the pattern.",
      "MIND CHALLENGE — RIDDLE\n\nI have hands but cannot clap. What am I?\n\nAnswer: A clock.\n\nTime doesn't stop moving. Neither should you.",
      "MIND CHALLENGE — LATERAL THINKING\n\nTwo men are playing chess. They play five games. Each man wins three. How?\n\nAnswer: They aren't playing each other.\n\nQuestion your assumptions before you question the problem.",
      "MIND CHALLENGE — QUICK MATH\n\nYou earn $15 an hour. You work 8 hours a day, 5 days a week. How much do you earn in a month of 4 weeks?\n\nAnswer: $15 x 8 = $120/day. $120 x 5 = $600/week. $600 x 4 = $2,400.\n\nKnow your numbers. Always know your numbers.",
      "MIND CHALLENGE — RIDDLE\n\nThe more you have of it the less you see. What is it?\n\nAnswer: Darkness.\n\nA man who keeps the vigil knows what lives in the dark.",
      "MIND CHALLENGE — WORD CHALLENGE\n\nRearrange these letters to make a single word: S, I, L, E, N, T\n\nAnswer: LISTEN.\n\nThe best minds know when to stop talking.",
      "MIND CHALLENGE — PATTERN\n\nWhat comes next: Monday, Wednesday, Friday, ___?\n\nAnswer: Sunday. Every other day of the week.\n\nPatterns repeat. So do habits. Choose the right ones.",
      "MIND CHALLENGE — LATERAL THINKING\n\nA rooster lays an egg on the peak of a roof. Which way does it roll?\n\nAnswer: Roosters don't lay eggs.\n\nRead everything carefully. The trick is usually in the setup.",
      "MIND CHALLENGE — RIDDLE\n\nI am always hungry and must always be fed. The finger I touch will soon turn red. What am I?\n\nAnswer: Fire.\n\nDiscipline is the same. Feed it daily or it dies.",
      "MIND CHALLENGE — MEMORY\n\nRead once: Shield. Dagger. Psalm. Forge. Cross. Raven. Dawn. Close your eyes. Recall all seven.\n\nAnswer: Shield. Dagger. Psalm. Forge. Cross. Raven. Dawn.\n\nSeven. The number of canonical hours. The number of days. Hold the pattern.",
      "MIND CHALLENGE — QUICK MATH\n\nYou're 25 years old. If you live to 80 that's 55 years left. How many Mondays is that?\n\nAnswer: 55 x 52 = 2,860 Mondays.\n\n2,860 chances to start the week right. What are you doing with this one?",
      "MIND CHALLENGE — LATERAL THINKING\n\nA man builds a house with four walls. Every wall faces south. A bear walks by. What color is the bear?\n\nAnswer: White. The only place every wall faces south is the North Pole. Polar bears are white.\n\nThink bigger than the room you're in.",
      "MIND CHALLENGE — RIDDLE\n\nWhat can you hold in your right hand but never in your left?\n\nAnswer: Your left hand.\n\nThe obvious answer is often the right one.",
      "MIND CHALLENGE — WORD CHALLENGE\n\nWithout using a dictionary — what does the word FORTITUDE mean?\n\nAnswer: Courage and strength in the face of adversity or pain.\n\nYou already knew that. Now go use it for the next two hours.",
      "MIND CHALLENGE — PATTERN\n\nWhat comes next: 3, 6, 9, 12, ___?\n\nAnswer: 15. Multiples of 3.\n\nConsistency compounds. Three more. Then three more again.",
      "MIND CHALLENGE — RIDDLE\n\nI am the beginning of everything, the end of everywhere. I'm the beginning of eternity, the end of time and space. What am I?\n\nAnswer: The letter E.\n\nYou made it through the month. The mind you finish with is sharper than the one you started with.",
    ],
  },
  {
    name: "VESPERS",
    timeRange: "6:00 PM - 9:00 PM",
    startHour: 18,
    endHour: 21,
    greeting: "The day is done.",
    contentType: "Examination Question",
    purpose: "Reflection. One honest question looking back at the day.",
    colors: {
      background: "#1A0F2E",
      accent: "#C8820A",
      cross: "#C8820A",
      text: "#E8D8B8",
    },
    content: [
      "When did you act out of fear instead of conviction?",
      "What did you avoid that you knew you should have done?",
      "Who did you show up for today — and who did you let down?",
      "Were you the same man in private today as you were in public?",
      "What did you say yes to that you should have said no to?",
      "Did you waste time today that you cannot get back?",
      "When were you weak today — and did you notice it in the moment?",
      "What conversation did you have today that actually mattered?",
      "Did you do the hard thing first or did you put it off?",
      "What are you carrying tonight that you need to put down?",
      "Who in your life deserved more of you today?",
      "What did you complain about today that you could have simply fixed?",
      "Were you honest today — with others and with yourself?",
      "What did you start today that you did not finish?",
      "Did you eat, move, and rest like someone who respects his body?",
      "What temptation did you give in to today that you knew better than?",
      "Did you learn anything today or did you just get through it?",
      "What would the best version of you have done differently today?",
      "Who did you judge today without knowing their full story?",
      "Did your actions today reflect the man you are trying to become?",
      "What did you do today that you would be proud to tell your father?",
      "When did you choose comfort over growth today?",
      "Did you keep your word today — to others and to yourself?",
      "What did you do today that served someone other than yourself?",
      "Where did your attention go today — and was it worth it?",
      "Did you pray today, or did you only reach for God when you needed something?",
      "What did you do today purely out of discipline with no external reward?",
      "Did you spend time today on things that will matter in a year — or just things that felt urgent right now?",
      "What are you grateful for today that you did not acknowledge in the moment?",
      "If today was the last day anyone could observe your life — what did it say about who you are?",
    ],
  },
  {
    name: "COMPLINE",
    timeRange: "9:00 PM - 12:00 AM",
    startHour: 21,
    endHour: 24,
    greeting: "Settle.",
    contentType: "Carry Into Sleep",
    purpose: "Wind down. One intention to carry into tomorrow.",
    colors: {
      background: "#0D0D0D",
      accent: "#8B6914",
      cross: "#8B6914",
      text: "#C8B888",
    },
    content: [
      "Tomorrow I will act as if my actions create the world I want to live in.",
      "Tomorrow I will serve someone who cannot repay me.",
      "Tomorrow I will do the thing I have been putting off.",
      "Tomorrow I will wake before I have to.",
      "Tomorrow I will be the same man in private that I am in public.",
      "Tomorrow I will choose the harder thing at least once before noon.",
      "Tomorrow I will speak less and listen more.",
      "Tomorrow I will treat my body like it belongs to someone worth respecting.",
      "Tomorrow I will give my full attention to whoever is in front of me.",
      "Tomorrow I will not complain about anything I have the power to change.",
      "Tomorrow I will start before I feel ready.",
      "Tomorrow I will keep every promise I make — so I will only make ones I can keep.",
      "Tomorrow I will do something that requires courage.",
      "Tomorrow I will be someone worth watching.",
      "Tomorrow I will earn my rest.",
      "Tomorrow I will not trade long term character for short term comfort.",
      "Tomorrow I will take responsibility for something instead of explaining it away.",
      "Tomorrow I will do one thing purely for someone else with no expectation of return.",
      "Tomorrow I will work hardest in the hour no one is watching.",
      "Tomorrow I will live like the man I am praying to become.",
      "Tomorrow I will let my actions speak before my words do.",
      "Tomorrow I will not give my attention to anything that does not deserve it.",
      "Tomorrow I will face the thing I have been afraid of.",
      "Tomorrow I will be grateful out loud, not just in my head.",
      "Tomorrow I will build something — even if it is small — that did not exist today.",
      "Tomorrow I will give God the first moment of the day before the world takes the rest.",
      "Tomorrow I will not quit when it gets uncomfortable.",
      "Tomorrow I will be better than I was today — not for anyone else but because I said I would.",
      "Tomorrow I will carry myself like a man who knows where he is going.",
      "Tomorrow I begin again. Thirty days in and I am just getting started.",
    ],
  },
  {
    name: "VIGIL",
    timeRange: "12:00 AM - 5:00 AM",
    startHour: 0,
    endHour: 5,
    greeting: "Put the phone down.",
    contentType: "Black Screen + Candle",
    purpose: "The darkness. No engagement bait. Just a candle and silence.",
    colors: {
      background: "#000000",
      accent: "#FF8C00",
      cross: "#FF8C00",
      text: "#FF8C00",
    },
    content: [""],
  },
];
 
export function getCurrentHour(): HourConfig {
  const now = new Date();
  const hour = now.getHours();
 
  for (const hourConfig of HOURS) {
    if (hourConfig.startHour <= hourConfig.endHour) {
      if (hour >= hourConfig.startHour && hour < hourConfig.endHour) {
        return hourConfig;
      }
    } else {
      if (hour >= hourConfig.startHour || hour < hourConfig.endHour) {
        return hourConfig;
      }
    }
  }
 
  return HOURS[0];
}
 
export function getDailyContent(hourConfig: HourConfig): string {
  if (hourConfig.content.length === 0) return "";
 
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = dayOfYear % hourConfig.content.length;
 
  return hourConfig.content[index];
}
 
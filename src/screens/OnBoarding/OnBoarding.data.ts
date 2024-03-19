import Impostor from "assets/images/ImpostorIcon.svg";
import Phone from "assets/images/PhoneIcon.svg";
import Talk from "assets/images/TalkIcon.svg";
import Listen from "assets/images/ListenIcon.svg";
import PointAt from "assets/images/PointAtIcon.svg";
import Doubt from "assets/images/DoubtIcon.svg";
import Winner from "assets/images/WinnerIcon.svg";
import Timer from "assets/images/TimerIcon.svg";

export const data = [
  {
    id: 1,
    Icon: Impostor,
    title: "Let's play Imposter!",
    text: "Swipe left to find out what to do.",
  },

  {
    id: 2,
    Icon: Phone,
    text: "There are locals and the Imposter. Pass the phone around to get your roles. All the locals will see the word while the Imposter will not.",
  },

  {
    id: 3,
    Icon: Talk,
    text: "Ask each other questions connected with the word. For example: 'When have you last been to this place?'After you have answered a question it's your turn to ask one.",
  },

  {
    id: 4,
    Icon: Listen,
    text: "Listen to the other players' answers: the Imposter doesn't know the word, so their answers might be inaccurate.",
  },

  {
    id: 5,
    Icon: PointAt,
    text: "If you have a guess about who the Imposter is, say: 'I know which one of you is the Imposter.' On the count of three, everyone should point at someone who, in their opinion, is likely to be the Imposter.",
  },

  {
    id: 6,
    Icon: Doubt,
    text: "Have you all chosen the same person? They have to reveal their role. If they are the Imposter, the locals win. If they are a local, the Imposter wins. Have you pointed at different people? Continue the game.",
  },

  {
    id: 7,
    Icon: Winner,
    text: "If the Imposter has an idea what the word is, they can name it. If they are right, the Imposter wins. If they name a incorrect word, the locals win.",
  },

  {
    id: 8,
    Icon: Timer,
    text: "Don't forget about time. The clock is ticking, hurry up! In the new game, the first person to ask the question is the Imposter from the previous game.",
  },
];

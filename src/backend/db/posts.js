import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Kisika bhai, kisiki jaan, par humko kya, humko bas banna hai kisi 1 bhai ka bhaijaan >_<",
    likes: {
      likeCount: 2,
      likedBy: [{
        _id: "3",
    name: "Roronoa Zoro",
    username: "zoro",
      },
      {
        _id: "8",
        name: "Anya Forger",
        username: "dectiveanya",
      },
    ],
      dislikedBy: [],
    },
    username: "wadadparker",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Learning React",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "wadadparker",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I think mikasa kept her password as her username by mistake",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "zoro",
    createdAt: "2023-06-03T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I want to fight Zenitsu. Tell me, can I slice thunder?",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "zoro",
    createdAt: "2023-06-03T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "TANJIROOOOO, WHERE ARE YOUUUU?!!! A MAD SAMUARAI WANTS TO SLICE MEEE!!!! HELPPPPPP",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "zenitsu",
    createdAt: "2023-06-04T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Has anyone seen Sasuke?",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "naruto",
    createdAt: "2023-06-12T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I have to find One Piece and Sasuke",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "dectiveanya",
    createdAt: "2023-06-13T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "My Magic is in Never Giving Up!!",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "asta",
    createdAt: "2023-06-11T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      `There’s more than one way to reach the goal. Yes, to each his own. My motivation was very different than Kakarott's. My motivation was to be the best, to be the greatest Saiyan alive as I always have been, until Kakarott came into the picture. 
      Kakarott's success was like a demon in my head. How could he be a super Saiyan when I the prince of all Saiyans could not? The intensity of my training was maddening. At four hundred and fifty times Earth’s normal gravity a basic training game became a desperate struggle for survival. Even the simplest moves required every ounce of willpower I had. I wasn’t sure how long I could sustain the effort without breaking in two.
       It seemed like the only thing holding my body together was my one desire to be better than Kakarott. 
       
       At times I thought I was losing my mind. Why couldn’t I obtain what Kakarott had obtained? It didn’t make sense. It was infuriating and it was my fury that kept me alive. I decided to continue my training in the solitude of space where I would be unhindered by the distractions of the Earth and when a violent electrical storm erupted in the skies of the planet I was on, I welcomed it. It seemed fitting like it was an outward manifestation of the storm that was raging inside of me. Then the meteors started coming down but I was determined to survive and to protect my ship from destruction. It was my only way out, my only way off that nightmarish heap of rubble. I thought I had everything under control but then the mother of all meteors seemed to appear out of nowhere to claim my ship and my life.
       
       Normally it would have been child’s play to blow up that rock but after training at four hundred and fifty times normal gravity for so long it took everything I had and more. 
       
       Then something just snapped, something inside of me.
      “No! No more! That’s it! I don’t care!” 
      I didn’t care anymore. I didn’t care about being better than Kakarott. I didn’t care about being a super Saiyan. I didn’t care if I lived! I didn’t care about anything and then IT happened.
      
      Yes, that’s how it happened. That’s how I became a super Saiyan. The sleeper has awakened. I am the prince of all Saiyans once again!`,
    likes: {
      likeCount: 7,
      likedBy: [
        {
          _id: "12",
        name: "Kiyotaka Ayanokouji",
        username: "ayanokouji",
        },
        {
          _id: "3",
          name: "Roronoa Zoro",
          username: "zoro",
        },
        {
          _id: "4",
        name: "Zura Janai",
        username: "katsura",
        },
        {
          _id: "6",
        name: "Naruto Uzumaki",
        username: "naruto",
        },
        {
          _id: "13",
        name: "Asta",
        username: "asta",
        },
        {
          _id: "14",
        name: "Shanks",
        username: "shanks",
        },
        {
          _id: "9",
          name: "Eren Yeager",
          username: "eren",
        },


      ],
      dislikedBy: [],
    },
    username: "priceofsaiyans",
    createdAt: "2023-06-14T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Beyond the sea lies the Horizon, and beyond this Horizon, lies our freedom.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "eren",
    createdAt: "2023-06-14T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Can someone help me change my username? Before Eren sees it?",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "iloveereh",
    createdAt: "2023-06-15T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Are human beings truly equal? Nowadays, people never shut up about the need for equality. A great man once said: 'Heaven does not create one person above or below another.' But the quote doesn't end there. It actually says we're at birth, but then gaps appear that the differences are the result of one's academic effort, or lack thereof. At any rate, humans are capable of thinking for themselves. 'Equality' maybe a false concept, but our inequality remains a difficult thing to accept.",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ayanokouji",
    createdAt: "2023-06-16T01:06:00+05:30",
    updatedAt: formatDate(),
  },
];

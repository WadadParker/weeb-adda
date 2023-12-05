import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "1",
    name: "Wadad Parker",
    username: "wadadparker",
    password: "wadadparker",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://i.pinimg.com/originals/98/c0/83/98c08367933f07c451a18c4507f011a5.jpg",
    bio:`Frontend Developer, constantly learning n growing everyday. Hope you liked this project ^_^ `,
    website:"www.twitter.com/wadadparker",
    bookmarks: [],
    followers:[{
      _id: "4",
      name: "Zura Janai",
      username: "katsura",
      password: "da",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      avatar:"https://pbs.twimg.com/profile_images/1591541479138332678/gmzFDwyz_400x400.jpg",
      bio:`Restoring Samurai's glory back || wanted by shinsengumi `,
      website:"www.google.com",
      bookmarks: [],
      followers:[],
      following:[]
    },
    {
      _id: "13",
      name: "Asta",
      username: "asta",
      password: "ilovesisterlilly",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      avatar:"https://pfps.gg/assets/pfps/1513-black-clover-asta.png",
      bio:` Clover Kingdom Magic Knight || Member of Black Bulls || I will become Wizard king! || Future husband of Sister Lilly (inshallah) `,
      website:"www.google.com",
      bookmarks: [],
      followers:[],
      following:[]
    },
  ],
    following:[
      {
        _id: "11",
        name: "Vegeta",
        username: "priceofsaiyans",
        password: "kakarot",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar:"https://i.pinimg.com/originals/6d/94/00/6d9400257a3514341ed6df9de77d976e.png",
        bio:` Prince of all saiyans || Father of Bulla`,
        website:"www.google.com",
        bookmarks: [],
        followers:[],
        following:[]
      },
      {
        _id: "12",
        name: "Kiyotaka Ayanokouji",
        username: "ayanokouji",
        password: "rr5@opw6%e",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar:"https://i.pinimg.com/originals/4d/b0/71/4db0719744d73a1ad88e0f9fc1db649b.jpg",
        bio:` Student at Koudo Ikusei Senior High School || First Year - Class D `,
        website:"www.google.com",
        bookmarks: [],
        followers:[],
        following:[]
      },
    ]
  },
  {
    _id: "2",
    name: "Zenitsu Agatsuma",
    username: "zenitsu",
    password: "ilovenezuko",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://pbs.twimg.com/media/EwsHa6DXEAUXtOu.png",
    bio:`Demon slayer || thunder breathing || I hate spiders || nezuko's future husband (inshallah) `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "3",
    name: "Roronoa Zoro",
    username: "zoro",
    password: "zoro",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://wallpapers-clan.com/wp-content/uploads/2022/08/zoro-pfp-1.jpg",
    bio:`I will be the world's strongest swordsman! Dattebayo! `,
    website:"www.google.com",
    bookmarks: [],
    followers:[
      {
        _id: "4",
        name: "Zura Janai",
        username: "katsura",
        password: "da",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar:"https://pbs.twimg.com/profile_images/1591541479138332678/gmzFDwyz_400x400.jpg",
        bio:`Restoring Samurai's glory back || wanted by shinsengumi `,
        website:"www.google.com",
        bookmarks: [],
        followers:[],
        following:[]
      },
      {
        _id: "6",
        name: "Naruto Uzumaki",
        username: "naruto",
        password: "sasukecomeback",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar:"https://pfps.gg/assets/pfps/1613-naruto.png",
        bio:`Leaf Village Shinobi || Loves Ramen || I will be a Hokage, Dattebayo! `,
        website:"www.google.com",
        bookmarks: [],
        followers:[],
        following:[]
      },
      {
        _id: "8",
        name: "Anya Forger",
        username: "dectiveanya",
        password: "anya",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar:"https://wallpapers.com/images/hd/anime-meme-pfp-spy-x-family-anya-forger-hdoysk4qije5kscv.jpg",
        bio:` On a mission to save the world, one peanut at a time `,
        website:"www.google.com",
        bookmarks: [],
        followers:[],
        following:[]
      },
      {
        _id: "13",
        name: "Asta",
        username: "asta",
        password: "ilovesisterlilly",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar:"https://pfps.gg/assets/pfps/1513-black-clover-asta.png",
        bio:` Clover Kingdom Magic Knight || Member of Black Bulls || I will become Wizard king! || Future husband of Sister Lilly (inshallah) `,
        website:"www.google.com",
        bookmarks: [],
        followers:[],
        following:[]
      },
    ],
    following:[
      {
        _id: "6",
        name: "Naruto Uzumaki",
        username: "naruto",
        password: "sasukecomeback",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar:"https://pfps.gg/assets/pfps/1613-naruto.png",
        bio:`Leaf Village Shinobi || Loves Ramen || I will be a Hokage, Dattebayo! `,
        website:"www.google.com",
        bookmarks: [],
        followers:[],
        following:[]
      },
      {
        _id: "14",
        name: "Shanks",
        username: "shanks",
        password: "shanks",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar:"https://pbs.twimg.com/media/Fg_w3jXXoAMkAMf?format=jpg&name=4096x4096",
        bio:` 5th Emperor of the Sea `,
        website:"www.google.com",
        bookmarks: [],
        followers:[],
        following:[]
      },
      {
        _id: "13",
        name: "Asta",
        username: "asta",
        password: "ilovesisterlilly",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar:"https://pfps.gg/assets/pfps/1513-black-clover-asta.png",
        bio:` Clover Kingdom Magic Knight || Member of Black Bulls || I will become Wizard king! || Future husband of Sister Lilly (inshallah) `,
        website:"www.google.com",
        bookmarks: [],
        followers:[],
        following:[]
      },
      {
        _id: "2",
        name: "Zenitsu Agatsuma",
        username: "zenitsu",
        password: "ilovenezuko",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar:"https://pbs.twimg.com/media/EwsHa6DXEAUXtOu.png",
        bio:`Demon slayer || thunder breathing || I hates spiders || nezuko's future husband (inshallah) `,
        website:"www.google.com",
        bookmarks: [],
        followers:[],
        following:[]
      },
      {
        _id: "11",
        name: "Vegeta",
        username: "priceofsaiyans",
        password: "kakarot",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        avatar:"https://i.pinimg.com/originals/6d/94/00/6d9400257a3514341ed6df9de77d976e.png",
        bio:` Prince of all saiyans || Father of Bulla`,
        website:"www.google.com",
        bookmarks: [],
        followers:[],
        following:[]
      },
    ]
  },
  {
    _id: "4",
    name: "Zura Janai",
    username: "katsura",
    password: "da",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://pbs.twimg.com/profile_images/1591541479138332678/gmzFDwyz_400x400.jpg",
    bio:`Restoring Samurai's glory back || wanted by shinsengumi `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "5",
    name: "L",
    username: "L",
    password: "we@u80QT%4lm_",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://64.media.tumblr.com/909313b2feaa81678a1f5e1c9fc18dd6/6c12052e25ed9bf3-04/s540x810/633acc11325c6ec2c77464fb8af1eaed87447734.jpg",
    bio:`A dective who loves sweets `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "6",
    name: "Naruto Uzumaki",
    username: "naruto",
    password: "sasukecomeback",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://pfps.gg/assets/pfps/1613-naruto.png",
    bio:`Leaf Village Shinobi || Loves Ramen || I will be a Hokage, Dattebayo! `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "7",
    name: "Hinata Hyuga",
    username: "hinata",
    password: "ilovenarutokun",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://pbs.twimg.com/media/EJDFa5-XkAANy-s.jpg",
    bio:`Leaf Village Shinobi || I also like ramen... || I hope he completes his dream >_< `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "8",
    name: "Anya Forger",
    username: "dectiveanya",
    password: "anya",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://wallpapers.com/images/hd/anime-meme-pfp-spy-x-family-anya-forger-hdoysk4qije5kscv.jpg",
    bio:` On a mission to save the world, one peanut at a time `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "9",
    name: "Eren Yeager",
    username: "eren",
    password: "freedom",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://pbs.twimg.com/profile_images/1469721967624273923/Jwbzzd6E_400x400.jpg",
    bio:` On a mission to save Eldia, one head at a time `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "10",
    name: "Sakurajima Mai",
    username: "mai",
    password: "bakasakuta",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://pbs.twimg.com/media/E-x9cQyWQAIRbnS?format=jpg&name=large",
    bio:` Bunny Girl || Committed to Sakuta `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "11",
    name: "Vegeta",
    username: "priceofsaiyans",
    password: "kakarot",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://i.pinimg.com/originals/6d/94/00/6d9400257a3514341ed6df9de77d976e.png",
    bio:` Prince of all saiyans || Father of Bulla`,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "12",
    name: "Kiyotaka Ayanokouji",
    username: "ayanokouji",
    password: "rr5@opw6%e",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://i.pinimg.com/originals/4d/b0/71/4db0719744d73a1ad88e0f9fc1db649b.jpg",
    bio:` Student at Koudo Ikusei Senior High School || First Year - Class D `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "13",
    name: "Asta",
    username: "asta",
    password: "ilovesisterlilly",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://pfps.gg/assets/pfps/1513-black-clover-asta.png",
    bio:` Clover Kingdom Magic Knight || Member of Black Bulls || I will become Wizard king! || Future husband of Sister Lilly (inshallah) `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "14",
    name: "Shanks",
    username: "shanks",
    password: "shanks",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://pbs.twimg.com/media/Fg_w3jXXoAMkAMf?format=jpg&name=4096x4096",
    bio:` 5th Emperor of the Sea `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "15",
    name: "Mikasa Ackerman",
    username: "iloveereh",
    password: "mikasa",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://pbs.twimg.com/media/EvJdhdbVgAE6MMi.jpg",
    bio:` Survey Corps member || Future wife of Eren (inshallah) `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },
  {
    _id: "16",
    name: "Gold Roger",
    username: "pirateking",
    password: "onepieceisreal",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:"https://i.pinimg.com/236x/e3/1a/e1/e31ae12d1518623de4aaf1c0e19f2661.jpg",
    bio:` My teasure? If you want it, you can have it. I have left everything at that place! Seek it, the One Piece!
           Hahahahahahahaha `,
    website:"www.google.com",
    bookmarks: [],
    followers:[],
    following:[]
  },

];
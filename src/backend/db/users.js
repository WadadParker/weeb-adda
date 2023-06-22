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
    bio:`Ek "haath chhodiye samose jal jaenge" wala moment toh may bhi deserve karta hun >_< `,
    website:"www.google.com",
    bookmarks: []
  },
];
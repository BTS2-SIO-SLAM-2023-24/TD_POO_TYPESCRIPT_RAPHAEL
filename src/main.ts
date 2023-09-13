import { Chat } from "./Chat";
import { Chien } from "./Chien";
import { Employe } from "./Employe";

const chien1 = new Chien(1, "Buddy", 3, new Date("2023-09-01"), new Date("2023-09-15"));
const chat1 = new Chat(2, "Whiskers", 2, new Date("2023-08-20"), new Date("2023-09-05"));

const employe1 = new Employe(1, "John", chat1);
const employe2 = new Employe(2, "Alice", chien1);
const employe3 = new Employe(3, "Bob", chien1);

employe1.travaillerAvec(); 
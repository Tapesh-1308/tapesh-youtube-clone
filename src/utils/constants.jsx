import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
	{ name: "Home", icon: <AiFillHome />, type: "category" },
	{ name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
	{ name: "Music", icon: <CgMusicNote />, type: "category" },
	{ name: "Films", icon: <FiFilm />, type: "category" },
	{ name: "Live", icon: <MdLiveTv />, type: "category" },
	{ name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
	{ name: "News", icon: <ImNewspaper />, type: "category" },
	{ name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
	{ name: "Learning", icon: <RiLightbulbLine />, type: "category" },
	{
		name: "Fashion & beauty",
		icon: <GiEclipse />,
		type: "category",
		divider: true,
	},
	{ name: "Settings", icon: <FiSettings />, type: "menu" },
	{ name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
	{ name: "Help", icon: <FiHelpCircle />, type: "menu" },
	{ name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];

export const comments = [
	{
		name: "Alice",
		text: "This is an amazing post about AI!",
		replies: [
			{
				name: "Bob",
				text: "I completely agree with you, Alice!",
				replies: [
					{
						name: "Carol",
						text: "Can you share more resources on this topic?",
						replies: [
							{
								name: "Dave",
								text: "Check out the OpenAI website for more details.",
								replies: [],
							},
							{
								name: "Eve",
								text: "There are some great papers on arXiv too.",
								replies: [],
							},
						],
					},
					{
						name: "Dan",
						text: "I think there's also a good course on Coursera about it.",
						replies: [],
					},
				],
			},
			{
				name: "Faith",
				text: "This is really insightful!",
				replies: [
					{
						name: "Grace",
						text: "I've been following this topic closely and would love to discuss more.",
						replies: [
							{
								name: "Heidi",
								text: "What are your thoughts on the future applications in medicine?",
								replies: [],
							},
						],
					},
				],
			},
		],
	},
	{
		name: "Alice",
		text: "This is an amazing post about AI!",
		replies: [
			{
				name: "Bob",
				text: "I completely agree with you, Alice!",
				replies: [
					{
						name: "Carol",
						text: "Can you share more resources on this topic?",
						replies: [
							{
								name: "Dave",
								text: "Check out the OpenAI website for more details.",
								replies: [],
							},
							{
								name: "Eve",
								text: "There are some great papers on arXiv too.",
								replies: [],
							},
						],
					},
					{
						name: "Dan",
						text: "I think there's also a good course on Coursera about it.",
						replies: [],
					},
				],
			},
			{
				name: "Faith",
				text: "This is really insightful!",
				replies: [
					{
						name: "Grace",
						text: "I've been following this topic closely and would love to discuss more.",
						replies: [
							{
								name: "Heidi",
								text: "What are your thoughts on the future applications in medicine?",
								replies: [],
							},
						],
					},
				],
			},
		],
	},
];

export const timeAgo = (dateString) => {
	const currentDate = new Date();
	const givenDate = new Date(dateString);

	const timeDifferenceInSeconds = (currentDate - givenDate) / 1000;

	if (timeDifferenceInSeconds < 60) {
		return "just now";
	} else if (timeDifferenceInSeconds < 3600) {
		const minutes = Math.floor(timeDifferenceInSeconds / 60);
		return `${minutes} ${minutes > 1 ? "minutes" : "minute"} ago`;
	} else if (timeDifferenceInSeconds < 86400) {
		const hours = Math.floor(timeDifferenceInSeconds / 3600);
		return `${hours} ${hours > 1 ? "hours" : "hour"} ago`;
	} else if (timeDifferenceInSeconds < 604800) {
		const days = Math.floor(timeDifferenceInSeconds / 86400);
		return `${days} ${days > 1 ? "days" : "day"} ago`;
	} else if (timeDifferenceInSeconds < 2592000) {
		const weeks = Math.floor(timeDifferenceInSeconds / 604800);
		return `${weeks} ${weeks > 1 ? "weeks" : "week"} ago`;
	} else if (timeDifferenceInSeconds < 31536000) {
		const months = Math.floor(timeDifferenceInSeconds / 2592000);
		return `${months} ${months > 1 ? "months" : "month"} ago`;
	} else {
		const years = Math.floor(timeDifferenceInSeconds / 31536000);
		return `${years} ${years > 1 ? "years" : "year"} ago`;
	}
};

const nameList = [
	"Time",
	"Past",
	"Future",
	"Dev",
	"Fly",
	"Flying",
	"Soar",
	"Soaring",
	"Power",
	"Falling",
	"Fall",
	"Jump",
	"Cliff",
	"Mountain",
	"Rend",
	"Red",
	"Blue",
	"Green",
	"Yellow",
	"Gold",
	"Demon",
	"Demonic",
	"Panda",
	"Cat",
	"Kitty",
	"Kitten",
	"Zero",
	"Memory",
	"Trooper",
	"XX",
	"Bandit",
	"Fear",
	"Light",
	"Glow",
	"Tread",
	"Deep",
	"Deeper",
	"Deepest",
	"Mine",
	"Your",
	"Worst",
	"Enemy",
	"Hostile",
	"Force",
	"Video",
	"Game",
	"Donkey",
	"Mule",
	"Colt",
	"Cult",
	"Cultist",
	"Magnum",
	"Gun",
	"Assault",
	"Recon",
	"Trap",
	"Trapper",
	"Redeem",
	"Code",
	"Script",
	"Writer",
	"Near",
	"Close",
	"Open",
	"Cube",
	"Circle",
	"Geo",
	"Genome",
	"Germ",
	"Spaz",
	"Shot",
	"Echo",
	"Beta",
	"Alpha",
	"Gamma",
	"Omega",
	"Seal",
	"Squid",
	"Money",
	"Cash",
	"Lord",
	"King",
	"Duke",
	"Rest",
	"Fire",
	"Flame",
	"Morrow",
	"Break",
	"Breaker",
	"Numb",
	"Ice",
	"Cold",
	"Rotten",
	"Sick",
	"Sickly",
	"Janitor",
	"Camel",
	"Rooster",
	"Sand",
	"Desert",
	"Dessert",
	"Hurdle",
	"Racer",
	"Eraser",
	"Erase",
	"Big",
	"Small",
	"Short",
	"Tall",
	"Sith",
	"Bounty",
	"Hunter",
	"Cracked",
	"Broken",
	"Sad",
	"Happy",
	"Joy",
	"Joyful",
	"Crimson",
	"Destiny",
	"Deceit",
	"Lies",
	"Lie",
	"Honest",
	"Destined",
	"Bloxxer",
	"Hawk",
	"Eagle",
	"Hawker",
	"Walker",
	"Zombie",
	"Sarge",
	"Capt",
	"Captain",
	"Punch",
	"One",
	"Two",
	"Uno",
	"Slice",
	"Slash",
	"Melt",
	"Melted",
	"Melting",
	"Fell",
	"Wolf",
	"Hound",
	"Legacy",
	"Sharp",
	"Dead",
	"Mew",
	"Chuckle",
	"Bubba",
	"Bubble",
	"Sandwich",
	"Smasher",
	"Extreme",
	"Multi",
	"Universe",
	"Ultimate",
	"Death",
	"Ready",
	"Monkey",
	"Elevator",
	"Wrench",
	"Grease",
	"Head",
	"Theme",
	"Grand",
	"Cool",
	"Kid",
	"Boy",
	"Girl",
	"Vortex",
	"Paradox",
];

export function generateText(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function generateRandomNames() {
	return nameList[Math.floor(Math.random() * nameList.length)];
}

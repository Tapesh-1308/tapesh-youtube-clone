import { useContext, useEffect, useState } from "react";
import { LiveChatContext } from "../context/LiveChatContext";
import { generateRandomNames, generateText } from "../utils/constants";

const LiveChat = () => {
	const { liveChat, setLiveChat } = useContext(LiveChatContext);
	const [liveMessage, setLiveMessage] = useState("");
	const addLiveMessage = (name = generateRandomNames(), text = generateText(20)) => {
		setLiveChat((prevState) => {
			const messages = [
				{ name, text },
				...prevState.messages,
			];

			if(messages.length > 20) {
				messages.splice(20, 1);
			}

			return {messages};
		});
	}
	useEffect(() => {
		const interval = setInterval(addLiveMessage, 2000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="flex flex-col items-center justify-center max-w-[400px] bg-[#232323] h-[400px] mb-5">
			<h1 className="text-lg font-bold text-white w-full p-3">Live Chat</h1>
		<div className=" p-4 rounded-lg border-gray-400 w-full  text-white   overflow-y-auto flex flex-col-reverse min-h-[300px]">
			{liveChat.messages?.map((message, idx) => (
				<li key={idx} className="flex ">
					<h1 className="font-bold">{message.name}</h1>
					<p className="pl-2">{message.text}</p>
				</li>
			))}

		</div>
			<form className="flex w-full p-2" onSubmit={(e) => {
				e.preventDefault();
				addLiveMessage("Tapesh Dua", liveMessage);
				setLiveMessage("");
			}}>
				<input type="text" className="p-2 w-full basis-2/3 rounded-s-lg outline-none" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} placeholder="type message.."/>
				<button type="submit" className="p-2 w-full text-white rounded-e-lg basis-1/3 bg-[#000]">Send</button>
			</form>
			</div>
	);
};

export default LiveChat;

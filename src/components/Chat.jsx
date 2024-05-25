import { useState } from "react";
import chat from "../assets/img/chat.png";
import x from "../assets/img/x.png";
import send from "../assets/img/send.png";
const Chat = () => {
  const [show, setShow] = useState("false");
  const [showchat, setShowchat] = useState("");

  const handleChat = (e) => {
    setShowchat(e.target.value);
  };
  const handleShow = () => {
    setShow(!show);
  };
  const handle = () => {};
  return (
    <section>
      <div className="fixed bottom-24 right-24">
        {show ? (
          show
        ) : (
          <div className="w-52 h-[250px] fixed bottom-24 right-24 bg-slate-300 opacity-75">
            <input
              type="text"
              placeholder="nhập"
              className="bg-[#0e0d0d] pl-3 rounded-l-[20px] w-52 fixed bottom-24 right-24 text-gray-500"
              value={showchat}
              onChange={handleChat}
            />

            <button
              onClick={() => {
                setShowchat("");
              }}
            >
              <img
                src={send}
                alt=""
                className="fixed w-[22px] h-[22px] bottom-24 right-24 p-[2px]"
              />
            </button>
            {}
          </div>
        )}
      </div>

      <button onClick={handleShow}>
        {show ? (
          <img
            className="fixed w-[76px] h-[76px] bottom-24 right-24"
            src={chat}
            alt="img"
          />
        ) : (
          <img
            className="fixed w-[26px] h-[26px] bottom-80 right-24"
            src={x}
            alt="img"
          />
        )}
      </button>
    </section>
  );
};

export default Chat;

import Chatbox from "../components/Chatbox";

const Chat = () => {
  return (
    <section className="m-6 flex max-w-screen-sm flex-col max-sm:m-6 max-sm:h-full max-sm:w-full">
      <div id="logos" className="flex w-full flex-row justify-between">
        <a className="my-3">logo1</a>
        <a className="my-3">logo2</a>
      </div>
      <div
        id="messages-box"
        className="flex h-full flex-col gap-2 rounded-t-lg bg-green-900 pt-2"
      >
        <Chatbox chatPerson="left" message={"Lorem ipsum"} delay={0} />
        <Chatbox
          chatPerson="right"
          message={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
          delay={1}
        />
      </div>
      <div id="input" className="rounded-lg bg-white">
        <form className="flex">
          <input
            type="tel"
            placeholder="Enter phone number"
            className="m-1 w-full basis-3/4 p-2 focus:border-transparent"
          />
          <button
            type="submit"
            className="m-1 basis-1/4 rounded-md bg-green-400 p-2 font-bold"
          >
            TEXT ME
          </button>
        </form>
      </div>
      <p className="m-2">
        Fight for the Future & its Education Fund will contact you. Learn more
        En Español
      </p>
    </section>
  );
};

export default Chat;

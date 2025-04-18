const What = () => {
  return (
    <section className="m-6 flex max-w-screen-sm flex-col max-sm:hidden">
      <h1 className="m-2 text-center text-5xl ">What is HelloWorld?</h1>
      <p className="m-2 text-center">
        HelloWorld is the chat bot that gets you everything you need to vote!
        Simply enter your number on this page or text HELLO to (844) 344-3556
        and HelloVote will send you your polling location, early voting info, an
        “I{`'`}m voting” selfie badge, election day reminders including a handy
        calendar invite, voter ID requirements, streamlined ways to register to
        vote & more. It{`'`}s as simple as sending a few texts! (Data & message
        rates may apply. Text STOP to stop all messages.)
      </p>
      <div className="m-2 flex justify-evenly">
        <a
          href="#"
          className="m-1 inline-block w-fit rounded-lg bg-green-400 px-4 py-2 text-xl font-bold"
        >
          GET STARTED NOW
        </a>
        <a
          href="#"
          className="m-1 flex w-fit items-center rounded-lg bg-blue-400 px-4 py-2 text-xl font-bold"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
          </svg>
          START ON FACEBOOK MESSENGER
        </a>
      </div>
    </section>
  );
};

export default What;

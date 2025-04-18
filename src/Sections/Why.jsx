const Why = () => {
  return (
    <section className="m-6 flex max-w-screen-sm flex-col max-sm:hidden">
      <h2 className="m-2 text-center text-5xl">Why is this useful?</h2>
      <p className="m-2 text-center">
        We believe voting should be as easy and accessible as possible.
        HelloVote makes the process of registering to vote as easy as possible,
        by removing all the barriers. It{`'`}s fast. It{`'`}s 100% nonpartisan.
        You don{`'`}t need a printer. You don{`'`}t need a computer. You don
        {`'`}t need stamps for mailing things. You don{`'`}t even need a
        smartphone - any cellphone will work! With so much at stake in the
        upcoming election, it{`'`}s crucial that every eligible voter shows up
        and casts their ballot in November. Already registered? Please share
        this page (or our number 844-344-3556) and help get your friends
        registered!
      </p>
      <div className="m-2 flex flex-row justify-center">
        <a
          href="https://www.facebook.com/"
          className="m-2 flex w-fit items-center rounded-lg bg-blue-600 px-4 py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
          SHARE
        </a>
        <a
          href="https://twitter.com/home"
          className="m-2 flex w-fit items-center rounded-lg bg-blue-400 px-4 py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
          TWEET
        </a>
      </div>
    </section>
  );
};

export default Why;

const How = () => {
  return (
    <section className="m-6 flex max-w-screen-sm flex-col max-sm:hidden">
      <h2 className="m-2 text-center text-5xl">How does this work?</h2>
      <div className="m-5 flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CgkZ7MvWUAA?si=kuTyo35WDe_rf9pk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <p className="m-2 text-center">
        HelloVote asks you a series of questions by text message or Facebook
        Messenger, to help you register to vote and give you everything you need
        to get to the polls. In several states, your answers submit directly to
        state online forms for voter registration, so there are no paper forms
        to fill out! (No other service makes it this fast and easy.) In other
        states, we send you a pre-filled form by email or - if you don{`'`}t
        have a printer - by mail. We include a stamped envelope, so to complete
        your registration you just have to sign and mail it.
      </p>
      <p className="m-2 text-center">
        We also provide links to your state{`'`}s own online registration
        system, if they have one. (Some of these aren{`'`}t mobile friendly, so
        mailing the form may be easier.) And as election day approaches, we send
        you all the information you need to vote, including your polling
        location, early voting info, election day reminders including a handy
        calendar invite, voter ID requirements & more.
      </p>
      <p className="m-2 text-center">
        Before submitting your registration, HelloVote will give you the chance
        to verify that your information is correct. Do not provide false
        information, as your state may consider that a criminal offense.
      </p>
    </section>
  );
};

export default How;

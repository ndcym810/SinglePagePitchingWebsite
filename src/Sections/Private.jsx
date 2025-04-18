const Private = () => {
  return (
    <section className="max-sm:hidden flex flex-col m-6 max-w-screen-sm">
      <h2 className="text-center m-2 text-5xl">Is HelloWorld private?</h2>
      <p className="text-center m-2">
        HelloVote was created by <a href="/">Fight for the Future</a> and the{" "}
        <a href="/">Fight for the Future Education Fund</a>, which are nonprofit
        digital rights advocacy groups. We take your privacy seriously and we
        would never do anything shady with your information.{" "}
      </p>
      <br />
      <p className="text-center m-2">
        For more details, see our <a href="/">Privacy Policy</a> &{" "}
        <a href="/">Terms of Service</a>
      </p>
    </section>
  );
};

export default Private;

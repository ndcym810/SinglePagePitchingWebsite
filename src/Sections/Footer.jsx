const Footer = () => {
  return (
    <section className="max-sm:hidden flex flex-col items-center m-6 max-w-screen-sm">
      <a href="/" className="m-2">
        <img src="" alt="some image" />
      </a>
      <a href="/" className="m-2">
        <img src="" alt="some other image" />
      </a>
      <a href="/" className="m-2">
        <img src="" alt="another image" />
      </a>
      <ul className="text-center m-2">
        <li>
          <p>
            <strong>Press: </strong>
            <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          </p>
        </li>
        <li>
          <p>
            <strong>Ohter inquiries: </strong>
            <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          </p>
        </li>
        <li>
          <p>
            <strong>Share HelloWorld on your site: </strong>
            <a href="/banner">Banner Ads</a>
            <text> | </text>
            <a href="/embed">Embed Widget</a>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Footer;

const Footer = () => {
  return (
    <div className="bg-base-200 shadow mt-14">
      <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
        <aside>
          <h1 className="text-3xl font-bold">Gadget Heaven</h1>
          <p>Leading the way in cutting-edge technology and innovation.</p>
        </aside>
      </footer>
      <hr />
      <footer className="footer sm:footer-horizontal text-Black-content p-10 items-center flex justify-around">
        <nav>
          <h3 className="text-xl font-bold">GadgetHeaven</h3>
          <p>Leading the way in cutting-edge technology and innovation</p>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Order Tracking </a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
          <a className="link link-hover">Product Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

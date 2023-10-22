import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10 border border-blue-500">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Header Logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h=[29px]"
          />
        </a>

        {/*  Navbar links  */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
               className="font-montserrat text-lg leading-normal text-slate-gray"
              href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/*  signin and other options */}

        <div className="flex gap-2 font-montserrat font-medium leading-normal max-lg:hidden wide:mr-24">
           <a href="/"> Sign in</a>
           <span>/</span>
           <a href="/"> Explore Now</a>
        </div>

        {/*  Hamburger for small devices */}

        <div>
          <img
            src={hamburger}
            alt="Ham logo"
            className="hidden max-lg:block"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

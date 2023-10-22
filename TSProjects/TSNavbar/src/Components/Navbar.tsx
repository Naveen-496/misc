import { useState } from "react";

type NavModals = {
  title: string;
  image: string;
};

const NavModel = (props: any) => {
  return (
    <div className={`nav-modal ${props.className}`}>
      {props.models.map((model: NavModals) => {
        return (
          <div className="model-item" key={model.title}>
            <div className="modal-image">
               <img src={model.image} alt="" />
            </div>
           
            <div>{model.title}</div>
          </div>
        );
      })}
    </div>
  );
};

const NavLogo = () => {
  return <div className="nav-logo">blogsmith</div>;
};

const navProducts: NavModals[] = [
  { title: "Integrations", image: "src/assets/amazon-128.png" },
  { title: "Widgets", image: "src/assets/apple-128.png" },
  { title: "Templates", image: "src/assets/email-128.png" },
  { title: "UseCases", image: "src/assets/home-5-128.png" },
  { title: "ChangeLog", image: "src/assets/instagram-128.png" },
];

const navResources: NavModals[] = [
  { title: "Blogs", image: "src/assets/amazon-128.png" },
  { title: "Tutorials", image: "src/assets/apple-128.png" },
  { title: "Videos", image: "src/assets/email-128.png" },
  { title: "Case Studies", image: "src/assets/home-5-128.png" },
  { title: "Partners", image: "src/assets/instagram-128.png" },
];

const DrpoDownComponent = (props: any) => {
  const [mouseMove, setMouseMove] = useState(false);
  const [mouseOModal, setMouseOnModal] = useState( false );
  // console.log( props.models);
  function handleMouseMove() {
    setMouseMove(true);
    setMouseOnModal( true );
  }
  function handleOnClick() {
    setMouseMove(!mouseMove);
  }
  function handleOnMouseLeave() {
    if( mouseOModal ) {
      return;
    }
     setMouseMove( false);
  }

  function handleMouseOnModal() {
     setMouseOnModal( true );
  }
  function handleMouseLeaveModal() {
    setMouseMove( false );
     setMouseOnModal( false );
  }
  

  return (
    <div >
      <div className="arr-icons pointer" 
      onMouseOver={handleMouseMove} onMouseLeave={handleOnMouseLeave}
      onClick={handleOnClick}>
        <div>{props.title}</div>{" "}
        <img
          src={
            mouseMove
              ? "src/assets/arrow-142-128.png"
              : "src/assets/arrow-204-128.png"
          }
          alt=""
        />
      </div>

      {(mouseMove) && (
        <div onMouseOver={handleMouseOnModal} onMouseLeave={handleMouseLeaveModal}>
          <NavModel models={props.models} className={props.title} />
        </div>
      )}
    </div>
  );
};

const NavComponents = () => {
  return (
    <div className="nav-components">
      <div className="git-icon pointer1">
        <img src="src/assets/github-9-128.png" alt="" />
        <div>28,234</div>
      </div>
      <DrpoDownComponent title="Products" models={navProducts} />
      <DrpoDownComponent title="Resources" models={navResources} />
      <div className="pointer1">Docs</div>
      <div className="pointer1">pricing</div>
    </div>
  );
};

const AuthComponents = () => {
  return (
    <div className="auth-buttons">
      <button className="login-btn">Login</button>
      <button className="signup-btn">Signup</button>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLogo />
      <NavComponents />
      <AuthComponents />
    </div>
  );
};

export default Navbar;

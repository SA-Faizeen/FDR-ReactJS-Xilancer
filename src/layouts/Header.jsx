/* eslint-disable no-unused-vars */
import { TbChevronDown } from "react-icons/tb";
import { Flex } from "faizen-react-components";
import logo from "../assets/logo.png";
import Container from "../components/Container.jsx";
import { Link } from "react-router-dom";
import OutlineBtn from "../components/OutlineBtn.jsx";

const Header = () => {
  return (
    <header className={`py-5.25 px-37.5 border border-b-ink-50`}>
      <Container>
        <Flex className={`justify-between`}>
          <Link c="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div c="nav-links">
            <ul className="flex gap-x-10">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Jobs</Link>
              </li>
              <li>
                <Link>Talents</Link>
              </li>
              <li>
                <Link>Subscriptions</Link>
              </li>
              <li>
                <Link>Pages</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div c="buttons" className="flex gap-x-4">
            <OutlineBtn
              className={`px-4.5 py-2.5 text-ink-800 font-base font-medium`}
              borderColor={`#417D6E`}
              rounded
            >
              Community
            </OutlineBtn>
            <button className="px-4.5 py-2.5 bg-secondary text-ink-50 rounded-full">Sign Up</button>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;

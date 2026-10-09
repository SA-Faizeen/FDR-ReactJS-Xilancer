/* eslint-disable no-unused-vars */
import { TbChevronDown } from "react-icons/tb";
import { Flex } from "faizen-react-components";
import logo from "../assets/logo.png";
import Container from "../components/Container.jsx";
import { Link } from "react-router-dom";
import OutlineBtn from "../components/OutlineBtn.jsx";
import hero_image from "../assets/hero_image.png";

const Header = () => {
  return (
    <div className="bg-[linear-gradient(0deg,rgba(226,255,246,0.2),rgba(226,255,246,0.2)),linear-gradient(284.23deg,rgba(255,245,230,0.5)_12.33%,rgba(255,255,255,0)_53.22%,rgba(179,255,233,0.5)_98.24%)] min-h-dvh">
      <section className={`py-5.25 px-18 border-b border-ink-50`}>
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
            <button className="px-4.5 py-2.5 bg-secondary text-ink-50 rounded-full">
              Sign Up
            </button>
          </div>
        </Flex>
      </section>
      <section className={`py-10`}>
        <Container>
          <div className="flex items-center gap-11">
            <div className="w-171.5 shrink-0">
              <h1
                className={`text-[64px] text-ink-800 text-left font-medium leading-20 pb-6`}
              >
                Connecting Ideas with the Right Talent
              </h1>
              <h2 className={`text-base text-ink-600 w-160.5 pb-8`}>
                We make it easier for talents and businesses to connect and we
                make it absolutely less charges. Hire Talents or Get Hired from
                our platform and work independently
              </h2>
            </div>
            <img src={hero_image} className="min-w-0 flex-1 h-auto" />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Header;

import { BsBriefcase, BsPinMapFill } from 'react-icons/bs';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
} from 'react-icons/si';

function Home() {
  return (
    <div className="home-page">
      <div className="home-top">
        <img src="/profile.jpeg" alt="profile" className="profile-picture" />
        <div>
          <p>
            <BsBriefcase /> Full Stack Software Engineer
          </p>
          <p>
            <BsPinMapFill /> New York, New York
          </p>

          <ul className="skills">
            <li>
              <SiJavascript className="skill-items" /> JavaScript
            </li>
            <li>
              <SiReact className="skill-items" /> React
            </li>
            <li>
              <SiRedux className="skill-items" />
              Redux
            </li>
            <li>
              <SiPostgresql className="skill-items" /> PostgreSQL
            </li>
            <li>
              <SiNodedotjs className="skill-items" /> Node
            </li>
            <li>
              <SiExpress className="skill-items" /> Express
            </li>
          </ul>
        </div>
      </div>
      <div className="home-bottom">
        <p>
          {`Hi, thanks for visiting. My name's Alec and I'm a software engineer and coding bootcamp graduate. Prior to moving into tech, I was a Naval Officer for six years, working in leadership positions in operations and anti-terrorism.`}
        </p>

        <p>
          After my time in the US Navy, I found myself drawn to software development because I
          always had an interest in coding and creating applications. I wanted a formal education in
          full stack development, so I applied to Fullstack Academy and was fortunate enough to be
          accepted and graduate.
        </p>

        <p>{`I really enjoy being a part of something impactful to people, and right now, I'm looking for opportunities to join a company as a software engineer, again to make an impact but also learn as much as I can.`}</p>
      </div>
    </div>
  );
}

export default Home;

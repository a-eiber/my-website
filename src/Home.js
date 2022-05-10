import { BsBriefcase, BsPinMapFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>PostgreSQL</li>
            <li>Node</li>
            <li>Express</li>
          </ul>

          <ul className="contact">
            <li>
              <a href="https://www.linkedin.com/in/aleceiber">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/a-eiber">
                <BsGithub />
              </a>
            </li>
            <li>
              <Link to="/contact">
                <MdEmail />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-bottom">
        <p>
          {`Hi, thanks for visiting. My name's Alec and I'm a software developer and recent bootcamp graduate. Prior to moving into tech, I was in the Navy for six years, working mostly in leadership positions in operations and anti-terrorism.`}
        </p>

        <p>
          After the service, I found myself drawn to software development because I always had an
          interest in coding and creating applications. I wanted a formal education in full stack
          development, so I applied to Fullstack Academy and was fortunate enough to be accepted and
          graduate.
        </p>

        <p>{`I really enjoy being a part of something impactful to people, and right now, I'm looking for opportunities to join a company as a software developer, again to make an impact but also learn as much as I can.`}</p>
      </div>
    </div>
  );
}

export default Home;

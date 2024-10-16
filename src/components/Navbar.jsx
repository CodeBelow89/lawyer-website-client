//Importing the libraries for React
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Button, Navbar as Nav, Dropdown, Avatar } from "react-daisyui";
import MapsandDirections from "../components/MapsandDirections";
import RatingsandReviews from "../components/RatingsandReviews";
import News from "../components/News";
import ContactUs from "../components/ContactUs";
import LogoImage from "../assets/kriebellaw.png";
//Creating the functions for the Navbar
const Navbar = ({ user }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();

  //Styling Navbar
  return (
    <>
      <Nav
        className="bg-red-900 text-black font-normal min-w-full w-screen max-w-screen"
        style={{ top: 0 }}
      >
        <div className="flex-none">
          <Button shape="square" color="ghost">
            <Avatar shape="circle" size="xs" src={LogoImage}></Avatar>
          </Button>
        </div>

        {/*Beginning of the Navbar*/}
        <Nav.Start>
          <Button tag="a" color="" className="normal-case text-xl bg-gray-500">
            Jacqueline R. Kriebel
          </Button>
          <h1
            style={{ marginLeft: "1.5em", fontSize: "1.3em", color: "yellow" }}
          >
            Hello, {user ? user : "User"}
          </h1>
        </Nav.Start>

        {/*End of the Navbar - Links to click around the website*/}
        <Nav.End>
          <div className="flex gap-2">
            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>

            <Link
              to="/about"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
              }}
            >
              About
            </Link>

            <Link
              to="/attorneyprofile"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Attorney Profile
            </Link>

            {/*Practice Areas drop down links*/}
            <Dropdown horizontal="left" vertical="bottom">
              <Link tag="label" tabIndex={0}>
                Practice Areas
              </Link>

              <Dropdown.Menu className="menu-sm w-52 mt-3 z-[1]">
                <Dropdown.Item
                  onClick={() => {
                    navigate("/divorce");
                  }}
                >
                  <Link to="/divorce">Divorce </Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/family-law");
                  }}
                >
                  <Link to="/family-law">Family Law</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/adoption");
                  }}
                >
                  <Link to="/adoption"> Adoption</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/equitable-distribution");
                  }}
                >
                  <Link to="/equitable-distribution">
                    Equitable Distribution
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/alimony");
                  }}
                >
                  <Link to="/alimony">Alimony</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/protection-orders");
                  }}
                >
                  <Link to="/protection-orders">Protection Orders</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/cps");
                  }}
                >
                  <Link to="/cps">
                    Department of Family and Protective Services
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/child-custody");
                  }}
                >
                  <Link to="/child-custody">Child Custody</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/criminal-law");
                  }}
                >
                  <Link to="/criminal-law">Criminal Law</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/assault");
                  }}
                >
                  <Link to="/assault">Assault</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/domestic-violence");
                  }}
                >
                  <Link to="/domestic-violence">Domestic Violence</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/homicide");
                  }}
                >
                  <Link to="/homicide">Homicide</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/traffic-violations");
                  }}
                >
                  <Link to="/traffic-violations">Traffic Violations</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/drug-crimes");
                  }}
                >
                  <Link to="/drug-crimes">Drug Crimes</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/juvenile-law");
                  }}
                >
                  <Link to="/juvenile-law">Juvenile Law</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/*Link for Client Testimonials*/}
            <Link
              to="/clienttestimonials"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Client Testimonials
            </Link>

            {/*Dropdown Menu for More */}
            <Dropdown horizontal="left" vertical="bottom">
              <Link tag="label" tabIndex={0}>
                More
              </Link>
              <Dropdown.Menu className="menu-sm w-52 mt-3 z-[1]">
                <Dropdown.Item
                  onClick={() => {
                    navigate("/news");
                  }}
                >
                  <Link to="/News">News</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/RatingsandReviews");
                  }}
                >
                  <Link to="/RatingsandReviews">Ratings and Reviews</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/ContactUs");
                  }}
                >
                  <Link to="/ContactUs">Contact Us</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/MapsandDirections");
                  }}
                >
                  <Link to="/MapsandDirections">Maps and Directions</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => {
                    navigate("/SignUp");
                  }}
                >
                  <Link to="/SignUp">Sign Up</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Nav.End>
      </Nav>
    </>
  );
};

//Exporting the default Navbar
export default Navbar;

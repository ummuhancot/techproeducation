import React from "react";
import logo from "../../../public/img/menu/logo.png";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import {
  FaUser,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa6";
import { Navbar, Nav, NavDropdown, Container, Form } from "react-bootstrap";


export const Hamburgermenu = () => {
  return (
    <>
      {/* SADECE BİLGİSAYARDA GÖRÜNEN SEARCH BAR */}
      <Navbar expand="lg" bg="light" className="shadow-sm">
        <Container fluid className="px-3">
          <div
            className="d-none d-lg-flex justify-content-end align-items-center"
            style={{ background: "#f8f9fa", padding: "24px 0 8px 0" }}
          ></div>

          <Navbar.Brand href="#">
            <img
              src={logo}
              width="140"
              height="60"
              className="d-inline-block align-top"
              alt="TechPro Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="main-navbar-nav"
            className="bg-warning"
          />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <NavDropdown title="Programs" id="Programs-dropdown">
                <NavDropdown.Item href="#allPrograms">
                  All Programs
                </NavDropdown.Item>
                <NavDropdown.Item href="#softwareDevelopment">
                  Software Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#fullStackAutomationEngineer">
                  Full Stack Automation Engineer
                </NavDropdown.Item>
                <NavDropdown.Item href="#salesforceAdmin&Developer">
                  Salesforce Admin & Developer
                </NavDropdown.Item>
                <NavDropdown.Item href="#cyberSecurityAnalyst">
                  Cyber Security Analyst
                </NavDropdown.Item>
                <NavDropdown.Item href="#dataScience">
                  Data Science
                </NavDropdown.Item>
                <NavDropdown.Item href="#aws&DevOpsEngineer">
                  AWS & DevOps Engineer
                </NavDropdown.Item>
                <NavDropdown.Item href="#fullStackCypressAutomationTester">
                  Full Stack Cypress Automation Tester
                </NavDropdown.Item>
                <NavDropdown.Item href="#feeProgramS">
                  Fee Programs
                </NavDropdown.Item>
                <NavDropdown.Item href="#upskills">Upskills</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Opportunities" id="opportunities-dropdown">
                <NavDropdown.Item href="#allOpportunities">
                  All Opportunities
                </NavDropdown.Item>
                <NavDropdown.Item href="#richmond">
                  Richmond College
                </NavDropdown.Item>
                <NavDropdown.Item href="#mentoring">
                  Mentoring Services
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Career Coaching" id="carerrcoaching-dropdown">
                <NavDropdown.Item href="#testimonials">
                  Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item href="#careerCoaching">
                  Career Coaching
                </NavDropdown.Item>
                <NavDropdown.Item href="#jobReport">
                  Job Report
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Blog" id="blog-dropdown">
                <NavDropdown.Item href="#blogs">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="#AcademyTeam">
                  Academy Team
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Apply Now" id="applynow-dropdown">
                <NavDropdown.Item href="#enrollNow">
                  Enroll Now
                </NavDropdown.Item>
                <NavDropdown.Item href="#contactEnrollment">
                  Contact Enrollment
                </NavDropdown.Item>
                <NavDropdown.Item href="#freeEnrollment">
                  Free Enrollment
                </NavDropdown.Item>
                <NavDropdown.Item href="#premiumEnrollment">
                  Premium Enrollment
                </NavDropdown.Item>
                <NavDropdown.Item href="#richmodnCollegeEnrollment">
                  Richmond College Enrollment
                </NavDropdown.Item>
                <NavDropdown.Item href="#languageSchoolEnrollment">
                  Language School Enrollment
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Interview Questions"
                id="interviewQuestions-dropdown"
              >
                <NavDropdown.Item href="#questions">Questions</NavDropdown.Item>
                <NavDropdown.Item href="#Java">Java</NavDropdown.Item>
                <NavDropdown.Item href="#cyberSecurity">
                  Cyber Security
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about">About Us</Nav.Link>

              <InputGroup
                style={{
                  width: "100%",
                  background: "#f6f7f8",
                  borderRadius: "10px",
                  padding: "8px 24px",
                  minWidth: 240,
                  maxWidth: 200,
                  marginRight: "4px",
                  boxShadow: "0 2px 8px #0001",
                }}
              >
                <FormControl
                  placeholder="Search Program"
                  aria-label="Search Program"
                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: "1.2rem",
                    color: "#6c757d",
                  }}
                  className="shadow-none"
                />
                <Button variant="link" className="p-0 ms-2">
                  <IoIosSearch size={28} color="#FFA500" />
                </Button>
              </InputGroup>
            </Nav>
            {/* SADECE MOBİL VE TABLETTE GÖRÜNEN SOSYAL MEDYA İKONLARI */}
            <Form className="d-flex justify-content-between mt-4 mt-lg-0 align-items-center mb-3 d-lg-none">
              <FaWhatsapp className="social-icon text-success me-2" size={20} />
              <FaYoutube
                className="social-icon text-danger me-2 fa-youtube"
                size={20}
              />
              <FaInstagram
                className="social-icon text-danger me-2 fa-instagram"
                size={20}
              />
              <FaFacebook
                className="social-icon text-primary me-2 fa-facebook"
                size={20}
              />
              <FaXTwitter
                className="social-icon text-info me-2 fa-x-twitter"
                size={20}
              />
              <FaLinkedin
                className="social-icon text-primary me-2 fa-linkedin"
                size={20}
              />
              <FaDiscord
                className="social-icon text-secondary me-2 fa-discord"
                size={20}
              />
              <FaTelegram
                className="social-icon text-info me-2 fa-telegram"
                size={20}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

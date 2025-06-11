import React from "react";
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
import { Container, Row, Col, Image } from "react-bootstrap";

export const Icon = () => {
  const iconClass =
    "text-white bg-success rounded-circle p-2 mx-1 transition-all icon-hover d-none d-lg-inline";
  const flagClass = "rounded-circle mx-1 icon-hover";
  const iconSize = 32;

  return (
    <Container fluid className="bg-success py-2">
      <Row className="align-items-center justify-content-between flex-md-row">
        {/* Sol tarafta iletişim bilgileri */}
        <Col xs={8} md="auto" className="mb-2 mb-md-0">
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-1 gap-md-3">
            <span
              className="mb-0 text-white fw-semibold"
              style={{ fontSize: "0.95rem" }}
            >
              +1 587 330 79 59
            </span>
            <span
              className="mb-0 text-white fw-semibold"
              style={{ fontSize: "0.95rem" }}
            >
              bilgi@techproeducation.com
            </span>
          </div>
        </Col>

        {/* Sağ tarafta ikonlar ve bayraklar */}
        <Col
          xs={4}
          md="auto"
          className="d-flex justify-content-end align-items-center"
        >
          <div className="d-flex align-items-center justify-content-end w-100">
            {/* Bayraklar */}
            <div className="d-flex align-items-center ms-auto">
              <Image
                src="https://flagcdn.com/w40/tr.png"
                alt="Türkçe"
                width={iconSize}
                height={iconSize}
                className={flagClass}
                style={{ objectFit: "cover" }}
                roundedCircle
              />
              <Image
                src="https://flagcdn.com/w40/de.png"
                alt="Deutsch"
                width={iconSize}
                height={iconSize}
                className={flagClass}
                style={{ objectFit: "cover" }}
                roundedCircle
              />
            </div>

            {/* Sosyal Medya İkonları - sadece bilgisayarda görünür */}
            <FaUser className={iconClass + " fa-user"} size={iconSize} />
            <FaWhatsapp
              className={iconClass + " fa-whatsapp"}
              size={iconSize}
            />
            <FaTelegram
              className={iconClass + " fa-telegram"}
              size={iconSize}
            />
            <FaYoutube className={iconClass + " fa-youtube"} size={iconSize} />
            <FaInstagram
              className={iconClass + " fa-instagram"}
              size={iconSize}
            />
            <FaFacebook
              className={iconClass + " fa-facebook"}
              size={iconSize}
            />
            <FaXTwitter
              className={iconClass + " fa-x-twitter"}
              size={iconSize}
            />
            <FaLinkedin
              className={iconClass + " fa-linkedin"}
              size={iconSize}
            />
            <FaDiscord className={iconClass + " fa-discord"} size={iconSize} />
          </div>
        </Col>
      </Row>

      {/* Hover efektleri ve responsive düzen */}
      <style>{`
        .icon-hover:hover, .icon-hover:focus {
          background-color:rgb(3, 183, 75) !important;
          transform: scale(1.1);
          box-shadow: 0 0 8px rgba(13, 255, 110, 0.33);
          cursor: pointer;
        }
        /* Instagram hover */
        .icon-hover.fa-instagram:hover, .icon-hover.fa-instagram:focus {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%) !important;
          color: #fff !important;
        }
        /* Facebook hover */
        .icon-hover.fa-facebook:hover, .icon-hover.fa-facebook:focus {
          background-color: #1877f3 !important;
          color: #fff !important;
        }
        /* Telegram hover */
        .icon-hover.fa-telegram:hover, .icon-hover.fa-telegram:focus {
          background-color: #229ED9 !important;
          color: #fff !important;
        }
        /* Whatsapp hover */
        .icon-hover.fa-whatsapp:hover, .icon-hover.fa-whatsapp:focus {
          background-color: #25D366 !important;
          color: #fff !important;
        }
        /* Youtube hover */
        .icon-hover.fa-youtube:hover, .icon-hover.fa-youtube:focus {
          background-color: #FF0000 !important;
          color: #fff !important;
        }
        /* Twitter(X) hover */
        .icon-hover.fa-x-twitter:hover, .icon-hover.fa-x-twitter:focus {
          background-color: #000 !important;
          color: #fff !important;
        }
        /* Linkedin hover */
        .icon-hover.fa-linkedin:hover, .icon-hover.fa-linkedin:focus {
          background-color: #0077b5 !important;
          color: #fff !important;
        }
        /* Discord hover */
        .icon-hover.fa-discord:hover, .icon-hover.fa-discord:focus {
          background-color: #5865F2 !important;
          color: #fff !important;
        }
        /* User hover */
        .icon-hover.fa-user:hover, .icon-hover.fa-user:focus {
          background-color: #6c757d !important;
          color: #fff !important;
        }
      `}</style>
    </Container>
  );
};

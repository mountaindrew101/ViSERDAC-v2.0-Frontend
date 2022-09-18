// ! warn: empty strings should be included in between className concatenations for the styles to work

import React from "react";

import {
  FooterStyles,
  FooterContactDetails,
  FooterLinks,
} from "../styles/footerStyle";

import LocationSVG from "./Location.inline.svg";
import LottieCallAnimation from "../lottie/LottieCallAnimation";
import LottieMailAnimation from "../lottie/LottieMailAnimation";

export const ContactDetails = () => {
  return (
    <div
      id="ContactDetailsContainer"
      className={
        FooterStyles.ContactDetailsContainer +
        " " +
        FooterStyles.ContactDetailsContainerBreakpointStyles
      }
    >
      <div
        id="Contact"
        className={
          FooterContactDetails.Container +
          " " +
          FooterContactDetails.ContainerBreakpointStyles
        }
      >
        <div
          className={
            FooterContactDetails.Contact +
            " " +
            FooterContactDetails.ContactBreakpointStyles
          }
        >
          Contact
        </div>
        <div
          id="Address"
          className={
            FooterContactDetails.Address +
            " " +
            FooterContactDetails.AddressBreakpointStyles
          }
        >
          <LocationSVG />
          <span>
            <strong>
              Visayas Socio-Economic Research and Data Analytics Center
            </strong>
            <br />
            1/F Department of Economics, Visayas State University <br />
            Visca, Baybay City, Leyte, 6521, Philippines
          </span>
        </div>
        <div
          id="Landline"
          className={
            FooterContactDetails.Landline +
            " " +
            FooterContactDetails.LandlineBreakpointStyles
          }
        >
          <LottieCallAnimation />
          <span className={FooterContactDetails.LandlineText}>
            (053) 563 – 7751
          </span>
        </div>
        <div
          id="Email"
          className={
            FooterContactDetails.Email +
            " " +
            FooterContactDetails.EmailBreakpointStyles
          }
        >
          <LottieMailAnimation />
          <a
            href="mailto:viserdac@vsu.edu.ph"
            className={FooterContactDetails.EmailText}
          >
            viserdac@vsu.edu.ph
          </a>
        </div>
      </div>
      <div
        id="Links"
        className={
          FooterLinks.Container + " " + FooterLinks.UsefulLinksBreakpointStyles
        }
      >
        <span
          className={
            FooterLinks.UsefulLinks +
            " " +
            FooterLinks.UsefulLinksBreakpointStyles
          }
        >
          Useful Links
        </span>
        <ul>
          <li
            className={
              FooterLinks.Links + " " + FooterLinks.LinksBreakpointStyles
            }
          >
            <a href="/">Visayas State University</a>
          </li>
          <li
            className={
              FooterLinks.Links + " " + FooterLinks.LinksBreakpointStyles
            }
          >
            <a href="/">University of South Eastern Philippines</a>
          </li>
          <li
            className={
              FooterLinks.Links + " " + FooterLinks.LinksBreakpointStyles
            }
          >
            <a href="/">Central Luzon State University</a>
          </li>
          <li
            className={
              FooterLinks.Links + " " + FooterLinks.LinksBreakpointStyles
            }
          >
            <a href="/">DOST-PCAARRD</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

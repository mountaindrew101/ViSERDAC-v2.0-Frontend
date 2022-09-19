// ! warn: empty strings should be included in between className concatenations for the styles to work

import React, { useEffect, useState } from "react";

import {
  FooterStyles,
  FooterContactDetails,
  FooterLinks,
} from "../styles/footerStyle";

import LocationSVG from "./Location.inline.svg";
import LottieCallAnimation from "../lottie/LottieCallAnimation";
import LottieMailAnimation from "../lottie/LottieMailAnimation";

export const ContactDetails = () => {
  const CopyText = () => {
    navigator.clipboard.writeText("(053) 563 - 7751");
    console.log("Copied Text");
  };
  const [Copied, ShowCopied] = useState(false);
  const ToggleCopy = () => {
    ShowCopied(true);
  };
  const CopyFunctions = () => {
    CopyText();
    ToggleCopy();
  };

  useEffect(() => {
    const DisableCopiedPopUp = setTimeout(() => {
      ShowCopied(false);
      console.log('unmounted "Copied to Clipboard"');
    }, 3000);
    return () => clearTimeout(DisableCopiedPopUp);
  });

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
          <a
            href="https://www.google.com/maps/search/10.745019939618311,+124.79472121098364?sa=X&ved=2ahUKEwjPlpWtj5_6AhURVd4KHQhxCoMQ8gF6BAgEEAE"
            target="_blank"
            rel="noreferrer"
            className={FooterContactDetails.AddressText}
          >
            <strong>
              Visayas Socio-Economic Research and Data Analytics Center
            </strong>
            <br />
            1/F Department of Economics, Visayas State University <br />
            Visca, Baybay City, Leyte, 6521, Philippines
          </a>
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
          <span
            role="presentation"
            onKeyDown={CopyFunctions}
            onClick={CopyFunctions}
            className={FooterContactDetails.LandlineText}
          >
            (053) 563 – 7751
          </span>
          <div
            id="Copied to Clipboard"
            className={
              Copied
                ? FooterContactDetails.CopiedVisible
                : FooterContactDetails.CopiedInvisible
            }
          >
            <div className={FooterContactDetails.CopiedToClipboard}>
              Copied to Clipboard
            </div>
          </div>
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
            <a href="https://www.vsu.edu.ph/" target="_blank" rel="noreferrer">
              Visayas State University
            </a>
          </li>
          <li
            className={
              FooterLinks.Links + " " + FooterLinks.LinksBreakpointStyles
            }
          >
            <a href="https://www.usep.edu.ph/" target="_blank" rel="noreferrer">
              University of South Eastern Philippines
            </a>
          </li>
          <li
            className={
              FooterLinks.Links + " " + FooterLinks.LinksBreakpointStyles
            }
          >
            <a href="https://clsu.edu.ph/" target="_blank" rel="noreferrer">
              Central Luzon State University
            </a>
          </li>
          <li
            className={
              FooterLinks.Links + " " + FooterLinks.LinksBreakpointStyles
            }
          >
            <a
              href="http://www.pcaarrd.dost.gov.ph/home/portal/"
              target="_blank"
              rel="noreferrer"
            >
              DOST-PCAARRD
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

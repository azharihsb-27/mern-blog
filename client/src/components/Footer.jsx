/* eslint-disable react/no-unescaped-entities */
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from 'react-icons/bs';

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Azhari's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://azharihsb.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Azhari's Portfolio
                </FooterLink>
                <FooterLink
                  href="/about"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Azhari's Blog
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow Us" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://github.com/azharihsb-27"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noreferrer noopener">
                  Discord
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#" target="_blank" rel="noreferrer noopener">
                  Privacy Policy
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noreferrer noopener">
                  Terms &amp; Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="Azhari's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

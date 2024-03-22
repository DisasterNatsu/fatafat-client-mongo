import Link from "next/link";
import React from "react";

const Privacy = () => {
  return (
    <div>
      <title>Kolkata FF | Privacy</title>
      <meta property="og:url" content="https://kolkataff.space/privacy" />
      <h1 className="text-3xl font-semibold my-3 text-center sm:text-left">
        Privacy
      </h1>
      <p className="text-sm text-center sm:text-left">
        Our website address is:{" "}
        <Link href={"/"} className="text-accentColor">
          kolkataff.space
        </Link>
      </p>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          Comments
        </h2>
        <p className="text-center sm:text-left">
          When visitors leave comments on the site we collect the data shown in
          the comments form, and also the visitor&apos;s IP address and browser
          user agent string to help spam detection.
        </p>
        <p className="text-center sm:text-left">
          We use discuss comment and you should also check their privacy policy
          at{" "}
          <Link
            href={
              "https://help.disqus.com/en/articles/1717103-disqus-privacy-policy"
            }
            className="text-accentColor"
          >
            Here
          </Link>
          .
        </p>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          Media
        </h2>
        <p className="text-center sm:text-left">
          If you upload images to the website, you should avoid uploading images
          with embedded location data (EXIF GPS) included. Visitors to the
          website can download and extract any location data from images on the
          website.
        </p>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h1 className="text-3xl font-semibold my-3 text-center sm:text-left">
          Cookies
        </h1>
        <p className="text-center sm:text-left">
          If you leave a comment on our site you may opt in to saving your name,
          email address and website in cookies. These are for your convenience
          so that you do not have to fill in your details again when you leave
          another comment. These cookies will last for one year.
        </p>
        <p className="text-center sm:text-left">
          If you visit our login page, we will set a temporary cookie to
          determine if your browser accepts cookies. This cookie contains no
          personal data and is discarded when you close your browser.
        </p>
        <p className="text-center sm:text-left">
          When you log in, we will also set up several cookies to save your
          login information and your screen display choices. Login cookies last
          for two days, and screen options cookies last for a year. If you
          select “Remember Me”, your login will persist for two weeks. If you
          log out of your account, the login cookies will be removed.
        </p>
        <p className="text-center sm:text-left">
          If you edit or publish an article, an additional cookie will be saved
          in your browser. This cookie includes no personal data and simply
          indicates the post ID of the article you just edited. It expires after
          1 day.
        </p>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          Embedded content from other websites
        </h2>
        <p className="text-center sm:text-left">
          Articles on this site may include embedded content (e.g. videos,
          images, articles, etc.). Embedded content from other websites behaves
          in the exact same way as if the visitor has visited the other website.
        </p>
        <p className="text-center sm:text-left">
          These websites may collect data about you, use cookies, embed
          additional third-party tracking, and monitor your interaction with
          that embedded content, including tracking your inte
        </p>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          Whe we share your data with
        </h2>
        <p className="text-center sm:text-left">
          If you request a password reset, your IP address will be included in
          the reset email.
        </p>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          How long we retain your data
        </h2>
        <p className="text-center sm:text-left">
          If you leave a comment, the comment and its metadata are retained
          indefinitely. This is so we can recognise and approve any follow-up
          comments automatically instead of holding them in a moderation queue.
        </p>
        <p className="text-center sm:text-left">
          For users that register on our website (if any), we also store the
          personal information they provide in their user profile. All users can
          see, edit, or delete their personal information at any time (except
          they cannot change their username). Website administrators can also
          see and edit that information.
        </p>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          Media
        </h2>
        <p className="text-center sm:text-left">
          If you upload images to the website, you should avoid uploading images
          with embedded location data (EXIF GPS) included. Visitors to the
          website can download and extract any location data from images on the
          website.
        </p>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          What restrictions do you have on your data
        </h2>
        <p className="text-center sm:text-left">
          If you have an account on this site, or have left comments, you can
          request to receive an exported file of the personal data we hold about
          you, including any data you have provided to us. You can also request
          that we erase any personal data we hold about you. This does not
          include any data we are obliged to keep for administrative, legal, or
          security purposes.
        </p>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          Where we send your data
        </h2>
        <p className="text-center sm:text-left">
          Visitor comments may be checked through an automated spam detection
          service.
        </p>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </h2>
        <p className="text-lg text-center sm:text-left">
          Under the CCPA, among other rights, California consumers have the
          right to:
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            Request that a business that collects a consumer&apos;s personal
            data disclose the categories and specific pieces of personal data
            that a business has collected about consumers.
          </li>
          <li>
            Request that a business deletes any personal data about the consumer
            that a business has collected.
          </li>
          <li>
            Request that a business that sells a consumer&apos;s personal data,
            not sell the consumer&apos;s personal data.
          </li>
          <li>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </li>
        </ul>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          Where we send your data
        </h2>
        <p className="text-center sm:text-left">
          Visitor comments may be checked through an automated spam detection
          service.
        </p>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          GDPR Data Protection Rights
        </h2>
        <p className="text-lg text-center sm:text-left">
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
        </p>
        <ul className="list-decimal pl-5 space-y-3">
          <li>
            <strong>The right to access</strong> - You have the right to request
            copies of your personal data. We may charge you a small fee for this
            service.
          </li>
          <li>
            <strong>The right to rectification</strong> - You have the right to
            request that we correct any information you believe is inaccurate.
            You also have the right to request that we complete the information
            you believe is incomplete.
          </li>
          <li>
            <strong>The right to erasure </strong> - You have the right to
            request that we erase your personal data, under certain conditions.
          </li>
          <li>
            <strong>The right to restrict processing</strong> - You have the
            right to request that we restrict the processing of your personal
            data, under certain conditions.
          </li>
          <li>
            <strong>The right to object to processing</strong> - You have the
            right to object to our processing of your personal data, under
            certain conditions.
          </li>
          <li>
            <strong>The right to object to processing</strong> - You have the
            right to object to our processing of your personal data, under
            certain conditions.
          </li>
          <li>
            <strong>The right to data portability</strong> - You have the right
            to request that we transfer the data that we have collected to
            another organization, or directly to you, under certain conditions.
          </li>
          <li className="list-none -m-4">
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </li>
        </ul>
      </div>
      <div className="flex flex-col space-y-4 my-3">
        <h2 className="text-3xl font-semibold my-3 text-center sm:text-left">
          Children&apos;s Information
        </h2>
        <p className="text-center sm:text-left">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <p className="text-center sm:text-left">
          Kolkata FF does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
      </div>
    </div>
  );
};

export default Privacy;

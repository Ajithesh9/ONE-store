// src/components/PrivacyPolicyPage.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "../PrivacyPolicyPage.css";

const policyTabs = [
  { id: "privacy", name: "Privacy Policy", color: "#BB86FC" },
  { id: "eula", name: "EULA Policy", color: "#03DAC6" },
  { id: "payment", name: "Payment Terms", color: "#FBBF24" },
  { id: "security", name: "Security Center", color: "#60A5FA" },
];

const ParentalAppPrivacyPolicyPage = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeColor =
    policyTabs.find((tab) => tab.id === activeTab)?.color || "#BB86FC";

  const renderContent = () => {
    switch (activeTab) {
      case "privacy":
        return <PrivacyPolicyContent color={activeColor} />;
      case "eula":
        return <EulaContent color={activeColor} />;
      case "payment":
        return <PaymentTermsContent color={activeColor} />;
      case "security":
        return <SecurityCenterContent color={activeColor} />;
      default:
        return <PrivacyPolicyContent color={activeColor} />;
    }
  };

  return (
    <div className="privacy-page-container">
      <div className="privacy-page-card">
        {/* 1. MOVED: "Go Back" button is now inside the card */}
        <div className="privacy-page-header">
          <Link
            to="/"
            className="privacy-page-back-button"
            style={{ color: activeColor }}
          >
            <FiArrowLeft size={20} />
            <span>Go Back to Main Site</span>
          </Link>
        </div>

        {/* Tab Group */}
        <div className="privacy-page-tabs-wrapper">
          <div className="privacy-page-tab-group">
            {policyTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="privacy-page-tab-button"
                style={{
                  backgroundColor:
                    activeTab === tab.id ? tab.color : "transparent",
                  color: activeTab === tab.id ? "#0C0E12" : "#9CA3AF",
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="privacy-page-content">{renderContent()}</div>
      </div>
    </div>
  );
};

// --- CONTENT COMPONENTS ---
// (No changes to these components, they remain the same)

const PrivacyPolicyContent = ({ color }) => (
  <>
    <p className="privacy-page-last-updated">
      This Privacy Policy was last updated on 18 Nov 2025
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      1. Introduction
    </h2>
    <p className="privacy-page-paragraph">
      One89 ("we", "us", or "our") operates the Watcher Parental Control
      application (the "App"). This Privacy Policy explains how we collect, use,
      disclose, and safeguard your information when you use our parental control
      and remote access services.
    </p>

    <p className="privacy-page-paragraph">
      By downloading, installing, or using the Watcher Parental Control App, you
      agree to this Privacy Policy and our Terms of Service. If you do not agree
      with the terms of this Privacy Policy, please do not access or use the
      App.
    </p>
    <p className="privacy-page-paragraph">
      <strong>Important:</strong> The Watcher Parental Control App is designed
      for lawful parental monitoring and family safety purposes only. You are
      solely responsible for ensuring that your use of this App complies with
      all applicable local, state, federal, and international laws, including
      but not limited to laws in the United States, California, Canada, the
      European Union, India, and your jurisdiction of residence. We are not
      responsible for any illegal use, misuse, or any legal consequences arising
      from your use of our services.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      2. Information We Collect
    </h2>
    <p className="privacy-page-paragraph">
      We collect minimal information necessary to provide our parental control
      services:
    </p>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      2.1 Parent/User Information
    </h3>
    <p className="privacy-page-paragraph">
      When you register for the Watcher Parental Control App, we collect:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>Name:</strong> Your full name for account identification
      </li>
      <li>
        <strong>Email Address:</strong> Your email address for account creation,
        authentication, communication, and password recovery
      </li>
      <li>
        <strong>Device ID:</strong> A unique identifier for your parent device
        to enable secure pairing and service delivery
      </li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      2.2 Payment Information
    </h3>
    <p className="privacy-page-paragraph">
      Payment processing is handled by third-party payment processors. We do not
      store your credit card information or payment details on our servers.
      Please refer to your payment processor's privacy policy for information on
      how they handle your data.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      3. How We Use Your Information
    </h2>
    <p className="privacy-page-paragraph">
      We use the information we collect for the following purposes:
    </p>
    <ul className="privacy-page-list">
      <li>To create and manage your parental control account</li>
      <li>
        To authenticate your identity and provide secure access to the App
      </li>
      <li>To enable device pairing between parent and monitored devices</li>
      <li>
        To communicate with you regarding your account, updates, and support
      </li>
      <li>To process subscription payments and manage billing</li>
      <li>To improve and optimize our services</li>
      <li>To comply with legal obligations and enforce our Terms of Service</li>
    </ul>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      4. Data Storage and Security
    </h2>
    <p className="privacy-page-paragraph">
      We are committed to protecting your personal information:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>Minimal Server Storage:</strong> We only store your name, email
        address, and device ID on our secure servers. All monitoring data is
        stored locally on paired devices and transmitted directly between
        devices using end-to-end encryption.
      </li>
      <li>
        <strong>End-to-End Encryption:</strong> All data transfers between
        parent and monitored devices are encrypted end-to-end. We cannot access,
        view, or decrypt this information.
      </li>
      <li>
        <strong>No Third-Party Data Sharing:</strong> We do not sell, rent,
        lease, or share your personal information with third parties for
        marketing purposes.
      </li>
      <li>
        <strong>Security Measures:</strong> We implement industry-standard
        security measures including SSL/TLS encryption, secure password hashing,
        and access controls to protect your data.
      </li>
    </ul>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      5. Data Retention
    </h2>

    <p className="privacy-page-paragraph">
      We retain your personal information only for as long as necessary to
      provide our services and comply with legal obligations:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>Active Accounts:</strong> Your name, email, and device ID are
        retained while your account is active
      </li>
      <li>
        <strong>Account Deletion:</strong> Upon account deletion, your personal
        information will be permanently deleted from our servers within 30 days,
        except where retention is required by law
      </li>
      <li>
        <strong>Monitoring Data:</strong> All monitoring data is stored locally
        on devices and is never stored on our servers
      </li>
    </ul>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      6. Information Sharing and Disclosure
    </h2>

    <p className="privacy-page-paragraph">
      We do not sell, trade, or rent your personal information. We may share
      your information only in the following limited circumstances:
    </p>

    <ul className="privacy-page-list">
      <li>
        <strong>Service Providers:</strong> We may share information with
        trusted third-party service providers who assist us in operating our
        App, conducting our business, or servicing you, provided they agree to
        keep this information confidential
      </li>
      <li>
        <strong>Legal Requirements:</strong> We may disclose your information
        when required by law, court order, or governmental authority, or to
        protect our rights, property, or safety
      </li>
      <li>
        <strong>Business Transfers:</strong> If One89 is involved in a merger,
        acquisition, or sale of assets, your information may be transferred as
        part of that transaction
      </li>
      <li>
        <strong>With Your Consent:</strong> We may share your information with
        third parties when you explicitly consent to such sharing
      </li>
    </ul>
    <p className="privacy-page-paragraph">
      <strong>Important Note:</strong> We are not responsible for how you use
      the monitoring data obtained through the App. You are solely responsible
      for ensuring your use complies with all applicable laws.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      7. Your Rights and Choices
    </h2>
    <p className="privacy-page-paragraph">
      Depending on your location, you may have certain rights regarding your
      personal information:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>Access:</strong> You can access your personal information
        through your account dashboard
      </li>
      <li>
        <strong>Correction:</strong> You can update or correct your information
        at any time through your account settings
      </li>
      <li>
        <strong>Deletion:</strong> You can request deletion of your account and
        personal information by contacting us at support@one89.in
      </li>
      <li>
        <strong>Data Portability:</strong> You can request a copy of your
        personal data in a structured, machine-readable format (where applicable
        under GDPR)
      </li>
      <li>
        <strong>Withdraw Consent:</strong> You can withdraw consent for
        bandwidth monetization by uninstalling the App
      </li>
      <li>
        <strong>Object to Processing:</strong> You may object to certain
        processing of your personal data (where applicable under GDPR)
      </li>
    </ul>
    <p className="privacy-page-paragraph">
      To exercise any of these rights, please contact us at{" "}
      <a href="mailto:support@one89.in" className="privacy-page-contact-link">
        support@one89.in
      </a>
      . We will respond to your request within 30 days.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      8. International Data Transfers
    </h2>
    <p className="privacy-page-paragraph">
      Your information may be transferred to and processed in countries other
      than your country of residence. These countries may have data protection
      laws different from those in your jurisdiction. By using our App, you
      consent to such transfers. We ensure appropriate safeguards are in place
      to protect your information in accordance with this Privacy Policy and
      applicable laws.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      9. Children's Privacy
    </h2>
    <p className="privacy-page-paragraph">
      The Watcher Parental Control App is designed for use by parents or legal
      guardians to monitor children's devices. The parent/guardian account
      requires users to be at least 18 years old. We do not knowingly collect
      personal information from children directly. Parents are responsible for
      ensuring proper consent and compliance with laws such as COPPA (Children's
      Online Privacy Protection Act) in the United States, GDPR-K in the EU, and
      similar regulations in other jurisdictions.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      10. Legal Compliance and User Responsibility
    </h2>
    <p className="privacy-page-paragraph">
      <strong>
        You are solely responsible for ensuring that your use of the Watcher
        Parental Control App complies with all applicable laws in your
        jurisdiction, including but not limited to:
      </strong>
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>United States:</strong> Federal laws including the Electronic
        Communications Privacy Act (ECPA), Computer Fraud and Abuse Act (CFAA),
        and state-specific laws
      </li>
      <li>
        <strong>California:</strong> California Consumer Privacy Act (CCPA) and
        California Invasion of Privacy Act
      </li>
      <li>
        <strong>Canada:</strong> Personal Information Protection and Electronic
        Documents Act (PIPEDA) and provincial privacy laws
      </li>
      <li>
        <strong>European Union:</strong> General Data Protection Regulation
        (GDPR) and ePrivacy Directive
      </li>
      <li>
        <strong>India:</strong> Information Technology Act, 2000 and Digital
        Personal Data Protection Act, 2023
      </li>
      <li>
        <strong>Other Jurisdictions:</strong> All applicable local, state,
        federal, and international laws regarding monitoring, privacy, and data
        protection
      </li>
    </ul>
    <p className="privacy-page-paragraph">
      <strong>Lawful Use Only:</strong> This App is intended for lawful parental
      monitoring and family safety purposes only. You must have proper
      authorization to monitor any device. Unauthorized monitoring may be
      illegal and subject to criminal and civil penalties.
    </p>
    <p className="privacy-page-paragraph">
      <strong>Disclaimer:</strong> One89 and its affiliates, officers,
      directors, employees, and agents are NOT responsible for any illegal use,
      misuse, or any legal consequences, damages, claims, or liabilities arising
      from your use of the App. You agree to indemnify and hold us harmless from
      any such claims.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      11. Third-Party Services and Links
    </h2>
    <p className="privacy-page-paragraph">
      Our App may contain links to third-party websites or integrate third-party
      services (including HoneyGain, Castar, and Packet Stream SDKs). We are not
      responsible for the privacy practices or content of these third parties.
      We encourage you to review their privacy policies before providing any
      personal information.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      12. Changes to This Privacy Policy
    </h2>
    <p className="privacy-page-paragraph">
      We may update this Privacy Policy from time to time to reflect changes in
      our practices, technology, legal requirements, or other factors. We will
      notify you of any material changes by:
    </p>
    <ul className="privacy-page-list">
      <li>
        Posting the updated Privacy Policy on our website and within the App
      </li>
      <li>Updating the "Last Updated" date at the top of this policy</li>
      <li>
        Sending you an email notification (if you have provided your email
        address)
      </li>
    </ul>
    <p className="privacy-page-paragraph">
      Your continued use of the App after any changes indicates your acceptance
      of the updated Privacy Policy.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      13. Contact Us
    </h2>
    <p className="privacy-page-paragraph">
      If you have any questions, concerns, or requests regarding this Privacy
      Policy or our data practices, please contact us at:
    </p>
    <p className="privacy-page-paragraph">
      <strong>Email:</strong>{" "}
      <a href="mailto:support@one89.in" className="privacy-page-contact-link">
        support@one89.in
      </a>
      <br />
      <strong>Website:</strong>{" "}
      <a href="https://www.one89.in/" className="privacy-page-link">
        www.one89.in
      </a>
      <br />
      <strong>Company:</strong> One89
    </p>
    <p className="privacy-page-paragraph">
      We will respond to your inquiry within 30 days of receipt.
    </p>
  </>
);

const EulaContent = ({ color }) => (
  <>
    <p className="privacy-page-last-updated">
      This EULA was last changed on 1 Jan 2025
    </p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>
      1. End-User License Agreement
    </h2>
    <p className="privacy-page-paragraph">
      This is a binding legal agreement between you and One89. By installing,
      copying, or otherwise using the Watcher software, you agree to be bound by
      the terms of this EULA. If you do not agree, do not install or use the
      software.
    </p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>
      2. License Grant
    </h2>
    <p className="privacy-page-paragraph">
      We grant you a revocable, non-exclusive, non-transferable, limited license
      to download, install, and use the application strictly in accordance with
      this agreement and your purchased subscription plan.
    </p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>
      3. Restrictions
    </h2>
    <p className="privacy-page-paragraph">
      You agree not to, and you will not permit others to:
    </p>
    <ul className="privacy-page-list">
      <li>
        License, sell, rent, lease, assign, distribute, transmit, host,
        outsource, or disclose the software.
      </li>
      <li>
        Modify, make derivative works of, disassemble, decrypt, reverse compile,
        or reverse engineer any part of the software.
      </li>
      <li>Use the software for any illegal or unauthorized purpose.</li>
    </ul>
  </>
);

const PaymentTermsContent = ({ color }) => (
  <>
    <p className="privacy-page-last-updated">
      These Payment Terms were last changed on 1 Jan 2025
    </p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>
      1. Subscriptions
    </h2>
    <p className="privacy-page-paragraph">
      All our services are offered on a subscription basis. By purchasing a
      subscription, you agree to an initial and recurring periodic subscription
      fee at the then-current subscription rate, and you accept responsibility
      for all recurring charges until you cancel your subscription.
    </p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>
      2. Automatic Renewal
    </h2>
    <p className="privacy-page-paragraph">
      Your subscription will be automatically renewed for successive periods of
      the same duration as the subscription term originally selected. To cancel,
      you must do so from your account dashboard before the renewal date. No
      refunds will be provided for partial subscription periods.
    </p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>
      3. Cancellations & Refunds
    </h2>
    <p className="privacy-page-paragraph">
      You may cancel your subscription at any time. Your access will continue
      until the end of your current billing cycle. All purchases are final and
      non-refundable, except at our sole discretion and in accordance with
      applicable laws.
    </p>
  </>
);

const SecurityCenterContent = ({ color }) => (
  <>
    <p className="privacy-page-last-updated">
      This Security Policy was last changed on 1 Jan 2025
    </p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>
      1. Our Commitment
    </h2>
    <p className="privacy-page-paragraph">
      One89 is committed to protecting your data. We employ industry-standard
      security measures to ensure the confidentiality, integrity, and
      availability of the data you entrust to us.
    </p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>
      2. Data Encryption
    </h2>
    <p className="privacy-page-paragraph">
      All data transmitted between your devices and our servers is encrypted
      using 256-bit SSL (Secure Sockets Layer). Data at rest on our servers is
      encrypted using the AES-256 standard.
    </p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>
      3. Access Control
    </h2>
    <p className="privacy-page-paragraph">
      Your account is protected by a password you create. We use secure hashing
      algorithms to store your password, and it is never stored in plain text.
      Access to sensitive data by our employees is strictly limited on a
      need-to-know basis and is logged and audited.
    </p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>
      4. User Responsibility
    </h2>
    <p className="privacy-page-paragraph">
      You are solely responsible for maintaining the security of your account
      credentials and for all activity that occurs under your account. You must
      also comply with all local, state, and federal laws regarding the
      monitoring of a device you do not own or do not have the proper consent to
      monitor.
    </p>
  </>
);

export default ParentalAppPrivacyPolicyPage;

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

const PrivacyPolicyPage = () => {
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

// ========================================
// WATCHER KID'S APP PRIVACY POLICY
// ========================================

const PrivacyPolicyContent = ({ color }) => (
  <>
    <p className="privacy-page-last-updated">
      This Privacy Policy was last updated on 18 Nov 2025
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      1. Introduction
    </h2>
    <p className="privacy-page-paragraph">
      One89 ("we", "us", or "our") operates the Watcher Kid's application (the
      "App"). This App is designed to be installed on a child's or monitored
      device as part of the Watcher Parental Control system for family safety
      and parental monitoring purposes.
    </p>
    <p className="privacy-page-paragraph">
      <strong>IMPORTANT:</strong> This App must only be installed on devices
      where you have proper legal authority and consent to monitor. By
      installing this App, you acknowledge that:
    </p>
    <ul className="privacy-page-list">
      <li>
        You are the parent, legal guardian, or authorized person with legal
        right to monitor this device
      </li>
      <li>
        You have obtained all necessary consents required by applicable laws
      </li>
      <li>
        You will use this App only for lawful parental monitoring and family
        safety purposes
      </li>
      <li>
        You are solely responsible for ensuring compliance with all applicable
        local, state, federal, and international laws
      </li>
    </ul>
    <p className="privacy-page-paragraph">
      <strong>Unauthorized monitoring is illegal.</strong> One89 and its
      affiliates are NOT responsible for any illegal use, misuse, or legal
      consequences arising from the use of this App. The end user is solely
      responsible for all consequences.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      2. Important Privacy Notice - On-Device Data Storage
    </h2>
    <p className="privacy-page-paragraph">
      <strong>Effective November 15, 2025:</strong> We have implemented a
      fundamental change to our data storage architecture to enhance your
      privacy and security:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>
          All monitoring data is stored locally on the monitored device only
        </strong>
      </li>
      <li>
        <strong>
          No monitoring data is uploaded to or stored on our servers
        </strong>
      </li>
      <li>
        <strong>
          All data transfers between devices use end-to-end encryption
        </strong>
      </li>
      <li>
        <strong>We cannot access, view, or decrypt any monitoring data</strong>
      </li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      2.1 Legacy Call Recording Data (Before November 15, 2025)
    </h3>
    <p className="privacy-page-paragraph">
      Prior to November 15, 2025, due to technical limitations, call recordings
      were temporarily stored on our servers. Important information regarding
      this legacy data:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>Accessibility:</strong> These recordings remain accessible only
        to the paired parent/user account until December 31, 2025
      </li>
      <li>
        <strong>Automatic Deletion:</strong> All legacy call recordings will be
        permanently and irreversibly deleted from our servers on December 31,
        2025
      </li>
      <li>
        <strong>No New Storage:</strong> No call recordings or any other
        monitoring data has been stored on our servers since November 15, 2025
      </li>
      <li>
        <strong>Data Access:</strong> Only the paired parent account can access
        these legacy recordings
      </li>
    </ul>
    <p className="privacy-page-paragraph">
      If you wish to retain these recordings beyond December 31, 2025, you must
      download them before this date. We will not be able to recover them after
      deletion.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      3. Information We Collect
    </h2>
    <p className="privacy-page-paragraph">
      The Watcher Kid's App collects the following information:
    </p>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      3.1 Device Identification Information (Stored on Our Servers)
    </h3>
    <p className="privacy-page-paragraph">
      To enable pairing between parent and monitored devices, we collect and
      store only the following device information on our servers:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>Device ID:</strong> Unique identifier for device pairing
      </li>
      <li>
        <strong>Device Brand:</strong> Manufacturer name (e.g., Samsung, Google)
      </li>
      <li>
        <strong>Device Manufacturer:</strong> Manufacturing company name
      </li>
      <li>
        <strong>Device Model:</strong> Specific device model (e.g., Galaxy S23,
        Pixel 8)
      </li>
      <li>
        <strong>Android Version:</strong> Operating system version
      </li>
      <li>
        <strong>Product Name:</strong> Device product identifier
      </li>
    </ul>
    <p className="privacy-page-paragraph">
      This information is used exclusively for device pairing, authentication,
      and service delivery. We do not collect any other personal information on
      our servers.
    </p>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      3.2 Monitoring Data (Stored On-Device Only)
    </h3>
    <p className="privacy-page-paragraph">
      All monitoring data listed below is stored locally on the monitored device
      and is never uploaded to our servers. This data is transmitted directly to
      the paired parent device using end-to-end encryption:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>Location Data:</strong> Real-time and historical GPS location,
        Wi-Fi location, network-based location
      </li>
      <li>
        <strong>Call Information:</strong> Call logs including phone numbers,
        contact names, call duration, timestamps, and call recordings (when
        enabled)
      </li>
      <li>
        <strong>SMS/Text Messages:</strong> Message content, sender/receiver
        information, timestamps
      </li>
      <li>
        <strong>Contacts:</strong> Contact names, phone numbers, email addresses
        stored on the device
      </li>
      <li>
        <strong>Application Usage:</strong> Installed apps, app usage time, app
        activity, screen time statistics
      </li>
      <li>
        <strong>Notifications:</strong> Notification content from all apps
      </li>
      <li>
        <strong>Photos and Media:</strong> Images, videos, and other media files
        stored on the device
      </li>
      <li>
        <strong>Screen Content:</strong> Screenshots and screen recordings when
        remote viewing is enabled
      </li>
      <li>
        <strong>Camera Access:</strong> Real-time camera feed when remote camera
        is activated
      </li>
      <li>
        <strong>Microphone Access:</strong> Audio recordings when ambient
        listening is enabled
      </li>
      <li>
        <strong>Browser History:</strong> Web browsing history and bookmarks
      </li>
      <li>
        <strong>Device Information:</strong> Battery level, storage usage,
        network status, installed apps
      </li>
      <li>
        <strong>System Settings:</strong> Device settings, Wi-Fi networks,
        Bluetooth connections
      </li>
    </ul>
    <p className="privacy-page-paragraph">
      <strong>Critical Privacy Protection:</strong> All of this data remains on
      the monitored device and is only transmitted to the paired parent device
      when requested, using end-to-end encryption. We have no access to this
      information.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      4. App Permissions Explained
    </h2>
    <p className="privacy-page-paragraph">
      The Watcher Kid's App requires extensive permissions to provide
      comprehensive parental monitoring features. Below is a complete
      explanation of why each permission is necessary:
    </p>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      4.1 Location Permissions
    </h3>
    <ul className="privacy-page-list">
      <li>
        <strong>ACCESS_FINE_LOCATION & ACCESS_COARSE_LOCATION:</strong> Track
        device location in real-time for child safety
      </li>
      <li>
        <strong>ACCESS_BACKGROUND_LOCATION:</strong> Continue tracking location
        even when the app is not actively in use
      </li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      4.2 Communication Permissions
    </h3>
    <ul className="privacy-page-list">
      <li>
        <strong>READ_CALL_LOG & READ_PHONE_STATE:</strong> Monitor incoming and
        outgoing calls
      </li>
      <li>
        <strong>CALL_PHONE:</strong> Access call information and manage call
        restrictions
      </li>
      <li>
        <strong>READ_SMS & SEND_SMS:</strong> Monitor text messages for safety
        concerns
      </li>
      <li>
        <strong>READ_CONTACTS & WRITE_CONTACTS:</strong> View and manage contact
        information
      </li>
      <li>
        <strong>READ_PHONE_NUMBERS:</strong> Access phone number information
      </li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      4.3 Media & Camera Permissions
    </h3>
    <ul className="privacy-page-list">
      <li>
        <strong>CAMERA:</strong> Enable remote camera viewing for safety
        verification
      </li>
      <li>
        <strong>RECORD_AUDIO:</strong> Enable ambient listening and call
        recording features
      </li>
      <li>
        <strong>READ_MEDIA_IMAGES:</strong> Access photos and media files on the
        device
      </li>
      <li>
        <strong>MANAGE_EXTERNAL_STORAGE:</strong> Access files and media stored
        on the device
      </li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      4.4 Screen & Display Permissions
    </h3>
    <ul className="privacy-page-list">
      <li>
        <strong>FOREGROUND_SERVICE_MEDIA_PROJECTION:</strong> Enable screen
        recording and remote screen viewing
      </li>
      <li>
        <strong>SYSTEM_ALERT_WINDOW:</strong> Display alerts and overlay
        notifications
      </li>
      <li>
        <strong>SET_WALLPAPER:</strong> Manage device wallpaper (for parental
        control features)
      </li>
      <li>
        <strong>DISABLE_KEYGUARD:</strong> Manage lock screen for remote access
      </li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      4.5 Network & Connectivity Permissions
    </h3>
    <ul className="privacy-page-list">
      <li>
        <strong>INTERNET & ACCESS_NETWORK_STATE:</strong> Enable communication
        between parent and monitored device
      </li>
      <li>
        <strong>ACCESS_WIFI_STATE & CHANGE_WIFI_STATE:</strong> Monitor and
        manage Wi-Fi connectivity
      </li>
      <li>
        <strong>BLUETOOTH permissions:</strong> Monitor Bluetooth connections
        and devices
      </li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      4.6 Device Management Permissions
    </h3>
    <ul className="privacy-page-list">
      <li>
        <strong>PACKAGE_USAGE_STATS:</strong> Track app usage time and
        statistics
      </li>
      <li>
        <strong>QUERY_ALL_PACKAGES:</strong> View all installed applications
      </li>
      <li>
        <strong>REQUEST_DELETE_PACKAGES:</strong> Enable remote app
        blocking/uninstallation
      </li>
      <li>
        <strong>REQUEST_INSTALL_PACKAGES:</strong> Manage app installations
        remotely
      </li>
      <li>
        <strong>DEVICE ADMIN permissions:</strong> Enable advanced parental
        controls and prevent unauthorized uninstallation
      </li>
      <li>
        <strong>ACCESSIBILITY_SERVICE:</strong> Enable app usage monitoring and
        screen time controls
      </li>
      <li>
        <strong>NOTIFICATION_LISTENER_SERVICE:</strong> Monitor notifications
        from all apps
      </li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      4.7 Background & System Permissions
    </h3>
    <ul className="privacy-page-list">
      <li>
        <strong>RECEIVE_BOOT_COMPLETED:</strong> Automatically start monitoring
        after device restart
      </li>
      <li>
        <strong>FOREGROUND_SERVICE:</strong> Maintain continuous monitoring in
        the background
      </li>
      <li>
        <strong>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS:</strong> Ensure
        uninterrupted monitoring
      </li>
      <li>
        <strong>WAKE_LOCK:</strong> Keep the device active when necessary for
        monitoring
      </li>
      <li>
        <strong>SCHEDULE_EXACT_ALARM:</strong> Schedule periodic monitoring
        tasks
      </li>
    </ul>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      5. How Data is Used and Shared
    </h2>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      5.1 Data Usage
    </h3>
    <p className="privacy-page-paragraph">
      All monitoring data collected by the App is used exclusively for:
    </p>
    <ul className="privacy-page-list">
      <li>
        Providing parental monitoring features to the paired parent account
      </li>
      <li>Enabling real-time location tracking for child safety</li>
      <li>Monitoring communication and app usage</li>
      <li>Facilitating remote device management</li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      5.2 Data Sharing
    </h3>
    <p className="privacy-page-paragraph">
      <strong>
        We do NOT share, sell, rent, or disclose any monitoring data to third
        parties.
      </strong>{" "}
      The only data sharing that occurs is:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>Parent Device:</strong> Monitoring data is transmitted directly
        to the paired parent device via end-to-end encryption
      </li>
      <li>
        <strong>No Third-Party Access:</strong> We do not have access to your
        monitoring data and cannot share what we cannot access
      </li>
      <li>
        <strong>Legal Compliance:</strong> We may be required to disclose device
        identification information if legally compelled by court order or
        governmental authority
      </li>
    </ul>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      6. Bandwidth Monetization SDKs
    </h2>
    <p className="privacy-page-paragraph">
      To provide our services at an affordable price, the Watcher Kid's App
      integrates third-party Software Development Kits (SDKs) that utilize a
      portion of the device's internet bandwidth for legitimate business
      purposes:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>HoneyGain SDK:</strong> Bandwidth sharing network
      </li>
      <li>
        <strong>Castar SDK:</strong> Content delivery network
      </li>
      <li>
        <strong>Packet Stream SDK:</strong> Residential proxy network
      </li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      6.1 How Bandwidth SDKs Work
    </h3>
    <p className="privacy-page-paragraph">
      These SDKs operate in the background and may use a small portion of the
      device's unused internet bandwidth. The bandwidth is used by these
      third-party networks for legitimate purposes such as content delivery, web
      intelligence, and brand protection services.
    </p>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      6.2 Data Handling by SDK Providers
    </h3>
    <p className="privacy-page-paragraph">
      <strong>Important:</strong> These SDK providers have their own privacy
      policies and data handling practices. We do not control how these SDKs
      collect, use, or share data. By using this App, you consent to the
      bandwidth usage and acknowledge that these third-party SDKs may collect
      technical information according to their respective privacy policies:
    </p>
    <ul className="privacy-page-list">
      <li>HoneyGain Privacy Policy: [available at honeygain.com]</li>
      <li>Castar Privacy Policy: [available at castar.io]</li>
      <li>Packet Stream Privacy Policy: [available at packetstream.io]</li>
    </ul>
    <p className="privacy-page-paragraph">
      <strong>No Monitoring Data Shared:</strong> These SDKs do NOT have access
      to any monitoring data (calls, messages, photos, location, etc.). They
      only utilize internet bandwidth and may collect basic technical
      information about network connectivity.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      7. Data Security and Encryption
    </h2>
    <p className="privacy-page-paragraph">
      We take data security seriously and have implemented multiple layers of
      protection:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>End-to-End Encryption:</strong> All data transmitted between the
        monitored device and parent device is encrypted end-to-end using
        industry-standard AES-256 encryption
      </li>
      <li>
        <strong>On-Device Storage:</strong> Monitoring data is stored securely
        on the local device with encryption at rest
      </li>
      <li>
        <strong>Secure Transmission:</strong> All network communications use
        SSL/TLS protocols
      </li>
      <li>
        <strong>No Server Storage:</strong> We cannot be breached for monitoring
        data because we don't store it on our servers
      </li>
      <li>
        <strong>Device Authentication:</strong> Strong device pairing
        authentication prevents unauthorized access
      </li>
    </ul>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      8. Data Retention
    </h2>
    <ul className="privacy-page-list">
      <li>
        <strong>Device Information:</strong> Stored on our servers as long as
        the device remains paired or the account is active
      </li>
      <li>
        <strong>Monitoring Data:</strong> Stored locally on the monitored device
        until deleted by the user or until storage limits are reached
      </li>
      <li>
        <strong>Legacy Call Recordings (Pre-Nov 15, 2025):</strong> Will be
        permanently deleted from our servers on December 31, 2025
      </li>
      <li>
        <strong>Account Deletion:</strong> When a paired account is deleted, all
        device identification information is removed from our servers within 30
        days
      </li>
    </ul>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      9. User Rights and Control
    </h2>
    <p className="privacy-page-paragraph">
      The parent/guardian with the paired account has the following rights and
      controls:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>Access:</strong> View all device identification information
        through the parent app
      </li>
      <li>
        <strong>Control:</strong> Manage monitoring features, permissions, and
        data collection settings
      </li>
      <li>
        <strong>Deletion:</strong> Unpair devices and request deletion of device
        information by contacting support@one89.in
      </li>
      <li>
        <strong>Export:</strong> Download legacy call recordings before December
        31, 2025
      </li>
    </ul>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      10. Legal Compliance and User Responsibility
    </h2>
    <p className="privacy-page-paragraph">
      <strong>
        CRITICAL: You are solely responsible for ensuring lawful use of this
        App.
      </strong>
    </p>
    <p className="privacy-page-paragraph">
      This App provides powerful monitoring capabilities that may be subject to
      strict legal regulations in your jurisdiction. You must comply with ALL
      applicable laws, including but not limited to:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>United States:</strong> Electronic Communications Privacy Act
        (ECPA), Computer Fraud and Abuse Act (CFAA), state wiretapping laws,
        state privacy laws
      </li>
      <li>
        <strong>California:</strong> California Consumer Privacy Act (CCPA),
        California Invasion of Privacy Act, Penal Code Section 632
      </li>
      <li>
        <strong>Canada:</strong> Personal Information Protection and Electronic
        Documents Act (PIPEDA), Criminal Code provisions on interception of
        communications
      </li>
      <li>
        <strong>European Union:</strong> General Data Protection Regulation
        (GDPR), ePrivacy Directive, national implementations
      </li>
      <li>
        <strong>India:</strong> Information Technology Act 2000, Digital
        Personal Data Protection Act 2023, Indian Penal Code provisions
      </li>
      <li>
        <strong>Other Jurisdictions:</strong> All applicable local, state,
        provincial, federal, and international laws
      </li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      10.1 Lawful Use Requirements
    </h3>
    <p className="privacy-page-paragraph">You represent and warrant that:</p>
    <ul className="privacy-page-list">
      <li>
        You are the parent, legal guardian, or have explicit legal authority to
        monitor the device
      </li>
      <li>
        You have obtained all necessary consents required by applicable laws
      </li>
      <li>
        The monitored person is your minor child or you have their explicit
        consent if they are an adult
      </li>
      <li>You will only use monitoring features for lawful purposes</li>
      <li>
        You will not use the App to stalk, harass, or unlawfully monitor any
        person
      </li>
    </ul>

    <h3 className="privacy-page-subsection-title" style={{ color: color }}>
      10.2 Liability Disclaimer
    </h3>
    <p className="privacy-page-paragraph">
      <strong>
        One89 and its affiliates, officers, directors, employees, and agents are
        NOT responsible for:
      </strong>
    </p>
    <ul className="privacy-page-list">
      <li>Any illegal, unauthorized, or unlawful use of this App</li>
      <li>Any misuse of monitoring features or collected data</li>
      <li>
        Any violation of privacy laws, wiretapping laws, or other applicable
        regulations
      </li>
      <li>
        Any legal consequences, damages, claims, liabilities, or penalties
        arising from your use of the App
      </li>
      <li>
        Any harm, injury, or damages resulting from the use or misuse of the App
      </li>
    </ul>
    <p className="privacy-page-paragraph">
      You agree to indemnify, defend, and hold harmless One89 and its affiliates
      from any and all claims, damages, liabilities, costs, and expenses
      (including reasonable attorneys' fees) arising from your use or misuse of
      the App.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      11. Children's Privacy
    </h2>
    <p className="privacy-page-paragraph">
      This App is specifically designed to be installed on children's devices
      for parental monitoring purposes. Parents and legal guardians are
      responsible for:
    </p>
    <ul className="privacy-page-list">
      <li>
        Obtaining appropriate consent from the child (where required by law)
      </li>
      <li>
        Ensuring compliance with laws such as COPPA (USA), GDPR-K (EU), and
        equivalent regulations
      </li>
      <li>
        Using monitoring data responsibly and in the child's best interest
      </li>
      <li>
        Respecting the child's privacy and dignity while ensuring their safety
      </li>
    </ul>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      12. International Data Transfers
    </h2>
    <p className="privacy-page-paragraph">
      Device identification information may be stored on servers located in
      various countries. By using this App, you consent to the transfer of this
      limited information across international borders. We ensure appropriate
      safeguards are in place for such transfers.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      13. Third-Party Services and Links
    </h2>
    <p className="privacy-page-paragraph">
      This App integrates third-party SDKs (HoneyGain, Castar, Packet Stream)
      that have their own privacy policies and terms of service. We are not
      responsible for the privacy practices of these third parties. We encourage
      you to review their policies.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      14. Changes to This Privacy Policy
    </h2>
    <p className="privacy-page-paragraph">
      We may update this Privacy Policy from time to time. We will notify you of
      material changes by:
    </p>
    <ul className="privacy-page-list">
      <li>Posting the updated policy on our website</li>
      <li>Displaying a notification in the App</li>
      <li>Updating the "Last Updated" date</li>
    </ul>
    <p className="privacy-page-paragraph">
      Continued use of the App after changes indicates acceptance of the updated
      Privacy Policy.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      15. Contact Us
    </h2>
    <p className="privacy-page-paragraph">
      If you have questions, concerns, or requests regarding this Privacy
      Policy, please contact us:
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

    <div
      style={{
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#FEE2E2",
        borderLeft: `4px solid ${color}`,
        borderRadius: "4px",
      }}
    >
      <p style={{ margin: 0, fontWeight: "bold", color: "#991B1B" }}>
        ⚠️ LEGAL NOTICE: Installing this App on a device you do not own or do
        not have proper authorization to monitor may be illegal and subject to
        criminal prosecution. You are solely responsible for compliance with all
        applicable laws. One89 disclaims all liability for illegal or
        unauthorized use.
      </p>
    </div>
  </>
);

// ========================================
// WATCHER INSTALLER APP PRIVACY POLICY
// ========================================

const InstallerPrivacyPolicyContent = ({ color }) => (
  <>
    <p className="privacy-page-last-updated">
      This Privacy Policy was last updated on 18 Nov 2025
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      1. Introduction
    </h2>
    <p className="privacy-page-paragraph">
      One89 ("we", "us", or "our") operates the Watcher Installer application
      (the "Installer App"). This Installer App is a setup utility designed to
      simplify the installation and initial configuration of the Watcher Kid's
      App on monitored devices.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      2. Zero Data Collection
    </h2>
    <p className="privacy-page-paragraph">
      <strong>
        The Watcher Installer App does NOT collect, store, transmit, or process
        any personal data or device information.
      </strong>
    </p>
    <p className="privacy-page-paragraph">
      This Installer App serves only as a convenient setup tool and does not:
    </p>
    <ul className="privacy-page-list">
      <li>Collect any device information</li>
      <li>Access any personal data</li>
      <li>Transmit any information to our servers</li>
      <li>Store any data locally or remotely</li>
      <li>Require any account registration or login</li>
      <li>Track usage or analytics</li>
    </ul>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      3. Purpose and Functionality
    </h2>
    <p className="privacy-page-paragraph">
      The Watcher Installer App's sole purpose is to:
    </p>
    <ul className="privacy-page-list">
      <li>Guide users through the Watcher Kid's App installation process</li>
      <li>Provide setup instructions and best practices</li>
      <li>Assist with downloading the Watcher Kid's App</li>
      <li>Help configure initial settings for easier setup</li>
    </ul>
    <p className="privacy-page-paragraph">
      Once the Watcher Kid's App is successfully installed, the Installer App
      can be safely uninstalled as it serves no further purpose.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      4. Permissions
    </h2>
    <p className="privacy-page-paragraph">
      The Installer App requires minimal permissions necessary for its setup
      functionality:
    </p>
    <ul className="privacy-page-list">
      <li>
        <strong>INTERNET:</strong> Required only to download the Watcher Kid's
        App APK file
      </li>
      <li>
        <strong>REQUEST_INSTALL_PACKAGES:</strong> Required to install the
        Watcher Kid's App
      </li>
      <li>
        <strong>WRITE_EXTERNAL_STORAGE:</strong> Required to temporarily save
        the Watcher Kid's App APK file before installation
      </li>
    </ul>
    <p className="privacy-page-paragraph">
      These permissions are used exclusively for the installation process and do
      not enable any data collection.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      5. No Third-Party Services
    </h2>
    <p className="privacy-page-paragraph">
      The Watcher Installer App does not integrate any third-party SDKs,
      analytics services, advertising networks, or tracking tools. It is a
      completely standalone utility application.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      6. Legal Compliance
    </h2>
    <p className="privacy-page-paragraph">
      While the Installer App itself collects no data, users must ensure they
      have proper legal authority to install monitoring software on the target
      device. Please refer to the Watcher Kid's App Privacy Policy for detailed
      information about legal requirements and user responsibilities.
    </p>
    <p className="privacy-page-paragraph">
      <strong>Important:</strong> One89 is not responsible for any illegal or
      unauthorized installation of monitoring software. You are solely
      responsible for ensuring compliance with all applicable laws in your
      jurisdiction.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      7. Changes to This Privacy Policy
    </h2>
    <p className="privacy-page-paragraph">
      We may update this Privacy Policy from time to time. Any changes will be
      posted on our website with an updated "Last Updated" date. As this app
      collects no data, changes are expected to be minimal.
    </p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>
      8. Contact Us
    </h2>
    <p className="privacy-page-paragraph">
      If you have any questions about this Privacy Policy or the Watcher
      Installer App, please contact us:
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

export default PrivacyPolicyPage;

import React from 'react';
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>
        We respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your personal information and your choices about the collection and use of your information.
      </p>
      <h3>Information We Collect</h3>
      <p>
        We may collect personal information such as your name, email address, and mailing address when you provide it to us through our website.
      </p>
      <h3>How We Use Your Information</h3>
      <p>
        We use your personal information to respond to your inquiries and provide you with information about our services. We may also use your information to improve our website and services.
      </p>
      <h3>Information Sharing</h3>
      <p>
        We do not sell, rent, or trade your personal information to third parties. We may share your information with third-party service providers who assist us in operating our website and providing services to you.
      </p>
      <h3>Cookies</h3>
      <p>
        Our website may use cookies to improve your experience. You can choose to disable cookies through your browser settings.
      </p>
      <h3>Changes to This Policy</h3>
      <p>
        We may update this privacy policy from time to time. We will notify you of any changes by amending this page to reflect the new policy.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions or concerns about this privacy policy, please <Link to="/contact">contact us</Link>.
      </p>
    </div>
  );
}

export default Privacy;

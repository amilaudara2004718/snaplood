import React from "react";

const EULA = () => {
  return (
    <section className="bg-[#161616] text-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">End User License Agreement (EULA)</h1>

        <p className="text-gray-400 mb-6">
          This End User License Agreement ("EULA") is a legal agreement between you ("User") and SnapLood ("Company"). 
          By using the SnapLood application ("Application"), you agree to be bound by the terms of this EULA.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. License Grant</h2>
        <p className="text-gray-400 mb-4">
          The Company grants you a non-exclusive, non-transferable license to use the Application for personal, non-commercial use.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Restrictions</h2>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>You may not modify, reverse-engineer, or create derivative works of the Application.</li>
          <li>You may not distribute, sell, or lease the Application to any third party.</li>
          <li>You may not use the Application for any illegal or unauthorized purpose.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Intellectual Property</h2>
        <p className="text-gray-400 mb-4">
          All intellectual property rights in the Application and any related materials are owned by the Company. 
          Your use of the Application does not grant you any ownership rights in the Application.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Termination</h2>
        <p className="text-gray-400 mb-4">
          This EULA is effective until terminated. The Company may terminate this EULA at any time without notice if you breach any 
          of its terms. Upon termination, you must cease all use of the Application and destroy all copies of the Application.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Limitation of Liability</h2>
        <p className="text-gray-400 mb-4">
          The Company is not liable for any damages arising from the use or inability to use the Application, even if the Company 
          has been advised of the possibility of such damages.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Changes to EULA</h2>
        <p className="text-gray-400 mb-4">
          The Company may update this EULA from time to time. You are responsible for reviewing the EULA periodically. 
          Continued use of the Application after any changes constitutes acceptance of the revised EULA.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. Governing Law</h2>
        <p className="text-gray-400 mb-4">
          This EULA shall be governed by and construed in accordance with the laws of [Your Country/State]. 
          Any disputes arising from this EULA shall be resolved in the courts of [Your Country/State].
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. Contact Information</h2>
        <p className="text-gray-400 mb-4">
          If you have any questions or concerns regarding this EULA, please contact us at: 
          <a href="mailto:support@snaplood.com" className="text-blue-400 hover:underline"> support@snaplood.com</a>.
        </p>
      </div>
    </section>
  );
};

export default EULA;

import React, { useState, useEffect } from 'react';
import { Button } from '@heroui/react'; // Adjust import if needed
import { Checkbox } from '@heroui/react'; // Adjust import if needed

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [analytics, setAnalytics] = useState(true); // default on
  const [marketing, setMarketing] = useState(true); // default on

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    } else {
      // Optionally load previous choices when reopening preferences (not required by law)
      try {
        const parsed = JSON.parse(consent);
        setAnalytics(parsed.analytics ?? true);
        setMarketing(parsed.marketing ?? true);
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const saveConsent = (essential = true, analyticsVal = false, marketingVal = false) => {
    localStorage.setItem(
      'cookieConsent',
      JSON.stringify({
        essential,
        analytics: analyticsVal,
        marketing: marketingVal,
      })
    );
    setShow(false);
  };

  const acceptAll = () => {
    saveConsent(true, true, true);
  };

  const acceptEssentialOnly = () => {
    saveConsent(true, false, false);
  };

  const savePreferences = () => {
    saveConsent(true, analytics, marketing);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-gray-900 text-white p-6 shadow-2xl z-50">
      <div className="max-w-5xl mx-auto">
        {/* Main Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1 text-sm">
            <p className="font-semibold text-lg mb-2">We use cookies 🍪</p>
            <p className="text-gray-300">
              This website uses essential cookies for basic functionality and optional cookies
              (analytics & marketing) to improve your experience and provide personalized content.{' '}
              <a
                href="/privacy-policy"
                className="underline hover:text-white transition"
              >
                Learn more in our Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {!showPreferences ? (
              <>
                <Button
                  onPress={() => setShowPreferences(true)}
                  variant="bordered"
                  color="warning"
                  className="border-gray-600"
                >
                  Manage Preferences
                </Button>

                <Button
                  onPress={acceptEssentialOnly}
                  variant="bordered"
                  color="danger"
                >
                  Essential Only
                </Button>

                <Button
                  onPress={acceptAll}
                  color="primary"
                  className="font-medium"
                >
                  Accept All
                </Button>
              </>
            ) : (
              <>
                <Button
                  onPress={() => setShowPreferences(false)}
                  variant="bordered"
                  color="success"
                >
                  Back
                </Button>

                <Button
                  onPress={acceptAll}
                  color="primary"
                  className="font-medium"
                >
                  Accept All
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Preferences Panel */}
        {showPreferences && (
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="font-semibold text-lg mb-6">Cookie Preferences</p>

            <div className="space-y-2">
              {/* Essential - Always on */}
              <div>
                <Checkbox isDisabled isSelected>
                  <span className="font-medium text-white">Essential / Necessary Cookies</span>
                </Checkbox>
                <p className="ml-9 text-gray-400 text-sm mt-1">
                  Required for the site to function properly. Always active.
                </p>
              </div>

              {/* Analytics */}
              <div>
                <Checkbox
                  isSelected={analytics}
                  onValueChange={setAnalytics}
                  color="primary"
                >
                  <span className="font-medium text-white">Analytics Cookies</span>
                </Checkbox>
                <p className="ml-9 text-gray-400 text-sm mt-1">
                  Help us understand how visitors use the site and improve performance.
                </p>
              </div>

              {/* Marketing */}
              <div>
                <Checkbox
                  isSelected={marketing}
                  onValueChange={setMarketing}
                  color="primary"
                >
                  <span className="font-medium text-white">Marketing Cookies</span>
                </Checkbox>
                <p className="ml-9 text-gray-400 text-sm mt-1">
                  Let us show you personalized content and stay informed.
                </p>
              </div>
            </div>

            {/* Save Button in Preferences */}
            <div className="mt-8 flex justify-end">
              <Button
                onPress={savePreferences}
                color="secondary"
                size="md"
                className="font-medium"
              >
                Save My Preferences
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
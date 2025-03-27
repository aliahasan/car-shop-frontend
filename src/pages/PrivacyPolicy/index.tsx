import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Container from "@/shared/Container";

const PrivacyPolicy = () => {
  return (
    <Container>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div>
          <CardHeader className="border-b">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-center text-primary">
              RideHaven Privacy Policy
            </CardTitle>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardHeader>

          <ScrollArea className="h-[calc(100vh-200px)]">
            <CardContent className="p-6 space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-my-text-clr">
                  RideHaven ("we", "us", or "our") respects your privacy and is
                  committed to protecting your personal data. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard
                  your information when you use our website and services.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="font-medium mb-2 text-gray-800">
                  Personal Information
                </h3>
                <p className="text-my-text-clr mb-4">We may collect:</p>
                <ul className="list-disc pl-6 space-y-2 text-my-text-clr">
                  <li>Name, email address, phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely)</li>
                  <li>Driver's license information for test drives</li>
                  <li>Vehicle preferences and purchase history</li>
                </ul>

                <h3 className="font-medium mb-2 mt-4 text-gray-800">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-my-text-clr">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Device information</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold mb-4">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-my-text-clr">
                  <li>Process vehicle purchases and services</li>
                  <li>Provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Send service-related communications</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Data Sharing</h2>
                <p className="text-my-text-clr mb-2">
                  We may share information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-my-text-clr">
                  <li>
                    Service providers (payment processors, delivery services)
                  </li>
                  <li>Financial institutions for financing options</li>
                  <li>Government agencies when required by law</li>
                  <li>Business partners for joint promotions (with consent)</li>
                </ul>
                <p className="text-my-text-clr mt-4">
                  We <strong>do not sell</strong> your personal information to
                  third parties.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-my-text-clr">
                  We implement appropriate technical and organizational measures
                  to protect your personal data, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-my-text-clr mt-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure storage systems</li>
                  <li>Regular security audits</li>
                  <li>Limited access to personal data</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
                <p className="text-my-text-clr mb-2">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-my-text-clr">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent (where applicable)</li>
                </ul>
                <p className="text-my-text-clr mt-4">
                  To exercise these rights, please contact us at
                  privacy@ridehaven.com.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold mb-4">
                  7. Cookies and Tracking
                </h2>
                <p className="text-my-text-clr mb-2">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-my-text-clr">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic</li>
                  <li>Improve user experience</li>
                </ul>
                <p className="text-my-text-clr mt-4">
                  You can manage cookie preferences through your browser
                  settings.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-my-text-clr">
                  We may update this Privacy Policy periodically. We will notify
                  you of significant changes through email or a notice on our
                  website.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
                <p className="text-my-text-clr">
                  If you have questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p className="text-my-text-clr mt-2">
                  <strong>Email:</strong> privacy@ridehaven.com
                  <br />
                  <strong>Phone:</strong> +1 (800) 555-RIDE
                  <br />
                  <strong>Address:</strong> 123 Auto Plaza, Detroit, MI 48201
                </p>
              </section>
            </CardContent>
          </ScrollArea>

          <div className="p-6 border-t">
            <p className="text-sm text-muted-foreground text-center">
              By using our services, you acknowledge you have read and
              understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;

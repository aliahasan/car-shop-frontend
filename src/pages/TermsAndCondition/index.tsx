import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Container from "@/shared/Container";

const TermsAndConditions = () => {
  return (
    <Container>
      <div className="min-h-screen">
        <div>
          <div>
            <CardHeader className="border-b">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center text-my-btn_clr">
                RideHaven - Terms and Conditions
              </CardTitle>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardHeader>

            <ScrollArea className="h-[calc(100vh-200px)]">
              <CardContent className="p-6 space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-my-text-clr mb-2">
                    Welcome to RideHaven! These Terms and Conditions ("Terms")
                    govern your use of our website, services, and any
                    transactions you make with us. By accessing or using
                    RideHaven, you agree to comply with these Terms.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-my-text-clr">
                    <li>
                      You must be at least <strong>18 years old</strong> (or the
                      legal age in your jurisdiction) to use our services.
                    </li>
                    <li>
                      You agree to these Terms and our{" "}
                      <a
                        href="/privacy-policy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </li>
                    <li>
                      You will not misuse our services for illegal activities.
                    </li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    2. Account Registration
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-my-text-clr">
                    <li>
                      You must provide <strong>accurate and complete</strong>{" "}
                      information when creating an account.
                    </li>
                    <li>
                      You are responsible for{" "}
                      <strong>securing your login credentials</strong>.
                    </li>
                    <li>
                      RideHaven reserves the right to{" "}
                      <strong>suspend or terminate</strong> accounts violating
                      these Terms.
                    </li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    3. Vehicle Purchases
                  </h2>
                  <h3 className="font-medium mb-2 text-gray-800">
                    Pricing & Availability
                  </h3>
                  <p className="text-my-text-clr mb-4">
                    All prices are subject to change without notice. Vehicle
                    availability is not guaranteed until payment confirmation.
                  </p>

                  <h3 className="font-medium mb-2 text-gray-800">Payment</h3>
                  <p className="text-my-text-clr mb-4">
                    We accept major credit/debit cards, bank transfers, and
                    approved financing options.
                  </p>

                  <h3 className="font-medium mb-2 text-gray-800">Delivery</h3>
                  <p className="text-my-text-clr">
                    Delivery timelines vary based on location and vehicle
                    availability.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    4. After-Sale Services
                  </h2>
                  <h3 className="font-medium mb-2 text-gray-800">Warranty</h3>
                  <p className="text-my-text-clr mb-4">
                    Some vehicles come with a manufacturer's warranty. Extended
                    warranties may be available for purchase.
                  </p>

                  <h3 className="font-medium mb-2 text-gray-800">
                    Maintenance & Repairs
                  </h3>
                  <p className="text-my-text-clr">
                    We offer servicing packages—terms will be provided at the
                    time of service purchase.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    5. Returns & Refunds
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-my-text-clr">
                    <li>
                      Returns must be requested within <strong>7 days</strong>{" "}
                      of delivery.
                    </li>
                    <li>
                      Vehicles must be in <strong>original condition</strong>{" "}
                      with less than 100 miles.
                    </li>
                    <li>
                      Refunds may take <strong>7-14 business days</strong> to
                      process.
                    </li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    6. Limitation of Liability
                  </h2>
                  <p className="text-my-text-clr mb-2">
                    RideHaven shall not be liable for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-my-text-clr">
                    <li>Any indirect, incidental, or consequential damages</li>
                    <li>Vehicle performance after delivery</li>
                    <li>Third-party services or products</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    7. Governing Law
                  </h2>
                  <p className="text-my-text-clr">
                    These Terms shall be governed by and construed in accordance
                    with the laws of [Your Country/State], without regard to its
                    conflict of law provisions.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-xl font-semibold mb-4">
                    8. Changes to Terms
                  </h2>
                  <p className="text-my-text-clr">
                    RideHaven reserves the right to modify these Terms at any
                    time. Continued use of our services after changes
                    constitutes acceptance of the new Terms.
                  </p>
                </section>
              </CardContent>
            </ScrollArea>

            <div className="p-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                By using our services, you acknowledge that you have read and
                understood these Terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TermsAndConditions;

/**
 * Payment processing module.
 *
 * Talks to our payment gateway to authorize and capture payment.
 * Returns a confirmation number on success, throws on failure.
 */

export type PaymentDetails = {
  cardNumber: string;
  expiry: string;
  cvc: string;
  nameOnCard: string;
  amount: number;
};

export type PaymentResult = {
  confirmationNumber: string;
  amount: number;
  processedAt: string;
};

export async function processPayment(
  details: PaymentDetails,
): Promise<PaymentResult> {
  // Simulate a network round-trip to the gateway
  await new Promise((resolve) => setTimeout(resolve, 400));

  // TODO(ops): gateway vendor pushed a breaking change to their auth endpoint
  // last Thursday. Everything throws until we update the integration.
  // Rolled back the client SDK but it didn't help. Escalated to vendor support.
  throw new Error('Payment gateway unavailable');

  // Intended behavior once the gateway is back:
  // return {
  //   confirmationNumber: `SS-${Date.now().toString(36).toUpperCase()}`,
  //   amount: details.amount,
  //   processedAt: new Date().toISOString(),
  // };
}

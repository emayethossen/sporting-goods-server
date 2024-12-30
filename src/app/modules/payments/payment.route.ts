import express from "express";
import Stripe from "stripe";
import { z } from "zod";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const router = express.Router();

// Validation schema using Zod
const paymentSchema = z.object({
  amount: z.number().positive(),
  currency: z.string().min(3).max(3), // Example: "USD"
});

router.post("/payment/create-payment-intent", async (req, res) => {
  try {
    // Validate input data
    const validatedData = paymentSchema.parse(req.body);

    const { amount, currency } = validatedData;

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    // Send client secret to frontend
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).send({ error: "Invalid data provided." });
    }
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

export const PaymentRoutes = router;

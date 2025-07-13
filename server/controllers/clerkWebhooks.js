import { Webhook } from "svix";
import User from "../models/User.js";

// POST /api/clerk
const clerkWebhooks = async (req, res) => {
  try {
    const payload = req.body; // raw Buffer
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // 🔒 Verify the signature and parse the event
    const event = whook.verify(payload, headers);
    const { type, data } = event;

    console.log("Webhook type:", type);

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: `${data.first_name} ${data.last_name}`,
      image: data.image_url,
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        break;

      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData);
        break;

      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;

      default:
        console.log(`Unhandled event type: ${type}`);
        break;
    }

    res.status(200).json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error("Clerk Webhook Error:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;

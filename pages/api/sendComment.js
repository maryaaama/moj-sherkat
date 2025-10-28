// pages/api/sendComment.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { name, email, message } = req.body;

  try {
    // endpoint وردپرس برای ثبت کامنت
    const WP_API_URL = "https://your-wp-site.com/wp-json/wp/v2/comments";

    // اگر نیاز به احراز هویت باشه (کاربر لاگین یا ادمین)
    const username = "maryamadmin";
    const password = "poyan1389";
    const authHeader = Buffer.from(`${username}:${password}`).toString("base64");

    const response = await axios.post(
      WP_API_URL,
      {
        post: 0, // شناسه پست - 0 یعنی بدون ارتباط با پست خاص
        author_name: name,
        author_email: email,
        content: message
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${authHeader}`
        }
      }
    );

    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error("WordPress API error:", error.response?.data || error.message);
    return res.status(500).json({ success: false, error: "خطا در ارسال داده به وردپرس" });
  }
}

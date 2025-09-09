import mysql from "mysql2/promise";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { "your-name": name, "your-email": email, "your-message": message } = req.body;

    try {
      // اتصال به دیتابیس وردپرس (MySQL روی WampServer)
      const db = await mysql.createConnection({
        host: "localhost",       // هاست دیتابیس
        user: "root",            // یوزرنیم دیتابیس
        password: "",            // پسورد دیتابیس (اگه ست نکردی خالی بذار)
        database: "wp_next_project"    // اسم دیتابیس وردپرس
      });

      // ذخیره اطلاعات در جدول wp_comments
      const [result] = await db.execute(
        `INSERT INTO wp_comments 
          (comment_post_ID, comment_author, comment_author_email, comment_content, comment_approved, comment_date, comment_date_gmt) 
         VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
        [0, name, email, message, 1] // comment_post_ID=0 → به پست خاصی وصل نیست
      );

      await db.end();

      return res.status(200).json({ success: true, message: "پیام شما با موفقیت ذخیره شد" });
    } catch (error) {
      console.error("DB Error:", error);
      return res.status(500).json({ success: false, error: "خطا در ذخیره‌سازی در دیتابیس" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

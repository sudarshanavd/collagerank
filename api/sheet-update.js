export default function handler(req, res) {
  const secret = req.headers['x-sheet-secret'];

  if (secret !== process.env.SHEET_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  console.log("Received from Google Sheet:", req.body);

  return res.status(200).json({ ok: true });
}

export default async function handler(req, res) {
  console.log("=== /api/revalidate called ===")
  console.log("Request method:", req.method)
  console.log("Query params:", req.query)
  console.log("Request body:", req.body)
  console.log("Env REVALIDATE_SECRET:", process.env.REVALIDATE_SECRET)

  // optional: Sicherheits-Token prüfen
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    console.log("❌ Invalid secret!")
    return res.status(401).json({ message: "Invalid token" })
  }

  try {
    const { slug } = req.body // slug = Seite, die geändert wurde
    console.log("Slug to revalidate:", slug)

    if (slug) {
      await res.revalidate(`/${slug}`)
      console.log(`✅ Revalidated /${slug}`)
    } else {
      await res.revalidate("/")
      console.log("✅ Revalidated / (homepage)")
    }

    return res.json({ revalidated: true, slug: slug || "home" })
  } catch (err) {
    console.error("❌ Error revalidating:", err)
    return res.status(500).json({ error: err.message })
  }
}

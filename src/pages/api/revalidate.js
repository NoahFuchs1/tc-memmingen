export default async function handler(req, res) {
  // optional: Sicherheits-Token prüfen
  if (req.query.secret !== process.env.MY_REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" })
  }

  try {
    const { slug } = req.body // slug = Seite, die geändert wurde
    if (slug) {
      await res.revalidate(`/${slug}`)
    } else {
      // Falls du alles erneuern willst (Homepage + evtl. andere Seiten)
      await res.revalidate("/")
    }
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

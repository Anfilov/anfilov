const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "d8caxrt0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

async function main() {
  // Find existing sluzba document
  const doc = await client.fetch(
    '*[_type=="sluzba" && slug.current=="tvorba-loga"][0]{_id}'
  );

  if (!doc) {
    console.error("Služba 'tvorba-loga' not found. Run seed-sluzba.js first.");
    process.exit(1);
  }

  // Upload hero image from existing Sanity CDN URL
  const imageUrl =
    "https://cdn.sanity.io/images/d8caxrt0/production/5afc7a4b71602bbcfc97a654dd1f365530263352-2560x2560.webp";
  const response = await fetch(imageUrl);
  const buffer = Buffer.from(await response.arrayBuffer());
  const asset = await client.assets.upload("image", buffer, {
    filename: "tvorba-loga-hero.webp",
    contentType: "image/webp",
  });

  // Patch hero fields
  await client
    .patch(doc._id)
    .set({
      heroSubheadline:
        "Získejte důvěru těch správných zákazníků a oslovte je logem sladěným s celým vizuálním stylem. Provedu vás tvorbou firemní identity od strategie po samotný design.",
      heroMediaType: "image",
      heroImage: {
        _type: "imageWithAlt",
        image: {
          _type: "image",
          asset: { _type: "reference", _ref: asset._id },
        },
        alt: "Ukázka služby Tvorba loga",
      },
      heroPriceLabel: "Již od 15 000 Kč",
      heroProjectsLabel: "100+ projektů",
      heroDeliveryLabel: "dodání cca 12 dní",
      atomicAnswer:
        "Tvorba loga je proces návrhu unikátní vizuální značky, která odráží hodnoty a strategii vaší firmy. Služba je určena podnikatelům, startupům a firmám, které chtějí profesionální logo — ne generický clipart z Canvy. Získáte originální logotyp ve všech potřebných formátech, základní brand manuál a 2 kola revizí. Cena začíná od 15 000 Kč a dodání trvá přibližně 12 pracovních dní. Službu poskytuje Simon Anfilov z ANFILOV Studia v Praze, brand & web designer s 12 lety zkušeností a 200+ dokončenými projekty.",
      metaTitle: "Tvorba loga — ANFILOV Studio | Logo, které prodává",
      metaDescription:
        "Profesionální tvorba loga od 15 000 Kč. Originální design, strategický přístup, dodání do 12 dnů. Chci nabídku →",
    })
    .commit();

  console.log("✅ Hero fields seeded for 'Tvorba loga'");
}

main().catch((e) => {
  console.error("Error:", e.message);
  process.exit(1);
});

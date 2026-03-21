/**
 * Master runner — seeds all 36 services across 7 categories.
 * Usage: SANITY_WRITE_TOKEN=xxx node scripts/seed-all-sluzby.js
 */

async function main() {
  console.log("🚀 Seeding all 36 services...\n");

  const categories = [
    require("./seed-sluzby/01-znacka-identita"),
    require("./seed-sluzby/02-webdesign"),
    require("./seed-sluzby/03-firemni-tiskoviny"),
    require("./seed-sluzby/04-obalovy-design"),
    require("./seed-sluzby/05-socialni-media"),
    require("./seed-sluzby/06-digitalni-design"),
    require("./seed-sluzby/07-online-prodej"),
  ];

  for (const seedCategory of categories) {
    await seedCategory();
  }

  console.log("\n🎉 All 36 services seeded successfully!\n");
}

main().catch((e) => {
  console.error("Fatal error:", e.message);
  process.exit(1);
});

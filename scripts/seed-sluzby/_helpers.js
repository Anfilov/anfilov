const { client } = require("./_client");

/**
 * Fetch all project _id values from Sanity.
 */
async function fetchAllProjectIds() {
  return client.fetch('*[_type == "project"]._id');
}

/**
 * Fetch all tool _id values from Sanity.
 */
async function fetchAllToolIds() {
  return client.fetch('*[_type == "tool"]._id');
}

/**
 * Pick `count` random items from an array.
 */
function randomSubset(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, arr.length));
}

/**
 * Create a reference object for Sanity.
 */
function ref(id) {
  return { _type: "reference", _ref: id, _key: id.slice(-8) };
}

/**
 * Create or update a sluzba document by slug.
 * If the document exists, it patches it. Otherwise, it creates a new one.
 */
async function createOrUpdateSluzba(slug, data) {
  const existing = await client.fetch(
    '*[_type == "sluzba" && slug.current == $slug][0]._id',
    { slug }
  );

  if (existing) {
    await client.patch(existing).set(data).commit();
    console.log(`  ✏️  Patched "${data.name}" (${existing})`);
    return existing;
  }

  const doc = {
    _type: "sluzba",
    slug: { _type: "slug", current: slug },
    ...data,
  };
  const result = await client.create(doc);
  console.log(`  ✅ Created "${data.name}" (${result._id})`);
  return result._id;
}

module.exports = {
  client,
  fetchAllProjectIds,
  fetchAllToolIds,
  randomSubset,
  ref,
  createOrUpdateSluzba,
};

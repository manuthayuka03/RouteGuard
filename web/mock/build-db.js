import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Joins every file in mock/data/ into one mock/db.json for json-server.
// Each member edits only their own file in mock/data/.
const mockDir = dirname(fileURLToPath(import.meta.url));
const dataDir = join(mockDir, 'data');

const db = {};
const files = readdirSync(dataDir).filter((f) => f.endsWith('.json')).sort();

for (const file of files) {
  const data = JSON.parse(readFileSync(join(dataDir, file), 'utf8'));
  for (const key of Object.keys(data)) {
    if (db[key]) {
      throw new Error(`Collection "${key}" in ${file} already exists in another file.`);
    }
    db[key] = data[key];
  }
}

writeFileSync(join(mockDir, 'db.json'), JSON.stringify(db, null, 2));
console.log(`Built mock/db.json with: ${Object.keys(db).join(', ')}`);
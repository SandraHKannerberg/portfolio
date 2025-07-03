import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const files = ["projects", "skills", "experience"];
const dataDir = path.join(__dirname, "../public/data");

const addIdsToFile = (filename: string) => {
  const filePath = path.join(dataDir, `${filename}.json`);
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw) as Record<string, any>[];

    const updated = data.map((item) => {
      if (!item.id) {
        return { ...item, id: uuidv4() };
      }
      return item;
    });

    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
    console.log(`${filename}.json updated with id`);
  } catch (err) {
    console.error(`Error in file ${filename}.json:`, (err as Error).message);
  }
};

files.forEach(addIdsToFile);

import { access, appendFile, writeFile as write, constants, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from "node:path";

export async function exists(filePath: string) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch (e) { }

  return false;
}

export function capital(str: string) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export async function writeFile(result: string, name: string, env: string) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fileDir = path.join(__dirname, `/results`);
  const filePath = path.join(__dirname, `/results/${env}.md`);
  console.log(`Writing/Appending to ${filePath}`)

  const append = await exists(filePath);
  const markdown = `\n\n## ${name}\n\n${result}`;
  if (append) {
    await appendFile(filePath, markdown, `utf-8`);
    console.log(`Append ${capital(env)} of "${name}" benchmark results to ${filePath}`);
  } else {
    await mkdir(fileDir, { recursive: true });
    await write(filePath, `# ${capital(env)}${markdown}`, `utf-8`);
    console.log(`Write ${capital(env)} of "${name}" benchmark results to ${filePath}`);
  }
}
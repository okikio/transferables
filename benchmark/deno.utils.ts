import { constants } from "https://deno.land/std@0.177.0/node/fs.ts";
import { access, appendFile, writeFile as write, mkdir } from "https://deno.land/std@0.177.0/node/fs/promises.ts";
import path from "https://deno.land/std@0.177.0/node/path.ts";

export async function exists(filePath: string) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch (_e) { /* empty */ }

  return false;
}

export function capital(str: string) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export async function writeFile(result: string, name: string, env: string) {
  const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

  const fileDir = path.join(__dirname, `/results`);
  const filePath = path.join(__dirname, `/results/${env}.md`);
  console.log(`Writing/Appending to ${filePath}`)

  const append = await exists(filePath);
  const markdown = `\n\n## ${name}\n\n${result}`;
  if (append) {
    await appendFile(filePath, markdown, `utf-8`);
    console.log(`Append ${capital(env)} of "${name}" benchmark results to ${filePath}`);
  } else {
    await mkdir(fileDir, { recursive: true })
    await write(filePath, `# ${capital(env)}${markdown}`, `utf-8`);
    console.log(`Write ${capital(env)} of "${name}" benchmark results to ${filePath}`);
  }
}
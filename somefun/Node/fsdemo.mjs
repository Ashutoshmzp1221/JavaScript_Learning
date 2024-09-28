// import { readFile } from "fs/promises";

// const filePath = new URL('./index.html', import.meta.url);
//  // in es moduling we cannot use __dirname instead we use import.meta.url .

//  const data = await readFile(filePath,{encoding : 'utf-8'});

//  console.log(data);

import { readFile } from 'node:fs/promises';
try {
  const filePath = new URL('./index.html', import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
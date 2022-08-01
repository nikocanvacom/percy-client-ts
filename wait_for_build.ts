import PercyClient from '@percy/client';

export async function main() {
  const [ project, build ] = process.argv.slice(2);
  const client = new PercyClient({});
  const json = await client.waitForBuild({
    build,
    project,
    timeout: 10000,
  });
  console.log(JSON.stringify(json));
}

main()
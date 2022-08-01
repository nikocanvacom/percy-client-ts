import { getPercyClient } from './percy_client_wrapper.js';

export async function main() {
  const [ project, build ] = process.argv.slice(2);
  const client = await getPercyClient();
  const json = await client.waitForBuild({
    build,
    project,
    timeout: 10000,
  });
  console.log(JSON.stringify(json));
}

main()
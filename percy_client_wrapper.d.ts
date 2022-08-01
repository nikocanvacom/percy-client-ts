export function getPercyClient(): Promise<PercyClient>;

class PercyClient {
  constructor(
      options: { token?: string, clientInfo?: string, environmentInfo?: string, apiUrl?: string },
  );

  async getBuild(buildId: string);

  async get(path: string);

  async post(path: string, body?: {});

  getToken(): string;

  async getBuilds(
      projectSlug: string,
      filters: { 'build-id'?: string, 'category'?: string, 'subcategories'?: string[] } = {},
  );

  waitForBuild(data: {
    build?: string,
    project: string,
    commit?: string,
    timeout?: number,
    interval?: number,
  }, onProgress?: (string) => void): Promise<string>;
}
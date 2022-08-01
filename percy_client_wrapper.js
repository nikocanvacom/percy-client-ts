async function getPercyClient() {
    let { PercyClient } = await import('@percy/client');
    return new PercyClient();
}

module.exports = { getPercyClient }
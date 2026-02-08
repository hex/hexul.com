// Routes subdomain requests to the corresponding subdirectory.
// phosphor.hexul.com/privacy/ serves /phosphor/privacy/index.html

const SUBDOMAIN_MAP = {
  'phosphor': '/phosphor',
  'mirrorps': '/mirrorps',
  'hex-forge': '/hex-forge',
  'stash': '/stash',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname;

    const parts = hostname.split('.');
    const subdomain = parts.length > 2 ? parts.slice(0, -2).join('.') : null;

    if (subdomain && SUBDOMAIN_MAP[subdomain]) {
      url.pathname = SUBDOMAIN_MAP[subdomain] + url.pathname;
    }

    return env.ASSETS.fetch(new Request(url, request));
  },
};

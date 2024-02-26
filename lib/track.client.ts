function getProviderUrl(provider: ProviderOption) {
  const baseUrl = "/api/track";

  const o: Record<ProviderOption, string> = {
    fedex: "fedex",
    ups: "ups",
    usps: "usps",
  };

  return [baseUrl, o[provider]].join("/");
}

export async function trackClient(provider: ProviderOption, tracking: string) {
  const res = await fetch(getProviderUrl(provider), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tracking }),
  });

  if (!res.ok) return false;
  return await res.json();
}

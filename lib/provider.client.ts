export function getProvider() {
  let provider: ProviderOption =
    (window.localStorage.getItem("provider") as ProviderOption) || "";

  if (!provider) {
    window.localStorage.setItem("provider", "fedex");
    provider = "fedex";
  }

  return provider;
}

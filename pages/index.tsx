import type { GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
import { getPasscode } from "~/lib/passcode.server";
import { getProvider } from "~/lib/provider.client";
import Layout from "~/components/layout";
import Select from "~/components/select";
import Track from "~/components/track";
import Verify from "~/components/verify";
import { trackClient } from "~/lib/track.client";

type HomeProps = {
  PASSCODE: string;
};

export default function Home({ PASSCODE }: HomeProps) {
  const [passcode, setPasscode] = useState<string>("");
  const [provider, setProvider] = useState<ProviderOption>("fedex");
  const [tracking, setTracking] = useState<string>("");
  const [payload, setPayload] = useState<unknown>(null);

  const [view, setView] = useState<ViewOption>("verify");

  function verifyPasscode() {
    return passcode === PASSCODE;
  }

  function pushView() {
    const o: Record<ViewOption, ViewOption> = {
      verify: "select",
      select: "track",
      track: "track",
    };
    setView(o[view]);
  }

  function pullView() {
    const o: Record<ViewOption, ViewOption> = {
      verify: "verify",
      select: "verify",
      track: "select",
    };
    setView(o[view]);
  }

  async function track() {
    const payload = await trackClient(provider, tracking);
    setPayload(payload);
  }

  useEffect(() => {
    setProvider(getProvider());
  }, []);

  return (
    <Layout>
      {view === "verify" && (
        <Verify
          doesMatch={passcode === PASSCODE}
          pushView={pushView}
          verifyPasscode={verifyPasscode}
          passcode={passcode}
          setPasscode={setPasscode}
        />
      )}
      {view === "select" && (
        <Select
          pullView={pullView}
          pushView={pushView}
          provider={provider}
          setProvider={setProvider}
        />
      )}
      {view === "track" && (
        <Track
          track={track}
          payload={payload}
          pullView={pullView}
          tracking={tracking}
          setTracking={setTracking}
        />
      )}
    </Layout>
  );
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  const PASSCODE = getPasscode();
  return {
    props: {
      PASSCODE,
    },
  };
}

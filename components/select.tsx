type SelectProps = {
  provider: ProviderOption;
  pushView: () => void;
  pullView: () => void;
  setProvider: React.Dispatch<React.SetStateAction<ProviderOption>>;
};

export default function Select({
  provider,
  setProvider,
  pullView,
  pushView,
}: SelectProps) {
  return (
    <div id="select">
      <label htmlFor="">업체 선택</label>
      <ul className="grid grid-cols-2 gap-5">
        <button
          type="button"
          className="p-4 border"
          onClick={() => setProvider("fedex")}
        >
          Fedex
        </button>
        <button type="button" onClick={() => setProvider("ups")}>
          Ups
        </button>
      </ul>
      <p>{provider === "fedex" ? "FedEx" : "UPS"} 를 선택하셨습니다.</p>
      <button
        onClick={pushView}
        type="button"
        className="w-full bg-black text-white lg:hover:bg-neutral-500"
      >
        확인하기
      </button>
    </div>
  );
}

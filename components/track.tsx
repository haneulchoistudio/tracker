type TrackProps = {
  tracking: string;
  pullView: () => void;
  setTracking: React.Dispatch<React.SetStateAction<string>>;
  track: () => Promise<void>;
  payload: unknown;
};

export default function Track({
  tracking,
  setTracking,
  pullView,
  track,
  payload,
}: TrackProps) {
  return payload ? (
    <div id="result" className="flex flex-col gap-y-2.5 lg:gap-y-3.5">
      <p>{JSON.stringify(payload)}</p>
    </div>
  ) : (
    <div id="track" className="flex flex-col gap-y-2.5 lg:gap-y-3.5">
      <label htmlFor="">배송번호 입력</label>
      <input
        type="text"
        className="w-full block"
        value={tracking}
        onChange={(e) => setTracking(e.target.value)}
      />
      <button
        onClick={track}
        type="button"
        className="w-full bg-black text-white lg:hover:bg-neutral-500"
      >
        확인하기
      </button>
    </div>
  );
}

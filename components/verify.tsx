type VerifyProps = {
  doesMatch: boolean;
  verifyPasscode: () => boolean;
  pushView: () => void;
  passcode: string;
  setPasscode: React.Dispatch<React.SetStateAction<string>>;
};

export default function Verify({
  doesMatch,
  verifyPasscode,
  pushView,
  passcode,
  setPasscode,
}: VerifyProps) {
  function verify() {
    const status = verifyPasscode();

    if (!status) {
      alert("입력하신 패스코드가 일치 하지 않습니다.");
      setPasscode("");
      return;
    }
    setPasscode("");
    pushView();
  }

  return (
    <div id="verify" className="flex flex-col gap-y-2.5 lg:gap-y-3.5">
      <label htmlFor="">패스코드 입력</label>
      <input
        type="password"
        className="w-full block"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
      />
      <button
        onClick={verify}
        type="button"
        className="w-full bg-black text-white lg:hover:bg-neutral-500"
      >
        확인하기
      </button>
    </div>
  );
}

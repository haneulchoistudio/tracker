export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div id="layout" className="p-20">
      <section className="mb-10 border-b pb-10">
        <h2>SFA, BOSK 트래킹 서비스</h2>
        <p>필요한 배송 업체 별로 배송상황을 확인하세요.</p>
      </section>
      <main className="flex flex-col">{children}</main>
    </div>
  );
}

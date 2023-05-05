import Sidebar from "../components/sidebar";
import SearchBar from "../components/searchbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <div className="flex h-screen bg-slate-300">
        <Sidebar />
        <div className="flex-1 p-10 ">
          {/* <div className="flex md:w-1/2 sm:w-1/3"> */}
          <SearchBar />
          {/* </div> */}

          {children}
        </div>
      </div>
    </section>
  );
}

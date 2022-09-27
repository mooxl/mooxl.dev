import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Education from "../components/education.tsx";

export default function Index() {
  return (
    <div class="max-w-xl my-5 mx-auto lg:mx-2 text-sm text-white font-plex leading-none tracking-wide">
      <div class="grid grid-cols-desktop lg:grid-cols-1 gap-x-5 gap-y-10 lg:gap-y-0">
        <Menu />
        <Me />
        <Education />
      </div>
    </div>
  );
}

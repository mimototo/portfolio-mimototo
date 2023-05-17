import HeaderBar from "./componets/HeaderBar";

export default function Home() {
  const links = [
    { link: "/about", label: "About" },
    { link: "/works", label: "Works" },
    { link: "/blog", label: "Blog" },
    { link: "/contact", label: "Contact" },
  ];
  return (
    <div>
      <HeaderBar links={links} />
    </div>
  );
}

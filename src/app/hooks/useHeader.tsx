import Link from "next/link";
import { Item } from "../interface/haderMenuInterface";

const useHeader = () => {
  const items: Item[] = [
    { label: "Accueil", url: "/" },
    { label: "Mes services", url: "/services" },
    { label: "Tarifs", url: "/tarifs" },
    { label: "A propos", url: "/aPropos" },
    { label: "Contact", url: "/contacts" },
  ];

  const MenuContent = () => (
    <nav className="w-4/6  text-xs">
      <ul
        className="flex flex-col w-full items-end justify-between p-2 
                      phone:hidden"
      >
        {items.map((item, index) => (
          <li key={index}>
            <Link
              className="hover:text-blue-700 hover:underline"
              href={item.url}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return { items, MenuContent };
};

export default useHeader;

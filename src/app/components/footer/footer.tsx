import { MdOutlinePhoneAndroid } from "react-icons/md";

export default function Footer(): JSX.Element {
  return (
    <div className="flex flex-row text-base phone:text-xs justify-center items-center p-4 bg-gray-200">
      <div className="flex flex-row w-1/2 justify-around">
        <div className="flex flex-row border-2 border-red-300 w-1/3 justify-center items-center">
          <h1 className="bold">OMI GESTION</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-2 gap-4">
          <p>06 21 89 91 32</p>
          <p>fdsfsdqf@fds.com</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 gap-4">
          <p>Politique de confidentialité</p>
          <div className="flex flex-row gap-2 items-center justify-center">
            <p>Mentions légales</p>
            <h2 className="underline text-center">CGPS</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

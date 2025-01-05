import { Button } from "components/shared/button";
import React from "react";
import { useCookies } from "react-cookie";

const CookiesBanner = () => {
  const [cookies, setCookie] = useCookies(["cookie-consent"]);

  if (cookies["cookie-consent"] === true) {
    return null;
  }

  if (cookies["cookie-consent"] === false) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 ml-5 bg-white p-5 shadow-md max-w-md rounded-lg flex flex-col gap-2 border border-gray-400 z-40">
      <p className="text-black font-medium">Cenimy prywatność użytkowników</p>
      <p className="text-sm">
        Używamy plików cookie, aby poprawić jakość przeglądania, wyświetlać
        reklamy lub treści dostosowane do indywidualnych potrzeb użytkownika
        oraz analizować ruch na stronie. Kliknięcie przycisku „Akceptuję”
        oznacza zgodę na użycie plików cookie.
      </p>
      <div className="flex gap-2 mt-2">
        <button
          className="text-sm text-gray-700 py-1 px-4 border-gray-700 border-2 hover:bg-gray-200 transition-colors"
          onClick={() => setCookie("cookie-consent", false)}
        >
          Odrzuć
        </button>
        <button
          className="text-sm py-1 px-4 border-gray-700 border-2 bg-gray-700 text-white hover:bg-gray-900 transition-colors"
          onClick={() => setCookie("cookie-consent", true)}
        >
          Akceptuję
        </button>
      </div>
    </div>
  );
};

export default CookiesBanner;

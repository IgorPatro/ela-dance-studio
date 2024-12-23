import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Navigation } from "components/navigation";

const PrivacyPolicyPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation alwaysFixed />
      <section className="relative pb-20 pt-32">
        <div className="layout-container w-full flex flex-col">
          <h1 className="text-3xl pb-4 text-black">Polityka prywatności</h1>
          <p className="text-lg pb-4">
            Polityka prywatności opisuje zasady przetwarzania przez nas
            informacji na Twój temat, w tym danych osobowych oraz ciasteczek,
            czyli tzw. cookies.
          </p>
          <h2 className="text-xl pb-2 text-black pt-6">1. Informacje ogólne</h2>
          <ol className="list-decimal pl-6">
            <li>
              Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
              adresem url: eladancestudio.pl
            </li>
            <li>
              Operatorem serwisu oraz Administratorem danych osobowych jest: Ela
              Szelążek
            </li>
            <li>
              Adres kontaktowy poczty elektronicznej operatora:
              eladancestudio@gmail.com
            </li>
            <li>
              Operator jest Administratorem Twoich danych osobowych w
              odniesieniu do danych podanych dobrowolnie w Serwisie.
            </li>
            <li>
              Serwis wykorzystuje dane osobowe w następujących celach:
              <ul className="list-disc pl-4">
                <li>Prowadzenie newslettera</li>
                <li>Obsługa zapytań przez formularz</li>
              </ul>
            </li>
            <li>
              Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i
              ich zachowaniu w następujący sposób:
              <ul className="list-disc pl-4">
                <li>
                  Poprzez dobrowolnie wprowadzone w formularzach dane, które
                  zostają wprowadzone do systemów Operatora.
                </li>
                <li>
                  Poprzez zapisywanie w urządzeniach końcowych plików cookie
                  (tzw. „ciasteczka”).
                </li>
              </ul>
            </li>
          </ol>

          <h2 className="text-xl pb-2 text-black pt-6">
            2. Wybrane metody ochrony danych stosowane przez Operatora
          </h2>
          <ol className="list-decimal pl-6">
            <li>
              Miejsca logowania i wprowadzania danych osobowych są chronione w
              warstwie transmisji (certyfikat SSL).
            </li>
            <li>Hasła użytkowników są przechowywane w postaci hashowanej.</li>
            <li>Operator okresowo zmienia swoje hasła administracyjne.</li>
            <li>
              Istotnym elementem ochrony danych jest regularna aktualizacja
              wszelkiego oprogramowania, wykorzystywanego przez Operatora do
              przetwarzania danych osobowych.
            </li>
          </ol>

          <h2 className="text-xl pb-2 text-black pt-6">3. Hosting</h2>
          <ol className="list-decimal pl-6">
            <li>
              Serwis jest hostowany (technicznie utrzymywany) na serwerach
              operatora: cyberFolks.pl
            </li>
            <li>
              Firma hostingowa w celu zapewnienia niezawodności technicznej
              prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:
              <ul className="list-disc pl-4">
                <li>
                  zasoby określone identyfikatorem URL (adresy żądanych zasobów
                  – stron, plików),
                </li>
                <li>czas nadejścia zapytania,</li>
                <li>czas wysłania odpowiedzi,</li>
                <li>
                  nazwę stacji klienta – identyfikacja realizowana przez
                  protokół HTTP,
                </li>
                <li>
                  informacje o błędach jakie nastąpiły przy realizacji
                  transakcji HTTP,
                </li>
                <li>
                  adres URL strony poprzednio odwiedzanej przez użytkownika
                  (referer link),
                </li>
                <li>informacje o przeglądarce użytkownika,</li>
                <li>informacje o adresie IP,</li>
                <li>
                  informacje diagnostyczne związane z procesem samodzielnego
                  zamawiania usług,
                </li>
                <li>
                  informacje związane z obsługą poczty elektronicznej kierowanej
                  do Operatora oraz wysyłanej przez Operatora.
                </li>
              </ul>
            </li>
          </ol>

          <h2 className="text-xl pb-2 text-black pt-6">
            4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania
            danych
          </h2>
          <ol className="list-decimal pl-6">
            <li>
              W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
              dane osobowe innym odbiorcom, jeśli będzie to niezbędne do
              wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków
              ciążących na Administratorze. Dotyczy to takich grup odbiorców:
              <ul className="list-disc pl-4">
                <li>upoważnieni pracownicy i współpracownicy,</li>
                <li>
                  firmy świadczące usługi marketingu na rzecz Administratora.
                </li>
              </ul>
            </li>
            <li>
              Twoje dane osobowe przetwarzane przez Administratora nie dłużej,
              niż jest to konieczne do wykonania związanych z nimi czynności. W
              odniesieniu do danych marketingowych dane nie będą przetwarzane
              dłużej niż przez 3 lata.
            </li>
            <li>
              Przysługuje Ci prawo żądania od Administratora:
              <ul className="list-disc pl-4">
                <li>dostępu do danych osobowych,</li>
                <li>ich sprostowania,</li>
                <li>usunięcia,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>przenoszenia danych.</li>
              </ul>
            </li>
            <li>
              Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
              przetwarzania danych osobowych w celach marketingowych.
            </li>
            <li>
              Na działania Administratora przysługuje skarga do Prezesa Urzędu
              Ochrony Danych Osobowych.
            </li>
            <li>
              Dane osobowe nie są przekazywane poza teren Unii Europejskiej.
            </li>
          </ol>

          <h2 className="text-xl pb-2 text-black pt-6">
            5. Informacje w formularzach
          </h2>
          <ol className="list-decimal pl-6">
            <li>
              Serwis zbiera informacje podane dobrowolnie przez użytkownika, w
              tym dane osobowe.
            </li>
            <li>
              Serwis może zapisać informacje o parametrach połączenia
              (oznaczenie czasu, adres IP).
            </li>
            <li>
              Dane podane w formularzu są przetwarzane w celu wynikającym z
              funkcji konkretnego formularza.
            </li>
          </ol>

          <h2 className="text-xl pb-2 text-black pt-6">
            6. Logi Administratora
          </h2>
          <ol className="list-decimal pl-6">
            <li>
              Informacje o zachowaniu użytkowników w serwisie mogą podlegać
              logowaniu. Dane te są wykorzystywane w celu administrowania
              serwisem.
            </li>
          </ol>

          <h2 className="text-xl pb-2 text-black pt-6">
            7. Istotne techniki marketingowe
          </h2>
          <ol className="list-decimal pl-6">
            <li>
              Operator stosuje analizę statystyczną ruchu na stronie, poprzez
              Google Analytics.
            </li>
            <li>Operator stosuje techniki remarketingowe.</li>
            <li>Operator korzysta z piksela Facebooka.</li>
            <li>
              Operator stosuje rozwiązanie badające zachowanie użytkowników
              poprzez mapy ciepła oraz nagrywanie zachowań na stronie.
            </li>
            <li>
              Operator stosuje rozwiązanie automatyzujące działanie Serwisu.
            </li>
          </ol>

          <h2 className="text-xl pb-2 text-black pt-6">
            8. Informacja o plikach cookies
          </h2>
          <ol className="list-decimal pl-6">
            <li>Serwis korzysta z plików cookies.</li>
            <li>
              Pliki cookies wykorzystywane są w następujących celach:
              <ul className="list-disc pl-4">
                <li>utrzymanie sesji użytkownika Serwisu,</li>
                <li>
                  realizacja celów określonych w części "Istotne techniki
                  marketingowe".
                </li>
              </ul>
            </li>
            <li>
              W ramach Serwisu stosowane są dwa rodzaje plików cookies:
              „sesyjne” oraz „stałe”. Cookies „sesyjne” są plikami tymczasowymi.
              „Stałe” pliki cookies przechowywane są przez czas określony w
              parametrach plików cookies.
            </li>
          </ol>

          <h2 className="text-xl pb-2 text-black pt-6">
            9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać
            zgodę?
          </h2>
          <ol className="list-decimal pl-6">
            <li>
              Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić
              ustawienia przeglądarki. Szczegółowe informacje na ten temat
              zawiera pomoc lub dokumentacja przeglądarki internetowej.
            </li>
            <li>
              W celu zarządzania ustawienia cookies wybierz z listy poniżej
              przeglądarkę internetową, której używasz i postępuj zgodnie z
              instrukcjami:
              <ul className="list-disc pl-4">
                <li>Edge</li>
                <li>Internet Explorer</li>
                <li>Chrome</li>
                <li>Safari</li>
                <li>Firefox</li>
                <li>Opera</li>
                <li>Android</li>
                <li>Safari (iOS)</li>
                <li>Windows Phone</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;

export const Head: HeadFC = () => (
  <title>Polityka Prywatności | Ela Dance Studio</title>
);

# Gratia Artis

Strona stworzona z myślą o młodych artystach - ma na celu umożliwienie im sprzedaży swoich prac. 

Autorzy: Katarzyna Kowalska, Joanna Cieszyńska

## Spis treści
* [Informacje](#informacje)
* [Technologie](#technologie)
* [Wygląd](#wygląd)
* [Funkcjonalności](#funkcjonalności)
* [Instalacja](#instalacja)
* [Testy](#testy)


## Informacje

Gratia Artis to projekt stworzony w ramach zajęć na Uniwersytecie. Jest to aplikacja mobilna umożliwiająca młodym artystom sprzedaż ich dzieł bez pośredników.
Aby opublikować swój obraz lub kupić dzieło sztuki wystarczy zarejestrować się w serwisie.

## Technologie
* [Visual Studio Code](https://code.visualstudio.com/)
* [Adobe XD](https://www.adobe.com/pl/products/xd.html)
* [Ionic Framework](https://ionicframework.com/)
* [Firebase Database; Firebase Storage](https://firebase.google.com/)
* [Uploadcare](https://uploadcare.com/)
* [AngularFire](https://angular.io/)
* [@angular/http](https://angular.io/)
* [cordova-plugin-email-composer](https://ionicframework.com/)

## Wygląd
Projekt powstał najpierw w Adobe XD, następnie został zaimplementowany w Ionic Framework.

<img src="/screenshots/homepage.PNG" width="200px" /> <img src="/screenshots/feed.PNG" width="200px" /> <img src="/screenshots/cart modal.PNG" width="200px" /> <img src="/screenshots/profile.PNG" width="200px" /> 


## Funkcjonalności
Opis istniejących funkcjonalności: 
  * Utworzenie strony domowej i zarysu interfejsu użytkownika
  * połączenie projektu z platformą firebase(przechowywanie listy zarejestrowanych użytkowników)
  * Rejestracja: 
      - weryfikacja zgodności hasła i potwierdzenia, niedopuszczanie słabych haseł
      - pomyślna rejestracja pozwala przejść na stronę 'tabs' 
  * Logowanie:
      - jeśli użytkownik nie został wcześniej zarejestrowany w logu pojawi się stosowna informacja
  * połączenie z firebase, możliwość przesłania zdjęć i przechowywania ich w chmurze 
  * Wstawianie obrazów
  * Zakładka kontakt - możliwość wysłania wiadomości email
  * Zakładka sklepu, możliwość dodania artykułu do koszyka i zakupienia go
  * Możliwość zmiany zdjęcia profilowego, nazwy użytkownika oraz hasła
  
  ## Instalacja
Aby uruchomić projekt potrzebny jest node.js 
 * Otwórz Node.js command prompt
 * Przejdź do folderu, w krórym znajduje się projekt 
 * Wpisz komendę `ionic serve`
Podgląd aplikacji powienien otworzyć się w przeglądarce. Aby uruchomić projekt na telefonie z systemem Android bądź w emulatorze Android Studio:
 * Wpisz komendę `ionic cordova android build`
 * Node.js command prompt podpowie Ci gdzie zapisał się plik z rozszerzeniem .apk - otwórz ten plik na swoim telefonie lub w Android Studio 
 
 ## Testy 
 Testy end-to-end są zapisane w pliku e2e. Przeprowadzone są za pomocą selenium. 
 Aby uruchomić testy należy wpisać komendę `ng run e2e` w command prompt Node.js
 
 
  
    
     

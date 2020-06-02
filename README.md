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
  Aby uruchomić aplikację niezbędne są node.js, utworzenie w wybranym folderze projektu ionic oraz instalacja bibliotek:
```
	ionic start <name> <template>
	npm install firebase @angular/fire
	npm install @angular/http@latest
	ionic cordova plugin add cordova-plugin-email-composer
	npm install @ionic-native/email-composer
```
Następnie należy przenieść pliki znajdujące się w repozytorium projektu do utworzonego folderu, oraz wykonać polecenie ionic serve. Podgląd aplikacji powienien otworzyć się w przeglądarce. Aby uruchomić projekt na telefonie z systemem Android bądź w emulatorze Android Studio:
 * Wpisz komendę `ionic cordova android build`
 * Node.js command prompt podpowie Ci gdzie zapisał się plik z rozszerzeniem .apk - otwórz ten plik na swoim telefonie lub w Android Studio 
 
## Testy 
### End-to-end
Testy end-to-end są zapisane w pliku e2e. Przeprowadzone są za pomocą [Protractor](https://www.protractortest.org/#/).To kompleksowa platforma testowa dla aplikacji Angular i AngularJS. Uruchamia testy aplikacji działającej w prawdziwej przeglądarce, wchodząc z nią w interakcję z użytkownikiem. 

Poniżej przykład testu e2e. Scenariusz: niezalogowany użytkownik może wpisać tekst w polu "Temat" w wiadomości na stronie Kontakt. 
 ```
  describe('before logged in', () => {
     it('writes the message in the contact form', async () => {
        contact.navigateTo();
        await contact.typeInTheSubcjet();
        expect(contact.getItemText()).toEqual('Temat');
    });
 }
 ``` 
 W osobnym pliku contact.po.ts znajduje się kod podany poniżej. Dzięki niemu możemy się odwoływać do 
 ```
 import { browser, by, element } from 'protractor';

export class ContactPage {
  navigateTo() {
    return browser.get('/contact');
  }

  getItemText() {
    return element(by.css('ion-item ion-label')).getText();
  }

  async typeInTheSubcjet() {
    await element(by.css('ion-input[placeholder="Podaj temat wiadomości"] input')).sendKeys("wiadomość"); 
  }
  
}
```
Aby uruchomić testy należy wpisać komendę `ng e2e` w command prompt Node.js
### Mock
Testowanie makiet odbyło się za pomocą [Jasmine](https://jasmine.github.io/). Jasmine tworzy obiekty (które nazywa "szpiegami" ang."spy"), aby zastąpić zależności podczas testowania. Gdy używany jest obiekt próbny, test może kontrolować wartości zwracane przez wywołania tej zależności, dzięki czemu bieżący test jest niezależny od zmian wprowadzonych w zależności.

Aby uruchomić testy należy wpisać komendę `ng test`. 
### Unit Tests
Testowanie jednostkowe odbyło się za pomocą frameworka Mocha. 

Aby uruchomić testy należy wpisać komendę `ng test`.

 
## Licencja 
Oprogramowanie zamknięte, objęte restrykcjami dotyczącymi używania, kopiowania lub modyfikacji. Repozytorium kodu jest prywatne.
 
## Kontakt 
 
 [Katarzyna Kowalska](https://github.com/katkow)
 
 [Joanna Cieszyńska](https://github.com/jcieszynska)
 
    
     

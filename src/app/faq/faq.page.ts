import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})

export class FaqPage implements OnInit {

  questions: Array<string> = [
    "Jak długo czeka się na przesyłkę?",
    "Jak śledzić przesyłkę?",
    "Czy mogę zapłacić przy odbiorze?",
    "Czy mogę zwrócić przedmiot?",
    "W jaki sposób Gratia Artis zabezpiecza płatności kartą?",
    "Sprzedaż krok po kroku",
    "Kto płaci za wysyłkę?",
<<<<<<< HEAD
    "W jakim terminie należy wysłać przedmior?",
=======
    "W jakim terminie należy wysłać przedmiot?",
>>>>>>> master
    "Jak wysłać przedmiot?"
  ];
  answers: Array<string> = [
    "Sprzedawca ma 5 dni roboczych na wysłanie przedmiotu, w zależności od metody wysyłki wybranej przez kupującego. Czas wysyłki rózni się w zależności od miejsca docelowego przesyłki oraz dostawcy przesyłek: zazwyczaj wynosi on 2-3 dni robocze, jednak czasami może się wydłużyć.",
    "Zarówno kupujący jak i sprzedający mogą śledzić przesyłkę za pomocą linku wysłąnego na maila. Mogą oni sprawdzić lokalizację przesyłki oraz przeidywaną datę jej dostarczenia.",
    "Metody płatności dostępne na Gratia Artis:   1. Ważne karty debetowe i kredytowe Akceptujemy karty płatnicze wszystkich największych wydawców. Przyjmujemy też karty przedpłacone (pre-paid) i e-karty, ale w ich przypadku nie mamy możliwości dokonania zwrotu środków. 2. DotPay  DotPay to usługa bankowości internetowej, która współpracuje ze wszystkimi najpopularniejszymi bankami w Polsce.    Możesz korzystać z różnych usług przelewów online, usług przelewów gotówkowych i voucherów za pośrednictwem DotPay.  3. Apple Pay  Jeśli na twoim urządzeniu z systemem iOS jest zainstalowane Apple Pay, możesz użyć go do zapłaty za zamówienie na Vinted.  Potwierdź płatność za pomocą Touch ID bez opuszczania strony Gratia Artis. Możliwe są też inne metody weryfikacji (np. Face ID lub kod) – ich dostępność zależy od twojego urządzenia. ",
    "Jeśli otrzymany przedmiot został uszkodzony w transporcie lub jest niezgodny z opisem, możesz go odesłać i otrzymać zwrot kosztów. Jeżeli przedmiot nie jest w twoim stylu, możesz dokonać zwrotu tylko za zgodą sprzedającego. ",
    "Gratia Artis wykorzystuje technologię zwaną 3-D Secure w celu uwierzytelnienia posiadacza karty przed dokonaniem niektórych zakupów. \n Funkcja 3-D Secure to dodatkowe zabezpieczenie płatności online i, w zależności od wydawcy karty, jest znana pod różnymi nazwami: Verified by Visa, MasterCard SecureCode lub American Express SafeKey.",
    "Dodaj przedmiot do Katalogu. \n •	Zrób świetne zdjęcia przedmiotu, stwórz dokładny opis, ustal cenę i właściwy rozmiar wysyłki \n •	Zamieszczenie przedmiotu w Katalogu jest bezpłatne \n     •	Dodanie więcej niż jednego przedmiotu, zwiększa szanse na szybką sprzedaż \n    Zbuduj swój profil. \n    •	Zweryfikuj konto \n    •	Oreśl metody płatności. Możesz także ustawić rabat na zakup zestawu przedmiotów. \n    •	Dodaj opis profilu i zdjęcie, co pomoże ci wzbudzić zaufanie społeczności \n    Poczekaj na kupujących. \n    •	Przygotuj się na ewentualne pytania kupujących \n    •	Uzgodnij ostateczną cenę przedmiotu i koszt wysyłki  \n    •	Ustal, czy jest możliwość ewentualnego zwrotu \n    Sprzedane! Czas na wysyłkę. \n    •	Zapakuj przedmiot - kupujący ucieszy się, jeśli zrobisz to własnoręcznie, dodając coś od siebie \n •	Wyślij produkt wybraną przez kupującego opcją wysyłki \n    •	Jeśli zamierzasz wysłać rzecz w późniejszym terminie, poinformuj o tym kupującego \n    •	Prześlij kupującemu numer nadania przesyłki \n",
    "Koszty wysyłki zawsze pokrywa kupujący i są one dodane do całkowitej kwoty zamówienia. Sprzedający jest zobowiązany do wysłania paczki sposobem opłaconym przez kupującego. ",    
    "Masz 5 dni roboczych na wysłanie przedmiotu. Czas liczy się od dnia, w którym kupujący zakupił przedmiot. Jeśli przekroczysz ten termin, będziemy musieli anulować zamówienie. Nie polecamy zwlekać z wysyłką do ostatniej chwili. Pamiętaj, że firma przewozowa może aktualizować status wysyłki do 48 godzin.",
    "Krok 1. Ustal właściwą wielkość paczki \n    •	Podczas dodawania przedmiotu, określ właściwy rodzaj paczki. \n    Krok 2. Przedmiot sprzedany! Wyślij paczkę na czas. \n    •	Kiedy sprzedasz przedmiot, zostaniesz o tym poinformowany mailem - podążaj za instrukcjami wysyłki. \n    •	Wyślij przesyłkę w ciągu 5 dni roboczych. W przeciwnym wypadku będziemy musieli anulować transakcję. \n    •	Koszt wysyłki zawsze pokrywa kupujący. Sposób płatności za wysyłkę może się jednak różnić w zależności od sposobu wybranego przez kupującego: \n    o	Możesz otrzymać opłaconą etykietę \n    o	Może zaistnieć konieczność zapłaty z góry za przesyłkę i otrzymania zwrotu kosztów, jeśli kupujący wybierze przesyłkę bez opłaconej etykiety lub opcję wysyłki indywidualnej. \n"
  ];

  constructor(
    public menu: MenuController,
    public alertController: AlertController) { }

  ngOnInit() {
  }
  openCart() {
    this.menu.open('cart');
  }

<<<<<<< HEAD
  async answerQuestion(id: string) {
    const alert = await this.alertController.create({
      header: id,
      inputs: [
        {
          name: 'odpowiedz' + id,
          value: 'zdecydowanie nie',
          checked: false
        }],
=======

  async answerQuestion(id: string, m: string) {
    for(let answer of this.answers){
      m = answer;
    }
    const alert = await this.alertController.create({
      header: id,
      message: m, 
>>>>>>> master
        buttons: [
             {
            text: 'OK',
            handler: () => {
              console.log('Confirm Ok');
            }
          }],
          cssClass: 'alert'
<<<<<<< HEAD
    });

    await alert.present();
=======
        });  
        
    await alert.present();
    
>>>>>>> master
  }
}

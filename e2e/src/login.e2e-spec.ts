import { HomePage } from './page-objects/home.po';
import { LoginPage } from './page-objects/login.po';
import { RegistrationPage } from './page-objects/registration.po';
import { FeedPage } from './page-objects/feed.po';
import { FaqPage } from './page-objects/faq.po';
import { UploaderPage } from './page-objects/upload.po';
import { ProfilePage } from './page-objects/profile.po';
import { ContactPage } from './page-objects/contact.po';
import { browser, by, element } from 'protractor';


describe('Login', () => {
 // const home = new HomePage();
   const login = new LoginPage();
   const registration = new RegistrationPage();
   const feed = new FeedPage();
   const faq = new FaqPage();
//   const upload = new UploaderPage();
//   const profile = new ProfilePage();
   const contact = new ContactPage();


  beforeEach(() => {
    //home.load();

  });

  describe('before logged in', () => {
    it('displays the login screen', () => {
        login.navigateTo();
        expect(login.getParagraphText()).toEqual('Logowanie');
    });

    it('displays the registration screen', () => {
        registration.navigateTo();
        expect(registration.getParagraphText()).toEqual('Rejestracja');
    });

    it('displays the feed screen', () => {
        feed.navigateTo();
        expect(feed.getCartButton());
    });

    it('displays the faq screen', () => {
        faq.navigateTo();
        expect(faq.getParagraphText()).toEqual('1.Jak długo czeka się na przesyłkę?');
    });

    it('displays the contact screen', () => {
        contact.navigateTo();
        expect(contact.getItemText()).toEqual('Temat');
    });

    it('writes the message in the contact form', async () => {
        contact.navigateTo();
        await contact.typeInTheSubcjet();
        expect(contact.getItemText()).toEqual('Temat');
    });

    // it('sends the message in the contact form', () => {

    // }); -----mock

    // it('displays an error message if the login fails', async () => {
    //   await login.enterLogin();
    //   await login.enterPassword();
    //   login.clickSignIn();
    //   login.waitForError();
    //   expect(login.getErrorMessage()).toEqual(
    //     'Użytkownik nie istnieje'
    //   );
    // }); ----------mock

  describe('once logged in', () => {
    beforeEach(() => {
    //   tasks.waitUntilVisible();
    });

    // it('navigates to the tabs page if the login succeeds', () => {
    //   login.enterLogin();
    //   login.enterPassword();
    //   login.clickSignIn().click();
    //   feed.waitUntilVisible();
    // });

//     it('allows navigation to the feed page', () => {
//     //   menu.clickCustomers();
//     //   customers.waitUntilVisible();
//     //   tasks.waitUntilInvisible();
//     });

//     it('allows navigation to the upload page', () => {
//     //   menu.clickAbout();
//     //   about.waitUntilVisible();
//     //   tasks.waitUntilInvisible();
//     });

//     it('allows navigation back to the profile page', () => {
//     //   menu.clickAbout();
//     //   tasks.waitUntilInvisible();
//     //   menu.clickTasks();
//     //   tasks.waitUntilVisible();
//     });

//     it('allows navigation back to the edit-profile page', () => {
//     //     menu.clickAbout();
//     //     tasks.waitUntilInvisible();
//     //     menu.clickTasks();
//     //     tasks.waitUntilVisible();
//        });
   });
  })
})
import { AppPage } from './app.po';

// Basic unit test to test angular component
describe('andres-to-do-list-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual("Andre's To Do List App");
  });
});

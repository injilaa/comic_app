import { ProjectAngularPage } from './app.po';

describe('project-angular App', () => {
  let page: ProjectAngularPage;

  beforeEach(() => {
    page = new ProjectAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

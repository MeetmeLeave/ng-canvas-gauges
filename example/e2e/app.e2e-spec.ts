import { GaugesDemoPage } from './app.po';

describe('gauges-demo App', () => {
  let page: GaugesDemoPage;

  beforeEach(() => {
    page = new GaugesDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

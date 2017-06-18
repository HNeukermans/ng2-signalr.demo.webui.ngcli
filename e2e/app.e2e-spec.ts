import { Ng3Signalr402DemoWebuiNgcliPage } from './app.po';

describe('ng3-signalr402-demo-webui-ngcli App', () => {
  let page: Ng3Signalr402DemoWebuiNgcliPage;

  beforeEach(() => {
    page = new Ng3Signalr402DemoWebuiNgcliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

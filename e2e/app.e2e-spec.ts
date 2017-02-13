import { ActiveProkCliPage } from './app.po'
import { element, by } from 'protractor'

describe('active-prok-cli App', () => {
  let page: ActiveProkCliPage

  beforeEach(() => {
    page = new ActiveProkCliPage()
  })

  it('should display site title', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('Active accounting')
  })

  // it('should redirect if unauthorized'), () => {
    // element(by.id('first')).click();
    // expect(page.getParagraphText()).toEqual('Unauthorized')
  // })

  it('should redirect unauthorized users', () => {
    element(by.id('reports')).click()
    expect(page.getParagraphText()).toEqual('Active accounting')
  })
})

import { ActiveProkCliPage } from './app.po'
import { element, by } from 'protractor'

describe('active-prok-cli App', () => {
  let page: ActiveProkCliPage

  beforeEach(() => {
    page = new ActiveProkCliPage()
  })

  it('should display site title', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('Active-Accounting')
  })

  it('should redirect unauthorized users', () => {
    element(by.id('reports')).click()
    setTimeout(() => { expect(page.getParagraphText()).toEqual('Please sign in') }, 2000)
  })
})

import { ActiveProkCliPage } from './app.po'
import { element, by, protractor } from 'protractor'

describe('active-prok-cli App', () => {
  let page: ActiveProkCliPage

  beforeEach(() => {
    page = new ActiveProkCliPage()
    page.get('/')
    page.sync()
  })

  it('should display site title', () => {
    expect(page.match('app-root font')).toEqual('Active-Accounting')
  })

  it('should redirect unauthorized users', () => {
    page.find('reports').click()
    page.sync()
    expect(page.match('app-root')).toContain('Please sign in')
  })

  it('should login', () => {
    page.find('login').click()
    page.find('email').sendKeys('sheff3rd@gmail.com')
    page.find('password').sendKeys('password')
    page.find('sign-in-form').click()

    setTimeout(() => { page.sync() }, 1000)
    expect(page.match('app-root')).toContain('Successfully signed in')
  })
})

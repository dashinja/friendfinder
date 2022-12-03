jest.dontMock('jquery')
import $ from 'jquery'
import { readFile, readFileSync } from 'fs'

describe('Survey Page', () => {

  beforeAll(() => {
    const f = readFileSync(__dirname + '/app/public/survey.html', 'utf-8')
    document.documentElement.innerHTML = f
  })

  test('body shows correctly', () => {
    expect($('h1').hasClass('display-3')).not.toBe(true)
    expect($('h1').hasClass('display-2')).toBe(true)

    expect($('h3').hasClass('display-3')).not.toBe(true)
    expect($('h3').hasClass('display-4')).toBe(true)
  })
})
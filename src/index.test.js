const request = require('supertest')
const createApp = require('./index')

describe("GET / ", () => {
  let app;
  beforeEach(async () => {
    app = await createApp()
  })

  test("Deve retornar o titulo da aplicação", async () => {

    const response = await request(app).get('/')
    
    expect(response.text).toContain('<h1>Star Wars Characters</h1>')
    expect(response.statusCode).toBe(200)

  })

  test("Deve acessar uma rota errada", async () => {
    const response = await request(app).get('/error')
    
    expect(response.statusCode).toBe(404)
  })
})
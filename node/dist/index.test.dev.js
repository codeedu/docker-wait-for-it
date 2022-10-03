"use strict";

var request = require('supertest');

var createApp = require('./index');

describe("GET / ", function () {
  var app;
  beforeEach(function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(createApp());

          case 2:
            app = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  test("Deve retornar o titulo da aplicação", function _callee2() {
    var response;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(request(app).get('/'));

          case 2:
            response = _context2.sent;
            expect(response.text).toContain('<h1>Star Wars Characters</h1>');
            expect(response.statusCode).toBe(200);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  test("Deve retornar o titulo da aplicação", function _callee3() {
    var response;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(request(app).get('/'));

          case 2:
            response = _context3.sent;
            expect(response.text).toContain('<h1>Star Wars Characters</h1>');
            expect(response.statusCode).toBe(200);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
});
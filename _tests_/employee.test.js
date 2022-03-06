const Employee = require('../models/Employee')

test('Test to see if getEmail returns correct email for Employee', () => {
    let Judy = new Employee('Judy', 'h32uhr79832h987', 'judy@judy.com')
    expect(Judy.email).toBe('judy@judy.com')
}) 
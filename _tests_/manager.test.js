const Manager = require('../models/Manager')

test('Test to see if getOfficeNumber returns correct office number for Manager', () => {
    let Judy = new Manager('Judy', 'h32uhr79832h987', 'judy@judy.com', '1234')
    expect(Judy.getOfficeNumber()).toBe('1234')
}) 
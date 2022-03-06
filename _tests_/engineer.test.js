const Engineer = require('../models/Engineer')

test('Test to see if getName returns correct name for Engineer', () => {
    let Judy = new Engineer('Judy', 'h32uhr79832h987', 'judy@judy.com')
    expect(Judy.getName()).toBe('Judy')
}) 
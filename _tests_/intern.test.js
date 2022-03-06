const Intern = require('../models/Intern')

test('Test to see if getSchool returns correct school for Intern', () => {
    let Judy = new Intern('Judy', 'h32uhr79832h987', 'judy@judy.com', 'school')
    expect(Judy.getSchool()).toBe('school')
}) 